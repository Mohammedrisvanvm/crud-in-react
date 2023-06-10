import { apiSlice } from "./apiSlice";
const USER_URL='/users'
const ADMIN_URL='/admin'


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
        userUpdate:builder.mutation({
            query:(data)=>({
                url:`${ADMIN_URL}/profile`,
                method: 'PUT',
                body:data,
            })
        }),
        userProfileUpdate:builder.mutation({
            query:(data)=>({
                url:`${ADMIN_URL}/editProfile`,
                method: 'PUT',
                body:data,
            })
        }),
    })
})

export const {useLoginMutation,useLogoutMutation,useRegisterMutation,useUserUpdateMutation,useUserProfileUpdateMutation}=userApiSlice