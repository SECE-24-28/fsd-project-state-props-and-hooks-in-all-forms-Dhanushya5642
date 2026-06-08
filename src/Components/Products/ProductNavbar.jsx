import React from "react";
import logo from "../../Assets/Css/Images/MAIN LOGO.png";

function ProductNavbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-[1600px] mx-auto px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Bodega logo" className="w-12 h-12" />

          <div>
            <h1 className="text-3xl font-bold text-green-800">BODEGA</h1>
            <p className="text-xs text-orange-500 font-medium">Fresh Products, Happy Life</p>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-[550px] h-12 border border-gray-200 rounded-2xl pl-5 pr-12 outline-none"
          />

          <i className="ri-search-line absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>

        <div className="flex items-center gap-10">
          <button className="font-semibold text-gray-700 hover:text-green-700">Wishlist</button>
          <button className="font-semibold text-gray-700 hover:text-green-700">Cart</button>
          <button className="font-semibold text-gray-700 hover:text-green-700">Profile</button>
        </div>
      </div>
    </nav>
  );
}

export default ProductNavbar;
