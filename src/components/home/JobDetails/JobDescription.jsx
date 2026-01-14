const JobDescription = ({ job }) => {
  const parseList = (text) => {
    return text
      ? text.split(/\\n|\n/).filter((item) => item.trim() !== "")
      : [];
  };

  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-4">Job Description</h2>
      <div className="prose prose-sm max-w-none space-y-4 text-[hsl(var(--color-foreground))] ">
        <p>{job?.description}</p>

        {/* Requirements Section */}
        {job?.requirements && (
          <>
            <h3 className="text-lg font-semibold mt-6 mb-3">
              Required Qualifications
            </h3>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--color-muted-foreground))] ">
              {parseList(job?.requirements).map((req, index) => (
                <li key={index}>{req.replace(/^- /, "")}</li>
              ))}
            </ul>
          </>
        )}

        {/* Benefits Section */}
        {job?.benefits && (
          <>
            <h3 className="text-lg font-semibold mt-6 mb-3">What We Offer</h3>
            <ul className="list-disc list-inside space-y-2 text-[hsl(var(--color-muted-foreground))] ">
              {parseList(job?.benefits).map((benefit, index) => (
                <li key={index}>{benefit.replace(/^- /, "")}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default JobDescription;
