import express from "express"
import { CallbackError } from "mongoose"
import passport from "passport"
import Mapper from "../mapper"
import { UserModel } from "../schemas/user.schema"


const router = express.Router()


router.get('/:userId', passport.authenticate("local"), (req, res) => {
    UserModel.findById(req.params.userId)
        .populate('bookmarkedRequests')
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

router.post('/:userId/bookmark', passport.authenticate('local'), (req, res) => {
    UserModel.findById(req.params.userId)
        .exec((err: CallbackError, user) => {
            if (err) {
                console.error(err)
                res.status(500).send();
            }
            else if (user != null) {
                if (user.bookmarkedRequests.indexOf(req.body.requestId) == -1) {
                    user.bookmarkedRequests.push(req.body.requestId)
                    user.save((err, user) => {
                        if (err) {
                            console.error(err)
                            res.status(500).send();
                        }
                        else if (user != null) {
                            res.send();
                        } else {
                            res.status(500).send();
                        }
                    })
                } else {
                    res.send();
                }
            } else {
                res.status(404).send();
            }
        })
})

router.post('/:userId/unbookmark', passport.authenticate('local'), (req, res) => {
    UserModel.findById(req.params.userId)
        .exec((err: CallbackError, user) => {
            if (err) {
                console.error(err)
                res.status(500).send();
            }
            else if (user != null) {
                let index = user.bookmarkedRequests.indexOf(req.body.requestId);
                if (index !== -1) {
                    user.bookmarkedRequests.splice(index, 1);
                    user.save((err, user) => {
                        if (err) {
                            console.error(err)
                            res.status(500).send();
                        }
                        else if (user != null) {
                            res.send();
                        } else {
                            res.status(500).send();
                        }
                    })
                } else {
                    res.send()
                }
            } else {
                res.status(404).send();
            }
        })
})


export default router