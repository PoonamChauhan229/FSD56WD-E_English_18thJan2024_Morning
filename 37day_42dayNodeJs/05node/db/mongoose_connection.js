const mongoose=require('mongoose')
//connection
//mongoose.connect('mongodb://127.0.0.1:27017/newmongoosefsdwd56')

mongoose.connect(process.env.MONGO_URL)