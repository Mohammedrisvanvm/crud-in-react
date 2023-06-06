import { createSlice } from "@reduxjs/toolkit";
const initialState2 = {
  userInfo: localStorage.getItem("adimininfo")
    ? JSON.parse(localStorage.getItem("admininfo"))
    : null,
};
const AdminAuthslice = createSlice({
  name: "adminAuth",
  initialState2,
  reducers: {
    AdminsetCredentials: (state, action) => {
      state.adminInfo = action.payload;
      localStorage.setItem("admininfo", JSON.stringify(action.payload));
    },
    Adminlogout: (state, action) => {
      state.adminInfo = null;
      localStorage.removeItem("admininfo");
    },
  },
});

export const { AdminsetCredentials, Adminlogout } = AdminAuthslice.actions;
