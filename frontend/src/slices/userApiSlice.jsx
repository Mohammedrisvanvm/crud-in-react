import { apiSlice } from "./apiSlice";
const USER_URL='/users'


export const userApiSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=> ({
        login:builder.mutation({
            query:(data)=>({
                url:`${USER_URL}/auth`,
                method: 'POST',
                body:data,
            })
        }),
        logout:builder.mutation({
            query:(data)=>({
                url:`${USER_URL}/logout`,
                method: 'POST',
                body:data,
            })
        }),
        register:builder.mutation({
            query:(data)=>({
                url:`${USER_URL}`,
                method: 'POST',
                body:data,
            })
        }),
    })
})

export const {useLoginMutation,useLogoutMutation,useRegisterMutation}=userApiSlice