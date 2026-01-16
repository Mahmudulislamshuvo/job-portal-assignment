const CompanyInfo = () => {
  return (
    <>
      <div class="flex-1 h-full items-center">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 class="text-3xl font-bold mb-2">TechCorp Solutions</h1>
            <div class="flex flex-wrap items-center gap-3 text-[hsl(var(--color-muted-foreground))]">
              <span class="flex items-center gap-1">
                <i data-lucide="building" class="h-4 w-4"></i>
                Technology & Software
              </span>
              <span>•</span>
              <span class="flex items-center gap-1">
                <i data-lucide="map-pin" class="h-4 w-4"></i>
                San Francisco, CA
              </span>
              <span>•</span>
              <span class="flex items-center gap-1">
                <i data-lucide="users" class="h-4 w-4"></i>
                500-1000 employees
              </span>
            </div>
          </div>
          <div class="flex gap-2">
            <button class="btn btn-outline">
              <i data-lucide="share-2" class="h-4 w-4 mr-2"></i>
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyInfo;
