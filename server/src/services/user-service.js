import userModel from "../models/user-model.js";
import bcrypt from "bcryptjs";
import {tokenEncode} from "../utility/json-token.js";


export const userRegisterService = async (req, res) => {
    try {
        const reqBody = req.body;


        const existingUser = await userModel.findOne({email: reqBody.email});
        if (existingUser) {
            return res.status(200).json({status: "fail", message: "Email already exists!"});
        }


        const newUser = await userModel.create(reqBody);
        return res.status(201).json({status: "success", message:"Registration Successfully" ,  data: newUser});
    } catch (err) {
        console.error("Error in user registration:", err); // Log error for debugging
        return res.status(500).json({status: "error", message: "Server error", error: err.message});
    }
};
export const userLoginService = async (req, res) => {
    try {
        const reqBody = req.body;
        const user = await userModel.findOne({email: reqBody.email});
        if (!user) {
            return res.status(200).json({status: "fail", message: "User does not exist!"});
        }
        const matchPassword = await bcrypt.compare(reqBody.password, user.password);
        if (!matchPassword) {
            return res.status(200).json({status: "fail", message: "Please enter correct password!"});
        }
        const token = tokenEncode({user});
        return res.status(200).json({status: "success", message:"Login Successfully", token: token , data:user});
    } catch (err) {
        console.error("Error encoding login service:", err);
        return res.status(500).json({status: "error", message: "Server error", error: err.message});
    }
}
export const getAllUsersService = async (req, res) => {
    try {
        const data = await  userModel.find();
        return res.status(200).json({status: "success", data: data});
    } catch (err) {
        return res.status(500).json({
            status: "fail",
            message: err.message || "Failed To GetAll Users",
        })
    }
}