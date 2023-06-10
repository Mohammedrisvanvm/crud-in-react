import { apiSlice } from "./apiSlice";
const ADMIN_URL = "/admin";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/admin`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/admin/logout`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});
