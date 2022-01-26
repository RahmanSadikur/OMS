require('dotenv').config();
const express=require('express');
const{ISAuthentic}=require("./Framework/Middleware/Auth/tokenValidation")
const app=express();
app.use(express.json());
const userTypeRouter=require('./Router/HR/userTypeRouter');
const authRouter=require('./Router/Auth/authRouter');
app.use('/api/auth',authRouter);
app.use('/api/usertype',ISAuthentic,userTypeRouter);
app.listen(process.env.port,()=>console.log('Server Started at port 69'));