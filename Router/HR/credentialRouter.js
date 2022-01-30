const express=require('express');
const repo=require("../../Repository/HR/credentialRepo")
const router=express.Router();

//Generate new password
router.post('/generate/:id',repo.Generate,(req,res)=>{

    res.json({"data":res.data,"Success":0,"haserror":false
});
})
//enable credential
router.post('/enable/:id',repo.enabled,(req,res)=>{

    res.json({"data":res.data,"Success":0,"haserror":false,"Message": res.message
});

})
//disable credential
router.post('/disable/:id',repo.disable,(req,res)=>{

    res.json({"data":res.data,"Success":0,"haserror":false,"Message": res.message
});
})

module.exports=router;