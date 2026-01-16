import { Briefcase, Users, Clock, Star } from "lucide-react";

const DashboardStatCard = ({ type, value }) => {
  let config;

  switch (type) {
    case "activeJobs":
      config = {
        label: "Active Jobs",
        icon: Briefcase,
        bg: "bg-blue-100",
        color: "text-blue-600",
      };
      break;

    case "totalApplicants":
      config = {
        label: "Total Applicants",
        icon: Users,
        bg: "bg-green-100",
        color: "text-green-600",
      };
      break;

    case "pendingReviews":
      config = {
        label: "Pending Reviews",
        icon: Clock,
        bg: "bg-yellow-100",
        color: "text-yellow-600",
      };
      break;

    case "shortLists":
      config = {
        label: "Shortlisted",
        icon: Star,
        bg: "bg-purple-100",
        color: "text-purple-600",
      };
      break;

    default:
      return null;
  }

  const Icon = config.icon;

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <div
          className={`h-12 w-12 rounded-lg ${config.bg} flex items-center justify-center`}
        >
          <Icon className={`h-6 w-6 ${config.color}`} />
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-1">{value}</h3>
      <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
        {config.label}
      </p>
    </div>
  );
};

export default DashboardStatCard;
