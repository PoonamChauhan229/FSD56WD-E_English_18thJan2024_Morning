const mongoose=require('mongoose')
const Task=mongoose.model('Task',{
    desc:{
    type:String,
    required:true,
    trim:true
},
completed:{
    type:String,
    required:true,
    trim:true
}
})
module.exports=Task