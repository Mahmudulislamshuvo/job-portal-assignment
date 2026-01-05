import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_API,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("Token");
    if (token) headers.set("authorization", `Bearer ${token}`);
    return headers;
  },
});

// 401 (Unauthorized)
const baseQueryWithLogout = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    localStorage.clear();
    window.location.href = "/login";
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["User"],

  // ৩. এখানে সরাসরি fetchBaseQuery না দিয়ে আমাদের 'baseQueryWithLogout' দিলাম
  baseQuery: baseQueryWithLogout,

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    // আপনার কমেন্ট করা কোডগুলো আনকমেন্ট করলে কাজ করবে
    // updateProfile: builder.mutation({
    //   query: (data) => ({
    //     url: "/users/profile",
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["User"],
    // }),
  }),
});

export const { useLoginMutation } = apiSlice;
