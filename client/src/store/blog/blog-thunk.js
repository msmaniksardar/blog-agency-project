import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/network-utils.js";


export const commonBlogRequest = createAsyncThunk("data/commonBlogRequest",
    async () => {
    const response = await axios.get(`${BASE_URL}/common-blog`,);
    return response.data;
})


export const createBlogRequest = createAsyncThunk("data/createBlogRequest", async (reqBody, {rejectWithValue}) => {
    try {
        const response = await axios.post(`${BASE_URL}/create-blog`, reqBody, {
            headers: {
                "Content-Type": "multipart/form-data",
                token: localStorage.getItem("token"),
            }
        });
        return response.data;
    } catch (error) {
        if (error.status === 401) {
            localStorage.clear();
            window.location.href = '/login';
        }
        console.log(error);
        return rejectWithValue(error.message);
    }
})


export const showBlogsRequest = createAsyncThunk("data/showBlogsRequest", async (_, {rejectWithValue}) => {
    try {
        const response = await axios.get(`${BASE_URL}/blogs`, {
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token"),
            }
        });
        return response.data.data;

    } catch (error) {
        if (error.response.status === 401) {
            localStorage.clear();
            window.location.href = '/login';
        }
        console.log(error);
        return rejectWithValue(error.message);
    }
})


export const  showBlogRequest = createAsyncThunk("data/showBlogRequest", async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/blog/${id}`, {
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token"),
            }
        });
        return response.data.data;
    }catch(error) {
        if (error.response.status === 401) {
            localStorage.clear();
            window.location.href = '/login';
        }
        console.log(error);
    }
})

export const  updateBlogRequest = createAsyncThunk("data/updateBlogRequest", async (reqBody) => {
    try {
        const response = await axios.post(`${BASE_URL}/update-blog`, reqBody ,  {
            headers: {
                "Content-Type": "multipart/form-data",
                token: localStorage.getItem("token"),
            }
        });
        return response.data;
    }catch(error) {
        if (error.response.status === 401) {
            localStorage.clear();
            window.location.href = '/login';
        }
        console.log(error);
    }
})



export const  deleteBlogRequest = createAsyncThunk("data/deleteBlogRequest", async (id) => {
    try {
        const response = await axios.post(`${BASE_URL}/delete-blog/${id}` ,{},{
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token"),
            }
        });
        return response.data;
    }catch(error) {
        if (error.response.status === 401) {
            localStorage.clear();
            window.location.href = '/login';
        }
        console.log(error);
    }
})

