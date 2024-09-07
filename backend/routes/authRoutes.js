const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../config/dbConfig');

// Signup Route
router.post('/signup', async (req, res) => {
  const { nickname, password } = req.body;

  // Check if nickname and password are provided
  if (!nickname || !password) {
    return res.status(400).json({ message: 'Nickname and password are required.' });
  }

  try {
    // Check if user already exists
    db.query('SELECT * FROM users WHERE nickname = ?', [nickname], async (err, results) => {
      if (err) throw err;

      if (results.length > 0) {
        return res.status(400).json({ message: 'Nickname already exists.' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user into the database
      db.query('INSERT INTO users (nickname, password) VALUES (?, ?)', [nickname, hashedPassword], (err, result) => {
        if (err) throw err;
        res.status(201).json({ message: 'User registered successfully.' });
      });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
