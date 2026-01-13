const SocialLinks = () => {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-4">Social Profiles</h3>
      <div className="space-y-2">
        <a
          href="#"
          className="flex items-center gap-3 p-2 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors"
        >
          <i
            data-lucide="linkedin"
            className="h-5 w-5 text-[hsl(var(--color-muted-foreground))]"
          ></i>
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 p-2 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors"
        >
          <i
            data-lucide="github"
            className="h-5 w-5 text-[hsl(var(--color-muted-foreground))]"
          ></i>
          <span className="text-sm font-medium">GitHub</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 p-2 rounded-md hover:bg-[hsl(var(--color-accent))] transition-colors"
        >
          <i
            data-lucide="globe"
            className="h-5 w-5 text-[hsl(var(--color-muted-foreground))]"
          ></i>
          <span className="text-sm font-medium">Portfolio</span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
