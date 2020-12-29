import { Schema, Document, model } from "mongoose"
import { IconSchema, IIcon } from "./icon.schema"


interface INeed {
    needType: string;
    comment: string;
}

interface INeedType extends Document {
    id: string;
    name: string;
    icon: IIcon
}

const NeedTypeSchema = new Schema({
    name: String,
    icon: IconSchema
})

interface IRequest extends Document {
    firstName: string,
    lastName: string,
    motherName: string,
    fatherName: string,
    gender: string,
    dateOfBirth: Date,
    telNumber: string,
    area: string,
    address: string,
    dateOfSubmit: string,
    needs: INeed[];
}
const RequestSchema = new Schema({
    firstName: String,
    lastName: String,
    motherName: String,
    fatherName: String,
    gender: String,
    dateOfBirth: Date,
    telNumber: String,
    area: String,
    address: String,
    dateOfSubmit: Date,
    needs: [{
        needType: {
            type: Schema.Types.ObjectId,
            ref: "NeedType"
        },
        comment: String
    }]
})

const RequestModel = model<IRequest>("Request", RequestSchema, "Request")
const NeedTypeModel = model<INeedType>("NeedType", NeedTypeSchema, "NeedType")


export { IRequest, INeed, INeedType, RequestModel, NeedTypeModel }