import express from "express"
import { CallbackError } from "mongoose"
import passport from "passport"
import Mapper from "../mapper"
import { IRequest, RequestModel } from "../schemas/request.schema"

const router = express.Router()

router.get('/:requestId', passport.authenticate('local'), (req, res) => {
    RequestModel.findById(req.params.requestId)
        .exec((err: CallbackError, request) => {
            if (err) {
                console.error(err)
                res.status(500).send();
            }
            if (request != null) {
                res.send(Mapper.MapRequest(request));
            } else {
                res.status(404).send();
            }
        })
})

router.get('/', passport.authenticate('local'), (req, res) => {
    RequestModel.find()
        .exec((err: CallbackError, requests: IRequest[]) => {
            if (err) {
                console.error(err)
                res.status(500).send();
            }
            if (requests != null) {
                res.send(Mapper.MapRequests(requests));
            } else {
                res.status(404).send();
            }
        })
})


export default router