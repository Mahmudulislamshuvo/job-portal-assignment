import { BsFillBuildingsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import ApplyModal from "./JobDetails/ApplyModal";
import { useSelector } from "react-redux";
import { Clock, MapPin, User } from "lucide-react";
import { getFormatSalary } from "../../../utils/getFormatSalary";
import {
  useGetUserByIdQuery,
  useJobApplyMutation,
} from "../../../features/api/apiSlice";
import { getTimeFromNow } from "../../../utils/getTimeFromNow";
import JobCardSkeleton from "../../skelitons/JobGridSkeliton";

const JobCardGrid = ({ data, isLoading, error }) => {
  const { user } = useSelector((state) => state.auth);
  const [jobApply, { isLoading: isApplying }] = useJobApplyMutation();
  const [open, setOpen] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const {
    data: loggedInUserData,
    isLoading: isUserDataLoading,
    refetch,
  } = useGetUserByIdQuery(user?.id);
  const [jobId, setJobbId] = useState("");

  if (isLoading) {
    return (
      <div className="grid gap-4 md:gap-6">
        {/* Render 5 or 6 skeletons to fill the screen */}
        {[...Array(5)].map((_, index) => (
          <JobCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  // 2. Handle Error State (Optional but recommended)
  if (error) {
    return (
      <div className="text-red-500 text-center">Something went wrong!</div>
    );
  }

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // Submit Application Handler //CHECKING PURPOSES ONLY
  const handleSubmitApplication = async () => {
    try {
      const response = await jobApply({
        id: jobId,
        data: {
          coverLetter,
        },
      });

      console.log(response);
      if (response.data?.success) {
        onCloseModal();
        setCoverLetter("");
        setJobbId("");
        console.log("Application successsfull");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data?.data);

  return (
    <>
      <div className="grid gap-4 md:gap-6">
        {data?.data?.map((job) => (
          <article
            key={job.id}
            className="card p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* <!-- Company Logo --> */}
              <div className="shrink-0">
                <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                  {job.company.logoUrl ? (
                    <img
                      src={job.company.logoUrl}
                      alt={`${job.company.name} Logo`}
                      className="h-12 w-12 object-contain"
                    />
                  ) : (
                    <BsFillBuildingsFill className="h-8 w-8 text-primary" />
                  )}
                </div>
              </div>

              {/* <!-- Job Details --> */}
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      <Link
                        to={`/job-details/${job.id}`}
                        className="hover:underline"
                      >
                        {job.title}
                      </Link>
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      {/* compay profile needed to navbiagte  */}
                      <span className="hover:text-primary font-medium">
                        {job.company.name}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.company.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {getTimeFromNow(job.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-secondary">{job.type}</span>
                  {job.skills?.map((skill, index) => (
                    <span key={index} className="badge badge-outline">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-primary">
                      {getFormatSalary(job.salaryMin, job.salaryMax)}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {job.applicants} applicants
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to={`/job-details/${job.slug}`}
                      className="btn btn-outline text-sm"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => {
                        onOpenModal(), setJobbId(job.id);
                      }}
                      className="btn btn-primary text-sm"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
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

export default JobCardGrid;
