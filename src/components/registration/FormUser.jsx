import React from "react";

const FormUser = () => {
  return (
    <>
      <div class="card p-8 md:p-10">
        {/* <!-- Registration Form --> */}
        <form class="space-y-5">
          {/* <!-- Name Fields Row --> */}
          <div class="space-y-2">
            <label for="name" class="label">
              Name <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <i
                data-lucide="user"
                class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              ></i>
              <input
                type="text"
                id="name"
                name="name"
                class="input pl-10"
                placeholder="John"
                required
              />
            </div>
          </div>

          {/* <!-- Email & Phone Row --> */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
            </div>
            <div class="space-y-2">
              <label for="phone" class="label">
                Phone Number
                <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <i
                  data-lucide="phone"
                  class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                ></i>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  class="input pl-10"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>
            </div>
          </div>

          {/* <!-- Job Title & Experience Row --> */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-2">
              <label for="experience" class="label">
                Years of Experience
              </label>
              <div class="relative">
                <i
                  data-lucide="calendar"
                  class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                ></i>
                <select id="experience" name="experience" class="input pl-10">
                  <option value="">Select experience level</option>
                  <option value="entry">Entry Level (0-2 years)</option>
                  <option value="mid">Mid Level (3-5 years)</option>
                  <option value="senior">Senior (6-10 years)</option>
                  <option value="expert">Expert (10+ years)</option>
                </select>
              </div>
            </div>
          </div>

          {/* <!-- Password Fields Row --> */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-2">
              <label for="password" class="label">
                Password
                <span class="text-red-500">*</span>
              </label>
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
                  placeholder="Create a strong password"
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
            <div class="space-y-2">
              <label for="confirmPassword" class="label">
                Confirm Password
                <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <i
                  data-lucide="lock"
                  class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                ></i>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  class="input pl-10 pr-10"
                  placeholder="Re-enter your password"
                  required
                />
                <button
                  type="button"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onclick="togglePassword('confirmPassword')"
                >
                  <i data-lucide="eye" class="h-4 w-4"></i>
                </button>
              </div>
            </div>
          </div>
          <p class="text-xs text-muted-foreground -mt-2">
            Password must be at least 8 characters with letters and numbers
          </p>

          {/* <!-- Terms and Conditions --> */}
          <div class="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              class="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring"
              required
            />
            <label for="terms" class="text-sm text-muted-foreground">
              I agree to the
              <a href="#" class="text-primary hover:underline">
                Terms of Service
              </a>
              and
              <a href="#" class="text-primary hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* <!-- Newsletter Subscription --> */}

          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            class="btn btn-primary w-full text-base h-11 mt-2"
          >
            <i data-lucide="user-plus" class="h-4 w-4 mr-2"></i>
            Create Account
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

        {/* <!-- Sign In Link --> */}
        <div class="mt-8 text-center text-sm text-muted-foreground">
          Already have an account?
          <a href="login.html" class="text-primary hover:underline font-medium">
            Sign in
          </a>
        </div>
      </div>
    </>
  );
};

export default FormUser;
