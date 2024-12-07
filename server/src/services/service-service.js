import serviceModel from "../models/service-model.js";
import mongoose from "mongoose";

let ObjectId = mongoose.Types.ObjectId;
export const createServiceService = async (req, res) => {
    try {
        const reqBody = req.body;
        reqBody.userId = req.headers.user._id;
        const data = await serviceModel.create(reqBody);
        return res.status(201).json({status: 'success', data: data});
    } catch (err) {
        return res.status(500).json({status: "fail", message: err.message});
    }
}
export const getServiceService = async (req, res) => {
    try {
        const matchStage = {$match:{}};
        const joinWithUser = {$lookup:{from:"users" , localField:"userId" , foreignField:"_id" , as:"user"}};
        const unWindStage = {$unwind:"$user"}

        const data = await serviceModel.aggregate([matchStage , joinWithUser, unWindStage]);
        return res.status(200).json({status: "success", data: data});
    } catch (err) {
        return res.status(500).json({status: "fail", message: err.message});
    }
}
export  const getOneServiceService = async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);
        const matchStage = {$match:{_id:id}};
        const joinWithUser = {$lookup:{from:"users" , localField:"userId" , foreignField:"_id" , as:"user"}};
        const unWindStage = {$unwind:"$user"}

        const data = await serviceModel.aggregate([matchStage , joinWithUser, unWindStage]);
        return res.status(200).json({status: "success", data: data[0]});
    } catch (err) {
        return res.status(500).json({status: "fail", message: err.message});
    }
}
export const deleteServiceService = async (req, res) => {
    try {
        await serviceModel.findByIdAndDelete({_id: req.params.id});
        return res.status(200).json({status: "success", message: "service deleted successfully"});
    } catch (err) {
        return res.status(500).json({status: "fail", message: err.message});
    }
}
export const updateServiceService = async (req, res) => {
    try {
        const reqBody = req.body;
        const data = await serviceModel.findByIdAndUpdate({_id: reqBody.serviceId}, reqBody, {new: true})
        return res.status(200).json({status: "success", data: data});
    } catch (err) {
        return res.status(500).json({status: "fail", message: err.message});
    }
}
export const commonServiceService = async (req, res) => {
    try {
        const data = await  serviceModel.find();
        return res.status(200).json({status: "success", data: data});
    }catch(err) {
        return res.status(500).json({status: "fail", message: err.message});
    }
}