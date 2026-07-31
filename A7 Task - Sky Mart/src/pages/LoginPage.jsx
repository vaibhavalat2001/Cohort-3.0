import React from "react";

const LoginPage = () => {
  return (
    <div className="h-screen p-10 justify-center flex text-wh w-full bg-black">
      <div className="flex justify-center max-lg:hidden lg:w-1/2">hello</div>
      <div className="flex gap-5 flex-col justify-center items-center lg:w-1/2">
        <div className="text-2xl font-bold">
          <span className="text-(--c1)">
            <i class="ri-water-flash-fill text-(--c1)"></i>
          </span>
          <span>Sky</span>
          <span className="text-(--c1)">Mart</span>
        </div>
        <form action="" className="bg-[#111111] w-100 max-[500px]:w-[80vw] border-2 flex gap-7 flex-col border-zinc-800 p-10 rounded-3xl">
          <div>
            <h1 className="text-2xl font-bold">Sign in</h1>
            <p className="text-zinc-500">Enter your credentials to continue</p>
          </div> 
          <div className="flex flex-col gap-4">
            <input className="outline-none border border-zinc-700 bg-[#1d1d1dff] rounded-2xl p-3" type="email" placeholder="Email address" />
            <input className="outline-none border border-zinc-700 bg-[#1d1d1dff] rounded-2xl p-3" type="password" placeholder="password" />
            <button className="bg-(--c1) text-black text-lg font-bold py-2 rounded-2xl" type="submit">Sign in</button>
          </div>
          <p className="text-zinc-400 text-center">
            Don't have an account?<span className="text-(--c1) font-bold">Create one</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
