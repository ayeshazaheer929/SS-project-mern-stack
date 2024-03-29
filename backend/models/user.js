// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:{ type: String, required: true},
  password: { type: String, required: true },
  

  // Add other user properties as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
