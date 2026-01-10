import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_API,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
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

    Register: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),

    GetAllJobs: builder.query({
      query: (params = {}) => {
        const cleanParams = Object.fromEntries(
          // eslint-disable-next-line no-unused-vars
          Object.entries(params).filter(([_, v]) => v != null && v !== "")
        );

        return {
          url: "/jobs",
          params: cleanParams, // RTK Query অটোমেটিকালি এগুলোকে কুয়েরি স্ট্রিং এ কনভার্ট করবে (যেমন: ?page=1&search=css)
        };
      },
    }),

    GetJobRecomendation: builder.query({
      query: () => ({
        url: "/jobs/recommendations",
      }),
    }),

    JobApply: builder.mutation({
      query: ({ id, data }) => ({
        url: `/applications/jobs/${id}/apply`,
        method: "POST",
        body: data,
      }),
    }),

    GetSimilerJobs: builder.query({
      query: (id) => ({
        url: `/jobs/${id}/similar`,
      }),
    }),

    GetProfileInfo: builder.query({
      query: () => ({
        url: "/users/profile",
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

export const {
  useLoginMutation,
  useGetAllJobsQuery,
  useJobApplyMutation,
  useGetJobRecomendationQuery,
  useRegisterMutation,
  useGetSimilerJobsQuery,
  useGetProfileInfoQuery,
} = apiSlice;
