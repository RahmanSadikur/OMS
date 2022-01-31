const express=require('express');
const repo=require("../../Repository/HR/payslipRepo");
const router=express.Router();
//geting all by year
router.get('/getallbyyear/:year',repo.GetAllbyYear,(req,res)=>{
    res.json({"data":res.data,"Success":0,"haserror":false
});
})
//geting all by month
router.get('/getallbymonth/:month',repo.GetAllbyMonth,( req , res)=>{
    res.json({"data":res.data,"Success":0,"haserror":false
});
})
//geting one's monthly payslip
router.get('/getbymonth/:id/:month',repo.GetByMonth,( req , res)=>{
    res.json({"data":res.data,"Success":0,"haserror":false
});
})
//geting one's yearly payslip
router.get('/getbyyear/:id/:year',repo.GetByYear,( req , res)=>{
    res.json({"data":res.data,"Success":0,"haserror":false
});
})
//geting one's daily payslip
router.get('/:id',repo.GetByToday,( req , res)=>{
    res.json({"data":res.data,"Success":0,"haserror":false
});
})
//geting daily payslips
router.get('/',repo.GetAllByToday,( req , res)=>{
    res.json({"data":res.data,"Success":0,"haserror":false
});
})
//save
router.post('/',repo.Save,(req,res)=>{

    res.json({"data":res.data,"Success":0,"haserror":false
});
})

module.exports=router;