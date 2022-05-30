const mongoose = require("mongoose");

const TaskSchrema = new mongoose.Schema({
  name: {
    // for validations
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more then 20 chars"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchrema);
