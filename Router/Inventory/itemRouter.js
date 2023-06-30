const express=require('express');
const repo=require("../../Repository/Inventory/itemRepo")
const router=express.Router();
router.get('/',repo.GetAll,(req,res)=>{
    res.json({"data":res.data,"Success":0,"haserror":false
});
})
//search autocomplet
router.get('/searchlist',repo.GetAllItemName,(req,res)=>{
    res.json({"data":res.data,"Success":0,"hasError":res.hasError
});
})
//geting one
router.get('/:id',repo.Get,( req , res)=>{
    res.json({"data":res.data,"Success":0,"hasError":false
});
})
//geting one
router.get('/getbysubcategoryid/:subCategoryId',repo.GetBySubCategoryId,( req , res)=>{
    res.json({"data":res.data,"Success":0,"hasError":false
});
})
//save
router.post('/',repo.Save,(req,res)=>{

    res.json({"data":res.data,"Success":0,"hasError":false
});
})
//delete
router.delete('/:id',repo.Delete,(req,res)=>{

    res.json({"data":res.data,"Success":0,"hasError":false,"Message": res.message
});
})

module.exports=router;