import  mongoose from 'mongoose';

const NeedType = new mongoose.Schema({
    name: String,
})

export default mongoose.model("NeedType", NeedType, "NeedType")