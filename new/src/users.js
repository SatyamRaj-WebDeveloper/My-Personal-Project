const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstname : {
        type:String,
        required:true,
    },
     lastname:{
        type:String,
        required:true,
     },
     email:{
        type:String,
        required:true,
        unique :true   
     },
     phone:{
        type:Number,
        required:true,
        unique:true,
     },
     password:{
        type:String,
        required:true,
     },
     gender: {
      type: String,
      required: true
  },
     age:{
      type:Number,
      required:true,
     },
     ConfirmPassword:{
      type:String,
      required:true,
     }

     
})

const Register = new mongoose.model("Local", userSchema )
module.exports = Register;