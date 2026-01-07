const JobSkills = ({ skills }) => {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-4">Required Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills?.map((skill, idx) => (
          <span key={idx} className="badge badge-secondary">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobSkills;
