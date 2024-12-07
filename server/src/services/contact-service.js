import contactModel from "../models/contact-model.js";

export const createContactServices = async (req, res) => {
    try {
        const reqBody = req.body;
        const data = await contactModel.create(reqBody);
        return res.status(200).json({
            status: 'success', message: 'Successfully created blog service', data: data,
        })
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: 'Error occurred while saving contact',
            error: err.message || "INTERNAL SERVER ERROR"
        });
    }
}

export const getContactsService = async (req, res) => {
    try {

        const data = await contactModel.find();
        return res.status(200).json({status: 'success', data: data});
    } catch (error) {
        return res.status(500).json({status: "error", message: "Server error", error: error.message});
    }
}

export const deleteContactService = async (req, res) => {
    try {
        const reqParams = req.params;
        const data = await contactModel.findByIdAndDelete({_id: reqParams.id });
        return res.status(200).json({status: 'success', message: 'Successfully deleted contact'});
    } catch (err) {
        return res.status(500).json({status: "fail", message: err.message});
    }
}