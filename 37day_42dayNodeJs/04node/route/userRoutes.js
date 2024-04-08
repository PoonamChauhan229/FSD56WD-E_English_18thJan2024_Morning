const User=require('../model/userModel')
const express=require('express')
const router=new express.Router()


router.post('/users',async(req,res)=>{
       console.log(req.body)
    // res.send(req.body)
    const userData=new User(req.body)
    userData.save().then((data)=>res.send(data))
})

//Retrive all the users/tasks

router.get('/users',async(req,res)=>{
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

//user by id
router.get('/users/:id',async(req,res)=>{
    console.log(req.params.id)
    const getUserById= await User.findById(req.params.id)
    res.send(getUserById)
})

//update the user
//patch
//findByIdAndUpdate()> req.params.id,req.body,{new:true,runValidators:true}

router.patch('/users/:id',async(req,res)=>{
    const updateUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.send(updateUser)
})

// User.findByIdAndDelete
router.delete('/users/:id',async(req,res)=>{
    const deleteUser= await User.findByIdAndDelete(req.params.id)
    res.send(deleteUser)
})

module.exports=router





