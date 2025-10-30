import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose';

dotenv.config();

const app = express()

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI

//connect database
try {
  mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log('connected to mongodb')
} catch (error) {
  console.log("eror:---->", error)
}



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
