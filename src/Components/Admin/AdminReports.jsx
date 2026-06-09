import React, { useState } from "react";

const monthlySales = [
  { month: "Jan", revenue: 85000,  orders: 312 },
  { month: "Feb", revenue: 97000,  orders: 356 },
  { month: "Mar", revenue: 112000, orders: 410 },
  { month: "Apr", revenue: 98000,  orders: 378 },
  { month: "May", revenue: 145000, orders: 521 },
];

const categoryRevenue = [
  { name: "Vegetables",  revenue: 86540,  percent: 35, color: "bg-green-500"  },
  { name: "Fruits",      revenue: 72320,  percent: 29, color: "bg-orange-400" },
  { name: "Dairy",       revenue: 51440,  percent: 21, color: "bg-blue-400"   },
  { name: "Beverages",   revenue: 32100,  percent: 13, color: "bg-purple-400" },
  { name: "Snacks",      revenue: 18240,  percent: 7,  color: "bg-red-400"    },
];

const transactions = [
  { id: "#TXN8821", customer: "Ravi Kumar",   amount: "₹1,250", method: "UPI",       date: "23 May 2025", status: "Success" },
  { id: "#TXN8820", customer: "Sneha Reddy",  amount: "₹890",   method: "Card",      date: "23 May 2025", status: "Success" },
  { id: "#TXN8819", customer: "Arjun Mehta",  amount: "₹1,560", method: "Net Banking",date: "22 May 2025", status: "Success" },
  { id: "#TXN8818", customer: "Priya Sharma", amount: "₹430",   method: "UPI",       date: "22 May 2025", status: "Failed"  },
  { id: "#TXN8817", customer: "Kiran Das",    amount: "₹2,100", method: "Card",      date: "21 May 2025", status: "Success" },
  { id: "#TXN8816", customer: "Divya Nair",   amount: "₹670",   method: "COD",       date: "21 May 2025", status: "Pending" },
];

const maxRevenue = Math.max(...monthlySales.map(m => m.revenue));

function AdminReports() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="p-6 flex-1 overflow-y-auto h-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Reports</h2>
        <p className="text-sm text-gray-500 mt-0.5">Business performance overview</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {["overview", "categories", "transactions"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold capitalize transition ${activeTab === tab ? "bg-green-700 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Overview */}
      {activeTab === "overview" && (
        <>
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: "Total Revenue",   value: "₹5.37L", change: "↑ 24.6%", color: "text-green-600",  bg: "bg-green-50"  },
              { label: "Total Orders",    value: "1,977",  change: "↑ 18.2%", color: "text-blue-600",   bg: "bg-blue-50"   },
              { label: "Avg Order Value", value: "₹698",   change: "↑ 5.3%",  color: "text-purple-600", bg: "bg-purple-50" },
              { label: "Cancelled",       value: "43",     change: "↓ 8.1%",  color: "text-red-500",    bg: "bg-red-50"    },
            ].map(s => (
              <div key={s.label} className={`${s.bg} rounded-2xl p-5`}>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{s.label}</p>
                <p className={`text-3xl font-black mt-2 ${s.color}`}>{s.value}</p>
                <p className={`text-xs mt-1 font-semibold ${s.color}`}>{s.change} vs last month</p>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-1">Monthly Revenue</h3>
            <p className="text-xs text-gray-400 mb-6">Jan — May 2025</p>
            <div className="flex items-end gap-6 h-44">
              {monthlySales.map(m => (
                <div key={m.month} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs font-bold text-green-700">₹{(m.revenue / 1000).toFixed(0)}K</span>
                  <div className="w-full bg-gray-100 rounded-xl overflow-hidden" style={{ height: "120px" }}>
                    <div className="w-full bg-gradient-to-t from-green-700 to-green-400 rounded-xl transition-all duration-500"
                      style={{ height: `${(m.revenue / maxRevenue) * 100}%`, marginTop: `${100 - (m.revenue / maxRevenue) * 100}%` }} />
                  </div>
                  <span className="text-xs text-gray-500">{m.month}</span>
                  <span className="text-xs text-gray-400">{m.orders} orders</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Categories */}
      {activeTab === "categories" && (
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-5">Revenue by Category</h3>
          <div className="space-y-5">
            {categoryRevenue.map(c => (
              <div key={c.name}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-semibold text-gray-800">{c.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-green-700">₹{(c.revenue / 1000).toFixed(1)}K</span>
                    <span className="text-xs text-gray-400">{c.percent}%</span>
                  </div>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${c.color} rounded-full transition-all duration-700`} style={{ width: `${c.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Transactions */}
      {activeTab === "transactions" && (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {["Transaction ID", "Customer", "Amount", "Method", "Date", "Status"].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {transactions.map(t => (
                <tr key={t.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-bold text-gray-700">{t.id}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">{t.customer}</td>
                  <td className="px-4 py-3 font-bold text-green-700">{t.amount}</td>
                  <td className="px-4 py-3 text-gray-500">{t.method}</td>
                  <td className="px-4 py-3 text-gray-500">{t.date}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      t.status === "Success" ? "bg-green-100 text-green-700" :
                      t.status === "Failed"  ? "bg-red-100 text-red-600" :
                      "bg-orange-100 text-orange-600"}`}>
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminReports;
