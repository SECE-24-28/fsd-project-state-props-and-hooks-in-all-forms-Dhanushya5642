import React, { useState } from "react";
import { Link } from "react-router-dom";

const sampleOrders = [
  {
    id: "#ORD1001", date: "12 Jul 2025", status: "Delivered",
    items: [{ name: "Fresh Tomato", qty: 2, price: 40 }, { name: "Banana", qty: 1, price: 35 }],
    total: 115,
  },
  {
    id: "#ORD1002", date: "15 Jul 2025", status: "Processing",
    items: [{ name: "Milk 1L", qty: 3, price: 60 }, { name: "Butter 100g", qty: 1, price: 55 }],
    total: 235,
  },
  {
    id: "#ORD1003", date: "18 Jul 2025", status: "Shipped",
    items: [{ name: "Apple (500g)", qty: 1, price: 80 }, { name: "Spinach", qty: 2, price: 30 }],
    total: 140,
  },
];

const statusStyle = {
  Delivered:  "bg-green-100 text-green-700",
  Processing: "bg-orange-100 text-orange-600",
  Shipped:    "bg-blue-100 text-blue-600",
  Cancelled:  "bg-red-100 text-red-500",
};

function MyOrders() {
  const [expanded, setExpanded] = useState(null);
  const orders = JSON.parse(localStorage.getItem("myOrders") || "null") || sampleOrders;

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-[#f8f8f5] flex items-center justify-center">
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100 max-w-md w-full">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-shopping-bag-line text-green-500 text-5xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-green-900 mb-2">No orders yet</h2>
          <p className="text-gray-500 text-sm mb-8">Start shopping and your orders will appear here!</p>
          <Link to="/products"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-800 transition">
            Explore Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f8f5] py-10 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <i className="ri-shopping-bag-fill text-green-700"></i> My Orders
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">{orders.length} orders placed</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Orders",    value: orders.length,                                          icon: "ri-list-check",          bg: "bg-green-50",  color: "text-green-700"  },
            { label: "Delivered",       value: orders.filter(o => o.status === "Delivered").length,    icon: "ri-checkbox-circle-line", bg: "bg-blue-50",   color: "text-blue-600"   },
            { label: "Total Spent",     value: `₹${orders.reduce((s, o) => s + o.total, 0)}`,         icon: "ri-money-rupee-circle-line", bg: "bg-orange-50", color: "text-orange-600" },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3">
              <div className={`w-11 h-11 rounded-xl ${s.bg} flex items-center justify-center`}>
                <i className={`${s.icon} ${s.color} text-xl`}></i>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-800">{s.value}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Order Header */}
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer"
                onClick={() => setExpanded(expanded === order.id ? null : order.id)}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                    <i className="ri-shopping-bag-line text-green-700"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{order.id}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{order.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyle[order.status] || "bg-gray-100 text-gray-600"}`}>
                    {order.status}
                  </span>
                  <span className="font-bold text-green-700 text-sm">₹{order.total}</span>
                  <i className={`ri-arrow-${expanded === order.id ? "up" : "down"}-s-line text-gray-400`}></i>
                </div>
              </div>

              {/* Order Items (expanded) */}
              {expanded === order.id && (
                <div className="border-t border-gray-100 px-5 py-4 bg-gray-50">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Items</p>
                  <div className="space-y-2">
                    {order.items.map((item, i) => (
                      <div key={i} className="flex justify-between text-sm text-gray-700">
                        <span>{item.name} × {item.qty}</span>
                        <span className="font-medium text-green-700">₹{item.price * item.qty}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between font-bold text-gray-800">
                    <span>Total</span>
                    <span className="text-green-700">₹{order.total}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-r from-[#013f21] via-[#001f0f] to-[#01522b] rounded-3xl p-7 flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-lg">Need something fresh?</h3>
            <p className="text-green-300 text-sm mt-1">Explore our latest products.</p>
          </div>
          <Link to="/products"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition flex items-center gap-2">
            <i className="ri-shopping-bag-line"></i> Shop Now
          </Link>
        </div>

      </div>
    </div>
  );
}

export default MyOrders;
