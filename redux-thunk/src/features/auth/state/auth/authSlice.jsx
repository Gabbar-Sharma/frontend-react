import { createSlice } from "@reduxjs/toolkit";
import { authUserAction, hydrateUser } from "./authAction";

const authSlice = createSlice({
    name: "auth",

    initialState: {
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
    },

    reducers: {
        removeUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("accessToken");
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(authUserAction.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })

            .addCase(authUserAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })

            .addCase(authUserAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(hydrateUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(hydrateUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = Boolean(action.payload);
            })
            .addCase(hydrateUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { removeUser } = authSlice.actions;

export default authSlice.reducer;