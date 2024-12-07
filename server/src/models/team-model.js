import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
    name: {type: String, required: true},
    role: {type: String, required: true},
    image: {type: String,  default: 'https://placehold.co/600x400'},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

} , {timestamps: true , versionKey:false})


const teamModel = new mongoose.model('team', teamSchema);

export default teamModel;