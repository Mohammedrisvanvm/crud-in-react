import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
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

export default Authslice.reducer