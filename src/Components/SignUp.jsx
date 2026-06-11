import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loginBg from "../Assets/Css/Images/New_Login.jpeg";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
      alert("Phone number must start with 6, 7, 8, or 9 and contain 10 digits");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    try {
      // const API_URL =
      //   window.location.hostname === "localhost"
      //     ? "http://localhost:5000"
      //     : "https://fsd-project-1-backend-completion-9i8p.onrender.com";
      const API_URL = "https://fsd-project-1-backend-completion-9i8p.onrender.com";
      const res = await axios.post(`${API_URL}/api/user/signup`, {
        name,
        email,
        phone,
        password,
      });
      localStorage.setItem("userName", name);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);
      alert(res.data.message);
      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="flex justify-end items-center min-h-screen pr-32"
    >
      <div className="bg-white rounded-xl w-[520px] min-h-[620px] p-8 text-center">
        {/* Logo */}
        <div className="m-2">
          <h1 className="font-[1000] text-5xl text-green-900">BODEGA</h1>
          <h4 className="text-md text-red-800">
            A Place to feel fresh Groceries
          </h4>
        </div>

        <div className="w-full">
          <div className="pl-2">
            <h4 className="text-[24px] text-[#165a0d] font-bold">
              Create your account
            </h4>
            <p className="text-gray-500 text-[14px]">
              Enter your details to create your account
            </p>
          </div>

          <div className="mt-6">
            {/* Name */}
            <div className="border border-gray-200 rounded-2xl flex items-center px-3 py-2 mb-5 w-sm">
              <i className="ri-user-3-line text-[#2f6d2f] text-xl mr-4"></i>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full outline-none text-gray-600"
              />
            </div>

            {/* Email */}
            <div className="border border-gray-200 rounded-2xl flex items-center px-3 py-2 mb-5 w-sm">
              <i className="ri-mail-line text-[#2f6d2f] text-xl mr-4"></i>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none text-gray-600"
              />
            </div>

            {/* Phone */}
            <div className="border border-gray-200 rounded-2xl flex items-center px-3 py-2 mb-5 w-sm">
              <i className="ri-smartphone-line text-[#2f6d2f] text-xl mr-4"></i>
              <input
                type="tel"
                placeholder="Phone Number"
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                className="w-full outline-none text-gray-600"
              />
            </div>

            {/* Password */}
            <div className="border border-gray-200 rounded-2xl flex items-center px-3 py-2 mb-3 w-sm">
              <i className="ri-lock-2-line text-[#2f6d2f] text-xl mr-4"></i>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none text-gray-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <i
                  className={`ri-${showPassword ? "eye-off" : "eye"}-line text-xl`}
                ></i>
              </button>
            </div>
          </div>

          {/* Sign Up Button */}
          <div className="mt-4">
            <button
              onClick={handleSignup}
              className="w-full bg-gradient-to-r from-[#2f7d12] to-[#165a0d] text-white py-3 rounded-2xl font-semibold hover:scale-[1.02] transition duration-300"
            >
              Sign Up
            </button>
          </div>

          <div className="ml-15">
            <div className="flex items-center my-2">
              <div className="flex-1 h-[1px] bg-gray-200"></div>
              <span className="px-4 text-gray-400 font-medium">OR</span>
              <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 border border-gray-200 rounded-2xl py-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                  className="w-5 h-5"
                />
                <span className="font-small text-gray-700">
                  Continue with Google
                </span>
              </button>
            </div>

            <div className="text-center mt-3">
              <p className="text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="text-[#2f6d2f] font-semibold">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
