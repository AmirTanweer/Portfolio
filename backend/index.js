const express=require('express');
const app=express();
const port=5000;
app.get('/',(req,res)=>{
    res.send("hello this is new project")
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})