import {createContactServices, deleteContactService, getContactsService} from "../services/contact-service.js";


export const createContact = async (req, res) => {
    await createContactServices(req, res);
}

export const getContacts = async (req, res) => {
    await getContactsService(req, res);
}

export const deleteContact = async (req, res) => {
    await deleteContactService(req, res);
}