import CreateJobForm from "./subCreateJobCompo/CreateJobForm";
import CreateJobHeader from "./subCreateJobCompo/CreateJobHeader";

const CreateJob = () => {
  return (
    <>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* <!-- Page Header --> */}
        <CreateJobHeader />

        {/* <!-- Create Job Form --> */}
        <CreateJobForm />
      </main>
    </>
  );
};

export default CreateJob;
