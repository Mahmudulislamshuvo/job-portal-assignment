import React from "react";

const FormUser = () => {
  return (
    <>
      <div className="card p-8 md:p-10">
        {/* <!-- Registration Form --> */}
        <form className="space-y-5">
          {/* <!-- Name Fields Row --> */}
          <div className="space-y-2">
            <label htmlFor="name" className="label">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <i
                data-lucide="user"
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              ></i>
              <input
                type="text"
                id="name"
                name="name"
                className="input pl-10"
                placeholder="John"
                required
              />
            </div>
          </div>

          {/* <!-- Email & Phone Row --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="email" className="label">
                Email Address
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <i
                  data-lucide="mail"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                ></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input pl-10"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="label">
                Phone Number
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <i
                  data-lucide="phone"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                ></i>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="input pl-10"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>
            </div>
          </div>

          {/* <!-- Job Title & Experience Row --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="experience" className="label">
                Years of Experience
              </label>
              <div className="relative">
                <i
                  data-lucide="calendar"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                ></i>
                <select id="experience" name="experience" className="input pl-10">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="password" className="label">
                Password
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <i
                  data-lucide="lock"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                ></i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="input pl-10 pr-10"
                  placeholder="Create a strong password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <i data-lucide="eye" className="h-4 w-4"></i>
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="label">
                Confirm Password
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <i
                  data-lucide="lock"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                ></i>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="input pl-10 pr-10"
                  placeholder="Re-enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <i data-lucide="eye" className="h-4 w-4"></i>
                </button>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground -mt-2">
            Password must be at least 8 characters with letters and numbers
          </p>

          {/* <!-- Terms and Conditions --> */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring"
              required
            />
            <label htmlFor="terms" className="text-sm text-muted-foreground">
              I agree to the
              <a href="#" className="text-primary hover:underline">
                Terms of Service
              </a>
              and
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* <!-- Newsletter Subscription --> */}

          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            className="btn btn-primary w-full text-base h-11 mt-2"
          >
            <i data-lucide="user-plus" className="h-4 w-4 mr-2"></i>
            Create Account
          </button>
        </form>

        {/* <!-- Divider --> */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-card text-muted-foreground font-medium">
              Or continue with
            </span>
          </div>
        </div>

        {/* <!-- Sign In Link --> */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          Already have an account?
          <a href="login.html" className="text-primary hover:underline font-medium">
            Sign in
          </a>
        </div>
      </div>
    </>
  );
};

export default FormUser;
