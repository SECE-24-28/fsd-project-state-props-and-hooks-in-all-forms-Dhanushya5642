import React, { useState } from "react";

const initialCoupons = [
  { id: 1, code: "BODEGA100",  discount: "₹100 OFF",  type: "Flat",    minOrder: "No minimum",  usage: 142, limit: 500,  status: "Active",   expiry: "31 Dec 2025" },
  { id: 2, code: "BIGBUY30",   discount: "30% OFF",   type: "Percent", minOrder: "10 products", usage: 89,  limit: 200,  status: "Active",   expiry: "30 Jun 2025" },
  { id: 3, code: "WEEKEND25",  discount: "25% OFF",   type: "Percent", minOrder: "₹200",        usage: 210, limit: 300,  status: "Active",   expiry: "Every Weekend" },
  { id: 4, code: "FLASH2GET1", discount: "Buy 2 Get 1",type: "BOGO",   minOrder: "2 items",     usage: 56,  limit: 100,  status: "Active",   expiry: "Today Only" },
  { id: 5, code: "SUPERFAST",  discount: "Free Delivery",type: "Free Delivery", minOrder: "Any",usage: 330, limit: 1000, status: "Active",   expiry: "31 Dec 2025" },
  { id: 6, code: "SAVE50",     discount: "₹50 OFF",   type: "Flat",    minOrder: "₹300",        usage: 500, limit: 500,  status: "Expired",  expiry: "01 Jan 2025" },
];

const typeColors = {
  Flat:           "bg-green-100 text-green-700",
  Percent:        "bg-blue-100 text-blue-700",
  BOGO:           "bg-purple-100 text-purple-700",
  "Free Delivery":"bg-orange-100 text-orange-700",
};

function AdminOffers() {
  const [coupons, setCoupons]     = useState(initialCoupons);
  const [search, setSearch]       = useState("");
  const [showForm, setShowForm]   = useState(false);
  const [form, setForm]           = useState({ code: "", discount: "", type: "Flat", minOrder: "", limit: "", expiry: "" });

  const filtered = coupons.filter(c =>
    c.code.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (!form.code || !form.discount) return;
    setCoupons(prev => [...prev, {
      id: prev.length + 1,
      code: form.code.toUpperCase(),
      discount: form.discount,
      type: form.type,
      minOrder: form.minOrder || "No minimum",
      usage: 0,
      limit: Number(form.limit) || 100,
      status: "Active",
      expiry: form.expiry || "—",
    }]);
    setForm({ code: "", discount: "", type: "Flat", minOrder: "", limit: "", expiry: "" });
    setShowForm(false);
  };

  const toggleStatus = (id) => {
    setCoupons(prev => prev.map(c => c.id === id
      ? { ...c, status: c.status === "Active" ? "Inactive" : "Active" }
      : c
    ));
  };

  return (
    <div className="p-6 flex-1 overflow-y-auto h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Offers & Coupons</h2>
          <p className="text-sm text-gray-500 mt-0.5">{coupons.filter(c => c.status === "Active").length} active coupons</p>
        </div>
        <button onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition">
          <i className="ri-add-line"></i> Add Coupon
        </button>
      </div>

      {/* Add form */}
      {showForm && (
        <div className="bg-white border border-green-200 rounded-2xl p-5 mb-6 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4">New Coupon</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Coupon Code", key: "code",     placeholder: "e.g. SAVE20" },
              { label: "Discount",    key: "discount",  placeholder: "e.g. ₹50 OFF or 20% OFF" },
              { label: "Min Order",   key: "minOrder",  placeholder: "e.g. ₹300" },
              { label: "Usage Limit", key: "limit",     placeholder: "e.g. 100" },
              { label: "Expiry Date", key: "expiry",    placeholder: "e.g. 31 Dec 2025" },
            ].map(f => (
              <div key={f.key}>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">{f.label}</label>
                <input type="text" placeholder={f.placeholder} value={form[f.key]}
                  onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-green-500" />
              </div>
            ))}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Type</label>
              <select value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-green-500">
                {["Flat", "Percent", "BOGO", "Free Delivery"].map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button onClick={handleAdd} className="bg-green-700 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-green-800 transition">Save Coupon</button>
            <button onClick={() => setShowForm(false)} className="border border-gray-200 px-5 py-2 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition">Cancel</button>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 max-w-xs mb-5">
        <i className="ri-search-line text-gray-400"></i>
        <input type="text" placeholder="Search coupons..." value={search}
          onChange={e => setSearch(e.target.value)} className="outline-none text-sm text-gray-700 w-full" />
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {["Code", "Discount", "Type", "Min Order", "Usage", "Expiry", "Status", "Action"].map(h => (
                <th key={h} className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map(c => (
              <tr key={c.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 font-black text-green-700 tracking-widest">{c.code}</td>
                <td className="px-4 py-3 font-semibold text-gray-800">{c.discount}</td>
                <td className="px-4 py-3"><span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${typeColors[c.type] || "bg-gray-100 text-gray-600"}`}>{c.type}</span></td>
                <td className="px-4 py-3 text-gray-500">{c.minOrder}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: `${Math.min((c.usage / c.limit) * 100, 100)}%` }} />
                    </div>
                    <span className="text-xs text-gray-500">{c.usage}/{c.limit}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-500 text-xs">{c.expiry}</td>
                <td className="px-4 py-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${c.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-500"}`}>{c.status}</span>
                </td>
                <td className="px-4 py-3">
                  <button onClick={() => toggleStatus(c.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${c.status === "Active" ? "bg-red-50 text-red-500 hover:bg-red-100" : "bg-green-50 text-green-700 hover:bg-green-100"}`}>
                    {c.status === "Active" ? "Deactivate" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminOffers;
