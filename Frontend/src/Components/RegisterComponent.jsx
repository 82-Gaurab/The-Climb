import { useState } from "react";

export default function RegisterComponent() {
  return (
    <div>
      <form className="flex flex-col items-center  flex-wrap gap-3 p-10 rounded-xl bg-slate-200 w-fit">
        <p className="text-3xl font-sans mb-3">Register</p>
        <p className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Name"
            className="pl-2 pt-3 pb-3 border-1 border-gray-400 rounded-md w-2xs focus:outline-cyan-300 focus:outline-1"
          />
        </p>
        <p className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Email"
            className="pl-2 pt-3 pb-3 border-1 border-gray-400 rounded-md w-2xs focus:outline-cyan-300 focus:outline-1"
          />
        </p>
        <p className="flex flex-col items-center">
          <input
            type="password"
            placeholder="Password"
            className="pl-2 pt-3 pb-3 border-1 border-gray-400 rounded-md w-2xs focus:outline-cyan-300 focus:outline-1"
          />
        </p>
        <p className="flex flex-col items-center">
          <input
            type="password"
            placeholder="Confirm Password"
            className="pl-2 pt-3 pb-3 border-1 border-gray-400 rounded-md w-2xs focus:outline-cyan-300 focus:outline-1"
          />
        </p>
        <p className="w-full">
          <button className="bg-sky-500 pl-5 pr-5 pt-2 pb-2 rounded-3xl w-full cursor-pointer hover:bg-sky-700">
            Register
          </button>
        </p>

        <p className="flex flex-wrap gap-2">
          Already have an account?{" "}
          <a href="#" className="text-blue-500">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
}
