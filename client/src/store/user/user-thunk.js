import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/network-utils.js";


export const registerRequest = async (reqBody) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, reqBody);
        return response.data;
    }catch(error) {
        console.log(error);
    }

}

export const loginRequest = async (reqBody) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, reqBody);
        return response.data;
    }catch(error) {
        console.log(error);
    }

}
