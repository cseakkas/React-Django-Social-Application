import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "", 
    email: "",
    phone: "",
    gender: "",
    password: "",
  });
  const [profileImage, setProfileImage] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Email and Password are required.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    
    if (profileImage) {
      data.append("profile_image", profileImage);
    }

    try {
      await axiosInstance.post("api/auth/register/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess("Registration Successfully Done");
      setFormData({
        first_name: "",
        last_name: "", 
        email: "",
        phone: "",
        gender: "",
        password: "",
      });
      setProfileImage(null);

      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (err) {
      console.error(err);
      setError(
        err?.response?.data?.detail || 
        err?.response?.data?.message ||
        "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4 py-12">
      
      <form 
        onSubmit={handleRegister} 
        className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl w-full max-w-2xl border border-white/20 shadow-2xl"
      >
        <h1 className="text-white text-3xl font-bold text-center mb-2">
          Register
        </h1>
        <p className="text-white/70 text-center text-sm mb-6">
          Create your account by filling out the information below
        </p>

        {error && (
          <div className="mb-4 bg-red-500/20 border border-red-500/40 text-red-200 px-4 py-2 rounded-lg text-sm font-medium">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 bg-green-500/20 border border-green-500/40 text-green-200 px-4 py-2 rounded-lg text-sm font-medium">
            {success}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input 
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/40 transition text-sm" 
              placeholder="First Name" 
            />
          </div>

          <div>
            <input 
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/40 transition text-sm" 
              placeholder="Last Name" 
            />
          </div>

           
          
          <div>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/40 transition text-sm" 
              placeholder="Email Address *" 
            />
          </div>

          <div>
            <input 
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/40 transition text-sm" 
              placeholder="Phone Number" 
            />
          </div>

          <div>
            <input 
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/40 transition text-sm" 
              placeholder="Password *" 
            />
          </div>

          <div>
            <select 
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 text-white/80 outline-none focus:ring-2 focus:ring-white/40 transition text-sm appearance-none"
            >
              <option value="" className="text-black">Select Gender</option>
              <option value="M" className="text-black">Male</option>
              <option value="F" className="text-black">Female</option>
              <option value="O" className="text-black">Other</option>
            </select>
          </div>
        </div>

        

        <div className="mt-4">
          <label className="block text-white/80 text-xs font-medium mb-1.5 px-1">
            Profile Picture
          </label>
          <input 
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full text-xs text-white/80 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-white/20 file:text-white hover:file:bg-white/30 file:cursor-pointer bg-white/5 rounded-lg p-1.5 border border-white/10" 
          />
        </div>

        <button 
          type="submit"
          disabled={loading}
          className={`w-full mt-6 bg-white text-black py-3 rounded-lg font-semibold transition text-sm ${
            loading ? "bg-gray-300 cursor-not-allowed" : "hover:bg-gray-200"
          }`}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="text-center text-white/70 text-sm mt-5">
          Already have an account?{" "}
          <Link to="/" className="text-white font-semibold hover:underline">
            Login
          </Link>
        </p>

      </form>
    </div>
  );
}