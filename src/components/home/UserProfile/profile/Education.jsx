const Education = () => {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="h-12 w-12 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center flex-shrink-0">
            <i
              data-lucide="graduation-cap"
              className="h-6 w-6 text-[hsl(var(--color-primary))]"
            ></i>
          </div>
          <div>
            <h3 className="font-semibold mb-1">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-1">
              Stanford University
            </p>
            <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
              2016 - 2020
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
