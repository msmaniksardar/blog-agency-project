import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/network-utils.js";

export const commonTeamRequest = createAsyncThunk("data/commonTeamRequest", async () => {
    const response = await axios.get(`${BASE_URL}/common-team`,);
    return response.data.data;
})


export const createTeamRequest = createAsyncThunk("data/createTeamRequest", async (reqBody) => {
    try {
        const response = await axios.post(`${BASE_URL}/create-team`, reqBody, {
            headers: {
                "Content-Type": "multipart/form-data", token: localStorage.getItem("token"),
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

export const showTeamsRequest = createAsyncThunk("data/showTeamsRequest", async (reqBody) => {
    try {
        const response = await axios.get(`${BASE_URL}/teams`, {
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


export const updateTeamRequest = createAsyncThunk("data/updateTeamRequest",
    async (reqBody) => {
        try {
            const response = await axios.post(`${BASE_URL}/update-team`, reqBody, {
                headers: {
                    "Content-Type": "multipart/form-data", token: localStorage.getItem("token"),
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

export const showTeamRequest = createAsyncThunk("data/showTeamRequest",
    async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/team/${id}`, {
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


export const deleteTeamRequest = createAsyncThunk("data/deleteTeamRequest",
    async (id) => {
        try {
            const response = await axios.post(`${BASE_URL}/delete-team/${id}`,{}, {
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
