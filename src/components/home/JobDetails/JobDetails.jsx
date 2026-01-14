import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  useGetAllJobsQuery,
  useGetSimilerJobsQuery,
  useGetUserByIdQuery,
  useJobApplyMutation,
} from "../../../features/api/apiSlice";
import JobDetailsSkeleton from "../../skelitons/JobDetailsSkeliton";
import BreadCrumbStatic from "./BreadCrumbStatic";
import JobHeader from "./JobHeader";
import JobOverview from "./JobOverview";
import JobDescription from "./JobDescription";
import JobSkills from "./JobSkills";
import ApplyNow from "./ApplyNow";
import CompanyInfo from "./CompanyInfo";
import ShareJob from "./ShareJob";
import ApplyModal from "./ApplyModal";
import { FiFlag } from "react-icons/fi";
import { useSelector } from "react-redux";
import SimilerJobs from "./SimilerJobs";
import SimilerJobsSkeleton from "../../skelitons/SimilerJobsSkeliton";

const JobDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetAllJobsQuery();
  const [coverLetter, setCoverLetter] = useState("");

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, token } = useSelector((state) => state.auth);
  const { data: similarJobsData, isLoading: isSimilarJobsLoading } =
    useGetSimilerJobsQuery(id);
  const {
    data: loggedInUserData,
    isLoading: isUserDataLoading,
    refetch,
  } = useGetUserByIdQuery(user?.id);
  const [applyJob, { isLoading: isApplying }] = useJobApplyMutation();

  const job = data?.data?.find((job) => job.id === id);

  if (isLoading) {
    return <JobDetailsSkeleton />;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">Something went wrong!</div>
    );
  }

  // Job apply Modal Functions
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // Check Auth and Open Modal
  const handleCheckAuthAndOpenModal = () => {
    if (user?.role === "USER") {
      onOpenModal();
    } else if (user?.role === "COMPANY" && token) {
      alert("Companies cannot apply for jobs.");
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  // Submit Application Handler //CHECKING PURPOSES ONLY
  const handleSubmitApplication = async () => {
    try {
      const response = await applyJob({
        id: id,
        data: {
          coverLetter,
        },
      });
      console.log(response);
      if (response.data?.success) {
        onCloseModal();
        setCoverLetter("");
        console.log("Application successsfull");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <BreadCrumbStatic />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <JobHeader job={job} />
            <JobOverview job={job} />
            <JobDescription job={job} />
            <JobSkills skills={job.skills} />
            {isSimilarJobsLoading ? (
              <SimilerJobsSkeleton />
            ) : (
              similarJobsData?.data?.length > 0 && (
                <SimilerJobs data={similarJobsData?.data} />
              )
            )}
          </div>

          <div className="lg:col-span-1 space-y-6">
            <ApplyNow job={job} handleApply={handleCheckAuthAndOpenModal} />
            <CompanyInfo company={job.company} category={job.category} />
            <ShareJob />

            <button className="w-full text-sm text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] flex items-center justify-center gap-2">
              <FiFlag className="h-4 w-4" />
              Report this job
            </button>
          </div>
        </div>
      </main>

      <ApplyModal
        open={open}
        onClose={onCloseModal}
        handleApply={handleSubmitApplication}
        isApplying={isApplying}
        setCoverLetter={setCoverLetter}
        coverLetter={coverLetter}
        userData={loggedInUserData}
        isUserDataLoading={isUserDataLoading}
        refetch={refetch}
      />
    </>
  );
};

export default JobDetails;
