import React from "react";
import BagImage from "../../Assets/Css/Images/Admin_Left_Bag.png";
import Logo from "../../Assets/Css/Images/MAIN LOGO.png"
function LeftSidebar() {
  return (
    <aside className="w-[220px] h-screen overflow-y-auto bg-gradient-to-b from-[#002714] via-[#012e17] to-[#00180c] text-white flex flex-col p-3">
      <div className="flex items-center gap-3 mb-8">
        <img src={Logo} className="w-12 h-12" />

        <div>
          <h1 className="text-2xl font-bold">BODEGA</h1>
          <p className="text-xs text-yellow-400 font-semibold">Admin Panel</p>
        </div>
      </div>

      <div className="flex-1 space-y-2">
        <div className="h-8 text-xs bg-[#5baa41] rounded-xl flex items-center px-4 gap-3">
          <i className="bi bi-house"></i>
          Dashboard
        </div>

        <div className="h-8 text-xs hover:bg-white/10 rounded-xl flex items-center px-4 gap-3">
          <i className="bi bi-box"></i>
          Products
        </div>

        <div className="h-8 text-xs hover:bg-white/10 rounded-xl flex items-center px-4 gap-3">
          <i className="bi bi-grid"></i>
          Categories
        </div>

        <div className="h-8 text-xs hover:bg-white/10 rounded-xl flex items-center px-4 gap-3">
          <i className="bi bi-cart3"></i>
          Orders
        </div>

        <div className="h-8 text-xs hover:bg-white/10 rounded-xl flex items-center px-4 gap-3">
          <i className="bi bi-people"></i>
          Customers
        </div>

        <div className="h-8 text-xs hover:bg-white/10 rounded-xl flex items-center px-4 gap-3">
          <i className="bi bi-bag"></i>
          Inventory
        </div>

        <div className="h-8 text-xs hover:bg-white/10 rounded-xl flex items-center px-4 gap-3">
          <i className="bi bi-percent"></i>
          Offers & Coupons
        </div>

        <div className="h-8 text-xs hover:bg-white/10 rounded-xl flex items-center px-4 gap-3">
          <i className="bi bi-truck"></i>
          Delivery
        </div>

        <div className="h-8 text-xs hover:bg-white/10 rounded-xl flex items-center px-4 gap-3">
          <i className="bi bi-file-earmark-text"></i>
          Reports
        </div>

        <div className="h-8 text-xs hover:bg-white/10 rounded-xl flex items-center px-4 gap-3">
          <i className="bi bi-gear"></i>
          Settings
        </div>
      </div>

      <div className="mb-3">
        <img
          src={BagImage}
          className="rounded-3xl w-full"
        />
      </div>

      <div className="bg-white/10 rounded-2xl p-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/100" className="w-10 h-10 rounded-full" />

          <div>
            <h3 className="font-semibold text-sm">Admin</h3>

            <p className="text-xs text-green-200">Super Admin</p>
          </div>
        </div>

        <i className="bi bi-chevron-down"></i>
      </div>
    </aside>
  );
}

export default LeftSidebar;
