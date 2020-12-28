import express from "express"
import { CallbackError } from "mongoose"
import passport from "passport"
import Mapper from "../mapper"
import { UserModel } from "../schemas/user.schema"


const router = express.Router()

router.get(':userId', passport.authenticate("local"), (req, res) => {
    UserModel.findById(req.params.userId)
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
})

router.post('/', async (req, res) => {
    const user = new UserModel({ username: "carl", password: "1234" })
    res.send(await user.save())
})

export default router