import React from "react";
import { Zap, Mail, LockKeyhole, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useAuth } from "../../hooks/AuthHook";

const LoginPage = () => {
  const {
    navigate,
    register,
    handleSubmit,
    loginForm,
    errors,
    showPassword,
    setShowPassword,
  } = useAuth();

  return (
    <div className="min-h-screen w-full bg-[#0b0b0b] text-white">
      {/* Main Layout */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* =====================================================
            LEFT SIDE
        ====================================================== */}
        <div className="hidden lg:flex relative min-h-screen flex-col px-10 xl:px-14 py-12 overflow-hidden">
          {/* Background Glow */}
          <div
            className="
              absolute
              w-125
              h-125
              rounded-full
              bg-(--c1)
              opacity-[0.06]
              blur-[120px]
              -left-45
              bottom-20
            "
          />

          {/* Logo */}
          <div className="relative flex items-center gap-3">
            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-(--c1)
                flex
                items-center
                justify-center
              "
            >
              <Zap
                size={25}
                className="text-black"
                fill="black"
                strokeWidth={2.5}
              />
            </div>

            <div className="text-[27px] font-bold tracking-tight">
              <span>Sky</span>
              <span className="text-(--c1)">Mart</span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative flex flex-1 items-center">
            <div className="w-full max-w-170">
              {/* Small Heading */}
              <p className="text-(--c1) font-bold tracking-wider text-sm mb-6">
                WELCOME BACK
              </p>

              {/* Main Heading */}
              <h1
                className="
                  text-5xl
                  xl:text-6xl
                  font-bold
                  leading-[1.05]
                  tracking-tight
                "
              >
                Shop the future.
                <br />
                <span className="text-(--c1)">Today.</span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-8
                  text-[#777777]
                  text-lg
                  xl:text-xl
                  leading-relaxed
                  max-w-142
                "
              >
                Thousands of products, lightning-fast delivery, and prices that
                make your wallet happy.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 max-w-170">
                {/* Products */}
                <div
                  className="
                    h-21
                    rounded-2xl
                    border
                    border-[#777777]
                    flex
                    flex-col
                    items-center
                    justify-center
                  "
                >
                  <span className="text-(--c1) text-xl font-bold">
                    20K+
                  </span>

                  <span className="text-[#777777] text-sm mt-1">Products</span>
                </div>

                {/* Users */}
                <div
                  className="
                    h-21
                    rounded-2xl
                    border
                    border-[#777777]
                    flex
                    flex-col
                    items-center
                    justify-center
                  "
                >
                  <span className="text-(--c1) text-xl font-bold">
                    50K+
                  </span>

                  <span className="text-[#777777] text-sm mt-1">Users</span>
                </div>

                {/* Rating */}
                <div
                  className="
                    h-21
                    rounded-2xl
                    border
                    border-[#777777]
                    flex
                    flex-col
                    items-center
                    justify-center
                  "
                >
                  <span className="text-(--c1) text-xl font-bold">
                    4.9★
                  </span>

                  <span className="text-[#777777] text-sm mt-1">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE
        ====================================================== */}
        <div
          className="
            min-h-screen
            flex
            items-center
            justify-center
            px-5
            py-10
            lg:border-l
            border-[#292929]
          "
        >
          <div className="w-full max-w-140">
            {/* Login Card */}
            <div
              className="
                bg-[#111111]
                border
                border-[#292929]
                rounded-[28px]
                p-8
                sm:p-10
                shadow-2xl
              "
            >
              {/* Heading */}
              <div className="mb-9">
                <h1 className="text-3xl font-bold mb-2">Sign in</h1>

                <p className="text-[#777777] text-base sm:text-lg">
                  Enter your credentials to continue
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit(loginForm)}
                className="flex flex-col gap-5"
              >
                {/* Email */}
                <div className="relative">
                  <Mail
                    size={20}
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-[#666666]
                    "
                  />

                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    type="email"
                    placeholder="Email address"
                    className="
                      w-full
                      h-14
                      pl-14
                      pr-5
                      rounded-2xl
                      border
                      border-[#383838]
                      bg-[#1d1d1d]
                      text-white
                      placeholder:text-[#666666]
                      outline-none
                      focus:border-(--c1)
                      transition
                    "
                  />
                </div>

                {/* Email Error */}
                {errors.email && (
                  <p className="-mt-4 px-4 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}

                {/* Password */}
                <div className="relative">
                  <LockKeyhole
                    size={20}
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-[#666666]
                    "
                  />

                  <input
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                        message:
                          "Password must contain uppercase, lowercase, number and special character",
                      },
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="
                      w-full
                      h-14
                      pl-14
                      pr-14
                      rounded-2xl
                      border
                      border-[#383838]
                      bg-[#1d1d1d]
                      text-white
                      placeholder:text-[#666666]
                      outline-none
                      focus:border-(--c1)
                      transition
                    "
                  />

                  {/* Show / Hide Password */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                      absolute
                      right-5
                      top-1/2
                      -translate-y-1/2
                      text-[#666666]
                      hover:text-white
                      transition
                    "
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {/* Password Error */}
                {errors.password && (
                  <p className="-mt-4 px-4 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="
                    mt-1
                    h-14
                    sm:h-16
                    w-full
                    rounded-2xl
                    bg-(--c1)
                    text-black
                    font-semibold
                    text-base
                    sm:text-lg
                    flex
                    items-center
                    justify-center
                    gap-3
                    hover:brightness-95
                    active:scale-[0.99]
                    transition
                  "
                >
                  <span>Sign in</span>
                  <ArrowRight size={22} />
                </button>
              </form>

              {/* Register */}
              <p className="text-center text-[#666666] mt-8 text-sm sm:text-base">
                Don't have an account?{" "}
                <button
                  onClick={() => navigate("/register")}
                  type="button"
                  className="
                    text-(--c1)
                    font-semibold
                    hover:underline
                  "
                >
                  Create one
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
