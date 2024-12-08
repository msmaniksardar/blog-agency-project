import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {commonTeamRequest, showTeamRequest, showTeamsRequest} from "./team-thunk.js";

const initialState = {
    isLoading: false,
    commonTeam: [],
    teams: [],
    team: [],
    isError: null,
};

const teamSlice = createSlice({
    name: 'teamSlice', // Corrected slice name to match the functionality
    initialState,
    reducers: {}, // Add synchronous reducers if needed in the future
    extraReducers: (builder) => {
        builder
            .addCase(commonTeamRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.commonTeam = action.payload; // Ensure commonTeam is always an array
                state.isError = null; // Clear any existing error
            }).addCase(showTeamRequest.fulfilled, (state, action) => {
            state.isLoading = false;
            state.team = action.payload; // Ensure commonTeam is always an array
            state.isError = null; // Clear any existing error
        })
            .addCase(showTeamsRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.teams = action.payload; // Ensure commonTeam is always an array
                state.isError = null; // Clear any existing error
            })
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state) => {
                    state.isLoading = true;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.isLoading = false;
                    state.isError = action.payload?.message || action.error?.message || "An error occurred."; // Fallback error message
                }
            );
    },
});

// No synchronous actions to export as of now
// Only add `export const {}` if you define reducers in the future

export default teamSlice.reducer;
