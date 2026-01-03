const LoginCard = () => {
  return (
    <>
      <div class="card p-8 md:p-10">
        {/* <!-- Login Form --> */}
        <form class="space-y-5">
          {/* <!-- Email --> */}
          <div class="space-y-2">
            <label for="email" class="label">
              Email Address
              <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <i
                data-lucide="mail"
                class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              ></i>
              <input
                type="email"
                id="email"
                name="email"
                class="input pl-10"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          {/* <!-- Password --> */}
          <div class="space-y-2">
            <div class="relative">
              <i
                data-lucide="lock"
                class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              ></i>
              <input
                type="password"
                id="password"
                name="password"
                class="input pl-10 pr-10"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onclick="togglePassword('password')"
              >
                <i data-lucide="eye" class="h-4 w-4"></i>
              </button>
            </div>
          </div>

          {/* <!-- Submit Button --> */}
          <button type="submit" class="btn btn-primary w-full text-base h-11">
            <i data-lucide="log-in" class="h-4 w-4 mr-2"></i>
            Sign In
          </button>
        </form>

        {/* <!-- Divider --> */}
        <div class="relative my-8">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-border"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-card text-muted-foreground font-medium">
              Or continue with
            </span>
          </div>
        </div>

        {/* <!-- Sign Up Link --> */}
        <div class="mt-8 text-center text-sm text-muted-foreground">
          Don't have an account?
          <a
            href="register.html"
            class="text-primary hover:underline font-medium"
            id="signupLink"
          >
            Sign up as Job Seeker
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
