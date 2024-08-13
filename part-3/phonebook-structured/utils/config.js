require('dotenv').config();

const PORT = process.env.PORT || 3001;

// console.log(process.env.NODE_ENV); // development
// console.log(process.env.NODE_ENV === 'dev'); // false
// console.log(process.env.NODE_ENV.length); // 11 (including a space at the end)

const MONGODB_URI =
  process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;

module.exports = {
  MONGODB_URI,
  PORT,
};
