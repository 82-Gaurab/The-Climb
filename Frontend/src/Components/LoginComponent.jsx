import { useState } from "react";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleEmailChange(event) {
    setEmail(() => event.target.value);
    setEmailError("");
  }

  function handlePasswordChange(event) {
    setPassword(() => event.target.value);
    setPasswordError("");
  }

  function handleErrors(event) {
    event.preventDefault();
    let hasError = false;

    if (email === "") {
      setEmailError("Please fill in the email field");
      hasError = true;
    }

    if (password === "") {
      setPasswordError("Please fill in the password field");
      hasError = true;
    }

    if (email.trim() !== "" && !email.includes("@")) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    }

    if (!email.includes(".")) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      hasError = true;
    }

    if (!hasError) {
      alert(`Email: ${email} , Password: ${password}`);
    }
  }

  return (
    <div className="w-fit">
      <form className="flex flex-col items-center  flex-wrap gap-3 p-10 rounded-xl bg-slate-200">
        <p className="text-3xl font-sans mb-3">Login</p>
        <p className="flex flex-col items-center">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            name="email"
            id="email"
            placeholder="Enter Email Address"
            className="pl-2 pt-3 pb-3 border-1 border-gray-400 rounded-md w-2xs focus:outline-cyan-300 focus:outline-1"
          />
          {emailError && <span style={{ color: "red" }}>{emailError}</span>}
        </p>
        <p className="flex flex-col items-center">
          {/* <label htmlFor="password">Password: </label> */}
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter Password"
            className="pl-2 pt-3 pb-3 border-1 border-gray-400 rounded-md w-2xs focus:outline-cyan-300 focus:outline-1"
          />
          {passwordError && (
            <span style={{ color: "red" }}>{passwordError}</span>
          )}
        </p>
        <button
          onClick={handleErrors}
          className="bg-sky-500 pl-5 pr-5 pt-2 pb-2 rounded-3xl w-full cursor-pointer hover:bg-sky-700"
        >
          Log In
        </button>
        <p className="flex flex-wrap gap-2">
          No Account?{" "}
          <a href="#" className="text-blue-500">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}
