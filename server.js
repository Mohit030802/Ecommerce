import express from "express";
import bcrypt, { genSalt, hash } from "bcrypt";
const app=express();
// middleware
app.use(express.static("public"))
app.use(express.json());
import aws from 'aws-sdk';
import "dotenv/config";  
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,doc,collection,getDoc,setDoc,updateDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnigI6Xxt5SJmDtkiO29mgZ_5z6Tjmk1Q",
  authDomain: "ecomm-website-f4547.firebaseapp.com",
  projectId: "ecomm-website-f4547",
  storageBucket: "ecomm-website-f4547.appspot.com",
  messagingSenderId: "540024175341",
  appId: "1:540024175341:web:72b411b8056a3ebca06ae4"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db=getFirestore();
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
    else if(!Number(number)||number.length<10){
        res.json({'alert':'invalid number, please enter a valid number'});
    }
    else if(!tac){
        res.json({'alert':'You must agree to Terms and Conditions'});
    }
    else{
        const users=collection(db,users);
        getDoc(doc(users,email)).then(user=>{
            if(user.exists()){
                return res.json({'alert':'User Already Exists'})
            }else{
                bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(password,salt,(err,hash)=>{
                        req.body.password=hash;
                        req.body.seller=false;
                        setDoc(doc(users,email),req.body).then(data=>{
                            res.json({
                                name:req.body.name,
                                email:req.body.email,
                                seller:req.body.seller,
                            })
                        })
                    })
                })
            }
        })
    }
})
app.get('/seller',(req,res)=>{
    res.sendFile("seller.html",{root:"public"})
})
// dashboard
app.get('dashboard',(req,res)=>{
    res.sendFile("dashboard.html",{root:"public"})
})
app.get('/add-product',(req,res)=>{
    res.sendFile("add-product.html",{root:"public"})
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