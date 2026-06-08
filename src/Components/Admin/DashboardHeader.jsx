import React from "react";

function DashboardHeader() {
  return (
    <div className=" mt-6 ml-3 flex justify-between items-start">
      
      {/* Welcome Section */}
      <div>
        <h1 className="text-[28px] font-bold text-[#14532D]">
          Welcome back, Admin!
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Here's what's happening with your store today.
        </p>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search anything..."
            className="
              w-[260px]
              h-10
              bg-white
              border
              border-gray-200
              rounded-xl
              pl-5
              pr-10
              outline-none
              text-sm
              focus:ring-2
              focus:ring-green-200
            "
          />

          <i className="bi bi-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>

        {/* Notification */}
        <button
          className="
            w-10
            h-10
            rounded-xl
            bg-white
            border
            border-gray-200
            flex
            items-center
            justify-center
            relative
            hover:bg-gray-50
          "
        >
          <i className="bi bi-bell text-gray-600"></i>

          <span
            className="
              absolute
              -top-1
              -right-1
              bg-orange-500
              text-white
              text-[10px]
              w-5
              h-5
              rounded-full
              flex
              items-center
              justify-center
            "
          >
            4
          </span>
        </button>

        {/* Date */}
        <button
          className="
            h-10
            px-4
            bg-white
            border
            border-gray-200
            rounded-xl
            text-sm
            flex
            items-center
            gap-2
            whitespace-nowrap
            hover:bg-gray-50
          "
        >
          <i className="bi bi-calendar3"></i>

          <span>May 23, 2025</span>

          <i className="bi bi-chevron-down"></i>
        </button>

      </div>
    </div>
  );
}

export default DashboardHeader;