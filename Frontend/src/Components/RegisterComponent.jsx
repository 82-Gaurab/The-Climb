import { useState } from "react";

export default function RegisterComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [error, setError] = useState("");

  const handleErrors = (e) => {
    e.preventDefault();
    if (!email || !password || !name || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter a valid email address");
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
    // Proceed with form submission or further validation
  };
  return (
    <div>
      <form className="flex flex-col items-center  flex-wrap gap-3 p-10 rounded-3xl bg-slate-200  w-sm shadow-lg shadow-zinc-700">
        <p className="text-3xl font-sans mb-3 antialiased font-bold text-gray-800">
          Register
        </p>

        {error && <p className="text-red-500">{error}</p>}
        <p className="flex flex-col items-center w-full">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            className="pl-2 pt-3 pb-3 border-1 border-gray-400 rounded-md w-full focus:outline-violet-500 focus:outline-1 focus:shadow-indigo-200 focus:shadow-md"
          />
        </p>
        <p className="flex flex-col items-center w-full">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
              setError("");
            }}
            className="pl-2 pt-3 pb-3 border-1 border-gray-400 rounded-md w-full focus:outline-violet-500 focus:outline-1 focus:shadow-indigo-200 focus:shadow-md"
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </p>
        <p className="flex flex-col items-center w-full">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
              setError("");
            }}
            className="pl-2 pt-3 pb-3 border-1 border-gray-400 rounded-md w-full focus:outline-violet-500 focus:outline-1 focus:shadow-indigo-200 focus:shadow-md"
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </p>
        <p className="flex flex-col items-center w-full">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordError("");
              setError("");
            }}
            className="pl-2 pt-3 pb-3 border-1 border-gray-400 rounded-md w-full focus:outline-violet-500 focus:outline-1 focus:shadow-indigo-200 focus:shadow-md"
          />
          {confirmPasswordError && (
            <p className="text-red-500">{confirmPasswordError}</p>
          )}
        </p>
        <p className="w-full">
          <button
            className="bg-sky-500 pl-5 pr-5 pt-2 pb-2 text-white antialiased rounded-3xl w-full cursor-pointer hover:bg-sky-700 focus:outline-violet-500 focus:outline-1 focus:shadow-indigo-200 focus:shadow-md font-bold color-white"
            onClick={handleErrors}
          >
            Register
          </button>
        </p>

        <p className="flex flex-wrap gap-2">
          Already have an account?{" "}
          <a
            href="#"
            className="text-blue-500 active:text-violet-500 focus:outline-violet-500 focus:outline-1 focus:shadow-indigo-200 focus:shadow-md "
          >
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
}
