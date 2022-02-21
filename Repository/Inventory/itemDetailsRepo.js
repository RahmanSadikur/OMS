const { restart } = require('nodemon');
const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
    async GetAll(req,res,next){
     
         try {
           
             let itemDetails=await prisma.itemDetails.findMany({where:{
                 isRemoved:false,
                },include:{
                    item:true,
                  }});
             res.data=itemDetails;
         } catch (error) {
             res.status(500).json({message:error.message});
         }
    
         next();
     },
     async Get(req,res,next){
      try {
         const id=parseInt(req.params.id);
           if(!isNaN(id)){
            let itemDetails=await prisma.itemDetails.findFirst({where:{
                isRemoved:false,
                id:id
            },
                include:{
                item:true,
              }});
            res.data=itemDetails;          
           }
           else{
 
           }

     } catch (error) {
         res.status(500).json({message:error.message});
     }

     next();
     },
     async GetByItemId(req,res,next){
        try {

           const itemId=parseInt(req.params.itemId);
           
             if(!isNaN(itemId)){
              let itemDetails=await prisma.itemDetails.findMany({where:{
                  isRemoved:false,
                  itemId:itemId}
                  ,include:{
                      item:true,
                    }
                });
                console.log(itemDetails);
              res.data=itemDetails;          
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
            let itemDetails;
            const id=parseInt(req.body.id);
            if(!isNaN(id) && id>0){
                itemDetails = await prisma.itemDetails.update({where:{id:id},data:{  
                    basePrice:parseFloat(req.body.basePrice),
                    quantity: parseFloat(req.body.quantity), 
                    selling:parseFloat(req.body.selling), 
                    size:req.body.size,                                   
                    descrpiction:req.body.descrpiction,                                    
                    isRemoved:false,  
                    itemId :parseInt(req.body.itemId),
                    updatedAt:new Date(Date.now()), 
                }});
               res.message="itemDetails successfully updated."; 
            }else{
                itemDetails = await prisma.itemDetails.create({data:{
                    basePrice:parseFloat(req.body.basePrice),
                    quantity: parseFloat(req.body.quantity), 
                    selling:parseFloat(req.body.selling), 
                    size:req.body.size,                                   
                    descrpiction:req.body.descrpiction,                                    
                    isRemoved:false,  
                    itemId :parseInt(req.body.itemId),
                    updatedAt:new Date(Date.now()), 
                }});
               res.message="itemDetails successfully saved."; 
            }
        
         res.data=itemDetails;    
         } catch (error) {
         res.status(500).json({message:error.message});

         }
         next();
     },
     async Delete(req,res,next){
        
         try {
            const id=parseInt(req.params.id);
            let itemDetails= await prisma.itemDetails.update({where:{id:id},data:{isRemoved:true}});
            res.data=itemDetails; 
            res.message="Item Details successfully deleted."; 
             
         } catch (error) {
             res.status(500).json({message:error.message});
         }
      
         next();
     }
 
 };