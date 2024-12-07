import {
    commonServiceService,
    createServiceService,
    deleteServiceService, getOneServiceService,
    getServiceService,
    updateServiceService
} from "../services/service-service.js";

export const createService = async (req, res) => {
    await createServiceService(req, res);
}
export const getService = async (req, res) => {
    await getServiceService(req, res);
}
export const getOneService = async (req, res) => {
    await getOneServiceService(req, res);
}
export const deleteService = async (req, res) => {
    await deleteServiceService(req, res);
}

export const updateService = async (req, res) => {
    await updateServiceService(req, res);
}

export const commonService = async (req, res) => {
    await commonServiceService(req, res);
}