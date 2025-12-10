const Task = require("../models/Task");

const getAllTasks = (req, res)=>{
    res.send("You got all taks.");
}

const createTask = async (req, res)=>{
    const task = await Task.create(req.body);
    console.log("Created");
    res.status(201).send(task);
}

const getTask = (req, res)=>{
    res.send("You get a task!");
}

const updateTask = (req, res)=>{
    res.send("You are updated a task");
}

const deleteTask = (req, res)=>{
    res.send("You have deleted a task");
}

module.exports = {
    getAllTasks,
    getTask,
    updateTask,
    createTask,
    deleteTask
}