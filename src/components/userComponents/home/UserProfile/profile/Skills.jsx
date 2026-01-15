const Skills = ({ skills }) => {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills?.map((skil, i) => (
          <span key={i} className="badge badge-secondary">
            {skil}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
