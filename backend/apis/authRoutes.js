const express=require('express');
const router=express();
const bcrypt=require('bcrypt');
const User=require('../models/User');
const generateAuthToken = require('../jwtTokenGenerator');
 
router.post('/register',async(req,res)=>{
    let user=req.body;
    console.log(user);
    let Email=await User.findOne({email:user.email});
    if(Email){
        res.send("Email already Exists !!!");
    }else{
        user.password=await bcrypt.hash(user.password,10); 
        let dbUser=new User({
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            password: user.password,
            age: user.age,
            address:user.address
        })
       await dbUser.save();
       res.send("Signup Complete");
    }
})


router.post('/login',async(req,res)=>{
    let userFormData=req.body;
    console.log(userFormData);
    let userDbInfo=await User.findOne({email:userFormData.email})
    if(!userDbInfo){
        return res.send("Please Signup First");
    }

    let validatePass=await bcrypt.compare(userFormData.password,userDbInfo.password)
    if(!validatePass){
        return res.send("Incorrect password");
    }


    const token=generateAuthToken(userDbInfo);
    console.log("Token is");
    console.log(token);
    res.status(200).json({token});

})



module.exports=router;