const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    // Extract token from header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    console.log('Auth Header:', authHeader);
    console.log('Token:', token);
  
    if (!token) {
        console.error('Token verification error:', err);
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
  
    try {
      // Verify token
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ msg: 'Token is not valid' });
    }
  }
  

module.exports = authMiddleware;
