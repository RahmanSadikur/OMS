const{ verify}=require("jsonwebtoken")
module.exports={
    ISAuthentic:(req,res,next)=>{
        let token=req.get("Authorization");
        if(token){
            token=token.split(" ")[1];
            
            //token=token.slice(7);
            verify(token,process.env.tokenSecret,(err,decoded)=>{
                    if(err){
                        res.json({
                            success:0,
                            message:"invalid token" 
                        });
                    }else{
                       // console.log(decoded);
                        res.userID=decoded.User.id;
                        next();
                    }
            });
        }
        else{
            res.json({
                success:0,
                message:"Access Denied! unauthorized user." 
            });
        }
    }
}