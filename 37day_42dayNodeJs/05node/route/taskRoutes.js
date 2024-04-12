const auth=require('../middleware/auth')
const Task=require('../model/taskModel')
//express
const express=require('express')
const router=new express.Router()

router.post('/tasks',auth,async(req,res)=>{
    console.log("userid",req.user._id)
    const taskData=new Task({
        ...req.body,
        owner:req.user._id
    })
    taskData.save().then((data)=>res.send(data))
})

//Retrive all the users/tasks
router.get('/task',auth,async(req,res)=>{
    // Model.find()
    //try and catch
    try{
        await req.user.populate('taskRel')
        res.send(req.user.taskRel)
    }
    catch(e){
        res.send({message:"Tasks Nt found"})
    }
})

//task as well
router.get('/task/:id',auth,async(req,res)=>{  
    try{
        console.log(req.params.id,req.user._id)
        const getTask= await Task.findOne({_id:req.params.id,owner:req.user._id})
        if(!getTask){
            res.send("Task Not Found")
        }
        res.send(getTask)
    }catch(e){
        res.send("Server Error")
    }
})

//task as well 
router.patch('/task/:id',auth,async(req,res)=>{
    const updateTask=await Task.findOneAndUpdate({_id:req.params.id,owner:req.user._id},req.body,{new:true,runValidators:true})
    res.send(updateTask)
})

//Task
router.delete('/task/:id',auth,async(req,res)=>{
    const deleteTask= await Task.findOneAndDelete({_id:req.params.id,owner:req.user._id})
    res.send(deleteTask)
})
module.exports=router
