import { Schema, Document, model } from "mongoose"


interface INeed {
    needType: INeedType;
    url: string;
}

interface INeedType extends Document {
    name: string;
}

const NeedTypeSchema = new Schema({
    name: String
})

interface IRequest extends Document {
    firstName: String,
    lastName: String,
    motherName: String,
    fatherName: String,
    gender: String,
    dateOfBirth: Date,
    telNumber : String,
    area: String,
    dateOfSubmit: Date,
    Needs:INeed[];
}
const RequestSchema = new Schema({
    firstName: String,
    lastName: String,
    motherName: String,
    fatherName: String,
    gender: String,
    dateOfBirth: Date,
    telNumber : String,
    area: String,
    dateOfSubmit: Date,
    Needs:[{
        type:Schema.Types.ObjectId,
        comment: String
    }]
})

const RequestModel = model<IRequest>("Request", RequestSchema, "Request")
const NeedTypeModel = model<INeedType>("NeedType", NeedTypeSchema, "NeedType")


export { IRequest, INeed, INeedType, RequestModel, NeedTypeModel }