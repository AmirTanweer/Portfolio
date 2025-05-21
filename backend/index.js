const express= require('express')
const app=express();
const port=5000;
const connectDB=require('./db')

connectDB();
app.get('/',(req,res)=>{
    res.send('This is portfolio app')
})
app.listen(port , ()=>{
    console.log("Server Successfully running on port ",port);
})