import express from 'express'
import cors from 'cors'
import 'dotenv/config'
const { PORT, DB_url } = process.env


import { LessonRouter } from './routes/lesson'
// mongo
import mongoose from 'mongoose'
mongoose.connect(DB_url);
let db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'))
db.once('open', function() {
  console.log('mongoDB is working like a bawss')
})


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use('/lessons', LessonRouter)

app.listen( PORT, () => {
  console.log(`it's work on radio #${PORT} bitches!`)
})
