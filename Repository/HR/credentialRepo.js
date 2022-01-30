const { restart } = require('nodemon');
const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient();
var crypto = require("crypto");
module.exports={
     async Generate(req,res,next){

         try {
           
            const id=parseInt(req.params.id);
            var password = crypto.randomBytes(6).toString('hex');
            let credential= await prisma.credential.update({where:{id:id},data:{
                isRemoved:false,
                password:password,
            }});
               res.message="New password generated successfully."; 
            
        
         res.data=credential;    
         } catch (error) {
         res.status(500).json({message:error.message});

         }
         next();
     },
     async disable(req,res,next){
        
         try {
            const id=parseInt(req.params.id);
            let credential= await prisma.credential.update({where:{id:id},data:{isRemoved:true}});
            res.data=credential; 
            res.message="User credential is successfully disabled."; 
             
         } catch (error) {
             res.status(500).json({message:error.message});
         }
      
         next();
     },
     async enabled(req,res,next){
        
        try {
           const id=parseInt(req.params.id);
           let credential= await prisma.credential.update({where:{id:id},data:{isRemoved:false}});
           res.data=credential; 
           res.message="User credential is successfully disabled."; 
            
        } catch (error) {
            res.status(500).json({message:error.message});
        }
     
        next();
    }
 
 };