import { Cpu, MapPin } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ApplyModal from "../home/JobDetails/ApplyModal";
import {
  useGetUserByIdQuery,
  useJobApplyMutation,
} from "../../../features/api/apiSlice";
import { getFormatSalary } from "../../../utils/getFormatSalary";

const RecomandedJobs = ({ recomandedJobs }) => {
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const [jobId, setJobbId] = useState("");

  const [jobApply, { isLoading: isApplying }] = useJobApplyMutation();
  const {
    data: loggedInUserData,
    isLoading: isUserDataLoading,
    refetch,
  } = useGetUserByIdQuery(user?.id);

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
        console.log("Application successsfull");
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
            filteredJobs.map((job) => (
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
                          <span
                            // to={`/job-details/${job.id}`}
                            className="hover:underline"
                          >
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
                      {/* Job Type Badge */}
                      <span className="badge badge-secondary">{job.type}</span>

                      {/* Work Mode Badge */}
                      <span className="badge badge-outline">
                        {job.workMode}
                      </span>

                      {/* Skills (Show max 2 skills) */}
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
                          {job.workMode === "Remote" ? "Remote" : job.location}
                        </span>
                        <span className="font-semibold text-primary flex items-center gap-1">
                          {getFormatSalary(job.salaryMin, job.salaryMax)}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <Link
                          to={`/job-details/${job.id}`}
                          className="btn btn-outline text-xs h-8"
                        >
                          View Details
                        </Link>

                        <button
                          onClick={() => {
                            setJobbId(job.id), onOpenModal();
                          }}
                          className="btn btn-primary text-xs h-8"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))
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
