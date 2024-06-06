const mongoose=require('mongoose');

let userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        trim:true
    },
    lastname:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
    password:{
        type:String,
        trim:true
    },
    age: {
        type: String,
        required: true,
        trim:true
    },
    isOwner: {
        type: Boolean,
        default: false,
        required:true
    },
    address: {
        type: String,
        trim: true,
        required:true
    }
})

const User=mongoose.model('User',userSchema);
module.exports=User;