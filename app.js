require('dotenv').config();
const express=require('express');
const app=express();
app.use(express.json());
const userTypeRouter=require('./Router/HR/userTypeRouter');
app.use('/usertype',userTypeRouter);
app.listen(process.env.port,()=>console.log('Server Started at port 3000'));