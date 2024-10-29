const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; // Store user data in request for further use
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    res.status(403).json({ success:false,message: 'Invalid or expired token.' });
  }
};

module.exports = verifyToken;
