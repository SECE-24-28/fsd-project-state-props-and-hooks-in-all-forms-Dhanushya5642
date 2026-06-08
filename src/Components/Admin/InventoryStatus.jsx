import React from "react";

function InventoryStatus() {
  const inventory = [
    {
      title: "Vegetables",
      items: "120 Items",
      icon: "bi-flower1",
      color: "green",
    },
    {
      title: "Fruits",
      items: "96 Items",
      icon: "bi-apple",
      color: "orange",
    },
    {
      title: "Dairy",
      items: "54 Items",
      icon: "bi-droplet-fill",
      color: "blue",
    },
    {
      title: "Beverages",
      items: "68 Items",
      icon: "bi-cup-hot",
      color: "purple",
    },
    {
      title: "Snacks",
      items: "43 Items",
      icon: "bi-box-seam",
      color: "red",
    },
  ];

  const colors = {
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-500",
    blue: "bg-blue-100 text-blue-500",
    purple: "bg-purple-100 text-purple-500",
    red: "bg-red-100 text-red-500",
  };

  return (
    <div className="mt-6 mb-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h3 className="font-semibold">
            Inventory Status
          </h3>

          <p className="text-xs text-gray-400">
            Real-time stock overview
          </p>

        </div>

        <button className="text-green-600 text-sm font-medium">
          View All
        </button>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-5 gap-4 mt-6">

        {inventory.map((item) => (
          <div
            key={item.title}
            className="
            border
            rounded-2xl
            p-4
            hover:border-green-300
            hover:shadow-sm
            transition-all
            "
          >

            <div
              className={`
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              ${colors[item.color]}
              `}
            >
              <i className={`bi ${item.icon}`}></i>
            </div>

            <h4 className="font-medium mt-3 text-sm">
              {item.title}
            </h4>

            <p className="text-xs text-gray-400 mt-1">
              {item.items}
            </p>

          </div>
        ))}

      </div>

      {/* Low Stock Warning */}

      <div className="mt-6 border-t pt-4 flex justify-between items-center">

        <div className="flex items-center gap-2 text-orange-500">

          <i className="bi bi-exclamation-triangle"></i>

          <span className="text-sm">
            23 products are running low on stock
          </span>

        </div>

        <button className="text-green-600 text-sm font-medium">
          Manage Inventory
        </button>

      </div>

    </div>
  );
}

export default InventoryStatus;