const { restart } = require('nodemon');
const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
     async GetAllbyMonth(req,res,next){    
        try {
        
            const month=parseInt(req.params.month);
            let payslip=await prisma.paySlip.findMany({where:{isRemoved:false,month:month}});
            res.data=payslip;
        } catch (error) {
            res.status(500).json({message:error.message});
        }
   
        next();
    },
    async GetAllbyYear(req,res,next){    
        try {
            const year=req.params.year;
            var firstdate = new Date(year, 0, 1);
            var lastdate = new Date(year, 11, 0);
          
            let payslip=await prisma.paySlip.findMany({where:{isRemoved:false,updatedAt:{
                lte: lastdate,
                gte: firstdate,
            }}});
            res.data=payslip;
        } catch (error) {
            res.status(500).json({message:error.message});
        }
   
        next();
    },
    async GetAllByToday(req,res,next){
        try {
           var firstdate =new Date(new Date().setHours(0, 0, 0, 0));
           var lastdate = new Date(new Date().setHours(23, 59, 59, 999));
     
              let paySlip=await prisma.paySlip.findMany({where:{isRemoved:false,updatedAt:{
                lte: lastdate,
                gte: firstdate,
            },},},);
              
            
            
            res.data=paySlip;          
         
  
       } catch (error) {
           res.status(500).json({message:error.message});
       }
  
       next();
       },

     async GetByMonth(req,res,next){
      try {
         const id=parseInt(req.params.id);
         const month=parseInt(req.params.month);
           if(!isNaN(id)){
            let paySlip=await prisma.paySlip.findMany({where:{isRemoved:false,userId:id,month:month,}});
            res.data=paySlip;          
           }
           else{

           }

     } catch (error) {
         res.status(500).json({message:error.message});
     }

     next();
     },
     async GetByYear(req,res,next){
        try {
           const id=parseInt(req.params.id);
           const year=req.params.year;
           var firstdate = new Date(year, 0, 1);
           var lastdate = new Date(year, 11, 0);
             if(!isNaN(id)){
              let paySlip=await prisma.paySlip.findMany({where:{isRemoved:false,userId:id,updatedAt:{
                lte: lastdate,
                gte: firstdate,
            }}});
              res.data=paySlip;          
             }
             else{
  
             }
  
       } catch (error) {
           res.status(500).json({message:error.message});
       }
  
       next();
       },
       async GetByToday(req,res,next){
        try {
           const id=parseInt(req.params.id);
           var firstdate =new Date(new Date().setHours(0, 0, 0, 0));
           var lastdate = new Date(new Date().setHours(23, 59, 59, 999));
             if(!isNaN(id)){
              let paySlip=await prisma.paySlip.findMany({where:{isRemoved:false,userId:id,updatedAt:{
                lte: lastdate,
                gte: firstdate,
            }}});
              res.data=paySlip;          
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
            let payslip = await prisma.paySlip.create({data:{
                isRemoved:false,
                month:parseInt(req.body.month),
                total:parseFloat(req.body.total) ,
                day:new Date(req.body.day),
                userId:parseInt(req.body.userId),
                updatedAt:new Date(Date.now()),
            }});
               res.message="payslip successfully saved."; 
            
        
         res.data=payslip;    
         } catch (error) {
         res.status(500).json({message:error.message});

         }
         next();
     },
 
 };