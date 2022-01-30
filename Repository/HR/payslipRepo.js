const { restart } = require('nodemon');
const { PrismaClient } =require('@prisma/client');
const { DATETIME } = require('mysql/lib/protocol/constants/types');
const prisma = new PrismaClient();
module.exports={
    async GetAll(req,res,next){
     
         try {
           
             let usertypes=await prisma.userType.findMany({where:{isRemoved:false,}});
             res.data=usertypes;
         } catch (error) {
             res.status(500).json({message:error.message});
         }
    
         next();
     },
     async Get(req,res,next){
      try {
         const id=parseInt(req.params.id);
           if(!isNaN(id)){
            let usertype=await prisma.userType.findFirst({where:{isRemoved:false,id:id}});
            res.data=usertype;          
           }
           else{
 
           }

     } catch (error) {
         res.status(500).json({message:error.message});
     }

     next();
     },
     async Save(req,res,next){

         try {
            let usertype;
            const id=parseInt(req.body.id);
            if(!isNaN(id) && id>0){
               usertype = await prisma.userType.update({where:{id:id},data:{title:req.body.title,isRemoved:false}});
               res.message="user type successfully updated."; 
            }else{
               usertype = await prisma.userType.create({data:{title:req.body.title,isRemoved:false}});
               res.message="user type successfully saved."; 
            }
        
         res.data=usertype;    
         } catch (error) {
         res.status(500).json({message:error.message});

         }
         next();
     },
     async Delete(req,res,next){
        
         try {
            const id=parseInt(req.params.id);
            let usertype= await prisma.userType.update({where:{id:id},data:{isRemoved:true}});
            res.data=usertype; 
            res.message="user type successfully deleted."; 
             
         } catch (error) {
             res.status(500).json({message:error.message});
         }
      
         next();
     }
 
 };