import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true , set:(value)=> bcrypt.hashSync(value, 10) },
    isAdmin: {type: Boolean, default: false},
}, {timestamps: true, versionKey: false})


const userModel = mongoose.model('user', userSchema);

export default userModel;