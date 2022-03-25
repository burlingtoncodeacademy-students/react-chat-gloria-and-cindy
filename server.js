//import mongoose
const mongoose = require("mongoose");

//import express
const express = require("express");

//import cors to resolve any in-browser errors
const cors = require("cors");

//import User Schema
const UserSchema = require("./UserSchema.js");

//create initial connection to database
mongoose.connect("mongodb://localhost:27017/react-chat", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//name of database is react-chat

//init the database through the connection constructor, stored in a variable
const db = mongoose.connection;

//set up default port
const port = process.env.PORT || 8000;

//bind express to variable
const app = express();

//bind error message to connection variable in case of errors (will print)
db.on("error", console.error.bind(console, "connection error"));

//middleware functions
app.use(express.static("./build"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Create User Model --- connecting to Chat Box
const UserMessage = mongoose.model("UserMessages", UserSchema);

//UserMessages is collection

//Creating our API route for the front end to access the entries from the database -- need client to display data
app.get("/allUserMessages", async (req, res) => {
  //assign result of a find on our Model to a variable
  let allUserMessages = await UserMessage.find({});

  //send results a json file to the page --- can sort out information we need (userNames and userMessages)
  res.json(allUserMessages);
});

//CREATE functionality for inserting new user/message into our collection
//client sending information for server to get
app.post("/create", async (req, res) => {
  //assign creation of new user/message into a variable
  const newUserMessage = new UserMessage({
    postDate: req.body.postDate,
    user: req.body.user,
    currentRoom: req.body.currentRoom,
    userMessage: req.body.userMessage,
  });

  //save new user/message to the Model
  await newUserMessage.save();
  //redirect to home page
  //need to be sure user is not stuck on blank page

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
