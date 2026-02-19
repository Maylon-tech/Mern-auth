import express from 'express'
import { logOut, Register, userLogin } from '../controllers/userController.js'

const route = express.Router()

route.get("/login", userLogin)
route.get("/register", Register)
route.get("/logout", logOut)

export default route