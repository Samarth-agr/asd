const express=require("express")
const app=express();
app.use("/",(req,res)=>{
    console.log("hey this is main")
})
app.listen("5000",()=>{
    console.log("backend is working");
})