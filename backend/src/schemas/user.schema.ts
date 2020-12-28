import { Schema, Document, model } from "mongoose"
import { IconSchema, IIcon } from "./icon.schema"

interface ISocialMedia {
    socialMediaType: ISocialMediaType;
    url: string;
}

interface ISocialMediaType extends Document {
    name: string;
    icon: IIcon;
}

const SocialMediaTypeSchema = new Schema({
    name: String,
    icon: IconSchema
})

interface IUser extends Document {
    username: string;
    password: string;
    description: string;
    displayName: string,
    avatar: string,
    socialMedias: ISocialMedia[];
}

const UserSchema = new Schema({
    username: String,
    password: String,
    description: String,
    displayName: String,
    avatar: String,
    socialMedias: [{
        socialMediaType: {
            type: Schema.Types.ObjectId,
            ref: "SocialMediaType"
        },
        url: String,
    }]
})

const UserModel = model<IUser>("User", UserSchema, "User")
const SocialMediaTypeModel = model<ISocialMediaType>("SocialMediaType", SocialMediaTypeSchema, "SocialMediaType")


export { IUser, ISocialMedia, ISocialMediaType, UserModel, SocialMediaTypeModel }
