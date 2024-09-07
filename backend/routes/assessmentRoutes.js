const express = require('express');
const router = express.Router();
const db = require('../config/dbConfig');
const authMiddleware = require('../middleware/authMiddleware'); // Ensure this exists and is set up correctly

// Screen 1: Endpoint to capture the duration of the sleep issue
router.post('/screen1', authMiddleware, async (req, res) => {
  const { duration } = req.body;
  const userId = req.user.id; // Assuming user ID is available from authMiddleware

  if (!duration) {
    return res.status(400).json({ message: 'Duration is required.' });
  }

  try {
    db.query('UPDATE responses SET question1 = ? WHERE user_id = ?', [duration, userId], (err, result) => {
      if (err) throw err;
      res.status(200).json({ message: 'Duration recorded successfully.' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Screen 2: Endpoint for bedtime selection
router.post('/screen2', authMiddleware, async (req, res) => {
  const { bedtime } = req.body;
  const userId = req.user.id; // Assuming user ID is available from authMiddleware

  if (!bedtime) {
    return res.status(400).json({ message: 'Bedtime is required.' });
  }

  try {
    db.query('UPDATE responses SET question2 = ? WHERE user_id = ?', [bedtime, userId], (err, result) => {
      if (err) throw err;
      res.status(200).json({ message: 'Bedtime recorded successfully.' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Screen 3: Endpoint for wake-up time selection
router.post('/screen3', authMiddleware, async (req, res) => {
  const { wakeupTime } = req.body;
  const userId = req.user.id; // Assuming user ID is available from authMiddleware

  if (!wakeupTime) {
    return res.status(400).json({ message: 'Wake-up time is required.' });
  }

  try {
    db.query('UPDATE responses SET question3 = ? WHERE user_id = ?', [wakeupTime, userId], (err, result) => {
      if (err) throw err;
      res.status(200).json({ message: 'Wake-up time recorded successfully.' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Screen 4: Endpoint for typical sleep hours
router.post('/screen4', authMiddleware, async (req, res) => {
  const { sleepHours } = req.body;
  const userId = req.user.id; // Assuming user ID is available from authMiddleware

  if (!sleepHours) {
    return res.status(400).json({ message: 'Sleep hours are required.' });
  }

  try {
    db.query('UPDATE responses SET question4 = ? WHERE user_id = ?', [sleepHours, userId], (err, result) => {
      if (err) throw err;
      res.status(200).json({ message: 'Sleep hours recorded successfully.' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Result Display API: Endpoint to display the collected data
router.get('/results', authMiddleware, async (req, res) => {
  const userId = req.user.id; // Assuming user ID is available from authMiddleware

  try {
    db.query('SELECT * FROM responses WHERE user_id = ?', [userId], (err, results) => {
      if (err) throw err;

      if (results.length === 0) {
        return res.status(404).json({ message: 'No data found.' });
      }

      res.status(200).json(results[0]);
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
