const { restart } = require('nodemon');
const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
    async GetAllUsingDateRange(req,res,next){    
        try {
            let f=req.params.firstdate;
            let  l=req.params.lastdate;
            var firstdate = new Date(f);
            var lastdate = new Date(l);
          
            let payslip=await prisma.paySlip.findMany({where:{isRemoved:false,updatedAt:{
                lte: lastdate,
                gte: firstdate,
            },
        },include:{
            user:{
                select:{
                    name:true,
                },
            },
        },
    });
            res.data=payslip;
        } catch (error) {
            res.status(500).json({message:error.message});
        }
   
        next();
    },
     async GetUsingDateRange(req,res,next){
        try {
           const id=parseInt(req.params.id);
            let  f=req.params.firstdate;
            let l=req.params.lastdate;
            var firstdate = new Date(f);
            var lastdate = new Date(l);
             if(!isNaN(id)){
              let paySlip=await prisma.paySlip.findMany({where:{isRemoved:false,userId:id,updatedAt:{
                lte: lastdate,
                gte: firstdate,
            },
        },include:{
            user:{
                select:{
                    name:true,
                },
            },
        },
    });
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
            },
        },include:{
            user:{
                select:{
                    name:true,
                },
            },
        },
    });
              res.data=paySlip;          
             }
             else{
  
             }
  
       } catch (error) {
           res.status(500).json({message:error.message});
       }
  
       next();
       },
       async GetAllByToday(req,res,next){    
        try {
            var firstdate =new Date(new Date().setHours(0, 0, 0, 0));
            var lastdate = new Date(new Date().setHours(23, 59, 59, 999));
          
            let payslip=await prisma.paySlip.findMany({where:{isRemoved:false,updatedAt:{
                lte: lastdate,
                gte: firstdate,
            },
        },include:{
            user:{
                select:{
                    name:true,
                },
            },
        },
    });
            res.data=payslip;
        } catch (error) {
            res.status(500).json({message:error.message});
        }
   
        next();
    },
     async Save(req,res,next){

         try {
            let payslip = await prisma.paySlip.create({data:{
                isRemoved:false,
                description:req.body.description,
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
     async GenerateDailySalaryPayslip(req,res,next){
        try {
            let id=parseInt(req.body.userId);
            if(!isNaN(id)){
                let user=await prisma.user.findFirst({where:{id:id}});
                if(user!==null){
                    let payslip = await prisma.paySlip.create({data:{
                        isRemoved:false,
                        description:Date.now().toString()+"/'s salary entried of" +user.name,
                        total:user.dailywages,
                        day:new Date(Date.now()),
                        userId:user.id,
                        updatedAt:new Date(Date.now()),
                        
                    }});
                    res.data=payslip; 
                }else{
                    res.message="User not found."; 
                }

                  
            }else{
                res.message="Invalid request."; 
            }          
       
          
        } catch (error) {
        res.status(500).json({message:error.message});

        }
        next();
    },
 
 };