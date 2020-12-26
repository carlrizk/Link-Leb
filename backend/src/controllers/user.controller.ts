import express from "express"
import User from "../schemas/user.schema"


const router = express.Router()

router.post('/', async (req, res) => {
    const user = new User({ username: "carl", password: "1234" })
    res.send(await user.save())
})

export default router