const express=require('express');
const repo=require("../../Repository/HR/userTypeRepo")
const router=express.Router();
router.get('/',repo.GetAll,(req,res)=>{
    res.json({"data":res.data,"Success":0,"haserror":false
});
})
//geting one
router.get('/:id',repo.Get,( req , res)=>{
    res.json({"data":res.data,"Success":0,"haserror":false
});
})
//save
router.post('/',repo.Save,(req,res)=>{

    res.json({"data":res.data,"Success":0,"hasError":res.hasError,"Message": res.message
});
})
//update
router.patch('/:id',repo.Save,(req,res)=>{

    res.json({"data":res.data,"Success":0,"hasError":res.hasError,"Message": res.message
});

})
//delete
router.post('/delete/:id',repo.Delete,(req,res)=>{

    res.json({"data":res.data,"Success":0,"haserror":false,"Message": res.message
});
})

module.exports=router;