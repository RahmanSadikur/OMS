const { restart } = require('nodemon');
const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient();
var crypto = require("crypto");
module.exports={
    async GetAll(req,res,next){
     
         try {
           
             let user=await prisma.user.findMany({where:{isRemoved:false,}});
             res.data=user;
         } catch (error) {
             res.status(500).json({message:error.message});
         }
    
         next();
     },
     async Get(req,res,next){
      try {
         const id=parseInt(req.params.id);
           if(!isNaN(id)){
            let user=await prisma.user.findFirst({where:{isRemoved:false,id:id}});
            res.data=user;          
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
            let user;
            const id=parseInt(req.body.id);
            if(!isNaN(id) && id>0){
                user = await prisma.user.update({where:{id:id},data:{
                    name:req.body.name,
                    address:req.body.address,
                    dailywages:parseFloat(req.body.dailywages),
                    nid:req.body.nid,
                    phone:req.body.phone,
                    userTypeId:parseInt(req.body.userTypeId),
                    isRemoved:false,
                }});
               res.message="user type successfully updated."; 
            }else{
                user = await prisma.user.create({data:{
                    name:req.body.name,
                    address:req.body.address,
                    dailywages:parseFloat(req.body.dailywages),
                    nid:req.body.nid,
                    phone:req.body.phone,
                    userTypeId:parseInt(req.body.userTypeId),
                    isRemoved:false,
                }});
                var password = crypto.randomBytes(6).toString('hex');
                let credential=await prisma.credential.create({data:{
                    userName:req.body.name,
                    password:password,
                    isRemoved:true,
                    id:user.id,

                }})
                user.credential=credential;
               res.message="user type successfully saved."; 
            }
            
        
         res.data=user;    
         } catch (error) {
         res.status(500).json({message:error.message});

         }
         next();
     },
     async Delete(req,res,next){
        
         try {
            const id=parseInt(req.params.id);
            let user= await prisma.user.update({where:{id:id},data:{isRemoved:true}});
            res.data=user; 
            res.message="user type successfully deleted."; 
             
         } catch (error) {
             res.status(500).json({message:error.message});
         }
      
         next();
     }
 
 };