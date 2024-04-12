// Authntication > User
const jwt = require('jsonwebtoken')
const User=require('../model/userModel')

const auth=async(req,res,next)=>{
    console.log("auth middleware")
    //token
    // console.log(req.header('Authorization'))
    const token=req.header('Authorization').replace("Bearer ","")
   // console.log(token)
    const decoded=jwt.verify(token,'nodejs')
   // console.log(decoded)// id of the user who has logged in
    const user=await User.findOne({_id:decoded._id})
   // console.log(user)
    req.token=token,
    req.user=user,
    next();
}

module.exports=auth;





