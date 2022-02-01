const { restart } = require('nodemon');
const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
    async GetAll(req,res,next){
     
         try {
           
             let branchs=await prisma.branch.findMany({where:{isRemoved:false,}});
             res.data=branchs;
         } catch (error) {
             res.status(500).json({message:error.message});
         }
    
         next();
     },
     async Get(req,res,next){
      try {
         const id=parseInt(req.params.id);
           if(!isNaN(id)){
            let branch=await prisma.branch.findFirst({where:{isRemoved:false,id:id}});
            res.data=branch;          
           }
           else{
 
           }

     } catch (error) {
         res.status(500).json({message:error.message});
     }

     next();
     },
     async GetByStoreId(req,res,next){
        try {
           const storeId=parseInt(req.params.storeId);
             if(!isNaN(id)){
              let branch=await prisma.branch.findFirst({where:{isRemoved:false,storeId:storeId}});
              res.data=branch;          
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
            let branch;
            const id=parseInt(req.body.id);
            if(!isNaN(id) && id>0){
                branch = await prisma.branch.update({where:{id:id},data:{                    
                    descrpiction:req.body.descrpiction,
                    email:req.body.email,
                    facebookLink:req.body.facebookLink,
                    name:req.body.name,
                    isRemoved:false,
                    primaryPhone:req.body.primaryPhone,
                    secondaryPhone:req.body.secondaryPhone,
                    webaddress:req.body.webaddress,
                    youtubeLink:req.body.youtubeLink,
                    storeId:parseInt(req.body.storeId),
                    updatedAt:new Date(Date.now()), 
                }});
               res.message="branch successfully updated."; 
            }else{
                branch = await prisma.branch.create({data:{
                    descrpiction:req.body.descrpiction,
                    email:req.body.email,
                    facebookLink:req.body.facebookLink,
                    name:req.body.name,
                    isRemoved:false,
                    primaryPhone:req.body.primaryPhone,
                    secondaryPhone:req.body.secondaryPhone,
                    webaddress:req.body.webaddress,
                    youtubeLink:req.body.youtubeLink,
                    storeId:parseInt(req.body.storeId),
                    updatedAt:new Date(Date.now()),
                }});
               res.message="branch successfully saved."; 
            }
        
         res.data=branch;    
         } catch (error) {
         res.status(500).json({message:error.message});

         }
         next();
     },
     async Delete(req,res,next){
        
         try {
            const id=parseInt(req.params.id);
            let branch= await prisma.branch.update({where:{id:id},data:{isRemoved:true}});
            res.data=branch; 
            res.message="user type successfully deleted."; 
             
         } catch (error) {
             res.status(500).json({message:error.message});
         }
      
         next();
     }
 
 };