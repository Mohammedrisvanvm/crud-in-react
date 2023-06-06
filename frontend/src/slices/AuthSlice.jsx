import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};
const initialState2 = {
  userInfo: localStorage.getItem("adimininfo")
    ? JSON.parse(localStorage.getItem("admininfo"))
    : null,
};
const Authslice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials:(state,action)=>{
            state.userInfo=action.payload;
            localStorage.setItem('userinfo',JSON.stringify(action.payload))
        },
        logout:(state,action)=>{
            state.userInfo=null
            localStorage.removeItem('userinfo')
        }
    }
})
const AdminAuthslice=createSlice({
    name:'adminAuth',
    initialState2,
    reducers:{
        AdminsetCredentials:(state,action)=>{
            state.adminInfo=action.payload;
            localStorage.setItem('admininfo',JSON.stringify(action.payload))
        },
        Adminlogout:(state,action)=>{
            state.adminInfo=null
            localStorage.removeItem('admininfo')
        }
    }
})

export const {AdminsetCredentials,Adminlogout}=AdminAuthslice.actions
export const {setCredentials,logout}= Authslice.actions

export default Authslice.reducer