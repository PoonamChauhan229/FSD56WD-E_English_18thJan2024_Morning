console.log("bcryptjs")
const bycrypt=require('bcryptjs')

const myFunction=async()=>{
    const password="Red!12345"
    // const hashedPassword=await bycrypt.hash(password,8)
    
    const salt=await bycrypt.genSalt(10)
    const hashedPassword=await bycrypt.hash(password,salt)
    
    console.log("Entered Password:",password)
    console.log("Hashed Password:",hashedPassword)    

    //compare()
    const isMatch=await bycrypt.compare(password,hashedPassword)
    console.log(isMatch)
}
myFunction()