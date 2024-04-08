const mongoose=require('mongoose')
const User=mongoose.model('User',{
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    }
    })

//export
module.exports=User