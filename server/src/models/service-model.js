import mongoose from 'mongoose'


const serviceSchema = new mongoose.Schema({
    title: {type: String, required: true}, subTitle: {type: String, required: true},userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true, versionKey: false})


const serviceModel =  mongoose.model('Service', serviceSchema)

export default serviceModel