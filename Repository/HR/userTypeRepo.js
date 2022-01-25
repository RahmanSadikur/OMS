const { restart } = require('nodemon');
module.exports={
    async GetAll(req,res,next){
       // let tests;
         try {
            //   tests=await test.find()
            //  if(tests==null){
            //      res.status(404).json({message:"No Data found"});
            //  }
             
         } catch (error) {
             //res.status(500).json({message:error.message});
         }
        // res.tests=tests;
         next();
     },
     async Get(req,res,next){
         //let testdata;
         try {
            //  testdata=await test.findOne({_id:mongoose.Types.ObjectId(req.params.id)});
            //  if(testdata==null){
            //      res.status(404).json({message:"Data not found"});
            //  }
             
         } catch (error) {
            // res.status(500).json({message:error.message});
         }
        // res.testdata=testdata;
         next();
     },
     async Save(req,res,next){
         //let testdata;
         try {
            //  testdata=await test.findOne({_id:mongoose.Types.ObjectId(req.params.id)});
            // if(testdata==null) {
            //     testdata=new test({Name:""});
            // }
            // testdata.Name=req.body.Name;
            // testdata.save();
             
         } catch (error) {
             //res.status(500).json({message:error.message});
         }
        // res.testdata=testdata;
         next();
     },
     async Delete(req,res,next){
        // let testdata;
         try {
            //  testdata=await test.findOne({_id:mongoose.Types.ObjectId(req.params.id)});
            // if(testdata==null) {
            //  res.status(404).json({message:"Data not found"});
            // }
           
            // testdata.remove();
             
         } catch (error) {
            // res.status(500).json({message:error.message});
         }
        // res.testdata=testdata;
         next();
     }
 
 };