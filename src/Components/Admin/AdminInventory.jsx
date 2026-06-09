import React, { useState } from "react";
import productsList from "../../productsData";

const getStock = (p) => Math.floor(5 + ((p.id * 17) % 145));

const getStockStatus = (stock) => {
  if (stock <= 10) return { label: "Critical",  cls: "bg-red-100 text-red-600"         };
  if (stock <= 25) return { label: "Low Stock", cls: "bg-orange-100 text-orange-600"   };
  return              { label: "In Stock",  cls: "bg-green-100 text-green-700"      };
};

const categories = ["All", "Vegetables", "Fruits", "Dairy"];

function AdminInventory() {
  const [search,   setSearch]   = useState("");
  const [category, setCategory] = useState("All");
  const [filter,   setFilter]   = useState("All");

  const enriched = productsList.map(p => ({ ...p, stock: getStock(p) }));
  const critical = enriched.filter(p => p.stock <= 10).length;
  const low      = enriched.filter(p => p.stock > 10 && p.stock <= 25).length;
  const inStock  = enriched.filter(p => p.stock > 25).length;

  const filtered = enriched.filter(p => {
    const matchCat    = category === "All" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const status      = getStockStatus(p.stock).label;
    const matchFilter = filter === "All" || status === filter;
    return matchCat && matchSearch && matchFilter;
  });

  return (
    <div className="p-6 flex-1 overflow-y-auto h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Inventory</h2>
          <p className="text-sm text-gray-500 mt-0.5">{filtered.length} products</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "In Stock",  value: inStock,  cls: "bg-green-50 border-green-200 text-green-700"    },
          { label: "Low Stock", value: low,       cls: "bg-orange-50 border-orange-200 text-orange-600" },
          { label: "Critical",  value: critical,  cls: "bg-red-50 border-red-200 text-red-600"          },
        ].map(s => (
          <div key={s.label} className={`border rounded-2xl p-4 ${s.cls}`}>
            <p className="text-xs font-semibold uppercase tracking-wider opacity-70">{s.label}</p>
            <p className="text-3xl font-black mt-1">{s.value}</p>
            <p className="text-xs opacity-60 mt-0.5">products</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 flex-1 max-w-xs">
          <i className="ri-search-line text-gray-400"></i>
          <input type="text" placeholder="Search products..." value={search}
            onChange={e => setSearch(e.target.value)} className="outline-none text-sm text-gray-700 w-full" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map(c => (
            <button key={c} onClick={() => setCategory(c)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition ${category === c ? "bg-green-700 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
              {c}
            </button>
          ))}
          <div className="w-px bg-gray-200 mx-1"></div>
          {["All", "In Stock", "Low Stock", "Critical"].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition ${filter === f ? "bg-gray-800 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {["Product", "Category", "Weight", "Price", "Stock", "Status"].map(h => (
                <th key={h} className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map(p => {
              const { label, cls } = getStockStatus(p.stock);
              return (
                <tr key={p.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img src={p.image} alt={p.name} className="w-9 h-9 rounded-xl object-cover bg-gray-100" />
                      <span className="font-medium text-gray-800">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      p.category === "Vegetables" ? "bg-green-100 text-green-700" :
                      p.category === "Fruits"     ? "bg-orange-100 text-orange-700" :
                      "bg-blue-100 text-blue-700"}`}>
                      {p.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{p.weight}</td>
                  <td className="px-4 py-3 font-bold text-green-700">₹{p.price}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 max-w-[80px] h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${p.stock <= 10 ? "bg-red-500" : p.stock <= 25 ? "bg-orange-400" : "bg-green-500"}`}
                          style={{ width: `${Math.min((p.stock / 150) * 100, 100)}%` }} />
                      </div>
                      <span className="text-gray-700 font-semibold text-xs">{p.stock}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${cls}`}>{label}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminInventory;
