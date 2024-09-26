const express = require('express');
const app = express();
const connectDB = require('./utils/db');
const cors = require('cors');
const middleware = require('./utils/middleware');
const postRouter = require('./controller/posts');
const userRouter = require('./controller/users');
const loginRouter = require('./controller/login');

// Connect to the database
connectDB();

// Parse incoming JSON requests and Enable CORS
app.use(express.json());
app.use(cors());

// Add tokenExtractor middleware
app.use(middleware.tokenExtractor);

// Define API routes
app.use('/api/posts', middleware.userExtractor, postRouter);
app.use('/api/users', userRouter);
app.use('/api/login', loginRouter);

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controller/testing');
  app.use('/api/testing', testingRouter);
}

// Centralized error handling
app.use(middleware.errorHandler);

// Handle unknown endpoints
app.use(middleware.unknownEndpoint);

module.exports = app;
