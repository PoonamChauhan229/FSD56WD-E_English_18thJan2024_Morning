const mongoose=require('mongoose')
//connection
mongoose.connect('mongodb://127.0.0.1:27017/mongoosefsdwd56')

//define the schema and pass this to model
//mongoose.model(modelName, schema):
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
//create an instance
//using new keyword 
const taskData=new Task({
        desc:"learn Nodejs",
    completed:"true/yes"
})

//save to DB
// userData.save().then(()=>{console.log(userData)})
taskData.save()

//collection > Task> {desc:"learn Nodejs",completed:"true/yes"}

//11:25 > 15 min 