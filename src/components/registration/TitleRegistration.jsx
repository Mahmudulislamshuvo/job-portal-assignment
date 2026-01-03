const TitleRegistration = ({
  title = "Create Your Account",
  des = "Join thousands of professionals finding their dream jobs",
}) => {
  return (
    <>
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <i data-lucide="user-plus" class="h-8 w-8 text-primary"></i>
        </div>
        <h1 class="text-4xl font-bold tracking-tight mb-3">{title}</h1>
        <p class="text-lg text-muted-foreground">{des}</p>
      </div>
    </>
  );
};

export default TitleRegistration;
