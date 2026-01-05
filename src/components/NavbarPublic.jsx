const NavbarPublic = () => {
  return (
    <>
      <header class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div class="container mx-auto flex h-16 items-center justify-between px-4">
          <div class="flex items-center gap-8">
            <a href="index.html" class="flex items-center space-x-2">
              <i data-lucide="briefcase" class="h-8 w-8 text-primary"></i>
              <span class="text-xl font-bold">LWS Job Portal</span>
            </a>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm text-muted-foreground">
              Don't have an account?
            </span>
            <a href="register.html" class="btn btn-ghost text-sm">
              Sign Up
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarPublic;
