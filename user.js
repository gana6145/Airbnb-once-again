const express =require('express');
const userrouter =express.Router();
userrouter.get("/",(req,res,next)=>{res.send("hi this is Ganesh")});
exports.userrouter=userrouter;