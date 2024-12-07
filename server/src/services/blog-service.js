import blogModel from "../models/blog-model.js";
import {
    cloudinaryPublicId,
    uploadToCloudinary
} from "../helper/cloudinary-helper.js";

import {v2 as cloudinary} from "cloudinary";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;


export const createBlogService = async (req, res) => {
    try {
        const reqBody = req.body;
        reqBody.userId = req.headers.user._id;
        const cloudinaryResponse = await uploadToCloudinary(req.file.path, "blog-project/blog");
        reqBody.image = cloudinaryResponse.secureUrl;
        const data = await blogModel.create(reqBody);
        return res.status(201).json({
            status: 'success',
            message: 'Successfully created blog service',
            data: data,
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({status: "fail", message: "Server error", error: err.message});
    }
}
export const getBlogsService = async (req, res) => {
    try {
       // const userId = req.headers.user._id;
        const matchStage = {$match:{}};
        const joinWithUser = {$lookup:{from:"users" , localField:"userId" , foreignField:"_id" , as:"user"}};
        const unWindStage = {$unwind:"$user"}
        const blogs = await blogModel.aggregate([matchStage , joinWithUser, unWindStage]);

        return res.status(200).json({status: "success", data: blogs});
    } catch (err) {
        return res.status(500).json({status: "error", message: "Server error", error: err.message});
    }
}
export const getBlogService = async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);
       // const userId = req.headers.user._id;
        const matchStage = {$match:{_id:id}};
        const joinWithUser = {$lookup:{from:"users" , localField:"userId" , foreignField:"_id" , as:"user"}};
        const unWindUser = {$unwind:"$user"}
        const unWindBlog = {$unwind:"$data"}

        const blog = await blogModel.aggregate([matchStage,joinWithUser,unWindUser]); // userId: userId
        return res.status(200).json({status: "success", data: blog[0]});
    } catch (err) {
        return res.status(500).json({status: "error", message: "Server error", error: err.message});
    }
}
export const deleteBlogService = async (req, res) => {
    try {
        const reqParams = req.params;
       // const userId = req.headers.user._id;
        const find = await blogModel.findOne({_id: reqParams.id}); // userId: userId
        const publicId = await cloudinaryPublicId(find.image);
        await cloudinary.uploader.destroy(`blog-project/blog/${publicId}`);
        const blog = await blogModel.deleteOne({_id: reqParams.id}); //userId: userId
        if (!blog) {
            return res.status(404).json({status: "fail"});
        }
        return res.status(200).json({status: "success", message: "Successfully deleted blog service"});
    } catch (err) {
        return res.status(500).json({status: "error", message: "Server error", error: err.message});
    }
}
export const updateBlogService = async (req, res) => {
    try {
      //  const userId = req.headers.user._id;
        const reqBody = req.body;
        const find = await blogModel.findOne({_id: reqBody.blogId}); // , userId: userId
        const publicId = await cloudinaryPublicId(find.image);
        if (req.file) {
            await cloudinary.uploader.destroy(`blog-project/blog/${publicId}`);
            const cloudinaryResponse = await uploadToCloudinary(req.file.path, "blog-project/blog");
            reqBody.image = cloudinaryResponse.secureUrl;
        }
        const data = await blogModel.findByIdAndUpdate({ _id: reqBody.blogId}, reqBody, {new: true})
        return res.status(200).json({status: "success", data: data});
    } catch (err) {
        return res.status(500).json({status: "error", message: "Server error", error: err.message});
    }
}
export const commonBlogService = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Get the page number, default to 1
        const limit = parseInt(req.query.limit) || 8; // Get the limit per page, default to 10

        const totalDocument = await blogModel.countDocuments();
        const totalPage = Math.ceil(totalDocument / limit);
        const skip = (page - 1) * limit;


        const nextPage = page < totalPage ? page + 1 : null;
        const previousPage = page > 1 ? page - 1 : null;

        // Aggregation to fetch data with pagination
        const data = await blogModel.aggregate([
            { $match: {} },
            { $skip: skip },
            { $limit: limit },
        ]);

        return res.status(200).json({
            status: "success",
            data: data,
            pagination: {
                currentPage: page,
                totalPage: totalPage,
                nextPage: nextPage,
                previousPage: previousPage,
                totalCount: totalDocument, // Include total count for reference
            },
        });
    } catch (err) {
        return res.status(500).json({status: "fail", message: err.message});
    }
}