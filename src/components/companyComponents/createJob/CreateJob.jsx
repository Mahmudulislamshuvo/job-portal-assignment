import { useNavigate } from "react-router-dom";
import { useCreateJobAsAdminMutation } from "../../../features/api/apiSlice";
import CreateJobForm from "./subCreateJobCompo/CreateJobForm";
import CreateJobHeader from "./subCreateJobCompo/CreateJobHeader";
import { ErrorToast, SuccessToast } from "../../../hooks/toastify";

const CreateJob = () => {
  const navigate = useNavigate();
  const [createJob, { isLoading }] = useCreateJobAsAdminMutation();

  const onSubmit = async (data) => {
    try {
      const response = await createJob(data);
      if (response?.data?.success === true) {
        SuccessToast("Job Created Successfully");
        navigate("/company-dashboard");
      }
    } catch (error) {
      ErrorToast(
        error?.data?.message || "Failed to create job. Please try again.",
      );
    }
  };

  return (
    <>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* <!-- Page Header --> */}
        <CreateJobHeader />

        {/* <!-- Create Job Form --> */}
        <CreateJobForm onSubmit={onSubmit} isLoading={isLoading} />
      </main>
    </>
  );
};

export default CreateJob;
