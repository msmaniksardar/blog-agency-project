import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/network-utils.js";

export const commonServiceRequest = createAsyncThunk("data/commonServiceRequest", async () => {
    const response = await axios.get(`${BASE_URL}/common-service`,);
    return response.data.data;
})




export const createServiceRequest = createAsyncThunk("data/createServiceRequest",
    async (reqBody) => {
    try {
        const response = await axios.post(`${BASE_URL}/create-service`, reqBody, {
            headers: {
                "Content-Type": "application/json", token: localStorage.getItem("token"),
            }
        });
        return response.data;
    } catch (error) {
        if (error.response.status === 401) {
            localStorage.clear();
            window.location.href = '/login';
        }
        console.log(error);
    }
})

export const showServicesRequest = createAsyncThunk("data/showServicesRequest",
    async (reqBody) => {
    try {
        const response = await axios.get(`${BASE_URL}/services`, {
            headers: {
                "Content-Type": "application/json", token: localStorage.getItem("token"),
            }
        });
        return response.data.data;
    } catch (error) {
        if (error.response.status === 401) {
            localStorage.clear();
            window.location.href = '/login';
        }
        console.log(error);
    }
})


export const updateServiceRequest = createAsyncThunk("data/updateServiceRequest",
    async (reqBody) => {
        try {
            const response = await axios.post(`${BASE_URL}/update-service`, reqBody, {
                headers: {
                    "Content-Type": "application/json", token: localStorage.getItem("token"),
                }
            });
            return response.data;
        } catch (error) {
            if (error.response.status === 401) {
                localStorage.clear();
                window.location.href = '/login';
            }
            console.log(error);
        }
    })

export const showServiceRequest = createAsyncThunk("data/showServiceRequest",
    async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/service/${id}`, {
                headers: {
                    "Content-Type": "application/json", token: localStorage.getItem("token"),
                }
            });
            return response.data.data;
        } catch (error) {
            if (error.response.status === 401) {
                localStorage.clear();
                window.location.href = '/login';
            }
            console.log(error);
        }
    })


export const deleteServiceRequest = createAsyncThunk("data/deleteServiceRequest",
    async (id) => {
        try {
            const response = await axios.post(`${BASE_URL}/delete-service/${id}`,{}, {
                headers: {
                    "Content-Type": "application/json", token: localStorage.getItem("token"),
                }
            });
            return response.data;
        } catch (error) {
            if (error.response.status === 401) {
                localStorage.clear();
                window.location.href = '/login';
            }
            console.log(error);
        }
    })
