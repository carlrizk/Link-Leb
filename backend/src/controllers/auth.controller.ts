import express from "express"
import { CallbackError } from "mongoose"
import passport from "passport"
import Mapper from "../mapper"
import { IUser, UserModel } from "../schemas/user.schema"

const router = express.Router()

router.post('/login',
    passport.authenticate("local"),
    async (req, res) => {
        UserModel.findById((req.user as IUser).id)
        .populate("socialMedias.socialMediaType")
        .exec((err: CallbackError, user) => {
            if (err) {
                console.error(err)
                res.status(500).send();
            }
            if (user != null) {
                res.send(Mapper.MapUser(user));
            } else {
                res.status(404).send();
            }
        })
    }
)

export default router