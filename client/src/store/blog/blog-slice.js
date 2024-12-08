import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import {commonBlogRequest, showBlogRequest, showBlogsRequest} from "./blog-thunk.js";

const initialState = {
    isLoading: false, commonBlogs: [], blog: [], blogList: [], isError: null,
};

const blogSlice = createSlice({
    name: 'blogSlice', initialState, reducers: {
        resetState: (state) => {
            state.isError = null;
        },

    }, // Add your synchronous reducers here if needed
    extraReducers: (builder) => {
        builder
            .addCase(commonBlogRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.commonBlogs = action.payload; // Ensure it's an array
                state.isError = null; // Clear any previous errors
            }).addCase(showBlogsRequest.fulfilled, (state, action) => {
            state.isLoading = false;
            state.blogList = action.payload; // Ensure it's an array
            state.isError = null; // Clear any previous errors
        }).addCase(showBlogRequest.fulfilled, (state, action) => {
            state.isLoading = false;
            state.blog = action.payload; // Ensure it's an array
            state.isError = null; // Clear any previous errors
        })
            .addMatcher((action) => action.type.endsWith("/pending"), (state) => {
                state.isLoading = true;
            })
            .addMatcher((action) => action.type.endsWith("/rejected"), (state, action) => {
                state.isLoading = false;
                state.isError = action.payload?.message || action.error?.message || "An error occurred."; // Default error message
            });
    },
});

export const {resetState} = blogSlice.actions;

export default blogSlice.reducer;
