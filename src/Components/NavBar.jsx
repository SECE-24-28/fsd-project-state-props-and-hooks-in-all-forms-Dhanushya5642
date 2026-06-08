import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/Css/Images/MAIN LOGO.png";
import { useState, useEffect } from "react";
import { useCart } from "./Cart/CartContext";
import { useWishlist } from "./Cart/WishlistContext";
function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const { totalItems } = useCart();
  const { totalWishlist } = useWishlist();
  useEffect(() => {

  const loginStatus = localStorage.getItem("isLoggedIn");

  if (loginStatus === "true") {

    setIsLoggedIn(true);

    setUserName(localStorage.getItem("userName"));

  }

}, []);
const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userName");
  localStorage.removeItem("email");
  localStorage.removeItem("phone");

  window.location.href = "/";
};
  return (
    <>
      {/* <!--Top Bar--> */}
      <div className="bg-gradient-to-r from-[#013f21] via-[#001f0f] to-[#01522b] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <i className="ri-time-line"></i>
            <span>Delivering Freshness to Your Home</span>
          </div>

          <div className="flex items-center gap-2">
            <i className="ri-map-pin-line"></i>
            <span>
              49/1, New Gandhipuram, Sendamangalam Post, Namakkal District
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <i className="ri-customer-service-2-line"></i>
              <span>Support</span>
            </div>

            <div className="flex items-center gap-2">
              <i className="ri-phone-line"></i>
              <span>+91 6383945642</span>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Main NavBar--> */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src={logo} alt="BODEGA LOGO" className="w-16 h-16" />
              <div>
                <h1 className="font-bold text-4xl text-green-800">BODEGA</h1>
                <p className="text-xs text-orange-500 font-medium">
                  A Place to Feel Fresh Groceries
                </p>
              </div>
            </div>

            {/* <!--Menu--> */}
            <ul className="flex items-center gap-10 font-semibold text-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `relative ${
                      isActive
                        ? "text-green-800 after:absolute after:left-0 after:-bottom-3 after:w-full after:h-1 after:bg-orange-400 after:rounded-full"
                        : "text-gray-700 hover:text-green-700"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `relative ${
                      isActive
                        ? "text-green-800 after:absolute after:left-0 after:-bottom-3 after:w-full after:h-1 after:bg-orange-400 after:rounded-full"
                        : "text-gray-700 hover:text-green-700"
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `relative ${
                      isActive
                        ? "text-green-800 after:absolute after:left-0 after:-bottom-3 after:w-full after:h-1 after:bg-orange-400 after:rounded-full"
                        : "text-gray-700 hover:text-green-700"
                    }`
                  }
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/wishlist"
                  className={({ isActive }) =>
                    `relative ${
                      isActive
                        ? "text-green-800 after:absolute after:left-0 after:-bottom-3 after:w-full after:h-1 after:bg-orange-400 after:rounded-full"
                        : "text-gray-700 hover:text-green-700"
                    }`
                  }
                >
                  <span className="relative">
                    Wishlist
                    {totalWishlist > 0 && (
                      <span className="absolute -top-3 -right-4 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] flex items-center justify-center font-bold">
                        {totalWishlist}
                      </span>
                    )}
                  </span>
                </NavLink>
              </li>
            </ul>

            {/* <!--Right Side--> */}
            <div className="flex items-center gap-4">
              <Link to="/cart" className="relative flex items-center gap-2 border border-green-200 bg-green-50 px-5 py-3 rounded-xl text-green-800 font-semibold hover:bg-green-100 transition">
                <i className="ri-shopping-cart-line"></i>
                Cart
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>

              {isLoggedIn ? (
                <div className="relative">
  <button
    onClick={() => setShowDropdown(!showDropdown)}
    className="flex items-center gap-2 text-gray-800 font-medium"
  >
    <i className="ri-user-fill text-green-700 text-xl"></i>
    {userName}
    <i className="ri-arrow-down-s-line"></i>
  </button>

  {showDropdown && (
    <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
      
      <button
        className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-2"
      >
        <i className="ri-user-line"></i>
        My Profile
      </button>

      <button
        className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-2"
      >
        <i className="ri-shopping-bag-line"></i>
        My Orders
      </button>

      <button
        onClick={handleLogout}
        className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 flex items-center gap-2"
      >
        <i className="ri-logout-box-r-line"></i>
        Logout
      </button>

    </div>
  )}
</div>
              ) : (
                <Link
  to="/signup"
  className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
>
  Sign Up
</Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
