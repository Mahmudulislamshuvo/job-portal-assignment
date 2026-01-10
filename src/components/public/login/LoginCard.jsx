import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiMail, FiLock, FiEye, FiEyeOff, FiLogIn } from "react-icons/fi";
import { useLoginMutation } from "../../../features/api/apiSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../../features/auth/authSlice";
import LoadingSpinner from "../../commonComponents/LoadingSpinner";

const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm();

  const from = location.state?.from?.pathname;

  const handleLogin = async (data) => {
    try {
      // 1️⃣ First try: USER
      const userResponse = await login({
        ...data,
        role: "USER",
      }).unwrap();

      // ✅ USER login success
      if (
        userResponse?.success === true ||
        userResponse?.data?.role === "USER"
      ) {
        dispatch(
          userLoggedIn({
            token: userResponse?.token,
            data: userResponse?.data,
          })
        );
        if (from) {
          return navigate(from, { replace: true });
        } else {
          return navigate("/user-dashboard");
        }
      }
    } catch (userError) {
      console.warn("USER login failed, trying COMPANY...");

      try {
        // 2️⃣ Second try: COMPANY
        const companyResponse = await login({
          ...data,
          role: "COMPANY",
        }).unwrap();
        // ✅ COMPANY login success
        if (
          companyResponse?.success === true ||
          companyResponse?.data?.role === "COMPANY"
        ) {
          dispatch(
            userLoggedIn({
              token: companyResponse?.token,
              data: companyResponse?.data,
            })
          );
          if (from) {
            return navigate(from, { replace: true });
          } else {
            return navigate("/company-dashboard");
          }
        }
      } catch (companyError) {
        // 3️⃣ BOTH failed → real error
        console.error("Both login attempts failed");

        setError("root", {
          type: "manual",
          message:
            companyError?.data?.message ||
            userError?.data?.message ||
            "Invalid credentials. Please try again.",
        });
      }
    }
  };

  return (
    <>
      <div className="card p-8 md:p-10">
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="label">
              Email Address
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className={`input pl-10 ${
                  errors.email ? "border-red-500 focus:ring-red-500" : ""
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className="label">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className={`input pl-10 pr-10 ${
                  errors.password ? "border-red-500 focus:ring-red-500" : ""
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {/* <input value={"USER"} type="hidden" {...register("role")} /> */}
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FiEyeOff className="h-4 w-4" />
                ) : (
                  <FiEye className="h-4 w-4" />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {errors.root && (
            <div className="text-red-500 text-sm text-center mt-2 bg-red-50 p-2 rounded">
              {errors.root.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full text-base h-11"
          >
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <FiLogIn className="h-4 w-4 mr-2" />
                Sign In
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-card text-muted-foreground font-medium">
              Or continue with
            </span>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <a
            href="register.html"
            className="text-primary hover:underline font-medium"
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
