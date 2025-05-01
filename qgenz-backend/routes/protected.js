const express = require('express');
const router = express.Router();
const { authMiddleware } = require('./auth'); // <- correct import path

router.get('/protected', authMiddleware, (req, res) => {
  res.json({
    msg: 'This is protected data.',
    userId: req.user.id
  });
});

module.exports = router;
