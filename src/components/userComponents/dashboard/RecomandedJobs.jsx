import { Cpu, MapPin, CheckCircle } from "lucide-react"; // CheckCircle ইমপোর্ট করা হয়েছে
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ApplyModal from "../home/JobDetails/ApplyModal";
import {
  useGetUserByIdQuery,
  useJobApplyMutation,
  useAppliedJobsQuery,
} from "../../../features/api/apiSlice";
import { getFormatSalary } from "../../../utils/getFormatSalary";

const RecomandedJobs = ({ recomandedJobs }) => {
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const [jobId, setJobbId] = useState("");

  const [jobApply, { isLoading: isApplying }] = useJobApplyMutation();

  const { data: appliedJobsData } = useAppliedJobsQuery();

  const {
    data: loggedInUserData,
    isLoading: isUserDataLoading,
    refetch,
  } = useGetUserByIdQuery(user?.id);

  const appliedJobIds = appliedJobsData?.data?.map((item) => item.jobId) || [];

  const filteredJobs = recomandedJobs.slice(0, 3) || [];
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
        console.log("Application successful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recommended for You</h2>
          <Link
            to="/"
            className="text-sm text-[hsl(var(--color-primary))] hover:underline"
          >
            Browse All Jobs
          </Link>
        </div>

        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => {
              const isApplied = appliedJobIds.includes(job.id);

              return (
                <article
                  key={job.id}
                  className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    {/* Company Logo */}
                    <div className="shrink-0">
                      <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                        {job.company.logoUrl ? (
                          <img
                            src={job.company.logoUrl}
                            alt={job.company.name}
                            className="h-full w-full object-contain p-1"
                          />
                        ) : (
                          <Cpu className="h-6 w-6 text-primary" />
                        )}
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-semibold mb-1">
                            <span className="hover:underline cursor-pointer">
                              {job.title}
                            </span>
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {job.company.name}
                          </p>
                        </div>
                      </div>

                      {/* Description (Truncated) */}
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {job.description}
                      </p>

                      {/* Tags (Type, WorkMode, Skills) */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="badge badge-secondary">
                          {job.type}
                        </span>
                        <span className="badge badge-outline">
                          {job.workMode}
                        </span>
                        {job.skills?.slice(0, 2).map((skill, index) => (
                          <span key={index} className="badge badge-outline">
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Footer Info & Actions */}
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.workMode === "Remote"
                              ? "Remote"
                              : job.location}
                          </span>
                          <span className="font-semibold text-primary flex items-center gap-1">
                            {getFormatSalary(job.salaryMin, job.salaryMax)}
                          </span>
                        </div>

                        <div className="flex gap-2 items-center">
                          <Link
                            to={`/job-details/${job.slug}`}
                            className="btn btn-outline text-xs h-8"
                          >
                            View Details
                          </Link>

                          {/* কন্ডিশনাল রেন্ডারিং: অ্যাপ্লাই করা থাকলে ব্যাজ, না থাকলে বাটন */}
                          {isApplied ? (
                            <div className="flex items-center gap-1 text-green-600 bg-green-50 px-3 h-8 rounded-md border border-green-200 cursor-not-allowed">
                              <CheckCircle className="h-3 w-3" />
                              <span className="text-xs font-medium">
                                Applied
                              </span>
                            </div>
                          ) : (
                            <button
                              onClick={() => {
                                setJobbId(job.id);
                                onOpenModal();
                              }}
                              className="btn btn-primary text-xs h-8"
                            >
                              Apply Now
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <p className="text-sm text-center py-4 text-[hsl(var(--color-muted-foreground))]">
              No recommendations found at the moment.
            </p>
          )}
        </div>
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

export default RecomandedJobs;
