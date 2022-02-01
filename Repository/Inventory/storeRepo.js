const { restart } = require('nodemon');
const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
    async GetAll(req,res,next){
     
         try {
           
             let stores=await prisma.store.findMany({where:{isRemoved:false,}});
             res.data=stores;
         } catch (error) {
             res.status(500).json({message:error.message});
         }
    
         next();
     },
     async Get(req,res,next){
      try {
         const id=parseInt(req.params.id);
           if(!isNaN(id)){
            let store=await prisma.store.findFirst({where:{isRemoved:false,id:id}});
            res.data=store;          
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
            let store;
            const id=parseInt(req.body.id);
            if(!isNaN(id) && id>0){
                store = await prisma.store.update({where:{id:id},data:{                    
                    descrpiction:req.body.descrpiction,
                    email:req.body.email,
                    facebookLink:req.body.facebookLink,
                    name:req.body.name,
                    isRemoved:false,
                    primaryPhone:req.body.primaryPhone,
                    secondaryPhone:req.body.secondaryPhone,
                    webaddress:req.body.webaddress,
                    youtubeLink:req.body.youtubeLink,
                    updatedAt:new Date(Date.now()),
                }});
               res.message="store successfully updated."; 
            }else{
                store = await prisma.store.create({data:{
                    descrpiction:req.body.descrpiction,
                    email:req.body.email,
                    facebookLink:req.body.facebookLink,
                    name:req.body.name,
                    isRemoved:false,
                    primaryPhone:req.body.primaryPhone,
                    secondaryPhone:req.body.secondaryPhone,
                    webaddress:req.body.webaddress,
                    youtubeLink:req.body.youtubeLink,
                    updatedAt:new Date(Date.now()),
                }});
               res.message="store successfully saved."; 
            }
        
         res.data=store;    
         } catch (error) {
         res.status(500).json({message:error.message});

         }
         next();
     },
     async Delete(req,res,next){
        
         try {
            const id=parseInt(req.params.id);
            let store= await prisma.store.update({where:{id:id},data:{isRemoved:true}});
            res.data=store; 
            res.message="user type successfully deleted."; 
             
         } catch (error) {
             res.status(500).json({message:error.message});
         }
      
         next();
     }
 
 };