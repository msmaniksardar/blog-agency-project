import {v2 as cloudinary} from 'cloudinary';
import {API_KEY, API_SECRET_KEY, CLOUD_NAME} from "../config/config.js";
import req from "express/lib/request.js";
import path from "path";

export const cloudinaryHelper = cloudinary.config({
    cloud_name: CLOUD_NAME, api_key: API_KEY, api_secret: API_SECRET_KEY // Click 'View API Keys' above to copy your API secret
});

export const uploadToCloudinary = async (fileName, folderName = "Default-folder") => {

    try {
        const cloudinaryResponse = await cloudinary.uploader.upload(fileName, {
            folder: folderName,
        })
       return {
            secureUrl: cloudinaryResponse.secure_url,
            publicId: cloudinaryResponse.public_id,

       }
    } catch (err) {
        console.error(err);
        console.log("failed to upload image")
    }
}

export const cloudinaryPublicId  = async (imageUrl) => {
    try {
        const split = imageUrl.split("/");
        const publicId = split[split.length - 1];
        return path.parse(publicId).name;

    }catch (err) {
        console.error( "Failed To delete file from cloudinary ", err.message);
    }
}