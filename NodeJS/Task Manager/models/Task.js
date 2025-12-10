const {Schema, model} = require("mongoose");

const taskSchema = new Schema({
    name: String,
    completed: Boolean
});

module.exports = model("Task", taskSchema);