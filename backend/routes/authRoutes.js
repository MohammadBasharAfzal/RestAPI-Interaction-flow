const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/dbConfig');

// JWT Secret Key
const JWT_SECRET = 'your_jwt_secret_key_here'; // Replace with a strong secret key

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

// Login Route

router.post('/login', (req, res) => {
    const { nickname, password } = req.body;
    if (!nickname || !password) {
      return res.status(400).json({ message: 'Nickname and password are required.' });
    }
    db.query('SELECT * FROM users WHERE nickname = ?', [nickname], async (err, results) => {
      if (err) throw err;
      if (results.length === 0) {
        return res.status(400).json({ message: 'Invalid credentials.' });
      }
      const user = results[0];
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials.' });
      }
      // Create JWT token
      const token = jwt.sign({ id: user.id, nickname: user.nickname }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  });

module.exports = router;
