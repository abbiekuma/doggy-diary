//PAGES/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Logging in with: ", email);
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen flex-col ">
      <h1 className="relative font-primary text-4xl font-bold ">
        <span className="absolute inset-0 text-4xl font-bold text-stroke">
          Welcome!
        </span>
        <span className="relative text-mainTl">Welcome!</span>
      </h1>

      <div className="mb-4">
        <div>
          <label className="block text-lg font-primary mb-1 text-mainT">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-mainT2d p-2 border-2 border-mainT2 rounded-2xl placeholder-mainBg font-primary w-56 text-mainBg"
          />
        </div>
        <div>
          <label className="block text-lg font-primary mb-1 text-mainT">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="bg-mainT2d p-2 border-2 border-mainT2 rounded-2xl placeholder-mainBg font-primary w-56 text-mainBg"
          />
        </div>
      </div>
      <button
        onClick={handleLogin}
        className="text-lg font-primary text-mainBg bg-mainTl text-mainT pl-3 pr-3  rounded-2xl border-4 border-mainT hover:bg-mainBg"
      >
        Sign In
      </button>
    </div>
  );
}
export default Login;
