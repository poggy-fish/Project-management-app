const express = require('express');
const verifyToken = require('../middleware/auth');

const router = express.Router();
router.get("/id:", verifyToken, )

module.exports = router;
