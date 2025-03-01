import Button from "../utility/Button";
import { useState } from "react";
import axios from "axios";
import "../Styles/Login.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(() => event.target.value);
    setError("");
  }

  function handlePasswordChange(event) {
    setPassword(() => event.target.value);
    setError("");
  }

  async function handleErrors(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log("Logged in", response);

      if (response.data && response.data.data.access_token) {
        localStorage.setItem("token", response.data.data.access_token);
        toast.success("Logged in successfully!");
        navigate("/admin");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }

      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  }

  return (
    <div className="w-fit m-auto flex items-center justify-center min-h-screen">
      <form className="flex flex-col items-center flex-wrap gap-sm p-10 rounded-3xl w-sm shadow-2xl shadow-zinc-500 border-slate-300 border-[1px]">
        <p className="text-3xl font-sans mb-3 antialiased font-bold text-gray-800">
          Login
        </p>
        {error && <p className="text-red-500">{error}</p>}{" "}
        <p className="flex flex-col items-center w-full">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            name="email"
            id="email"
            placeholder="Enter Email Address"
            className="pl-2 pt-3 pb-3 border-1 border-gray-400 rounded-md w-full focus:outline-violet-500 focus:outline-1 focus:shadow-indigo-200 focus:shadow-md"
          />
        </p>
        <p className="flex flex-col items-center w-full">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter Password"
            className="pl-2 pt-3 pb-3 border-1 border-gray-400 rounded-md w-full focus:outline-violet-500 focus:outline-1 focus:shadow-indigo-200 focus:shadow-md"
          />
        </p>
        <Button text={"Log In"} onClick={handleErrors} />
        <p className="flex flex-wrap gap-2">
          No Account?{" "}
          <a
            href="/signup"
            className="text-blue-500 active:text-violet-500 focus:outline-violet-500 focus:outline-1 focus:shadow-indigo-200 focus:shadow-md"
            style={{ textDecoration: "none" }}
          >
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}
