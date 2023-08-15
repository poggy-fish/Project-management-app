const Task = require('../models/Task');
const User = require('../models/User');
const uniqueId = require('uniqid');

const createTask = async (req, res) => {
    try {
        const { userId, description, title } = req.body;
        const user = await User.findById(userId);

        const newTask = new Task({
            firstName: user.firstName,
            lastName: user.lastName,
            title,
            description,
            comments: [],
            isCompleted: false,
        });

        await newTask.save();
        const tasks = await Task.find();
        res.status(201).json(tasks);
    } catch (error) {
        res.status(409).json({ msg: error.message });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
};

const getUserTasks = async (req, res) => {
    try {
        const { userId } = req.params;
        const tasks = await Task.find({ userId });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
};

const assignTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const user = await User.findById(userId);
        const task = await Task.findById(id);
        const isAssigned = task.assignedTo.includes(userId);

        if (!isAssigned) {
            task.assignedTo.push(userId); // Push userId, not the user object
        }

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { assignedTo: task.assignedTo }
        );

        res.status(200).json({ updatedTask });
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
};


module.exports = { createTask, getTasks, getUserTasks, assignTask };
