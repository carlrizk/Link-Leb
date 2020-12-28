import { Schema, Document, model } from "mongoose"


interface INeed {
    needType: INeedType;
    comment: string;
}

interface INeedType extends Document {
    name: string;
}

const NeedTypeSchema = new Schema({
    name: String
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
    dateOfSubmit: Date,
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