const { restart } = require('nodemon');
const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
    async GetAll(req,res,next){
     
         try {
           
             let items=await prisma.item.findMany({where:{isRemoved:false,}});
             res.data=items;
         } catch (error) {
             res.status(500).json({message:error.message});
         }
    
         next();
     },
     async Get(req,res,next){
      try {
         const id=parseInt(req.params.id);
           if(!isNaN(id)){
            let item=await prisma.item.findFirst({where:{isRemoved:false,id:id}});
            res.data=item;          
           }
           else{
 
           }

     } catch (error) {
         res.status(500).json({message:error.message});
     }

     next();
     },
     async GetBySubCategoryId(req,res,next){
        try {
           const subCategoryId=parseInt(req.params.subCategoryId);
             if(!isNaN(id)){
              let item=await prisma.item.findFirst({where:{
                  isRemoved:false,
                  subCategoryId:subCategoryId}
                });
              res.data=item;          
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
            let item;
            const id=parseInt(req.body.id);
            if(!isNaN(id) && id>0){
                item = await prisma.item.update({where:{id:id},data:{                    
                    descrpiction:req.body.descrpiction,                
                    name:req.body.name,
                    isRemoved:false,        
                    subCategoryId:parseInt(req.body.subCategoryId),
                    updatedAt:new Date(Date.now()), 
                }});
               res.message="item successfully updated."; 
            }else{
                item = await prisma.item.create({data:{
                    descrpiction:req.body.descrpiction,                
                    name:req.body.name,
                    isRemoved:false,  
                    subCategoryId:parseInt(req.body.subCategoryId),
                    updatedAt:new Date(Date.now()), 
                }});
               res.message="item successfully saved."; 
            }
        
         res.data=item;    
         } catch (error) {
         res.status(500).json({message:error.message});

         }
         next();
     },
     async Delete(req,res,next){
        
         try {
            const id=parseInt(req.params.id);
            let item= await prisma.item.update({where:{id:id},data:{isRemoved:true}});
            res.data=item; 
            res.message="user type successfully deleted."; 
             
         } catch (error) {
             res.status(500).json({message:error.message});
         }
      
         next();
     }
 
 };