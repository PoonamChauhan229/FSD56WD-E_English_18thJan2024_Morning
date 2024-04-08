const mongoose=require('mongoose')
//connection
mongoose.connect('mongodb://127.0.0.1:27017/mongoosefsdwd56')

//define the schema and pass this to model
//mongoose.model(modelName, schema):
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
//create an instance
//using new keyword 
const userData=new User({
    username:"shweta",
    email:"shweta@gmail.com"
})

//save to DB
// userData.save().then(()=>{console.log(userData)})
userData.save()

//collection > Task> {desc:"learn Nodejs",completed:"true/yes"}

//11:25 > 15 min 