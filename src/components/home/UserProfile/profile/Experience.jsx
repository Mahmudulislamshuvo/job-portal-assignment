const Experience = () => {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
      <div className="space-y-6">
        {/* <!-- Experience 1 --> */}
        <div className="relative pl-8 pb-6 border-l-2 border-[hsl(var(--color-border))] last:pb-0">
          <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-[hsl(var(--color-primary))] border-2 border-white"></div>
          <div>
            <h3 className="font-semibold mb-1">Senior Full Stack Developer</h3>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-2">
              TechCorp Solutions • Full-time
            </p>
            <p className="text-xs text-[hsl(var(--color-muted-foreground))] mb-3">
              Jan 2022 - Present • 2 years
            </p>
            <p className="text-sm text-[hsl(var(--color-foreground))]">
              Leading development of enterprise web applications using React and
              Node.js. Architecting scalable solutions and mentoring junior
              developers.
            </p>
          </div>
        </div>

        {/* <!-- Experience 2 --> */}
        <div className="relative pl-8 pb-6 border-l-2 border-[hsl(var(--color-border))] last:pb-0">
          <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-[hsl(var(--color-secondary))] border-2 border-white"></div>
          <div>
            <h3 className="font-semibold mb-1">Full Stack Developer</h3>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-2">
              WebTech Industries • Full-time
            </p>
            <p className="text-xs text-[hsl(var(--color-muted-foreground))] mb-3">
              Jun 2020 - Dec 2021 • 1.5 years
            </p>
            <p className="text-sm text-[hsl(var(--color-foreground))]">
              Developed and maintained multiple client projects using modern
              JavaScript frameworks. Collaborated with cross-functional teams to
              deliver high-quality solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
