import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    subtitle: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String,  default: 'https://placehold.co/600x400'},
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true},

} , {timestamps: true , versionKey:false})


const blogModel = new mongoose.model('blog', blogSchema);

export default blogModel;