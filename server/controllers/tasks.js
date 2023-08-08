const Task = require('../models/Task');
const User = require('../models/User');
const uniqueId = require('uniqid');

//CREATE TASK
const createTask = async (req, res) => {
    try {
        const { userId, description, title } = req.body;
        const user = await User.findById(userId);

        const newTask = new Task({
            id: uniqueId('id'),
            firstName: user.firstName,
            lastName: user.lastName,
            title,
            description,
            comments: [],
            isCompleted: false,
        })

        await newTask.save();
        const task = await Task.find();
        res.status(201).json(task);
    } catch (error) {
        res.status(409).json({ msg: error.msg})
    }
};

//GET TASKS
const  getTasks = async (req, res) => {
    try {
        const task = await Task.find();
        res.status(200).json(task);
    } catch (error) {
        res.status(404).json({ msg: error.msg });
    }
};

//GET USER TASK
const getUserTasks = async (req, res) => {
    try {
        const { userId } = req.params;
        const tasks = await User.find({ userId });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({ msg: error.msg });
    }
};

//UPDATE
const assignTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const user = await User.findById(userId);
        const task = await Task.findById(id);
        const isAssigned = Task.assignedTo.get(userId);
        
        if (!isAssigned) {
            task.assignedTo.set(user);
        }

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { assignedTo: task.assignedTo}
        );

        res.status(200).json({updatedTask});
    } catch (error) {
        res.status(404).json({ msg: error.msg })
    }
};

module.exports = { createTask, getTasks, getUserTasks, assignTask }