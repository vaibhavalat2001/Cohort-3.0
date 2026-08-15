import React from "react";
import { User, Mail, Lock, Eye, ArrowRight, Zap, EyeOff, LockKeyhole } from "lucide-react";
import { useAuth } from "../hooks/AuthHook";

const RegisterPage = () => {
  const {
    navigate,
    register,
    handleSubmit,
    registerForm,
    errors,
    showPassword,
    setShowPassword,
  } = useAuth();

  return (
    <div className="min-h-screen bg-[#0b0b0b] flex flex-col items-center px-4 py-14 text-white">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10">
        <div className="w-11 h-11 rounded-[13px] bg-[#c6ff00] flex items-center justify-center">
          <Zap size={25} className="text-black fill-black" strokeWidth={3} />
        </div>

        <h1 className="text-[27px] font-bold">
          Sky<span className="text-[#c6ff00]">Mart</span>
        </h1>
      </div>

      {/* Register Card */}
      <div className="w-full max-w-[560px] bg-[#101010] border border-[#292929] rounded-[30px] px-10 py-11">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-[32px] font-semibold tracking-tight">
            Create account
          </h2>

          <p className="text-[#666666] text-[17px] mt-1">
            Join SkyMart and start shopping
          </p>
        </div>
        <form
          onSubmit={handleSubmit(registerForm)}
          className="flex flex-col gap-5"
        >
          {/* Full Name */}
          <div className="relative">
            <User
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#666666]"
            />

            <input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
                pattern: {
                  value: /^[A-Za-z ]+$/,
                  message: "Only letters and spaces are allowed",
                },
              })}
              type="text"
              placeholder="Full name"
              className="w-full h-[57px] rounded-[20px] bg-[#1d1d1d] border border-[#363636]
            pl-[50px] pr-5 text-white placeholder:text-[#666666]
            outline-none focus:border-[#c6ff00]"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 px-4 -mt-5">{errors.name.message}</p>
          )}

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
              className="w-full h-[57px] rounded-[20px] bg-[#1d1d1d] border border-[#363636]
            pl-[50px] pr-5 text-white placeholder:text-[#666666]
            outline-none focus:border-[#c6ff00]"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 px-4 -mt-5">{errors.email.message}</p>
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

          {/* Confirm Password */}
          <div className="relative">
            <Lock
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#666666]"
            />

            <input
              {...register("confirmPass", {
                required: "Confirm your password",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                  message:
                    "Password must contain uppercase, lowercase, number and special character",
                },
                minLength: {
                  value: 8,
                  message: "Password not matching",
                },
              })}
              type="password"
              placeholder="Confirm password"
              className="w-full h-[57px] rounded-[20px] bg-[#1d1d1d] border border-[#363636]
            pl-[50px] pr-5 text-white placeholder:text-[#666666]
            outline-none focus:border-[#c6ff00]"
            />
            
          </div>
          {errors.confirmPass && (
            <p className="text-red-500 pl-4  -mt-5">
              {errors.confirmPass.message}
            </p>
          )}

          {/* Create Account */}
          <button
            type="submit"
            className="w-full h-[65px] mt-0 rounded-[20px] bg-[#c6ff00]
          text-black text-[19px] font-semibold
          flex items-center justify-center gap-3
          hover:bg-[#b9f000] transition"
          >
            Create Account
            <ArrowRight size={22} />
          </button>
        </form>
        {/* Sign In */}
        <p className="text-center text-[#666666] mt-8 text-[16px]">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            type="button"
            className="text-[#c6ff00] font-semibold hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
