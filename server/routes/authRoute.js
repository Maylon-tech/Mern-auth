import express from 'express'
import { logOut, Register, userLogin } from '../controllers/userController.js'

const authRoute = express.Router()

authRoute.get("/auth", userLogin)


export default authRoute