require('./db/mongoose_connection')
const User=require('./model/userModel')
const Task=require('./model/taskModel')

//express
const express=require('express')
const app=express()
const PORT=8000; 
app.use(express.json())
//Routing

app.get('/',(req,res)=>{
    res.send("Started the Server")
})

// Adding the users/task 

app.post('/users',async(req,res)=>{
    // {
        //username:
        //email: 
    // }
    //POSTMAN
    //install postman
    console.log(req.body)
    // res.send(req.body)
    const userData=new User(req.body)
    userData.save().then((data)=>res.send(data))
})

// task > task 

app.post('/tasks',async(req,res)=>{
    const taskData=new Task(req.body)
    taskData.save().then((data)=>res.send(data))
})


//Retrive all the users/tasks
// GET
app.get('/users',async(req,res)=>{
    // Model.find()
    //try and catch
    try{
    const getAllUsers=await User.find({})
    res.send(getAllUsers)
    }
    catch(e){
        res.send({message:"Users Nt found"})
    }
})

//task :10 min > 15-18 mins

app.get('/task',async(req,res)=>{
    // Model.find()
    //try and catch
    try{
    const getAllTask=await Task.find({})
    res.send(getAllTask)
    }
    catch(e){
        res.send({message:"Tasks Nt found"})
    }
})
//task || user by id
app.get('/users/:id',async(req,res)=>{
    console.log(req.params.id)
    const getUserById= await User.findById(req.params.id)
    res.send(getUserById)
})

//task as well
app.get('/task/:id',async(req,res)=>{
    console.log(req.params.id)
    const getTaskById= await Task.findById(req.params.id)
    res.send(getTaskById)
})

//update the user
//patch
//findByIdAndUpdate()> req.params.id,req.body,{new:true,runValidators:true}

app.patch('/users/:id',async(req,res)=>{
    const updateUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.send(updateUser)
})

//task as well 
app.patch('/task/:id',async(req,res)=>{
    const updateTask=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.send(updateTask)
})

// User.findByIdAndDelete
app.delete('/users/:id',async(req,res)=>{
    const deleteUser= await User.findByIdAndDelete(req.params.id)
    res.send(deleteUser)
})
//Task
app.delete('/task/:id',async(req,res)=>{
    const deleteTask= await Task.findByIdAndDelete(req.params.id)
    res.send(deleteTask)
})


app.listen(PORT,()=>{
    console.log("Server Started",PORT)
})

// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start":"node index.js",// npm start
//     "dev":"nodemon index.js"// npm run dev
//   }


