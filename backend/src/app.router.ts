import express from "express"
import authController from "./controllers/auth.controller"
import userController from "./controllers/user.controller"
import requestController from "./controllers/request.controller"
import needController from "./controllers/need.controller"
import socialMediaController from "./controllers/social-media.controller"

const router = express.Router()

router.use('/auth', authController)
router.use('/users', userController)
router.use("/requests", requestController)
router.use("/needs", needController)
router.use("/socials", socialMediaController)

export default router