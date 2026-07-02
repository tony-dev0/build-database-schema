const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    minlength: 1,
    required: true,
    default: "null",
  },
  lastname: {
    type: String,
    minlength: 1,
    required: true,
    default: "null",
  },
  username: {
    type: String,
    minlength: 1,
    required: true,
  },
  email: {
    type: String,
    minlength: 5,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  createdAt: {
    type: String,
    required: "true",
  },
});

module.exports = mongoose.model("User", UserSchema);
