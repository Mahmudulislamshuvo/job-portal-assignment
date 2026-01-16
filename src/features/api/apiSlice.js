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
  tagTypes: ["User", "application"],

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
          params: cleanParams,
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
      providesTags: ["User"],
    }),

    UploadProfilePic: builder.mutation({
      query: (data) => ({
        url: "/users/profile-picture",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    UploadResume: builder.mutation({
      query: (data) => ({
        url: "/users/resume",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/users/profile",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    AppliedJobs: builder.query({
      query: (params = {}) => {
        const cleanParams = Object.fromEntries(
          // eslint-disable-next-line no-unused-vars
          Object.entries(params).filter(([_, v]) => v != null && v !== "")
        );

        return {
          url: "/applications/my-applications",
          params: cleanParams, // RTK Query অটোমেটিকালি এগুলোকে কুয়েরি স্ট্রিং এ কনভার্ট করবে (যেমন: ?page=1&search=css)
        };
      },
      providesTags: ["application"],
    }),

    GetUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
      }),
    }),

    DeleteMyJobApplication: builder.mutation({
      query: (id) => ({
        url: `/applications/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["application"],
    }),

    // Company
    GetComanyProfile: builder.query({
      query: () => ({
        url: "/companies/profile",
      }),
    }),
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
  useUploadResumeMutation,
  useUploadProfilePicMutation,
  useUpdateProfileMutation,
  useAppliedJobsQuery,
  useGetUserByIdQuery,
  useDeleteMyJobApplicationMutation,
  useGetComanyProfileQuery,
} = apiSlice;
