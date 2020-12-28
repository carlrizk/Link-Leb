import express from "express"
import { CallbackError } from "mongoose"
import Mapper from "../mapper"
import {RequestModel} from "../schemas/request.schema"

const router = express.Router()

router.get('/:requestId', (req, res) => {
    RequestModel.findById(req.params.requestId)
        .populate("needs.needType")
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


router.post('/', async (req, res) => {
    const request = new RequestModel(
        {firstName: "Rola",
        lastName: "Hadi",
        motherName: "Ghazwa",
        fatherName:"Talal",
        gender: "Female",
        dateOfBirth: new Date(),
        telNumber : "70471512",
        area: "Beirut",
        dateOfSubmit: new Date(),
        Needs:[{
            type:{name: "Medication"},
            comment: "Antibiotique"
        }, {type:{name: "Other"},
            comment: "Milk for Kids"}]
        })
    res.send(await request.save())
})

export default router