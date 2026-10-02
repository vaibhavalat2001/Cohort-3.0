import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/api";

export const loginUserAction = createAsyncThunk(
  "api/login",
  async (credentials, thunkApi) => {
    try {
      const res = await api.post("/auth/login", credentials);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue("login failed", error);
    }
  },
);

export const hydrateUserAction = createAsyncThunk(
  "auth/hydrate",
  async (_, thunkApi) => {
    try {
      const res = await api.post("/auth/refresh-token");
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue("hydrate error", error);
    }
  },
);

export const logoutUserAction = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      const res = await api.post("/auth/logout");
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue("logout error", error);
    }
  },
);
