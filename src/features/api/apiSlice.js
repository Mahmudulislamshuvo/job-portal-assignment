import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Upload } from "lucide-react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_API,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) headers.set("authorization", `Bearer ${token}`);
    return headers;
  },
});

// 401 (Unauthorized) Handling
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

  tagTypes: ["User", "Application", "Applicants", "Jobs", "Company"],

  baseQuery: baseQueryWithLogout,

  endpoints: (builder) => ({
    //Auth
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

    // --- Jobs (Public) ---
    GetAllJobs: builder.query({
      query: (params = {}) => {
        const cleanParams = Object.fromEntries(
          // eslint-disable-next-line no-unused-vars
          Object.entries(params).filter(([_, v]) => v != null && v !== ""),
        );
        return {
          url: "/jobs",
          params: cleanParams,
        };
      },
      providesTags: ["Jobs"],
    }),

    GetJobRecomendation: builder.query({
      query: () => ({
        url: "/jobs/recommendations",
      }),
    }),

    GetSimilerJobs: builder.query({
      query: (id) => ({
        url: `/jobs/${id}/similar`,
      }),
    }),

    GetJobBySlug: builder.query({
      query: (slug) => ({
        url: `/jobs/${slug}`,
      }),

      providesTags: (slug) => ["Jobs", { type: "Jobs", id: slug }],
    }),

    GetJobById: builder.query({
      query: (id) => ({
        url: `/jobs/id/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: "Jobs", id }],
    }),

    // --- Applications (User) ---
    JobApply: builder.mutation({
      query: ({ id, data }) => ({
        url: `/applications/jobs/${id}/apply`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Application", "Applicants"],
    }),

    AppliedJobs: builder.query({
      query: (params = {}) => {
        const cleanParams = Object.fromEntries(
          // eslint-disable-next-line no-unused-vars
          Object.entries(params).filter(([_, v]) => v != null && v !== ""),
        );

        return {
          url: "/applications/my-applications",
          params: cleanParams,
        };
      },
      providesTags: ["Application"],
    }),

    DeleteMyJobApplication: builder.mutation({
      query: (id) => ({
        url: `/applications/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Application", "Applicants"],
    }),

    // --- User Profile ---
    GetProfileInfo: builder.query({
      query: () => ({
        url: "/users/profile",
      }),
      providesTags: ["User"],
    }),

    GetUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
      }),
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

    // --- Company Dashboard ---
    GetComanyProfile: builder.query({
      query: () => ({
        url: "/companies/profile",
      }),
    }),

    GetCompanyBySlug: builder.query({
      query: (slug) => ({
        url: `/companies/${slug}`,
      }),
    }),

    GetDashboardState: builder.query({
      query: () => ({
        url: "/companies/dashboard/stats",
      }),
    }),

    GetCompanyJob: builder.query({
      query: (params = {}) => {
        const cleanParams = Object.fromEntries(
          // eslint-disable-next-line no-unused-vars
          Object.entries(params).filter(([_, v]) => v != null && v !== ""),
        );
        return {
          url: `/companies/jobs`,
          params: cleanParams,
        };
      },
      providesTags: ["Jobs"],
    }),

    GetApplicanst: builder.query({
      query: (params = {}) => {
        const cleanParams = Object.fromEntries(
          // eslint-disable-next-line no-unused-vars
          Object.entries(params).filter(([_, v]) => v != null && v !== ""),
        );
        return {
          url: "/companies/applicants",
          params: cleanParams,
        };
      },
      providesTags: ["Applicants"],
    }),

    UpdateJobStatus: builder.mutation({
      query: ({ jobId, data }) => ({
        url: `/applications/${jobId}/status`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Applicants"],
    }),

    // --- Job Management (Admin/Company) ---
    CreateJobAsAdmin: builder.mutation({
      query: (data) => ({
        url: "/jobs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Jobs"],
    }),

    DeleteJob: builder.mutation({
      query: (id) => ({
        url: `/jobs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Jobs"],
    }),

    UpdateJobData: builder.mutation({
      query: ({ id, data }) => ({
        url: `/jobs/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ({ id }) => ["Jobs", { type: "Jobs", id }],
    }),

    UploadCompanyProfilePic: builder.mutation({
      query: (data) => ({
        url: "/companies/logo",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Company"],
    }),

    GetCompanyProfile: builder.query({
      query: () => ({
        url: "/companies/profile",
      }),
      providesTags: ["Company"],
    }),

    UpdateCompanyProfile: builder.mutation({
      query: (data) => ({
        url: "/companies/profile",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Company"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,

  // Jobs
  useGetAllJobsQuery,
  useGetJobRecomendationQuery,
  useGetSimilerJobsQuery,
  useGetJobBySlugQuery,
  useGetJobByIdQuery, // New Export

  // Applications
  useJobApplyMutation,
  useAppliedJobsQuery,
  useDeleteMyJobApplicationMutation,

  // User
  useGetProfileInfoQuery,
  useGetUserByIdQuery,
  useUploadResumeMutation,
  useUploadProfilePicMutation,
  useUpdateProfileMutation,

  // Company
  useGetComanyProfileQuery,
  useGetCompanyBySlugQuery,
  useGetDashboardStateQuery,
  useGetLoggedInCompanyInfoQuery,
  useGetCompanyJobQuery,
  useGetApplicanstQuery,
  useUpdateJobStatusMutation,
  useUploadCompanyProfilePicMutation,
  useGetCompanyProfileQuery,
  useUpdateCompanyProfileMutation,

  // Job Management
  useCreateJobAsAdminMutation,
  useDeleteJobMutation,
  useUpdateJobDataMutation,
} = apiSlice;
