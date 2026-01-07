import {
  FiMapPin,
  FiBriefcase,
  FiDollarSign,
  FiBarChart2,
  FiCalendar,
  FiUsers,
} from "react-icons/fi";

const JobOverview = ({ job }) => {
  return (
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
  );
};

export default JobOverview;
