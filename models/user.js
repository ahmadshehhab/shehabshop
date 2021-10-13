const Joi = require('joi');
const config = require("config")
const jwt = require("jsonwebtoken")
const mongoose = require('mongoose');
const number = require('joi/lib/types/number');


const UserSchema =  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique:true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    country:{
      type:String,
      required:true
    },
    zip:{
      type:Number,
      required:true,
      minlength:3,
      maxlength:10
    },
    isAdmin:{
      type:Boolean,
      required:false
    }
    
  
  
  })


  const User = mongoose.model('user', UserSchema);

  function validateUser(user) {
    const schema = {
      name:Joi.string().min(3).required(),
      email:Joi.string().min(5).max(255).required().email(),
      password:Joi.string().min(5).max(255).required(),
      country:Joi.string(),
      zip:Joi.number().integer()
    }
    return Joi.validate(user,schema)
  }

  

exports.User = User; 
exports.validate = validateUser;