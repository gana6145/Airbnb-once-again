const express =require('express');
const mongoose=require('mongoose');
const ejs =require('ejs');
const { userrouter } = require('./user');
const mongo_url='mongodb://127.0.0.1:27017/airbnb';
main().then(()=>{
  console.log("connected to database");
})
.catch((err)=>{
  console.log(err)
})

async function main(){
  await mongoose.connect(mongo_url);
}
const app=express();




app.use(userrouter);
const PORT=3000;
app.listen(PORT,()=>{
console.log(`Server runnning at http://localhost:${PORT}
}`);
})






