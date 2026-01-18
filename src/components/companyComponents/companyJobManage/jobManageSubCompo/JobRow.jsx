import {
  MapPin,
  Briefcase,
  Edit,
  Trash2,
  CheckCircle,
  PlayCircle,
} from "lucide-react";

const JobRow = ({ job }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Active":
        return "badge-success";
      case "Expiring Soon":
        return "badge-warning";
      case "Draft":
        return "badge-info";
      case "Closed":
        return "badge-danger";
      default:
        return "";
    }
  };

  return (
    <tr
      className={`hover:bg-accent transition-colors ${
        job.closed ? "opacity-60" : ""
      }`}
    >
      <td className="py-4 px-6">
        <input
          type="checkbox"
          className="rounded border-[hsl(var(--color-input))]"
        />
      </td>
      <td className="py-4 px-6">
        <div>
          <a
            href="job-details.html"
            className="font-medium hover:text-[hsl(var(--color-primary))]"
          >
            {job.title}
          </a>
          <div className="flex items-center gap-3 mt-1 text-xs text-[hsl(var(--color-muted-foreground))]">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="h-3 w-3" />
              {job.type}
            </span>
          </div>
        </div>
      </td>
      <td className="py-4 px-6">
        <span className={`badge ${getStatusBadge(job.status)}`}>
          {job.status}
        </span>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-2">
          <span className="font-medium">{job.applicants}</span>
        </div>
      </td>
      <td className="py-4 px-6 text-sm text-[hsl(var(--color-muted-foreground))]">
        {job.postedDate}
      </td>
      <td
        className={`py-4 px-6 text-sm ${
          job.expiring
            ? "text-yellow-600 font-medium"
            : "text-[hsl(var(--color-muted-foreground))]"
        }`}
      >
        {job.expires}
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center justify-end gap-2">
          {job.status === "Draft" ? (
            <>
              <button className="btn-ghost p-2" title="Edit">
                <Edit className="h-4 w-4" />
              </button>
              <button className="btn-ghost p-2 text-green-600" title="Publish">
                <CheckCircle className="h-4 w-4" />
              </button>
              <button className="btn-ghost p-2 text-red-600" title="Delete">
                <Trash2 className="h-4 w-4" />
              </button>
            </>
          ) : job.status === "Closed" ? (
            <>
              <button
                className="btn-ghost p-2 text-green-600"
                title="Reactivate"
              >
                <PlayCircle className="h-4 w-4" />
              </button>
              <button className="btn-ghost p-2 text-red-600" title="Delete">
                <Trash2 className="h-4 w-4" />
              </button>
            </>
          ) : (
            <>
              <button className="btn-ghost p-2" title="Edit">
                <Edit className="h-4 w-4" />
              </button>
              <button className="btn-ghost p-2 text-red-600" title="Delete">
                <Trash2 className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default JobRow;
