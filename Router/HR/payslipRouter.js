const express=require('express');
const repo=require("../../Repository/HR/payslipRepo");
const router=express.Router();
//geting all by any specific date range
router.get('/getallusingdaterange/:firstdate/:lastdate',repo.GetAllUsingDateRange,(req,res)=>{
    res.json({"data":res.data,"Success":0,"haserror":false
});
})
//geting today's all payslip
router.get('/getallbytoday',repo.GetAllByToday,( req , res)=>{
    res.json({"data":res.data,"Success":0,"haserror":false
});
})
//geting one's  payslip using specific date range
router.get('/getusingdaterange/:id/:firstdate/:lastdate',repo.GetUsingDateRange,( req , res)=>{
    res.json({"data":res.data,"Success":0,"haserror":false
});
})
//geting one's daily payslip
router.get('/:id',repo.GetByToday,( req , res)=>{
    res.json({"data":res.data,"Success":0,"haserror":false
});
})
//geting daily payslips
router.post('/genaratesalary',repo.GenerateDailySalaryPayslip,( req , res)=>{
    res.json({"data":res.data,"Success":0,"haserror":false
});
})
//save
router.post('/',repo.Save,(req,res)=>{

    res.json({"data":res.data,"Success":0,"haserror":false
});
})

module.exports=router;