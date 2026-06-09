import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../Assets/Css/Images/MAIN LOGO.png";
import { useState, useEffect } from "react";
import { useCart } from "./Cart/CartContext";
import { useWishlist } from "./Cart/WishlistContext";
import AddressModal from "./AddressModal";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn]       = useState(false);
  const [userName, setUserName]           = useState("");
  const [showDropdown, setShowDropdown]   = useState(false);
  const [userRole, setUserRole]           = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState(() => {
    const email = localStorage.getItem("email") || "";
    return email ? localStorage.getItem(`deliveryAddress_${email}`) || "" : "";
  });
  const [showAddressModal, setShowAddressModal] = useState(false);
  const { totalItems } = useCart();
  const { totalWishlist } = useWishlist();
  const navigate = useNavigate();
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus === "true") {
      setIsLoggedIn(true);
      setUserName(localStorage.getItem("userName"));
      setUserRole(localStorage.getItem("role") || "user");
      const email = localStorage.getItem("email") || "";
      const addr  = localStorage.getItem(`deliveryAddress_${email}`);
      if (!addr) setShowAddressModal(true);
    }
  }, []);
const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userName");
  localStorage.removeItem("email");
  localStorage.removeItem("phone");
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  window.location.href = "/";
};
  return (
    <>
      {showAddressModal && (
        <AddressModal onSave={(addr) => { setDeliveryAddress(addr); setShowAddressModal(false); }} />
      )}

      {/* <!--Top Bar--> */}
      <div className="bg-gradient-to-r from-[#013f21] via-[#001f0f] to-[#01522b] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <i className="ri-time-line"></i>
            <span>Delivering Freshness to Your Home</span>
          </div>

          {/* Address — dynamic */}
          <div className="flex items-center gap-2">
            <i className="ri-map-pin-line"></i>
            {deliveryAddress ? (
              <button
                onClick={() => setShowAddressModal(true)}
                className="hover:text-green-300 transition text-left truncate max-w-xs"
              >
                {deliveryAddress}
              </button>
            ) : isLoggedIn ? (
              <button
                onClick={() => setShowAddressModal(true)}
                className="flex items-center gap-1.5 text-green-300 hover:text-white transition font-medium"
              >
                <i className="ri-add-circle-line"></i>
                Set Delivery Address
              </button>
            ) : (
              <span className="text-white/70">10 Min Delivery • Farm Fresh • Best Prices</span>
            )}
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
          <div className="flex items-center justify-between h-20 gap-4">
            <Link to="/" className="flex items-center gap-2 cursor-pointer shrink-0">
              <img src={logo} alt="BODEGA LOGO" className="w-14 h-14" />
              <div>
                <h1 className="font-extrabold text-4xl text-green-800 tracking-tight">BODEGA</h1>
                <p className="text-[11px] text-orange-500 font-semibold">
                  A Place to Feel Fresh Groceries
                </p>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-xs">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const q = e.target.search.value.trim();
                  if (q) navigate(`/products?search=${encodeURIComponent(q)}`);
                  else navigate("/products");
                }}
                className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5 gap-2 focus-within:border-green-500 focus-within:bg-white transition"
              >
                <i className="ri-search-line text-gray-400 text-sm"></i>
                <input
                  name="search"
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-0 min-w-0"
                />
                <button type="submit" className="text-green-700 hover:text-green-900 transition cursor-pointer shrink-0">
                  <i className="ri-arrow-right-line text-sm"></i>
                </button>
              </form>
            </div>

            {/* <!--Menu--> */}
            <ul className="flex items-center gap-5 font-semibold text-gray-700 shrink-0 text-sm">
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
            <div className="flex items-center gap-3 shrink-0">
              <Link to="/cart" className="relative flex items-center gap-1.5 border border-green-200 bg-green-50 px-3 py-2 rounded-xl text-green-800 font-semibold hover:bg-green-100 transition text-sm">
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
      {userRole === "admin" && (
        <Link to="/admin" onClick={() => setShowDropdown(false)} className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-2 text-green-700 font-semibold border-b border-gray-100">
          <i className="ri-shield-user-line"></i> Admin Panel
        </Link>
      )}
      <Link to="/profile" onClick={() => setShowDropdown(false)} className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-2">
        <i className="ri-user-line"></i> My Profile
      </Link>
      <Link to="/orders" onClick={() => setShowDropdown(false)} className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-2">
        <i className="ri-shopping-bag-line"></i> My Orders
      </Link>
      <button onClick={handleLogout} className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 flex items-center gap-2">
        <i className="ri-logout-box-r-line"></i> Logout
      </button>
    </div>
  )}
</div>
              ) : (
                <Link
  to="/login"
  className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
>
  Login
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
