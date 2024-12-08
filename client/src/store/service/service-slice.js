import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {commonServiceRequest, showServiceRequest, showServicesRequest} from "./service-thunk.js";

const initialState = {
    isLoading: false,
    commonService: [],
    serviceList:[],
    service:[],
    isError: null,
};

const serviceSlice = createSlice({
    name: 'serviceSlice', // Ensure name aligns with the slice's purpose
    initialState,
    reducers: {}, // Add synchronous reducers here if needed
    extraReducers: (builder) => {
        builder
            .addCase(commonServiceRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.commonService = action.payload || []; // Ensure it's always an array
                state.isError = null; // Clear any previous errors
            })
            .addCase(showServicesRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.serviceList = action.payload || []; // Ensure it's always an array
                state.isError = null; // Clear any previous errors
            })
            .addCase(showServiceRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.service = action.payload || []; // Ensure it's always an array
                state.isError = null; // Clear any previous errors
            })
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state) => {
                    state.isLoading = true;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action) => {
                    state.isLoading = false;
                    state.isError = action.payload?.message || action.error?.message || "An error occurred."; // Default error handling
                }
            );
    },
});

// No synchronous actions to export at the moment
export default serviceSlice.reducer;
