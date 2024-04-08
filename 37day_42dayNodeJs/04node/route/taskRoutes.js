
const Task=require('../model/taskModel')
//express
const express=require('express')
const router=new express.Router()

router.post('/tasks',async(req,res)=>{
    const taskData=new Task(req.body)
    taskData.save().then((data)=>res.send(data))
})

//Retrive all the users/tasks
router.get('/task',async(req,res)=>{
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

//task as well
router.get('/task/:id',async(req,res)=>{
    console.log(req.params.id)
    const getTaskById= await Task.findById(req.params.id)
    res.send(getTaskById)
})

//task as well 
router.patch('/task/:id',async(req,res)=>{
    const updateTask=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.send(updateTask)
})

//Task
router.delete('/task/:id',async(req,res)=>{
    const deleteTask= await Task.findByIdAndDelete(req.params.id)
    res.send(deleteTask)
})
module.exports=router
