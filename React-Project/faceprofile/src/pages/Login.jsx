import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../api/axios";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {

    // Check validation here 
    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axiosInstance.post("api/auth/login/", {
        email, password,
      });

      // Save JWT Token in localStorage
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      // Optional user data save
      if (response.data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );
      }
      
      // Redirect to feed page after successful login
      navigate("/");

    } catch (err) {
      console.log(err);

      setError(
        err?.response?.data?.detail ||
        "Invalid email or password"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">

        {/* Title */}
        <h1 className="text-white text-3xl font-bold text-center">
          Welcome Back
        </h1>

        <p className="text-white/70 text-center mt-2 text-sm">
          Login to your FaceProfile account
        </p>

        {/* Email */}
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-6 p-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none border border-white/10 focus:border-white/40"
          placeholder="Enter your email"
        />

        {/* Password */}
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-4 p-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none border border-white/10 focus:border-white/40"
          placeholder="Enter your password"
        />

        {/* Error Message */}
        {error && (
          <div className="mt-4 bg-red-500/20 border border-red-400 text-white text-sm p-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-6 bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition disabled:opacity-70"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Register Link */}
        <p className="text-center text-white/70 text-sm mt-5">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-white font-semibold underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}