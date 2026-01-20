import {
  MapPin,
  Briefcase,
  Edit,
  Trash2,
  CheckCircle,
  PlayCircle,
} from "lucide-react";
import { getTimeFromNow } from "../../../../utils/getTimeFromNow";
import { getFormatDateMonthYear } from "../../../../utils/getFormatDateMonthYear";
import { Link } from "react-router-dom";
import { getDeadlineClass } from "../../../../utils/getDeadlineClass";

const JobRow = ({ job, setSeleteJobIds, deleteJobIds, handleDeleteJob }) => {
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

  const isChecked = deleteJobIds?.includes(job.id);

  const handleCheck = (id) => {
    setSeleteJobIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  console.log(job);

  return (
    <tr
      className={`hover:bg-accent transition-colors ${
        job.closed ? "opacity-60" : ""
      }`}
    >
      <td className="py-4 px-6">
        <input
          type="checkbox"
          checked={isChecked}
          className="rounded border-[hsl(var(--color-input))]"
          onChange={() => handleCheck(job.id)}
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
        {getTimeFromNow(job.createdAt)}
      </td>
      <td className={`py-4 px-6 text-sm ${getDeadlineClass(job.deadline)}`}>
        {getFormatDateMonthYear(job.deadline)}
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
              <button
                onClick={() => handleDeleteJob(job.id)}
                className="btn-ghost p-2 text-red-600"
                title="Delete"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </>
          ) : (
            <>
              <Link to={`/company/job/edit/${job.slug}`}>
                <button className="btn-ghost p-2" title="Edit">
                  <Edit className="h-4 w-4" />
                </button>
              </Link>
              <button
                onClick={() => handleDeleteJob(job.id)}
                className="btn-ghost p-2 text-red-600"
                title="Delete"
              >
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
