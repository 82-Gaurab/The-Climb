import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../utility/Button";
import axios from "axios";
import { toast } from "react-toastify";

export default function RegisterComponent() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [error, setError] = useState("");

  const handleErrors = async (e) => {
    e.preventDefault();
    if (!email || !password || !name || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }
    setError("");
    try {
      const response = await axios.post("http://localhost:5000/api/user", {
        username: name,
        email,
        password,
      });

      console.log("User registered successfully", response);
      toast.success("User registered successfully!");
      navigate("/login");
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Failed to register user. Please try again."
      );
      console.log(err);
    }
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen">
      <form className="flex flex-col items-center gap-4 pt-10 pr-10 pl-10 pb-4 rounded-3xl w-full sm:w-96 shadow-2xl border border-gray-300">
        <p className="text-3xl font-sans mb-3 font-bold text-gray-800">
          Register
        </p>

        {error && <p className="text-red-500">{error}</p>}

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
          className="pl-4 pt-3 pb-3 border border-gray-400 rounded-md w-full focus:outline-violet-500 focus:ring-1 focus:ring-indigo-200"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
            setError("");
          }}
          className="pl-4 pt-3 pb-3 border border-gray-400 rounded-md w-full focus:outline-violet-500 focus:ring-1 focus:ring-indigo-200"
        />
        {emailError && <p className="text-red-500">{emailError}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError("");
            setError("");
          }}
          className="pl-4 pt-3 pb-3 border border-gray-400 rounded-md w-full focus:outline-violet-500 focus:ring-1 focus:ring-indigo-200"
        />
        {passwordError && <p className="text-red-500">{passwordError}</p>}

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setConfirmPasswordError("");
            setError("");
          }}
          className="pl-4 pt-3 pb-3 border border-gray-400 rounded-md w-full focus:outline-violet-500 focus:ring-1 focus:ring-indigo-200"
        />
        {confirmPasswordError && (
          <p className="text-red-500">{confirmPasswordError}</p>
        )}

        <Button text={"Register"} onClick={handleErrors} />

        <p className="flex flex-wrap gap-2">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-500 active:text-violet-500 focus:outline-violet-500 focus:ring-1 focus:ring-indigo-200"
          >
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
}
