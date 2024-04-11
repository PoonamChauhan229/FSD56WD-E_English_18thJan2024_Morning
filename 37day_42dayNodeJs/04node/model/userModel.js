const mongoose=require('mongoose')
const jwt = require('jsonwebtoken');

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
    }
})

// Methods
userSchema.methods.generateAuthToken=async function(req,res,next){
    //methods are accessible
    const user=this
    const token=jwt.sign({_id:user._id},'nodejs')
    console.log(token)
    return token
}

const User=mongoose.model('User',userSchema)
//export
module.exports=User