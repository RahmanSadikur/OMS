const express=require('express');
const repo=require("../../Repository/HR/userTypeRepo")
const router=express.Router();
router.get('/',repo.GetAll,(req,res)=>{
    res.send(res.tests);
})
//geting one
router.get('/:id',repo.Get,( req , res)=>{

res.json(res.testdata);
})
//save
router.post('/',repo.Save,(req,res)=>{

res.json(res.testdata);
})
//update
router.patch('/:id',repo.Save,(req,res)=>{

  
    res.json(res.testdata);

})
//delete
router.delete('/:id',repo.Delete,(req,res)=>{

    res.json(res.testdata);
})

module.exports=router;