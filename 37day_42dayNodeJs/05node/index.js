const dotenv=require('dotenv').config()
require('./db/mongoose_connection')
const userRouter=require('./route/userRoutes')
const taskRouter=require('./route/taskRoutes')


//express
const express=require('express')
const app=express()
const PORT=process.env.PORT
app.use(express.json())
//Routing
app.get('/',(req,res)=>{
    res.send("Started the Server")
})
app.use(userRouter)
app.use(taskRouter)


app.listen(PORT,()=>{
    console.log("Server Started",PORT)
})

// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start":"node index.js",// npm start
//     "dev":"nodemon index.js"// npm run dev
//   }


