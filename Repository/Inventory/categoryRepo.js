const { restart } = require('nodemon');
const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
    async GetAll(req,res,next){
     
         try {
           
             let categorys=await prisma.category.findMany({where:{isRemoved:false,}});
             res.data=categorys;
         } catch (error) {
             res.status(500).json({message:error.message});
         }
    
         next();
     },
     async Get(req,res,next){
      try {
         const id=parseInt(req.params.id);
           if(!isNaN(id)){
            let category=await prisma.category.findFirst({where:{isRemoved:false,id:id}});
            res.data=category;          
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
            let category;
            const id=parseInt(req.body.id);
            if(!isNaN(id) && id>0){
                category = await prisma.category.update({where:{id:id},data:{                    
                    descrpiction:req.body.descrpiction,
                    name:req.body.name,
                    isRemoved:false,
                    updatedAt:new Date(Date.now()),
                }});
               res.message="category successfully updated."; 
            }else{
                category = await prisma.category.create({data:{
                    descrpiction:req.body.descrpiction,
                    name:req.body.name,
                    isRemoved:false,
                    updatedAt:new Date(Date.now()),
                }});
               res.message="category successfully saved."; 
            }
        
         res.data=category;    
         } catch (error) {
         res.status(500).json({message:error.message});

         }
         next();
     },
     async Delete(req,res,next){
        
         try {
            const id=parseInt(req.params.id);
            let category= await prisma.category.update({where:{id:id},data:{isRemoved:true}});
            res.data=category; 
            res.message="user type successfully deleted."; 
             
         } catch (error) {
             res.status(500).json({message:error.message});
         }
      
         next();
     }
 
 };