import express from "express"
import passport from "passport"
import Mapper from "../mapper"
import { IUser } from "../schemas/user.schema"

const router = express.Router()

router.post('/login',
    passport.authenticate("local"),
    async (req, res) => {
        const user = req.user as IUser;
        await user.populate('bookmarkedRequests').execPopulate()
        res.send(Mapper.MapUser(req.user as IUser))
    }
)

export default router