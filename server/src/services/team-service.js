import teamModel from "../models/team-model.js";
import {cloudinaryPublicId, uploadToCloudinary} from "../helper/cloudinary-helper.js";
import {v2 as cloudinary} from "cloudinary";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

export const createTeamService = async (req, res) => {
    try {
        const reqBody = req.body;
       reqBody.userId = req.headers.user._id;
        const cloudinaryResponse = await uploadToCloudinary(req.file.path, "blog-project/team");
        reqBody.image = cloudinaryResponse.secureUrl;
        const data = await  teamModel.create(reqBody);
        return res.status(200).json({
            status: 'success',
            message: 'Team Create successfully.',
            data:data
        })
    }catch(err) {
        return res.status(500).json({ status:"fail" ,  message: err.message});
    }
}
export  const getTeamServices = async (req, res) => {
    try {

        const matchStage = {$match:{}};
        const joinWithUser = {$lookup:{from:"users" , localField:"userId" , foreignField:"_id" , as:"user"}};
        const unWindStage = {$unwind:"$user"}
        const data = await  teamModel.aggregate([matchStage , joinWithUser, unWindStage]);
        return res.status(200).json({
            status: 'success',
            data:data
        })
    }catch(err) {
        return res.status(500).json({ status:"fail" ,  message: err.message});
    }
}
export const getOneTeamService = async (req, res) => {
    try {
        const id =  new ObjectId(req.params.id);
        const matchStage = {$match:{_id:id}};
        const joinWithUser = {$lookup:{from:"users" , localField:"userId" , foreignField:"_id" , as:"user"}};
        const unWindStage = {$unwind:"$user"}
        const data = await teamModel.aggregate([matchStage , joinWithUser, unWindStage]);
        return res.status(200).json({status: 'success', data: data[0]});
    }catch(err) {
        return res.status(500).json({status: "fail", message: err.message});
    }
}
export  const deleteTeamService = async (req, res) => {
    try {

        const find = await teamModel.findOne({_id: req.params.id});
        const publicId = await cloudinaryPublicId(find.image);
        await cloudinary.uploader.destroy(`blog-project/team/${publicId}`);
        const data = await  teamModel.findByIdAndDelete({_id:req.params.id});
        return res.status(200).json({
            status: 'success',
            message: 'Team Service deleted successfully.'
        })
    }catch (error) {
        return res.status(500).json({ status:"fail" ,  message: error.message});
    }
}
export const updateTeamService = async (req, res) => {
    try {
        const reqBody = req.body;
        const find = await teamModel.findOne({_id: reqBody.teamId});
        const publicId = await cloudinaryPublicId(find.image);
        if (req.file) {
            await cloudinary.uploader.destroy(`blog-project/team/${publicId}`);
            const cloudinaryResponse = await uploadToCloudinary(req.file.path, "blog-project/team");
            reqBody.image = cloudinaryResponse.secureUrl;
        }
        const data = await teamModel.findByIdAndUpdate({ _id:reqBody.teamId } , reqBody , {new:true})
        return res.status(200).json({status: "success", data: data});
    }catch(err) {
        return res.status(500).json({status: "fail", message: err.message });
    }
}
export const commonTeamService = async (req, res) => {
    try {
        const data = await  teamModel.find();
        return res.status(200).json({status: "success", data: data});
    }catch(err) {
        return res.status(500).json({status: "fail", message: err.message});
    }
}