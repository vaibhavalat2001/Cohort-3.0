import { createSlice } from "@reduxjs/toolkit";
import {
  hydrateUserAction,
  loginUserAction,
  logoutUserAction,
} from "./authAction";
import { toast } from "react-toastify";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    isAuthenticated: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
        toast.success("user logging successfully", {
          closeOnClick: true,
          autoClose: 3000,
        });
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.isLoading = false;
        toast.warning("invalid email or password", {
          closeOnClick: true,
          autoClose: 3000,
        });
      })
      .addCase(hydrateUserAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(hydrateUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(hydrateUserAction.rejected, (state, action) => {
        state.isLoading = false;
        toast.error("unauthorized error", {
          closeOnClick: true,
          autoClose: 1000,
        });
      })
      .addCase(logoutUserAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logoutUserAction.fulfilled, (state, action) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
        toast.warning("Logout successfully", { closeOnClick: true });
      })
      .addCase(logoutUserAction.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
