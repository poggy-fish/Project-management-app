const express = require('express');
const verifyToken = require('../middleware/auth');
const { getUserTeammates } = require('../controllers/user');
const { getUser } = require('../controllers/user');
const router = express.Router();

router.get("/:id", getUser )

module.exports = router;