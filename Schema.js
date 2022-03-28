//importing mongoose
const mongoose = require('mongoose')
//creating our user schema
const Schema = new mongoose.Schema({
//creating key value pairs and type of value
date : Date,
name : String,
room : String,
message: String,

})
//exporting schema
module.exports = Schema
