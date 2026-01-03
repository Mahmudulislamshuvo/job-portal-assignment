import React from "react";

const FormComany = () => {
  return (
    <>
      <div class="card p-8 md:p-10">
        {/* <!-- Registration Form --> */}
        <form class="space-y-6">
          {/* <!-- Company Information Section --> */}
          <div class="space-y-5">
            <div class="flex items-center gap-2 pb-2 border-b border-border">
              <i data-lucide="building" class="h-5 w-5 text-primary"></i>
              <h2 class="text-lg font-semibold">Company Information</h2>
            </div>

            {/* <!-- Company Name --> */}
            <div class="space-y-2">
              <label for="companyName" class="label">
                Company Name
                <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <i
                  data-lucide="building-2"
                  class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                ></i>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  class="input pl-10"
                  placeholder="e.g., TechCorp Solutions"
                  required
                />
              </div>
            </div>

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
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
            </div>

            {/* <!-- Company Website & Industry Row --> */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="space-y-2">
                <label for="website" class="label">
                  Company Website
                  <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <i
                    data-lucide="globe"
                    class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  ></i>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    class="input pl-10"
                    placeholder="https://example.com"
                    required
                  />
                </div>
              </div>
              <div class="space-y-2">
                <label for="industry" class="label">
                  Industry
                  <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <i
                    data-lucide="briefcase"
                    class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  ></i>
                  <select
                    id="industry"
                    name="industry"
                    class="input pl-10"
                    required
                  >
                    <option value="">Select industry</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance & Banking</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="consulting">Consulting</option>
                    <option value="marketing">Marketing & Advertising</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* <!-- Company Size & Founded Year Row --> */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="space-y-2">
                <label for="companySize" class="label">
                  Company Size
                </label>
                <div class="relative">
                  <i
                    data-lucide="users"
                    class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  ></i>
                  <select
                    id="companySize"
                    name="companySize"
                    class="input pl-10"
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
              </div>
              <div class="space-y-2">
                <label for="foundedYear" class="label">
                  Founded Year
                </label>
                <div class="relative">
                  <i
                    data-lucide="calendar"
                    class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  ></i>
                  <input
                    type="number"
                    id="foundedYear"
                    name="foundedYear"
                    class="input pl-10"
                    placeholder="e.g., 2010"
                    min="1800"
                    max="2025"
                  />
                </div>
              </div>
            </div>

            {/* <!-- Company Location --> */}
            <div class="space-y-2">
              <label for="location" class="label">
                Headquarters Location
                <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <i
                  data-lucide="map-pin"
                  class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                ></i>
                <input
                  type="text"
                  id="location"
                  name="location"
                  class="input pl-10"
                  placeholder="City, Country"
                  required
                />
              </div>
            </div>

            {/* <!-- Company Description --> */}
            <div class="space-y-2">
              <label for="description" class="label">
                Company Description
                <span class="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                class="textarea min-h-[120px]"
                placeholder="Tell us about your company, mission, and what makes it a great place to work..."
                required
              ></textarea>
              <p class="text-xs text-muted-foreground">
                Minimum 100 characters. This will be displayed on your company
                profile.
              </p>
            </div>
          </div>

          {/* <!-- Account Security Section --> */}
          <div class="space-y-5">
            <div class="flex items-center gap-2 pb-2 border-b border-border">
              <i data-lucide="shield" class="h-5 w-5 text-primary"></i>
              <h2 class="text-lg font-semibold">Account Security</h2>
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
          </div>

          {/* <!-- Terms and Conditions --> */}
          <div class="space-y-3 pt-2">
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

            <div class="flex items-start gap-2">
              <input
                type="checkbox"
                id="verified"
                name="verified"
                class="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring"
                required
              />
              <label for="verified" class="text-sm text-muted-foreground">
                I confirm that I am an authorized representative of this company
                and have the right to register on its behalf
              </label>
            </div>

            <div class="flex items-start gap-2">
              <input
                type="checkbox"
                id="updates"
                name="updates"
                class="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring"
              />
              <label for="updates" class="text-sm text-muted-foreground">
                Send me product updates, hiring tips, and promotional offers via
                email
              </label>
            </div>
          </div>

          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            class="btn btn-primary w-full text-base h-11 mt-2"
          >
            <i data-lucide="building-2" class="h-4 w-4 mr-2"></i>
            Register Company
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

export default FormComany;
