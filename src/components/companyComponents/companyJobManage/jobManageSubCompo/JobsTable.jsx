import JobRow from "./JobRow";

const JobsTable = ({ data }) => {
  // const jobs = [
  //   {
  //     title: "Senior Full Stack Developer",
  //     location: "San Francisco, CA",
  //     type: "Full-time",
  //     status: "Active",
  //     applicants: 24,
  //     postedDate: "Nov 28, 2025",
  //     expires: "Dec 28, 2025",
  //   },
  //   {
  //     title: "Frontend Developer",
  //     location: "Remote",
  //     type: "Full-time",
  //     status: "Active",
  //     applicants: 18,
  //     postedDate: "Nov 25, 2025",
  //     expires: "Dec 25, 2025",
  //   },
  //   {
  //     title: "Backend Engineer",
  //     location: "Austin, TX",
  //     type: "Full-time",
  //     status: "Active",
  //     applicants: 32,
  //     postedDate: "Nov 20, 2025",
  //     expires: "Dec 20, 2025",
  //   },
  //   {
  //     title: "DevOps Engineer",
  //     location: "Seattle, WA",
  //     type: "Full-time",
  //     status: "Expiring Soon",
  //     applicants: 15,
  //     postedDate: "Nov 15, 2025",
  //     expires: "Dec 5, 2025",
  //     expiring: true,
  //   },
  //   {
  //     title: "UI/UX Designer",
  //     location: "Los Angeles, CA",
  //     type: "Full-time",
  //     status: "Draft",
  //     applicants: "-",
  //     postedDate: "Nov 30, 2025",
  //     expires: "-",
  //   },
  //   {
  //     title: "Product Manager",
  //     location: "Boston, MA",
  //     type: "Full-time",
  //     status: "Closed",
  //     applicants: 45,
  //     postedDate: "Oct 15, 2025",
  //     expires: "Nov 15, 2025",
  //     closed: true,
  //   },
  // ];

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted border-b border-border">
            <tr>
              <th className="text-left py-4 px-6 text-sm font-medium">
                <input type="checkbox" className="rounded border-input" />
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium">
                Job Title
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium">
                Status
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium">
                Applicants
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium">
                Posted Date
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium">
                Expires
              </th>
              <th className="text-right py-4 px-6 text-sm font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {data?.data?.map((job, index) => (
              <JobRow key={index} job={job} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobsTable;
