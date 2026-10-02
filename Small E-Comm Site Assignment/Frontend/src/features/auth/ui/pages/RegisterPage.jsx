import { Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { userAuth } from "../../hook/useAuth";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { register, handleSubmit, errors, registerForm, password } = userAuth();

  return (
    <div className="min-h-screen bg-[#f8f9fc] flex items-center justify-center px-4 py-8">
      {/* Main Card */}
      <div className="w-full max-w-5xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.10)]">
        <div className="grid min-h-[610px] md:grid-cols-2">
          {/* ================= LEFT SIDE ================= */}
          <div
            className="relative hidden bg-cover bg-center md:flex"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1731170990911-d0406b93ff15?q=80&w=1553&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Content */}
            <div className="relative z-10 flex w-full flex-col justify-between p-6 text-white">
              {/* Brand Badge */}
              <div>
                <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-[9px] font-semibold text-slate-700">
                  AuraSeller Fashion
                </span>
              </div>

              {/* Bottom Content */}
              <div>
                {/* Categories */}
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {["Dresses", "Knitwear", "Outerwear", "Denim"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/20 px-2.5 py-1 text-[8px] font-medium backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <h1 className="max-w-md text-2xl font-bold leading-tight">
                  Empowering modern apparel brands &
                  <br />
                  ateliers worldwide.
                </h1>

                <p className="mt-3 max-w-sm text-[10px] leading-4 text-white/80">
                  Trusted by 12,000+ boutique designers & fashion houses to
                  manage seasonal drops and omnichannel orders.
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center justify-center px-6 py-8 sm:px-8">
            <div className="w-full max-w-md">
              {/* Logo */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-violet-600 to-purple-600 text-xs font-bold text-white">
                    A
                  </div>

                  <span className="text-lg font-bold text-slate-800">
                    Aura<span className="text-violet-600">Seller</span>
                  </span>
                </div>

                {/* Badge */}
                <span className="mt-2 rounded-full bg-violet-50 px-3 py-1 text-[8px] font-semibold tracking-wide text-violet-600">
                  APPAREL & FASHION HUB
                </span>
              </div>

              {/* Google Button */}
              <button
                type="button"
                className="mt-5 flex h-9 w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white text-[11px] font-medium text-slate-700 transition hover:border-violet-300 hover:bg-violet-50"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#4285F4"
                    d="M21.35 12.27c0-.78-.07-1.53-.22-2.25H12v4.26h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.4z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 21.9c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.29v2.52A9.75 9.75 0 0 0 12 21.9z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M6.54 14c-.2-.58-.31-1.2-.31-1.83s.11-1.25.31-1.83V7.82H3.29A9.76 9.76 0 0 0 2.25 12c0 1.57.38 3.05 1.04 4.18L6.54 14z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 6.14c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.23 14.63 2.1 12 2.1a9.75 9.75 0 0 0-8.71 5.72l3.25 2.52C7.31 7.86 9.46 6.14 12 6.14z"
                  />
                </svg>
                Google
              </button>

              {/* Divider */}
              <div className="my-3 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-[8px] font-semibold tracking-wide text-slate-400">
                  OR REGISTER WITH EMAIL
                </span>

                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit(registerForm)}
                className="space-y-2.5"
              >
                {/* Full Name */}
                <div>
                  <label className="mb-1 block text-[10px] font-semibold text-slate-700">
                    Full Name
                  </label>

                  <div className="relative">
                    <UserRound
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      {...register("name", {
                        required: "Full name is required",
                        minLength: {
                          value: 3,
                          message: "Full name must be at least 3 characters",
                        },
                        pattern: {
                          value: /^[A-Za-z]+(?:\s[A-Za-z]+)+$/,
                          message: "Enter your first and last name",
                        },
                      })}
                      type="text"
                      placeholder="e.g. Vaibhav Alat"
                      className="h-9 w-full rounded-md border border-slate-200 bg-white pl-9 pr-3 text-[10px] outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-xs">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1 block text-[10px] font-semibold text-slate-700">
                    Email
                  </label>

                  <div className="relative">
                    <Mail
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      type="email"
                      placeholder="seller@fashionbrand.com"
                      className="h-9 w-full rounded-md border border-slate-200 bg-white pl-9 pr-3 text-[10px] outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password Row */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Password */}
                  <div>
                    <label className="mb-1 block text-[10px] font-semibold text-slate-700">
                      Password
                    </label>

                    <div className="relative">
                      <LockKeyhole
                        size={13}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                          },
                          pattern: {
                            value:
                              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
                            message:
                              "Password must contain uppercase, lowercase, number and special character",
                          },
                        })}
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••••••"
                        className="h-9 w-full rounded-md border border-slate-200 bg-white pl-8 pr-8 text-[10px] outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-violet-600"
                      >
                        {showPassword ? (
                          <EyeOff size={13} />
                        ) : (
                          <Eye size={13} />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-xs">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="mb-1 block text-[10px] font-semibold text-slate-700">
                      Confirm Password
                    </label>

                    <div className="relative">
                      <LockKeyhole
                        size={13}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        {...register("confirmPassword", {
                          required: "Please confirm your password",
                          validate: (value) =>
                            value === password || "Passwords do not match",
                        })}
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••••••"
                        className="h-9 w-full rounded-md border border-slate-200 bg-white pl-8 pr-8 text-[10px] outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-violet-600"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={13} />
                        ) : (
                          <Eye size={13} />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-xs">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Terms */}
                <label className="flex cursor-pointer items-center gap-2 pt-1 text-[9px] text-slate-500">
                  <input
                    type="checkbox"
                    className="h-3 w-3 rounded border-slate-300 accent-violet-600"
                  />

                  <span>
                    I agree to Merchant{" "}
                    <button
                      type="button"
                      className="font-medium text-violet-600 hover:underline"
                    >
                      Terms & Conditions
                    </button>
                  </span>
                </label>

                {/* Create Account */}
                <button
                  type="submit"
                  className="group mt-1 flex h-10 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-violet-600 to-purple-600 text-[11px] font-semibold text-white shadow-[0_7px_18px_rgba(124,58,237,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(124,58,237,0.30)]"
                >
                  Create Merchant Account
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>

              {/* Sign In */}
              <div className="mt-4 border-t border-slate-100 pt-3 text-center">
                <p className="text-[9px] text-slate-500">
                  Already have a seller account?{" "}
                  <button
                    onClick={() => navigate("/")}
                    type="button"
                    className="font-semibold text-violet-600 hover:text-violet-700"
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
