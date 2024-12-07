import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    name:{type:String,required: true},
    email:{type:String,required: true},
    message:{type:String,required: true},
    userId:{type:mongoose.Schema.Types.ObjectId, ref:'User'},

}, { timestamps: true ,versionKey:false})

const contactModel =  mongoose.model("contact", contactSchema);

export default contactModel;