import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    authentication: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload
      state.authentication = true;
    },

    removeUser: (state) => {
      ((state.user = null), (state.authentication = false));
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
