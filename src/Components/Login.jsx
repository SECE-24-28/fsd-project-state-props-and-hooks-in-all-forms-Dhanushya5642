import React, { useState } from "react";
import loginBg from "../Assets/Css/Images/New_Login.jpeg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const API_URL = "https://fsd-project-1-backend-completion-9i8p.onrender.com";

      const res = await axios.post(`${API_URL}/api/user/login`, { email, password });
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userName", res.data.user.name);
      localStorage.setItem("email", res.data.user.email);
      localStorage.setItem("phone", res.data.user.phone);
      localStorage.setItem("role", res.data.user.role);
      alert("Login Successful");
      navigate("/");
    } catch (error) {
      const msg = error.response?.data?.message || "Invalid Email or Password";
      alert(msg);
    }
  };


  return (
    <>
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
          <div className="m-2">
            <h1 className="font-[1000] text-5xl text-green-900">BODEGA</h1>
            <h4 className="text-md text-red-800">
              A Place to feel fresh Groceries
            </h4>
          </div>

          <div className="w-full">
            <div className="pl-2">
              <h4 className="  text-[24px] text-[#165a0d] font-bold ">
                Login to your account
              </h4>
              <p className=" text-gray-500 text-[14px] pr-0">
                Enter your details to access your account
              </p>
            </div>

            <div className="mt-6">
              <div className="border border-gray-200 rounded-2xl flex items-center px-3 py-2 mb-5 w-sm">
                <i className="ri-smartphone-line text-[#2f6d2f] text-xl mr-4"></i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none text-gray-600"
                />
                <br />
              </div>

              <div className="border border-gray-200 rounded-2xl flex items-center px-3 py-2 mb-3 w-sm">
                <i className="ri-lock-2-line text-[#2f6d2f] text-xl mr-4"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full outline-none text-gray-600"
                />
              </div>
            </div>

            <div className="text-right mb-4">
              <a href="#" className="text-[#2f6d2f] text-sm font-medium ">
                Forget Password?
              </a>
            </div>

            <div>
              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-[#2f7d12] to-[#165a0d] text-white py-3 rounded-2xl font-semibold hover:scale-[1.02] transition duration-300"
              >
                Login
              </button>
            </div>

            <div className="ml-15">
              <div className="flex items-center my-2">
                <div className="flex-1 h-[1px] bg-gray-200"></div>

                <span className="px-4 text-gray-400 font-medium">OR</span>

                <div className="flex-1 h-[1px] bg-gray-200"></div>
              </div>

              <div className="flex gap-4">
                <button
                  className="flex-1 border border-gray-200 rounded-2xl py-4
        flex items-center justify-center gap-3
        hover:bg-gray-50 transition"
                >
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
                  Don’t have an account?
                  <Link to="/signup" className="text-[#2f6d2f] font-semibold">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
