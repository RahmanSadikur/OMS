const { restart } = require('nodemon');
const{sign}=require("jsonwebtoken")
const { PrismaClient } =require('@prisma/client')

const prisma = new PrismaClient()
module.exports={
    async Login(req,res,next){
         try {
         const user= await prisma.credential.findFirst({where:{userName:req.body.userName,isRemoved:false}});
         if(user!=null||user!=undefined){
            if((await user).password==req.body.password){
                  user.password=undefined;
                  const jsontoken=sign({User:user},process.env.tokenSecret,{expiresIn:"12h"})
                  res.token=jsontoken;
                  
                  next();
            }else{
               res.status(200).json({message:"Password Doesn\'t Match",hasError:true});
            }

         }
         else{
            res.status(200).json({message:"User Not Found",hasError:true});
         }
             
         } catch (error) {
            res.status(200).json({message:error.message,hasError:true});
         }
        
     },
      Logout(req,res,next){
         try {
             
         } catch (error) {
             res.status(200).json({message:error.message,hasError:true});
         }
         next();
     },
 };