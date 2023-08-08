const express = require('express');
const login = require('../controllers/auth');
const register = require('../controllers/auth');

const authRouter = express.Router();
router.post("/login", login);
router.post('/register', register);

module.exports = authRouter;