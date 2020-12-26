import express from "express"
import passport from "passport"
import Mapper from "../mapper"

const router = express.Router()

router.post('/login',
    passport.authenticate("local"),
    async (req, res) => {
        res.send(Mapper.MapUser(req.user))
    }
)

export default router