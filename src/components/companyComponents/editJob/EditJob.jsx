import { useParams, useNavigate } from "react-router-dom";
import {
  useGetJobBySlugQuery,
  useUpdateJobDataMutation,
} from "../../../features/api/apiSlice";
import CreateJobForm from "../createJob/subCreateJobCompo/CreateJobForm";
import LoadingSpinner from "../../commonComponents/LoadingSpinner";
// import LoadingSpinner from "../../../commonComponents/LoadingSpinner";

const EditJob = () => {
  const { slug: jobSlug } = useParams();
  const navigate = useNavigate();

  const { data: jobData, isLoading: isFetching } =
    useGetJobBySlugQuery(jobSlug);

  const [updateJob, { isLoading: isUpdating }] = useUpdateJobDataMutation();

  const onSubmit = async (formData) => {
    try {
      const response = await updateJob({
        id: jobData?.data?.id,
        data: formData,
      }).unwrap();
      if (response.success) {
        console.log("Job Updated Successfully");
        navigate("/company-dashboard");
      }
    } catch (error) {
      ``;
      console.error("Update failed", error);
    }
  };

  if (isFetching)
    return (
      <div className="flex justify-center p-10">
        <LoadingSpinner />
      </div>
    );

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Edit Job</h1>
      </div>

      {jobData?.data && (
        <CreateJobForm
          initialData={jobData.data}
          onSubmit={onSubmit}
          isLoading={isUpdating}
        />
      )}
    </main>
  );
};

export default EditJob;
