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
app.post('/signup',(req,res)=>{
    const{name, email, password, number, tac}=req.body;
    if(name.length<2){
        res.json({'alert':'Name must contain more than 2 letters'});
    }else if(!email.length){
        res.json({'alert':'Enter your email'});
    }else if(password.length<8){
        res.json({'alert':'Minimum password length must be 8 characters'});
    }
    else if(Number(number)||number.length<10){
        res.json({'alert':'invalid number, please enter a valid number'});
    }
    else if(!tac.checked){
        res.json({'alert':'You must agree to Terms and Conditions'});
    }
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