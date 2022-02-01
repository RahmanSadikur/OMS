const { restart } = require('nodemon');
const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
    async GetAll(req,res,next){
     
         try {
           
             let subCategorys=await prisma.subCategory.findMany({where:{isRemoved:false,}});
             res.data=subCategorys;
         } catch (error) {
             res.status(500).json({message:error.message});
         }
    
         next();
     },
     async Get(req,res,next){
      try {
         const id=parseInt(req.params.id);
           if(!isNaN(id)){
            let subCategory=await prisma.subCategory.findFirst({where:{isRemoved:false,id:id}});
            res.data=subCategory;          
           }
           else{
 
           }

     } catch (error) {
         res.status(500).json({message:error.message});
     }

     next();
     },
     async GetByCategoryId(req,res,next){
        try {
           const categoryId=parseInt(req.params.categoryId);
             if(!isNaN(id)){
              let subCategory=await prisma.subCategory.findMany({where:{isRemoved:false,categoryId:categoryId}});
              res.data=subCategory;          
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
            let subCategory;
            const id=parseInt(req.body.id);
            if(!isNaN(id) && id>0){
                subCategory = await prisma.subCategory.update({where:{id:id},data:{                    
                    descrpiction:req.body.descrpiction,
                    name:req.body.name,
                    isRemoved:false,
                    categoryId:parseInt(req.body.categoryId),
                    updatedAt:new Date(Date.now()), 
                }});
               res.message="subCategory successfully updated."; 
            }else{
                subCategory = await prisma.subCategory.create({data:{
                    descrpiction:req.body.descrpiction,
                    name:req.body.name,
                    isRemoved:false,
                    categoryId:parseInt(req.body.categoryId),
                    updatedAt:new Date(Date.now()),
                }});
               res.message="subCategory successfully saved."; 
            }
        
         res.data=subCategory;    
         } catch (error) {
         res.status(500).json({message:error.message});

         }
         next();
     },
     async Delete(req,res,next){
        
         try {
            const id=parseInt(req.params.id);
            let subCategory= await prisma.subCategory.update({where:{id:id},data:{isRemoved:true}});
            res.data=subCategory; 
            res.message="user type successfully deleted."; 
             
         } catch (error) {
             res.status(500).json({message:error.message});
         }
      
         next();
     }
 
 };