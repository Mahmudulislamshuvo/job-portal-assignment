import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  // 1. Define Tag Types (Labels for your data)
  tagTypes: ["User"],

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API,
    // 2. Auto-attach Token
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => "/users/profile",
      providesTags: ["User"],
    }),

    // PUT: Update User Data (Invalidates the 'User' tag)
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/users/profile",
        method: "PUT",
        body: data,
      }),
      // This forces 'getUserProfile' to re-fetch automatically!
      invalidatesTags: ["User"],
    }),
  }),
});

// Export hooks for usage in components
export const { useGetUserProfileQuery, useUpdateProfileMutation } = apiSlice;
