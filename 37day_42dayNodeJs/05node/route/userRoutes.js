const User=require('../model/userModel')
const bycrypt=require('bcryptjs')
const express=require('express')
const router=new express.Router()
const auth=require('../middleware/auth')

//signup > register 
router.post('/signup',async(req,res)=>{
    //    console.log(req.body)
    // res.send(req.body)
    // that email exists :
    let user=await User.findOne({email:req.body.email})
    console.log(user)
    if(user)return res.send({message:"User Already exists,Try up with another Email Address"})// early return 
    // const userData=new User(req.body)
    const salt=await bycrypt.genSalt(10)
    const hashedPassword=await bycrypt.hash(req.body.password,salt)
    const userData=new User({
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword
    })
    userData.save().then((data)=>res.send(data))
})

//Retrive all the users/tasks
router.post('/signin',async(req,res)=>{
    let user=await User.findOne({email:req.body.email})
    // console.log(user)
    if(!user) return res.send({message:"UserNot found Try again"})

    //comparision for the password
    const isValidPassword=await bycrypt.compare(req.body.password,user.password)

    if(!isValidPassword) return res.send({message:"Password doesnt Matched Try again"})
    //Generate a token
    const token =await user.generateAuthToken()
    // console.log(token)
    res.send({user:user,token:token})
})

router.get('/users',auth,async(req,res)=>{
   console.log("From route",req.user)
    // Model.find()
    //try and catch
    try{
    res.send(req.user)
    }
    catch(e){
        res.send({message:"Users Nt found"})
    }
})

//Profile
router.get('/users/me',auth,async(req,res)=>{
   console.log("USer id",req.user)
   const getUserById= await User.findById(req.user._id)
    res.send(getUserById)
})

//update the user
//patch
//findByIdAndUpdate()> req.params.id,req.body,{new:true,runValidators:true}


router.patch('/users/me',auth,async(req,res)=>{
    const updateUser=await User.findByIdAndUpdate(req.user._id,req.body,{new:true,runValidators:true})
    res.send(updateUser)
})

// User.findByIdAndDelete
router.delete('/users/me',auth,async(req,res)=>{
    const deleteUser= await User.findByIdAndDelete(req.user._id)
    res.send({
        user:deleteUser,
        message:"User Deleted successfully"
    })
})

module.exports=router



// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE0ZDgwZmRjZGE5ZDkyZDJiMzVkNjEiLCJpYXQiOjE3MTI4OTgwNjJ9.LTP2GvOmHwgNQD4C2ZnrDVRmTXKo8pZgBMnPZ0-kSJo

