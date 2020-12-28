import { Schema } from "mongoose"

interface IIcon {
    prefix: string;
    iconName: string;
}

const IconSchema = new Schema({
    prefix: String,
    iconName: String
})

export { IIcon, IconSchema }