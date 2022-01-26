const express=require('express');
const {Login,Logout}=require("../../Repository/Auth/authRepo")

const router=express.Router();
//logout
router.get('/',Logout,( req , res)=>{
res.json(res.token);
})
//login
router.post('/',Login,(req,res)=>{

res.json(res.token);
})


module.exports=router;