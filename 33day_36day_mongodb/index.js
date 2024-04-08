const { MongoClient,ObjectId } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'fsd56wd';

async function createConnection(){
    const client = new MongoClient(url);
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const res=await db.collection('users').find().toArray()
    // console.log(res)
    const res1=await db.collection('users').find({username:"Komal"}).toArray()
    //console.log(res1)

    //FindOne
    const res2=await db.collection('users').findOne({username:"Komal",email: 'komal@gmail.com'})
    console.log(res2)

    // insertOne
    //const res2=await db.collection('users').insertOne({username:"Akhil",email:"akhil@gmail.com"})

    //insertMany
    // const res4=await db.collection('users').insertMany([
    //     {username:"guvi",email:"guvi@gmail.com"},
    //     {username:"geek",email:"geek@gmail.com"}
    // ])


    //update command
    //updateOne
    // const res5=await db.collection('users').updateOne({// where u want to update
    //     username:"guvi"
    // },{
    //     $set:{//what you to update
    //         username:"John Andrew" 
    //     }

    // })

    const res6=await db.collection('users').updateOne({// where u want to update
        _id: new ObjectId('660ba7c3da466bd944d93f88'),
    },{
        $set:{//what you to update
            email:"john@gmail.com" 
        }

    })
    //updateMany
    const res7=await db.collection('users').updateMany({// where u want to update
        username:"guvi" 
    },{
        $set:{//what you to update
            username:"Mike Andrew" 
        }

    })

    // DeleteOne
   // const res8=await db.collection('users').deleteOne({_id: new ObjectId('660ba98e18f074925843a3ac'),})
    
    //DeleteMany
    // const res9=await db.collection('users').deleteMany({ username: 'John Andrew'})
    const res3=await db.collection('users').find().toArray()

    

    // console.log(res3)
}
createConnection()