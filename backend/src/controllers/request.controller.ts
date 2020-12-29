import express from "express"
import { CallbackError } from "mongoose"
import passport from "passport"
import { SubmitRequestDto } from "../../../shared/dto/request.dto"
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
                res.send(requests.map(request => Mapper.MapRequest(request)));
            } else {
                res.status(404).send();
            }
        })
})

router.post('/', (req, res) => {
    const request: SubmitRequestDto = req.body;
    const requestModel = new RequestModel(Mapper.MapRequestFromDto(request));
    requestModel.save((err: CallbackError, result) => {
        if (err) {
            console.log(err)
            res.status(500).send();
        } else if (result == null) {
            res.status(500).send();
        } else {
            res.send();
        }
    })
});


export default router