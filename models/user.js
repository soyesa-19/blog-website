const mongoose = require('mongoose');
const Schema =  mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const User = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    admin:{
        type:Boolean,
        default: false
    }
},{
    timestamps:true
})

User.plugin(passportLocalMongoose);
User.plugin(uniqueValidator);


module.exports = mongoose.model('User',User);