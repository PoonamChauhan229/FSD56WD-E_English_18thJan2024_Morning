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
},
owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
}
})
module.exports=Task