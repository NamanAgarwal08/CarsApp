const express=require('express');
const Cars = require('../models/Car');
const router=express.Router();

router.get('/allcars',async (req,res)=>{
    try{
        let allCars=await Cars.find({});
        res.status(200).json(allCars);
    }
    catch(e){
        res.status(400).json({msg:"Something went wrong"});
    }
})

router.post('/addcar' , async(req,res)=>{
    let {company, model, year, mileage} = req.body;
    await Cars.create({company, model, year, mileage});
    res.status(201).json({msg:"new car created successfully"})
})


router.get('/car/:id',async(req,res)=>{
    let {id}=req.params;
    const foundCar=await Cars.findById(id);
    res.status(200).json(foundCar);
})

router.patch('/car/:id',async(req,res)=>{
    let {id}=req.params;
    let {company,model, year, mileage} = req.body;
    await Cars.findByIdAndUpdate( id , {model, year, mileage});
    res.status(200).json({msg:"Car details edited successfully"});
})


router.delete('/delete/:id',async(req,res)=>{
    let{id}=req.params;
    await Cars.findByIdAndDelete(id);
    let allCars=await Cars.find({});
    res.status(200).json(allCars);
})
module.exports=router;
