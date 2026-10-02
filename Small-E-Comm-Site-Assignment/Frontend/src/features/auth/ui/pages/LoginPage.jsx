import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { userAuth } from "../../hook/useAuth";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { register, loginForm, handleSubmit, errors } = userAuth();


  return (
    <div className="min-h-screen bg-[#f8f9fc] flex items-center justify-center px-4 py-8">
      {/* Main Login Card */}
      <div className="w-full max-w-5xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.08)]">
        <div className="grid min-h-[610px] md:grid-cols-2">
          {/* ================= LEFT SIDE ================= */}
          <div
            className="relative hidden bg-cover bg-center md:flex"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1570857502809-08184874388e?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Content */}
            <div className="relative z-10 flex w-full flex-col justify-between p-7 text-white">
              {/* Top Badge */}
              <div>
                <span className="inline-flex rounded-md bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-wide text-slate-700 shadow-sm">
                  AURASELLER FASHION
                </span>
              </div>

              {/* Bottom Content */}
              <div>
                {/* Category Pills */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {["Dresses", "Knitwear", "Outerwear", "Denim"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/20 px-2.5 py-1 text-[9px] font-medium backdrop-blur-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <h1 className="max-w-sm text-3xl font-bold leading-tight">
                  Empowering modern apparel
                  <br />
                  brands & retailers worldwide.
                </h1>

                <p className="mt-4 max-w-sm text-xs leading-5 text-white/80">
                  Trusted by 12,000+ boutique designers & fashion houses to
                  manage seasonal drops and omnichannel orders.
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center justify-center px-6 py-10 sm:px-12">
            <div className="w-full max-w-md">
              {/* Logo */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-600 to-purple-600 text-sm font-bold text-white shadow-sm">
                    A
                  </div>

                  <span className="text-xl font-bold tracking-tight text-slate-800">
                    Aura<span className="text-violet-600">Seller</span>
                  </span>
                </div>

                {/* Small Badge */}
                <span className="mt-3 rounded-full bg-violet-50 px-3 py-1 text-[9px] font-semibold tracking-wide text-violet-600">
                  APPAREL & FASHION HUB
                </span>
              </div>

              {/* Google Button */}
              <button
                type="button"
                className="mt-7 flex h-11 w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white text-xs font-medium text-slate-700 transition hover:border-violet-300 hover:bg-violet-50"
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
                Continue with Google
              </button>

              {/* Divider */}
              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-[8px] font-semibold tracking-[0.18em] text-slate-400">
                  OR SIGN IN WITH EMAIL
                </span>

                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit(loginForm)} className="space-y-4">
                {/* Email */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-700">
                    Email
                  </label>

                  <div className="relative">
                    <Mail
                      size={15}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-400"
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
                      className="h-11 w-full rounded-md border border-slate-200 bg-white pl-10 pr-3 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-xs font-medium text-slate-700">
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-[10px] font-semibold text-violet-600 hover:text-violet-700"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <LockKeyhole
                      size={15}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-400"
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
                      className="h-11 w-full rounded-md border border-slate-200 bg-white pl-10 pr-10 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-violet-600"
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Remember Me */}
                <label className="flex cursor-pointer items-center gap-2 text-[10px] text-slate-500">
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 rounded border-slate-300 accent-violet-600"
                  />
                  Remember this device for 30 days
                </label>

                {/* Login Button */}
                <button
                  type="submit"
                  className="group flex h-11 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-violet-600 to-purple-600 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(124,58,237,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(124,58,237,0.35)]"
                >
                  Sign In to Fashion Hub
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>

              {/* Register */}
              <p className="mt-6 text-center text-[10px] text-slate-500">
                Don't have a seller account yet?{" "}
                <button
                  onClick={() => navigate("register")}
                  type="button"
                  className="font-semibold text-violet-600 hover:text-violet-700"
                >
                  Register now
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
