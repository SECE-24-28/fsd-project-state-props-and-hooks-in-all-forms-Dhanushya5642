import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = async () => {
  if (!name || !email || !phone || !password) {
    alert("Please fill all the fields");
    return;
  }
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  alert("Please enter a valid email");
  return;
}

const phoneRegex = /^[6-9]\d{9}$/;

if (!phoneRegex.test(phone)) {
  alert(
    "Phone number must start with 6, 7, 8, or 9 and contain 10 digits"
  );
  return;
}
if (password.length < 6) {
  alert("Password must be at least 6 characters");
  return;
}



  try {
    const API_URL = window.location.hostname === "localhost" 
      ? "http://localhost:5000" 
      : "https://bodega-backend-3.onrender.com";

    const res = await axios.post(
      `${API_URL}/api/user/signup`,
      {
        name,
        email,
        phone,
        password,
      }
    );

    alert(res.data.message);

    navigate("/login");
  } catch (error) {
    alert(error.response?.data?.message || "Signup Failed");
  }
};

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f8f8f5]">

      <div className="bg-white w-[400px] rounded-2xl p-8 shadow-lg">

        {/* Logo */}
        <div className="text-center mb-4">
          <h1 className="text-5xl font-black text-green-900">
            BODEGA
          </h1>

          <p className="text-red-700 text-sm">
            A Place to feel fresh Groceries
          </p>
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-green-900">
            Create your account
          </h2>

          <p className="text-gray-500 text-sm">
            Join BODEGA for fresh groceries
          </p>
        </div>

        {/* Full Name */}
        <div className="border border-gray-200 rounded-xl flex items-center px-4 py-3 mb-4">
          <i className="ri-user-3-line text-green-700 text-xl mr-3"></i>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full outline-none"
          />
        </div>

        {/* Email */}
        <div className="border border-gray-200 rounded-xl flex items-center px-4 py-3 mb-4">
          <i className="ri-mail-line text-green-700 text-xl mr-3"></i>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full outline-none"
          />
        </div>

        {/* Phone */}
        <div className="border border-gray-200 rounded-xl flex items-center px-4 py-3 mb-4">
          <i className="ri-smartphone-line text-green-700 text-xl mr-3"></i>

          <input
  type="tel"
  placeholder="Phone Number"
  maxLength={10}
  value={phone}
  onChange={(e) =>
    setPhone(e.target.value.replace(/\D/g, ""))
  }
  className="w-full outline-none"
/>
        </div>

        {/* Password */}
        <div className="border border-gray-200 rounded-xl flex items-center px-4 py-3 mb-5">
          <i className="ri-lock-2-line text-green-700 text-xl mr-3"></i>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full outline-none"
          />
        </div>

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          className="w-full bg-gradient-to-r from-green-700 to-green-900 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
        >
          Sign Up
        </button>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-[1px] bg-gray-200"></div>

          <span className="px-4 text-gray-400 text-sm font-medium">
            OR
          </span>

          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        {/* Google Button */}
        <button
          className="w-full border border-gray-200 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
            alt="Google"
            className="w-5 h-5"
          />

          <span className="text-gray-700 font-medium">
            Continue with Google
          </span>
        </button>

        {/* Login Link */}
        <div className="text-center mt-5">
          <p className="text-gray-500 text-sm">
  Already have an account?{" "}
  <Link
    to="/login"
    className="text-green-800 font-semibold"
  >
    Login
  </Link>
</p>
        </div>

      </div>
    </div>
  );
}

export default Signup;