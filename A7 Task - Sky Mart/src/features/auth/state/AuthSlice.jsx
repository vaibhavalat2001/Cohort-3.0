import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("loggedUser")),
    authentication: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.authentication = true;
      localStorage.setItem("loggedUser", JSON.stringify(state.user))
    },

    removeUser: (state) => {
      state.user = null;
      state.authentication = false;
      localStorage.removeItem("loggedUser");
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
