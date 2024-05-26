const express = require ('express');
const path = require('path')
const app = express();
const mongoose =require ('mongoose');
require("./db/mongo");
const Register =  require('./users');
const { error } = require('console');
// const { default: mongoose } = require('mongoose');
const port = process.env.PORT || 3000

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))

const static_path = path.join(__dirname ,"../public")
app.use(express.static(static_path));


app.get('/register' , (req,res)=>{
    res.sendFile(path.join(__dirname, '../public' , 'register1.html'))
})

app.get('/' , (req,res)=>{
    res.sendFile(path.join(__dirname, '../public' , 'index.html'))
})
app.get('/home' , (req,res)=>{
    res.sendFile(path.join(__dirname, '../public' , 'index.html'))
})
app.get('/login' , (req,res)=>{
    res.sendFile(path.join(__dirname, '../public' , 'login.html'))
})


app.post("/Register", async (req,res)=>{
   try {
    const confpassword = req.body.ConfirmPassword;
    const password = req.body.Password;
    // console.log(`${password} and confirmpassword is ${confpassword}`)
  
    if(password === confpassword){
        const Employee = new Register({
            firstname : req.body.FirstName,
            lastname: req.body.LastName,
            email: req.body.email,
            password: password,
            phone : req.body.Phone,
            age:req.body.age,
            gender:req.body.gender,
            ConfirmPassword:confpassword,
        })
      const registered = await  Employee.save();
     res.status(201).sendFile(path.join(__dirname, '../public' , 'index.html'))
    }
    else{
        res.send("Password Did Not Match")
    }
   } catch (error) {
    res.status(400).send(error)
   }
})

app.post("/login",async(req,res)=>{
    try {
        const email = req.body.email;
        const password= req.body.password;
        // console.log(`${email} and pssword is ${password}`)
        const found =  await Register.findOne({email})
        // console.log(found.password)
      if(found.password === password ){
          res.status(201).sendFile(path.join(__dirname , "../public" , "index.html")) 
        }else if(!found){
            res.status(404).send("Sorry, cant find that")
        }
    } catch (error) {
      res.status(400).send(error)
    }
})

app.listen(port , ()=>{
    console.log(`Server is running on http://localhost: ${port}`)
})