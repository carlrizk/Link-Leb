import authController from "./controllers/auth.controller"
import userController from "./controllers/user.controller"
import requestController from "./controllers/request.controller"
import express from "express"
const router = express.Router()

router.use('/auth', authController)
router.use('/user', userController)
router.use('/request', requestController)

export default router