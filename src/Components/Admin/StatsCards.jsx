import React from "react";

function StatsCards() {
  const stats = [
    {
      title: "Total Orders",
      value: "1,248",
      change: "↑ 18.2%",
      changeColor: "text-green-600",
      icon: "bi-bag",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      stroke: "#16A34A",
      path: "M0 18 Q15 5 30 15 T60 12 T100 5",
    },
    {
      title: "Revenue",
      value: "₹2.4L",
      change: "↑ 24.6%",
      changeColor: "text-green-600",
      icon: "bi-currency-rupee",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      stroke: "#F97316",
      path: "M0 20 Q20 5 40 15 T70 10 T100 8",
    },
    {
      title: "Customers",
      value: "932",
      change: "↑ 12.5%",
      changeColor: "text-green-600",
      icon: "bi-people",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      stroke: "#2563EB",
      path: "M0 18 Q15 10 30 15 T60 12 T100 4",
    },
    {
      title: "Low Stock",
      value: "23",
      change: "↓ 8.3%",
      changeColor: "text-red-500",
      icon: "bi-exclamation-triangle",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      stroke: "#DC2626",
      path: "M0 5 Q20 10 40 15 T70 20 T100 25",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-5 mt-8">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-all p-5"
        >
          <div className="flex justify-between">
            <div>
              <p className="text-xs text-gray-400">
                {item.title}
              </p>

              <h2 className="text-2xl font-bold mt-2">
                {item.value}
              </h2>
            </div>

            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${item.iconBg}`}
            >
              <i
                className={`bi ${item.icon} ${item.iconColor}`}
              ></i>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span
              className={`text-xs font-semibold ${item.changeColor}`}
            >
              {item.change}
            </span>

            <span className="text-xs text-gray-400">
              vs last week
            </span>
          </div>

          <div className="mt-4 h-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 30"
            >
              <path
                d={item.path}
                fill="none"
                stroke={item.stroke}
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;