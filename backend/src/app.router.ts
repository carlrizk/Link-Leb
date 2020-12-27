import authController from "./controllers/auth.controller"
import userController from "./controllers/user.controller"

import express from "express"
const router = express.Router()

router.use('/auth', authController)
router.use('/users', userController)

export default router