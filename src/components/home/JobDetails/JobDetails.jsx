import { useParams } from "react-router-dom";
import BreadCrumbStatic from "./BreadCrumbStatic";
import { useGetAllJobsQuery } from "../../../features/api/apiSlice";
import JobDetailsSkeleton from "../../skelitons/JobDetailsSkeliton";
import { getTimeFromNow } from "../../../utils/getTimeFromNow";
import ApplyNow from "./ApplyNow";

// Icons Imports
import { BiUnlink, BiBuilding } from "react-icons/bi";
import {
  FiMapPin,
  FiClock,
  FiBookmark,
  FiBriefcase,
  FiDollarSign,
  FiBarChart2,
  FiCalendar,
  FiUsers,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiLink,
  FiFlag,
  FiX,
  FiUpload,
  FiFileText,
  FiTrash2,
  FiSend,
} from "react-icons/fi";
import { useState } from "react";
import Modal from "react-responsive-modal";

const JobDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetAllJobsQuery();
  const [open, setOpen] = useState(false);

  const job = data?.data?.find((job) => job.id === id);

  if (isLoading) {
    return <JobDetailsSkeleton />;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">Something went wrong!</div>
    );
  }

  const parseList = (text) => {
    return text
      ? text.split(/\\n|\n/).filter((item) => item.trim() !== "")
      : [];
  };

  // Job apply Modal Functions

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      {/* */}
      <main className="container mx-auto px-4 py-8">
        {/* */}
        <BreadCrumbStatic />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* */}
          <div className="lg:col-span-2 space-y-6">
            {/* */}
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="h-20 w-20 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center overflow-hidden">
                    {job.company?.logoUrl ? (
                      <img
                        src={job.company.logoUrl}
                        alt={job.company.name}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <BiUnlink className="h-10 w-10 text-[hsl(var(--color-primary))]" />
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                      <div className="flex flex-wrap items-center gap-3 text-[hsl(var(--color-muted-foreground))]">
                        <span className="text-lg font-medium hover:text-[hsl(var(--color-primary))] cursor-pointer">
                          {job.company?.name}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <FiMapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <FiClock className="h-4 w-4" />
                          {getTimeFromNow(job.createdAt)}
                        </span>
                      </div>
                    </div>
                    <button className="btn-ghost p-2 shrink-0" title="Save job">
                      <FiBookmark className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge badge-secondary">{job.type}</span>
                    <span className="badge badge-outline">{job.workMode}</span>
                    <span className="badge badge-outline">
                      {job.experienceLevel} Level
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Job Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0">
                    <FiBriefcase className="h-5 w-5 text-[hsl(var(--color-primary))]" />
                  </div>
                  <div>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      Job Type
                    </p>
                    <p className="font-medium">{job.type}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0">
                    <FiMapPin className="h-5 w-5 text-[hsl(var(--color-primary))]" />
                  </div>
                  <div>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      Location
                    </p>
                    <p className="font-medium">
                      {job.location} ({job.workMode})
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0">
                    <FiDollarSign className="h-5 w-5 text-[hsl(var(--color-primary))]" />
                  </div>
                  <div>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      Salary
                    </p>
                    <p className="font-medium">
                      ${job.salaryMin} - ${job.salaryMax} / {job.salaryPeriod}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0">
                    <FiBarChart2 className="h-5 w-5 text-[hsl(var(--color-primary))]" />
                  </div>
                  <div>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      Experience
                    </p>
                    <p className="font-medium">{job.experienceLevel}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0">
                    <FiCalendar className="h-5 w-5 text-[hsl(var(--color-primary))]" />
                  </div>
                  <div>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      Application Deadline
                    </p>
                    <p className="font-medium">
                      {job.deadline
                        ? new Date(job.deadline).toLocaleDateString()
                        : "Not Specified"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0">
                    <FiUsers className="h-5 w-5 text-[hsl(var(--color-primary))]" />
                  </div>
                  <div>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      Applicants
                    </p>
                    <p className="font-medium">{job.applicants} applications</p>
                  </div>
                </div>
              </div>
            </div>

            {/* */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <div className="prose prose-sm max-w-none space-y-4 text-[hsl(var(--color-foreground))]">
                <p>{job.description}</p>

                {/* Requirements Section */}
                {job.requirements && (
                  <>
                    <h3 className="text-lg font-semibold mt-6 mb-3">
                      Required Qualifications
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-[hsl(var(--color-muted-foreground))]">
                      {parseList(job.requirements).map((req, index) => (
                        <li key={index}>{req.replace(/^- /, "")}</li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Benefits Section */}
                {job.benefits && (
                  <>
                    <h3 className="text-lg font-semibold mt-6 mb-3">
                      What We Offer
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-[hsl(var(--color-muted-foreground))]">
                      {parseList(job.benefits).map((benefit, index) => (
                        <li key={index}>{benefit.replace(/^- /, "")}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            {/* */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills?.map((skill, idx) => (
                  <span key={idx} className="badge badge-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* */}
          <div className="lg:col-span-1 space-y-6">
            {/* */}
            <ApplyNow onOpenModal={onOpenModal} job={job} />

            {/* */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">About Company</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-16 w-16 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0">
                    {job.company?.logoUrl ? (
                      <img
                        src={job.company.logoUrl}
                        alt={job.company.name}
                        className="h-full w-full object-contain p-2"
                      />
                    ) : (
                      <BiBuilding className="h-8 w-8 text-[hsl(var(--color-primary))]" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold">{job.company?.name}</h4>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      {job.category}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm">
                    <FiMapPin className="h-4 w-4 text-[hsl(var(--color-muted-foreground))]" />
                    <span className="text-[hsl(var(--color-muted-foreground))]">
                      {job.company?.location}
                    </span>
                  </div>
                </div>

                <button className="btn btn-outline w-full mt-4">
                  View Company Profile
                </button>
              </div>
            </div>

            {/* */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">Share this Job</h3>
              <div className="flex gap-2">
                <button
                  className="btn btn-outline flex-1"
                  title="Share on LinkedIn"
                >
                  <FiLinkedin className="h-4 w-4" />
                </button>
                <button
                  className="btn btn-outline flex-1"
                  title="Share on Twitter"
                >
                  <FiTwitter className="h-4 w-4" />
                </button>
                <button
                  className="btn btn-outline flex-1"
                  title="Share on Facebook"
                >
                  <FiFacebook className="h-4 w-4" />
                </button>
                <button className="btn btn-outline flex-1" title="Copy link">
                  <FiLink className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* */}
            <button className="w-full text-sm text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] flex items-center justify-center gap-2">
              <FiFlag className="h-4 w-4" />
              Report this job
            </button>
          </div>
        </div>
      </main>

      {/* dialoge*/}
      <Modal open={open} onClose={onCloseModal} center>
        <div
          id="applyDialog"
          className="fixed inset-0 bg-black/50 z-50 items-center justify-center p-4"
        >
          <div className="card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">Apply for Position</h2>
                  <p className="text-sm text-[hsl(var(--color-muted-foreground))] mt-1">
                    Complete the form below to submit your application
                  </p>
                </div>
                <button onClick={onCloseModal} className="btn-ghost p-2">
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              {/* */}
              <div className="space-y-3">
                <label className="text-sm font-medium">
                  Resume <span className="text-red-500">*</span>
                </label>

                {/* */}
                <div
                  id="uploadArea"
                  className="border-2 border-dashed border-[hsl(var(--color-border))] rounded-lg p-8 text-center hover:border-[hsl(var(--color-primary))] transition-colors cursor-pointer"
                >
                  <input
                    type="file"
                    id="resumeInput"
                    accept=".pdf"
                    className="hidden"
                  />
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-12 w-12 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center">
                      <FiUpload className="h-6 w-6 text-[hsl(var(--color-primary))]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Click to upload resume
                      </p>
                      <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-1">
                        PDF file only (Max 5MB)
                      </p>
                    </div>
                  </div>
                </div>

                {/* */}
                <div
                  id="filePreview"
                  className="hidden border border-[hsl(var(--color-border))] rounded-lg p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center">
                        <FiFileText className="h-5 w-5 text-[hsl(var(--color-primary))]" />
                      </div>
                      <div>
                        <p id="fileName" className="text-sm font-medium"></p>
                        <p
                          id="fileSize"
                          className="text-xs text-[hsl(var(--color-muted-foreground))]"
                        ></p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        // onClick="reuploadFile()"
                        className="btn btn-outline text-xs h-8 px-3"
                      >
                        <FiUpload className="h-3 w-3 mr-1" />
                        Reupload
                      </button>
                      <button
                        // onClick="removeFile()"
                        className="btn btn-outline text-xs h-8 px-3 text-red-600 hover:bg-red-50"
                      >
                        <FiTrash2 className="h-3 w-3 mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* */}
              <div className="space-y-3">
                <label htmlFor="coverMessage" className="text-sm font-medium">
                  Cover Message
                  <span class="text-[hsl(var(--color-muted-foreground))]">
                    (Optional)
                  </span>
                </label>
                <textarea
                  id="coverMessage"
                  rows="5"
                  className="input resize-none"
                  placeholder="Write a brief message about why you're a great fit for this role..."
                ></textarea>
                <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                  <span id="charCount">0</span>/500 characters
                </p>
              </div>

              {/* */}
              <div className="flex gap-3 pt-4 border-t border-[hsl(var(--color-border))]">
                <button
                  onClick={onCloseModal}
                  className="btn btn-outline flex-1"
                >
                  Cancel
                </button>
                <button
                  // onClick="submitApplication()"
                  className="btn btn-primary flex-1"
                >
                  <FiSend className="h-4 w-4 mr-2" />
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default JobDetails;
