import express from "express"
import { CallbackError } from "mongoose"
import Mapper from "../mapper"
import { ISocialMediaType, SocialMediaTypeModel } from "../schemas/user.schema"

const router = express.Router()

router.get('/', (req, res) => {
    SocialMediaTypeModel.find()
        .exec((err: CallbackError, socialMediaTypes: ISocialMediaType[]) => {
            if (err) {
                console.error(err)
                res.status(500).send();
            }
            if (socialMediaTypes != null) {
                res.send(Mapper.MapSocialMediaTypes(socialMediaTypes));
            } else {
                res.status(404).send();
            }
        })
})

export default router