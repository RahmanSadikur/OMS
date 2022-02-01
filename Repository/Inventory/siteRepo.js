const { restart } = require('nodemon');
const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
    async GetAll(req,res,next){
     
         try {
           
             let sites=await prisma.site.findMany({where:{isRemoved:false,}});
             res.data=sites;
         } catch (error) {
             res.status(500).json({message:error.message});
         }
    
         next();
     },
     async Get(req,res,next){
      try {
         const id=parseInt(req.params.id);
           if(!isNaN(id)){
            let site=await prisma.site.findFirst({where:{isRemoved:false,id:id}});
            res.data=site;          
           }
           else{
 
           }

     } catch (error) {
         res.status(500).json({message:error.message});
     }

     next();
     },
     async GetBybranchId(req,res,next){
        try {
           const branchId=parseInt(req.params.branchId);
             if(!isNaN(id)){
              let site=await prisma.site.findMany({where:{
                  isRemoved:false,
                  branchId:branchId}
                  ,include:{
                      branch:{
                          select:{name:true}
                        }
                    }
                });
              res.data=site;          
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
            let site;
            const id=parseInt(req.body.id);
            if(!isNaN(id) && id>0){
                site = await prisma.site.update({where:{id:id},data:{                    
                    descrpiction:req.body.descrpiction,                
                    name:req.body.name,
                    isRemoved:false,        
                    branchId:parseInt(req.body.branchId),
                    updatedAt:new Date(Date.now()), 
                }});
               res.message="site successfully updated."; 
            }else{
                site = await prisma.site.create({data:{
                    descrpiction:req.body.descrpiction,                
                    name:req.body.name,
                    isRemoved:false,        
                    branchId:parseInt(req.body.branchId),
                    updatedAt:new Date(Date.now()), 
                }});
               res.message="site successfully saved."; 
            }
        
         res.data=site;    
         } catch (error) {
         res.status(500).json({message:error.message});

         }
         next();
     },
     async Delete(req,res,next){
        
         try {
            const id=parseInt(req.params.id);
            let site= await prisma.site.update({where:{id:id},data:{isRemoved:true}});
            res.data=site; 
            res.message="user type successfully deleted."; 
             
         } catch (error) {
             res.status(500).json({message:error.message});
         }
      
         next();
     }
 
 };