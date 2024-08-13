const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const personRouter = require('./controllers/persons')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const Phonebook = require('./models/person')

// Database connection
const url = config.MONGODB_URI
if (!url) {
  logger.error('MONGODB_URI environment variable is missing')
  process.exit(1)
}
mongoose.set('strictQuery', false)
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

//get app information route
app.get('/info', async (req, res, next) => {
  await Phonebook.countDocuments({})
    .then((count) => {
      const responseText = `
      <p>Phonebook has info for ${count} people</p>
      <p>${new Date()}</p>
    `
      res.send(responseText)
    })
    .catch((error) => next(error))
})

// Middleware setup
app.use(express.json())
app.use(cors())
app.use(express.static('dist'))
app.use(middleware.requestLogger)
app.use(middleware.consoleLogger)
// Routes...
app.use('/api/persons', personRouter)

// Static file serving
app.use(express.static(path.join(__dirname, 'dist')))

// Serve the application frontend..
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// Middleware..
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
