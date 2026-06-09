import React, { useState } from "react";

const deliveryData = [
  { id: "DEL1234", order: "#ORD1234", customer: "Ravi Kumar",    address: "12, Anna Nagar, Chennai - 600040",      agent: "Murugan K",   time: "10 min",  status: "Delivered"    },
  { id: "DEL1233", order: "#ORD1233", customer: "Sneha Reddy",   address: "45/2, Koramangala, Bengaluru - 560034", agent: "Selvam R",    time: "8 min",   status: "On the Way"   },
  { id: "DEL1232", order: "#ORD1232", customer: "Arjun Mehta",   address: "7, MG Road, Pune - 411001",             agent: "Karthik M",   time: "15 min",  status: "Picked Up"    },
  { id: "DEL1231", order: "#ORD1231", customer: "Priya Sharma",  address: "22, Sector 18, Noida - 201301",         agent: "Unassigned",  time: "—",       status: "Pending"      },
  { id: "DEL1230", order: "#ORD1230", customer: "Kiran Das",     address: "8, Salt Lake, Kolkata - 700064",        agent: "Rajan S",     time: "12 min",  status: "Delivered"    },
  { id: "DEL1229", order: "#ORD1229", customer: "Divya Nair",    address: "3, Palarivattom, Kochi - 682025",       agent: "Anand P",     time: "7 min",   status: "On the Way"   },
  { id: "DEL1228", order: "#ORD1228", customer: "Rahul Singh",   address: "19, Civil Lines, Jaipur - 302006",      agent: "Unassigned",  time: "—",       status: "Pending"      },
];

const statusStyle = {
  "Delivered":  "bg-green-100 text-green-700",
  "On the Way": "bg-blue-100 text-blue-700",
  "Picked Up":  "bg-purple-100 text-purple-700",
  "Pending":    "bg-orange-100 text-orange-600",
};

const filters = ["All", "Pending", "Picked Up", "On the Way", "Delivered"];

const stats = [
  { label: "Total Deliveries", value: "1,248", icon: "ri-truck-line",        color: "text-green-600",  bg: "bg-green-50"  },
  { label: "On the Way",       value: "24",    icon: "ri-route-line",         color: "text-blue-600",   bg: "bg-blue-50"   },
  { label: "Pending",          value: "12",    icon: "ri-time-line",          color: "text-orange-500", bg: "bg-orange-50" },
  { label: "Avg Delivery Time",value: "9 min", icon: "ri-timer-flash-line",   color: "text-purple-600", bg: "bg-purple-50" },
];

function AdminDelivery() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = deliveryData.filter(d => {
    const matchFilter = filter === "All" || d.status === filter;
    const matchSearch = d.customer.toLowerCase().includes(search.toLowerCase()) ||
                        d.order.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="p-6 flex-1 overflow-y-auto h-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Delivery</h2>
        <p className="text-sm text-gray-500 mt-0.5">Track and manage all deliveries</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map(s => (
          <div key={s.label} className={`${s.bg} rounded-2xl p-4 flex items-center gap-4`}>
            <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
              <i className={`${s.icon} ${s.color} text-xl`}></i>
            </div>
            <div>
              <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 flex-1 max-w-xs">
          <i className="ri-search-line text-gray-400"></i>
          <input type="text" placeholder="Search by customer or order ID..." value={search}
            onChange={e => setSearch(e.target.value)} className="outline-none text-sm text-gray-700 w-full" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${filter === f ? "bg-green-700 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {["Delivery ID", "Order", "Customer", "Address", "Agent", "Est. Time", "Status"].map(h => (
                <th key={h} className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map(d => (
              <tr key={d.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 font-bold text-gray-700">{d.id}</td>
                <td className="px-4 py-3 font-semibold text-green-700">{d.order}</td>
                <td className="px-4 py-3 font-medium text-gray-800">{d.customer}</td>
                <td className="px-4 py-3 text-gray-500 text-xs max-w-[200px] truncate">{d.address}</td>
                <td className="px-4 py-3">
                  <span className={`text-sm ${d.agent === "Unassigned" ? "text-red-400 italic" : "text-gray-700 font-medium"}`}>{d.agent}</span>
                </td>
                <td className="px-4 py-3 text-gray-600 font-semibold">{d.time}</td>
                <td className="px-4 py-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyle[d.status]}`}>{d.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDelivery;
