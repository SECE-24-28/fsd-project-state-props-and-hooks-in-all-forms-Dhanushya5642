import React from "react";

function SalesOverview() {
  return (
    <div className="grid grid-cols-3 gap-5 mt-6">

      {/* SALES OVERVIEW */}

      <div className="col-span-2 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">

        <div className="flex justify-between items-center mb-6">

          <div>
            <h3 className="font-semibold text-gray-800">
              Sales Overview
            </h3>

            <p className="text-xs text-gray-400">
              Track your store's performance
            </p>
          </div>

          <button className="border rounded-xl px-3 py-1 text-sm">
            This Month
          </button>

        </div>

        <div className="flex">

          {/* Left Stats */}

          <div className="w-[200px]">

            <p className="text-xs text-gray-400">
              Total Sales
            </p>

            <h2 className="text-3xl font-bold mt-2">
              ₹2,45,680
            </h2>

            <p className="text-green-600 text-sm mt-2">
              ↑ 24.6% from last month
            </p>

            <div className="mt-8">

              <p className="text-xs text-gray-400">
                Average Order Value
              </p>

              <h3 className="text-2xl font-bold mt-2">
                ₹698
              </h3>

            </div>

          </div>

          {/* Graph */}

          <div className="flex-1 relative">

            {/* Grid Lines */}

            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">

              <div className="border-t border-gray-100"></div>
              <div className="border-t border-gray-100"></div>
              <div className="border-t border-gray-100"></div>
              <div className="border-t border-gray-100"></div>
              <div className="border-t border-gray-100"></div>

            </div>

            <svg
              className="w-full h-[220px]"
              viewBox="0 0 600 220"
            >
              <path
                d="
                M20 150
                C60 180,90 70,140 120
                S220 160,260 90
                S350 170,400 80
                S500 170,560 60
                "
                fill="none"
                stroke="#16A34A"
                strokeWidth="4"
                strokeLinecap="round"
              />

              <circle
                cx="560"
                cy="60"
                r="5"
                fill="#16A34A"
              />
            </svg>

            {/* Months */}

            <div className="flex justify-between text-xs text-gray-400 px-2">

              <span>May 1</span>
              <span>May 5</span>
              <span>May 10</span>
              <span>May 15</span>
              <span>May 20</span>
              <span>May 25</span>
              <span>May 31</span>

            </div>

          </div>

        </div>

      </div>

      {/* TOP CATEGORIES */}

      <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">

        <h3 className="font-semibold">
          Top Categories
        </h3>

        <p className="text-xs text-gray-400">
          By Revenue
        </p>

        <div className="space-y-5 mt-6">

          <Category
            icon="bi-flower1"
            color="green"
            title="Vegetables"
            amount="₹86,540"
          />

          <Category
            icon="bi-apple"
            color="orange"
            title="Fruits"
            amount="₹72,320"
          />

          <Category
            icon="bi-droplet-fill"
            color="blue"
            title="Dairy"
            amount="₹51,440"
          />

          <Category
            icon="bi-cup-hot"
            color="purple"
            title="Beverages"
            amount="₹32,100"
          />

          <Category
            icon="bi-box-seam"
            color="red"
            title="Snacks"
            amount="₹18,240"
          />

        </div>

      </div>

    </div>
  );
}

function Category({ icon, color, title, amount }) {
  const colors = {
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-500",
    blue: "bg-blue-100 text-blue-500",
    purple: "bg-purple-100 text-purple-500",
    red: "bg-red-100 text-red-500",
  };

  return (
    <div className="flex justify-between items-center">

      <div className="flex items-center gap-3">

        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${colors[color]}`}
        >
          <i className={`bi ${icon}`}></i>
        </div>

        <span className="text-sm font-medium">
          {title}
        </span>

      </div>

      <span className="font-semibold">
        {amount}
      </span>

    </div>
  );
}

export default SalesOverview;