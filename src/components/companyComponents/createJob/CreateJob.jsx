import { useNavigate } from "react-router-dom";
import { useCreateJobAsAdminMutation } from "../../../features/api/apiSlice";
import CreateJobForm from "./subCreateJobCompo/CreateJobForm";
import CreateJobHeader from "./subCreateJobCompo/CreateJobHeader";

const CreateJob = () => {
  const navigate = useNavigate();
  const [createJob, { isLoading }] = useCreateJobAsAdminMutation();

  const onSubmit = async (data) => {
    try {
      const response = await createJob(data);
      if (response?.data?.success === true) {
        console.log("Posted a new job");
        navigate("/company-dashboard");
      }
    } catch (error) {
      console.log("Create Job from Company", error);
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
