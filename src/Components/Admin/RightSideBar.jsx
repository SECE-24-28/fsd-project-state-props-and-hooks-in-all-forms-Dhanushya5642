import React from "react";
import RightBanner from "../../Assets/Css/Images/Admin_Right_Img.png";

function RightSidebar() {
  const actions = [
    {
      title: "Add Product",
      icon: "bi-plus-square",
      color: "text-green-600",
    },
    {
      title: "Add Category",
      icon: "bi-box",
      color: "text-orange-500",
    },
    {
      title: "Manage Orders",
      icon: "bi-cart-check",
      color: "text-blue-500",
    },
    {
      title: "Add Offer",
      icon: "bi-tag",
      color: "text-red-500",
    },
    {
      title: "View Reports",
      icon: "bi-file-earmark-text",
      color: "text-purple-500",
    },
    {
      title: "Manage Users",
      icon: "bi-people",
      color: "text-cyan-500",
    },
  ];

  const orders = [
    {
      id: "#ORD1234",
      customer: "Ravi Kumar",
      amount: "₹1,250",
      time: "2 mins ago",
      status: "Delivered",
      statusClass: "bg-green-100 text-green-600",
    },
    {
      id: "#ORD1233",
      customer: "Sneha Reddy",
      amount: "₹890",
      time: "15 mins ago",
      status: "Processing",
      statusClass: "bg-orange-100 text-orange-500",
    },
    {
      id: "#ORD1232",
      customer: "Arjun Mehta",
      amount: "₹1,560",
      time: "30 mins ago",
      status: "Shipped",
      statusClass: "bg-blue-100 text-blue-500",
    },
  ];

  return (
    <aside className="w-[300px] bg-white border-l border-gray-100 p-5 overflow-y-auto">
      {/* Banner */}

      <div className="bg-gradient-to-r from-[#002714] via-[#012e17] to-[#00180c] rounded-3xl p-4 text-white relative overflow-hidden">
        <h3 className="font-semibold text-lg">Fresh Today, Happy Tomorrow</h3>

        <p className="text-xs text-green-100 mt-2">
          Keep your store fresh and
          <br />
          your customers happy.
        </p>

        <button className="mt-4 bg-white text-green-800 text-sm px-4 py-2 rounded-xl font-medium">
          View Store
        </button>

        <img
          src={RightBanner}
          alt="banner"
          className="absolute bottom-0 right-0 w-28"
        />
      </div>

      {/* Quick Actions */}

      <div className="mt-6">
        <h3 className="font-semibold mb-4">Quick Actions</h3>

        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => (
            <div
              key={action.title}
              className="
              border
              rounded-2xl
              p-3
              flex
              items-center
              gap-2
              hover:shadow-sm
              hover:border-green-200
              cursor-pointer
              transition-all
              "
            >
              <i className={`bi ${action.icon} ${action.color}`}></i>

              <span className="text-xs font-medium">{action.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Orders */}

      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Recent Orders</h3>

          <button className="text-green-600 text-sm font-medium">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="
              border
              rounded-2xl
              p-3
              hover:shadow-sm
              transition-all
              "
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-semibold">{order.id}</h4>

                  <p className="text-xs text-gray-400 mt-1">{order.customer}</p>
                </div>

                <span
                  className={`
                  text-xs
                  px-2
                  py-1
                  rounded-lg
                  ${order.statusClass}
                  `}
                >
                  {order.status}
                </span>
              </div>

              <div className="flex justify-between mt-3">
                <span className="font-semibold text-sm">{order.amount}</span>

                <span className="text-xs text-gray-400">{order.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default RightSidebar;
