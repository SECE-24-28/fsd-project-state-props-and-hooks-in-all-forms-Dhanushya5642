import React, { useState, useEffect } from "react";

const API_URL = window.location.hostname === "localhost"
  ? "http://localhost:5000"
  : "https://bodega-backend-3.onrender.com";

function AdminCustomers() {
  const [customers, setCustomers] = useState([]);
  const [search,    setSearch]    = useState("");
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${API_URL}/api/user/all`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        if (data.users) setCustomers(data.users);
        else setError(data.message || "Failed to load");
        setLoading(false);
      })
      .catch(() => { setError("Server error. Make sure backend is running."); setLoading(false); });
  }, []);

  const filtered = customers.filter(c =>
    (c.name || "").toLowerCase().includes(search.toLowerCase()) ||
    (c.email || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 flex-1 overflow-y-auto h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Customers</h2>
          <p className="text-sm text-gray-500 mt-0.5">{filtered.length} customers in database</p>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 max-w-xs mb-5">
        <i className="ri-search-line text-gray-400"></i>
        <input type="text" placeholder="Search by name or email..." value={search}
          onChange={e => setSearch(e.target.value)}
          className="outline-none text-sm text-gray-700 w-full" />
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-24 text-gray-400 gap-3">
          <i className="ri-loader-4-line animate-spin text-3xl"></i>
          <span>Loading customers from database...</span>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center py-24 text-red-400 gap-2">
          <i className="ri-error-warning-line text-2xl"></i>
          <span>{error}</span>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {["Customer", "Email", "Phone", "Role", "Status"].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-10 text-gray-400 text-sm">No customers found.</td>
                </tr>
              ) : filtered.map(c => (
                <tr key={c._id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-sm shrink-0">
                        {(c.name || "?").charAt(0).toUpperCase()}
                      </div>
                      <span className="font-medium text-gray-800">{c.name || "—"}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{c.email}</td>
                  <td className="px-4 py-3 text-gray-500">{c.phone}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      c.role === "admin" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"
                    }`}>
                      {c.role || "user"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      Active
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

export default AdminCustomers;
