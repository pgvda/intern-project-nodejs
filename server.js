const express =require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors= require("cors");
const dotenv=require("dotenv")
const app=express();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const PORT1=process.env.PORT ||4000;

app.use(cors());
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL,{
    
    // userCreateIndex:true,
    // userNewUrlParser:true,
    // useUnifiedTopologyL:true,
    // userFindAndModify:false
 })
 
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Mongodb Connection success");
})

const customerRouter = require("./Routes/Customers");



app.listen(PORT1,()=>{
    console.log('server is up and running no port '+PORT1);

})