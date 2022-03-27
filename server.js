//import mongoose
const mongoose = require("mongoose");

//import express
const express = require("express");

//import cors to resolve any in-browser errors
const cors = require("cors");

//import Schema
const Schema = require("./Schema.js");
const { response } = require("express");

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

//Create Model --- connecting to Chat Box
const Entry = mongoose.model("entries", Schema);

// Create a landing page for localhost to connect to
app.get('/', (request, response) => response.send('Welcome to the chat!'))

//Entries is collection

//Creating our API route for the front end to access the entries from the database -- need client to display data
app.get("/allEntries", async (req, res) => {
  //assign result of a find on our Model to a variable
  let allEntries = await Entries.find({});

  /*send results a json file to the page --- can sort out information we need (names and messages)*/

  res.json(allEntries);
});

//CREATE functionality for inserting new Entry into our collection
//client sending information for server to get
//not sure if this will work...
app.post("/create/:roomId", async (req, res) => {

  //grab room id from document
  let roomId = req.params.roomId
  
  //assign creation of new entry into a variable
  const newEntry = new Entry({
    date: req.body.date,
    name: req.body.name,
    room: req.body.room,
    message: req.body.message,
  });

   //using the retrieved document roomId to create a matching document in our Entry model
  await newEntry.save({room : roomId});

});


app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
