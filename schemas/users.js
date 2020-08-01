const mongoose = require('mongoose')

const { Schema } = mongoose;
const UserSchema = new Schema({
  //name: String,
  //displayname: String,             //i have commented this since in login.js u are only sending email and password so only those should be there
  email: String,
  password: String
})
module.exports = mongoose.model('Users', UserSchema);
