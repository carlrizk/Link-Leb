import express from "express"
import { CallbackError } from "mongoose"
import Mapper from "../mapper"
import { INeedType, NeedTypeModel } from "../schemas/request.schema"

const router = express.Router()

router.get('/', (req, res) => {
    NeedTypeModel.find()
        .exec((err: CallbackError, needTypes: INeedType[]) => {
            if (err) {
                console.error(err)
                res.status(500).send();
            }
            if (needTypes != null) {
                res.send(needTypes.map(nt => Mapper.MapNeedType(nt)));
            } else {
                res.status(404).send();
            }
        })
})

export default router