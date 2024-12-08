import blogSlice from "./store/blog/blog-slice.js";
import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from "./store/service/service-slice.js";
import teamSlice from "./store/team/team-slice.js";

const store = configureStore({
    reducer: {
        blogReducer: blogSlice,
        serviceReducer: serviceSlice,
        teamReducer: teamSlice,
    },
});

export default store;
