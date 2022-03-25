const express = require("express");
const mongoose = require ("mongoose");
const cors = require ("cors");
const port = process.env.PORT || 8000;
const app = express();

const UserSchema = require('./UserSchema.js')



app.listen(port, () => {
  console.log('listening on port: ' + port) 
})
