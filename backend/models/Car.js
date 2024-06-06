const mongoose=require('mongoose');

let carSchema=new mongoose.Schema({
    company:{
        type:String,
        trim:true
    },
    model:{
        type:String,
        trim:true
    },
    year:{
        type: String,
        required: true,
        trim:true
    },
    mileage:{
        type: String,
        required: true,
        trim:true
    }
}, {timestamps: true})

const Car=mongoose.model('Car',carSchema);
module.exports=Car;