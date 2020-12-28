import express from "express"
import Request from "../schemas/request.schema"

const router = express.Router()

router.post('/request', async (req, res) => {
    const request = new Request(
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