const User=require('../model/userModel')
const bycrypt=require('bcryptjs')
const express=require('express')
const router=new express.Router()

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





