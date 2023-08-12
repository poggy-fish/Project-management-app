const express = require('express');
const verifyToken = require('../middleware/auth');
const authRoutes = require('../controllers/auth')

const router = express.Router();
router.post('/', verifyToken,authRoutes.login );

module.exports = router;