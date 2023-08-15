const express = require('express');
const { getTasks, getUserTasks, assignTask } = require('../controllers/tasks');
const verifyToken = require('../middleware/auth');

const router = express.Router();

router.get("/:userId/tasks", getTasks);
router.get("/:userId/usertasks", getUserTasks);

/* UPDATE */
router.patch("/:id/Assigned", assignTask);

module.exports = router;
