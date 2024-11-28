const express = require('express');
const cors = require('cors');
const errorHandler = require('../middleware/errorHandler');

const configureExpress = () => {
  const app = express();
  
  // Middleware
  app.use(cors());
  app.use(express.json());
  
  // Error handling
  app.use(errorHandler);
  
  return app;
};

module.exports = configureExpress;