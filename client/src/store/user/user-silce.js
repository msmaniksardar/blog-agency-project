import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {loginRequest} from "./user-thunk.js";





const initialState = {
    isLoading: false, data: [], isError: null,
}
const userSlice = createSlice({
    name: 'serviceSlice', initialState, reducers: {}, extraReducers: (builder) => {
        // builder.addCase(loginRequest.fulfilled, (state, action) => {
        //     state.isLoading = false;
        // });
        builder.addMatcher((action) => action.type.endsWith("/pending"), (state, action) => {
            state.isLoading = true;
        });
        builder.addMatcher((action) => action.type.endsWith('/rejected'), // Match any action ending in /rejected
            (state, action) => {
                state.isLoading = false;
                state.isError = action.payload || action.error.message; // Handle error message
            });
    },
})


export const {} = userSlice.actions;
export default userSlice.reducer