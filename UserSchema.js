//importing mongoose
const mongoose = require('mongoose')
//creating our user schema
const UserSchema = new mongoose.Schema({
//creating key value pairs and type of value
postDate : Date,
user : String,
currentRoom : String,
userMessage: String,

})
//exporting user schema
module.exports = UserSchema
