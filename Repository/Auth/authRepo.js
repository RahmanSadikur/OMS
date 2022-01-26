const { restart } = require('nodemon');
const{sign}=require("jsonwebtoken")
const { PrismaClient } =require('@prisma/client')

const prisma = new PrismaClient()
module.exports={
    async Login(req,res,next){
         try {
         const user= await prisma.credential.findFirst({where:{userName:req.body.userName}});
         if(user!=null||user!=undefined){
            if((await user).password==req.body.password){
                  user.password==undefined;
                  const jsontoken=sign({User:user},process.env.tokenSecret,{expiresIn:"12h"})
                  res.token=jsontoken;
                  next();
            }else{
               res.status(404).json({message:"Password Doesn\'t Match"});
            }

         }
         else{
            res.status(404).json({message:"User Not Found"});
         }
             
         } catch (error) {
            res.status(500).json({message:error.message});
         }
        
     },
      Logout(req,res,next){
         try {
             
         } catch (error) {
            // res.status(500).json({message:error.message});
         }
         next();
     },
 };