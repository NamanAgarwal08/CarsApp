const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const carRoutes=require('./apis/carRoutes');
const authRoutes = require('./apis/authRoutes');
require('dotenv').config();

const DB_URI = process.env.DB_URI;
//DB Connected
mongoose.connect(DB_URI)
.then(()=>{console.log("DB Connected")})
.catch((err)=>{console.log(err)});

app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json()); 

app.use(carRoutes);
app.use(authRoutes);

app.get('/hii',(req,res)=>{
    res.status(200).json({msg:"Hii from Cars App"});
})


const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server Connected at ${PORT}`);
})