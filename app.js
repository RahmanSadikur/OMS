require('dotenv').config();
const express=require('express');
const bodyParser=require("body-parser");
const cors=require("cors");
const{ISAuthentic}=require("./Framework/Middleware/Auth/tokenValidation");
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
//Auth
const authRouter=require('./Router/Auth/authRouter');
//HR
const userTypeRouter=require('./Router/HR/userTypeRouter');
const userRouter=require('./Router/HR/userRouter');
const payslipRouter=require('./Router/HR/payslipRouter');
const credentialRouter=require('./Router/HR/credentialRouter');
//Inventory
const storeRouter=require('./Router/Inventory/storeRouter');
const branchRouter=require('./Router/Inventory/branchRouter');
const siteRouter=require('./Router/Inventory/siteRouter');
const categoryRouter=require('./Router/Inventory/categoryRouter');
const subCategoryRouter=require('./Router/Inventory/subCategoryRouter');
const itemRouter=require('./Router/Inventory/itemRouter');
const itemDetailsRouter=require('./Router/Inventory/itemDetailsRouter');

//Auth
app.use('/api/auth',authRouter);
//HR
app.use('/api/usertype',ISAuthentic,userTypeRouter);
app.use('/api/user',ISAuthentic,userRouter);
app.use('/api/user/credential',ISAuthentic,credentialRouter);
app.use('/api/user/payslip',ISAuthentic,payslipRouter);
//Inventory
app.use('/api/store',ISAuthentic,storeRouter);
app.use('/api/branch',ISAuthentic,branchRouter);
app.use('/api/site',ISAuthentic,siteRouter);
app.use('/api/category',ISAuthentic,categoryRouter);
app.use('/api/subcategory',ISAuthentic,subCategoryRouter);
app.use('/api/item',ISAuthentic,itemRouter);
app.use('/api/item/details',ISAuthentic,itemDetailsRouter);




app.listen(process.env.port,()=>console.log('Server Started at port 69'));