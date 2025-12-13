const {Schema, model} = require("mongoose");

const taskSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Name must be provided"],
        maxLength: [20, "Name can not be more than 20 character"]
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = model("Task", taskSchema);