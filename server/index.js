import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

import userRouter from './routes/userRoute.js'

mongoose
    .connect(process.env.MONGO_URI, {})

    .then(() => console.log("connected to MongoDB"))

    .catch((error) => console.log(error))

const app = express()

// Auth USER Credential for Sign In / Out
app.use("/api/user", userRouter)

app.use("/api/auth", authRoute)

// CRUD Operation with Data API flow

app.listen(4000, () => console.log('Server running on port 4000'))