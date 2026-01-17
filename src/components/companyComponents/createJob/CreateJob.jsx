import CreateJobForm from "./subCreateJobCompo/CreateJobForm";
import CreateJobHeader from "./subCreateJobCompo/CreateJobHeader";

const CreateJob = () => {
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    try {
      console.log("oewuriweur");
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
        <CreateJobForm onSubmit={onSubmit} />
      </main>
    </>
  );
};

export default CreateJob;
