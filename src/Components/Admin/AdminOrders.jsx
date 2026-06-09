import React, { useState } from "react";

const ordersData = [
  { id: "#ORD1234", customer: "Ravi Kumar",   amount: "₹1,250", date: "23 May 2025", items: 4, status: "Delivered"  },
  { id: "#ORD1233", customer: "Sneha Reddy",  amount: "₹890",   date: "23 May 2025", items: 2, status: "Processing" },
  { id: "#ORD1232", customer: "Arjun Mehta",  amount: "₹1,560", date: "22 May 2025", items: 5, status: "Shipped"    },
  { id: "#ORD1231", customer: "Priya Sharma", amount: "₹430",   date: "22 May 2025", items: 1, status: "Delivered"  },
  { id: "#ORD1230", customer: "Kiran Das",    amount: "₹2,100", date: "21 May 2025", items: 7, status: "Cancelled"  },
  { id: "#ORD1229", customer: "Divya Nair",   amount: "₹670",   date: "21 May 2025", items: 3, status: "Delivered"  },
  { id: "#ORD1228", customer: "Rahul Singh",  amount: "₹980",   date: "20 May 2025", items: 3, status: "Processing" },
  { id: "#ORD1227", customer: "Meena Pillai", amount: "₹1,340", date: "20 May 2025", items: 5, status: "Shipped"    },
  { id: "#ORD1226", customer: "Suresh Babu",  amount: "₹510",   date: "19 May 2025", items: 2, status: "Delivered"  },
  { id: "#ORD1225", customer: "Anitha Raj",   amount: "₹760",   date: "19 May 2025", items: 3, status: "Cancelled"  },
];

const statusStyle = {
  Delivered:  "bg-green-100 text-green-700",
  Processing: "bg-orange-100 text-orange-600",
  Shipped:    "bg-blue-100 text-blue-600",
  Cancelled:  "bg-red-100 text-red-600",
};

const filters = ["All", "Delivered", "Processing", "Shipped", "Cancelled"];

function AdminOrders() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = ordersData.filter(o => {
    const matchStatus = filter === "All" || o.status === filter;
    const matchSearch = o.id.toLowerCase().includes(search.toLowerCase()) ||
                        o.customer.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="p-6 flex-1 overflow-y-auto h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Orders</h2>
          <p className="text-sm text-gray-500 mt-0.5">{filtered.length} orders found</p>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 flex-1 max-w-xs">
          <i className="ri-search-line text-gray-400"></i>
          <input type="text" placeholder="Search by order ID or customer..." value={search}
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
              {["Order ID", "Customer", "Items", "Amount", "Date", "Status"].map(h => (
                <th key={h} className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map(o => (
              <tr key={o.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 font-bold text-green-700">{o.id}</td>
                <td className="px-4 py-3 font-medium text-gray-800">{o.customer}</td>
                <td className="px-4 py-3 text-gray-600">{o.items} items</td>
                <td className="px-4 py-3 font-bold text-gray-800">{o.amount}</td>
                <td className="px-4 py-3 text-gray-500">{o.date}</td>
                <td className="px-4 py-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyle[o.status]}`}>{o.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminOrders;
