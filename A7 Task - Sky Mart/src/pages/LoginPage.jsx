import React, { useState } from "react";
import { Zap, Mail, LockKeyhole, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/AuthHook";

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
    <div className="min-h-screen w-full bg-[#0b0b0b] text-white flex items-center justify-center px-5 py-10">
      {/* Main Container */}
      <div className="w-full max-w-[560px]">
        {/* Logo */}
        <div className="flex justify-center items-center gap-2 mb-10">
          <div className="w-11 h-11 rounded-xl bg-[var(--c1)] flex items-center justify-center">
            <Zap
              size={24}
              className="text-black"
              fill="black"
              strokeWidth={2.5}
            />
          </div>

          <div className="text-2xl font-bold tracking-tight">
            <span>Sky</span>
            <span className="text-[var(--c1)]">Mart</span>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-[#111111] border border-[#292929] rounded-[28px] p-10 shadow-2xl">
          {/* Heading */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Sign in</h1>

            <p className="text-[#777777] text-lg">
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
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#666666]"
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
                  h-[56px]
                  pl-14
                  pr-5
                  rounded-2xl
                  border
                  border-[#383838]
                  bg-[#1d1d1d]
                  text-white
                  placeholder:text-[#666666]
                  outline-none
                  focus:border-[var(--c1)]
                  transition
                "
              />
            </div>
            {errors.email && (
              <p className="-mt-5 px-4 text-red-500">{errors.email.message}</p>
            )}

            {/* Password */}
            <div className="relative">
              <LockKeyhole
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#666666]"
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
                  h-[56px]
                  pl-14
                  pr-14
                  rounded-2xl
                  border
                  border-[#383838]
                  bg-[#1d1d1d]
                  text-white
                  placeholder:text-[#666666]
                  outline-none
                  focus:border-[var(--c1)]
                  transition
                "
              />

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
            {errors.password && (
              <p className="-mt-5 px-4 text-red-500">
                {errors.password.message}
              </p>
            )}

            {/* Sign In Button */}
            <button
              type="submit"
              className="
                mt-1
                h-[64px]
                w-full
                rounded-2xl
                bg-[var(--c1)]
                text-black
                font-semibold
                text-lg
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
          <p className="text-center text-[#666666] mt-8">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              type="button"
              className="text-[var(--c1)] font-semibold hover:underline"
            >
              Create one
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
