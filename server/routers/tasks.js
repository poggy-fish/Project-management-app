const express = require('express');
const { createTask, getTasks, getUserTasks, assignTask} = require('../controllers/tasks');
const verifyToken = require('../middleware/auth');

const router = express.Router();

router.get("/", verifyToken, getTasks);
router.get("/:userId/Tasks", verifyToken, getUserTasks);

/* UPDATE */
router.patch("/:id/Assigned", verifyToken, assignTask);

module.exports = router;
