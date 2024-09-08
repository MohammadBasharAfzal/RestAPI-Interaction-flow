//Express.js setup
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const assessmentRoutes = require('./routes/assessmentRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/assessment', assessmentRoutes);

// Database connection
const db = require('./config/dbConfig');

// Start server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

module.exports = app;
