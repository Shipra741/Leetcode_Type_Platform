const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const Routes = require('./route');
const dotenv=require("dotenv").config()
const port = process.env.PORT || 5000;
const url=process.env.URL
const submissionRoutes=require("./route")

mongoose.connect(url).then(()=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.log("error while connecting")
});


app.use('/submit', submissionRoutes);

app.listen(port,()=>{
  console.log(`Server running on ${port}`);
});
