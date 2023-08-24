
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  avatar: { type: String,default: ''},
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);