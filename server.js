import express from "express";
import bcrypt from "bcrypt";
const app=express();
// middleware
app.use(express.static("public"))
app.use(express.json());

// home route
app.get('/',(req,res)=>{
    res.sendFile("index.html",{root:"public"})
})
// signup
app.get('/signup',(req,res)=>{
    res.sendFile("signup.html",{root:"public"})
})
// 404
app.get('/404',(req,res)=>{
    res.sendFile("404.html",{root:"public"})
})
app.use((req,res)=>{
    res.redirect('/404')
})
app.listen(3000,()=>{
    console.log("Listening")
})