import mongoose from "mongoose"

const User = new mongoose.Schema({
    username: String,
    password: String,
    displayName: String,
    avatar: String
})

export default mongoose.model("User", User, "User")