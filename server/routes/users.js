const express = require('express');
const verifyToken = require('../middleware/auth');
const {getUserTeammates} = require('../controllers/user');
const router = express.Router();

router.get("/", verifyToken, getUserTeammates )

module.exports = router;