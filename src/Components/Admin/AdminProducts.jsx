import React, { useState } from "react";
import productsList from "../../productsData";

const categoryOptions = ["Vegetables", "Fruits", "Dairy", "Snacks", "Beverages", "Personal Care"];
const filterOptions   = ["All", ...categoryOptions];

const emptyForm = { name: "", category: "Vegetables", weight: "", price: "", oldPrice: "", rating: "" };

function AdminProducts({ openForm = false }) {
  const [products, setProducts] = useState(productsList);
  const [search,   setSearch]   = useState("");
  const [category, setCategory] = useState("All");
  const [showForm, setShowForm] = useState(openForm);
  const [form,     setForm]     = useState(emptyForm);
  const [error,    setError]    = useState("");

  const filtered = products.filter(p => {
    const matchCat    = category === "All" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleAdd = () => {
    if (!form.name || !form.price || !form.weight) {
      setError("Name, weight and price are required."); return;
    }
    setError("");
    setProducts(prev => [...prev, {
      id:       prev.length + 1,
      name:     form.name,
      category: form.category,
      weight:   form.weight,
      price:    Number(form.price),
      oldPrice: Number(form.oldPrice) || Number(form.price),
      rating:   form.rating || "New",
      image:    "",
      inStock:  true,
    }]);
    setForm(emptyForm);
    setShowForm(false);
  };

  return (
    <div className="p-6 flex-1 overflow-y-auto h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Products</h2>
          <p className="text-sm text-gray-500 mt-0.5">{filtered.length} products found</p>
        </div>
        <button onClick={() => { setShowForm(!showForm); setError(""); }}
          className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition">
          <i className={`ri-${showForm ? "close" : "add"}-line`}></i> {showForm ? "Cancel" : "Add Product"}
        </button>
      </div>

      {/* Add Product Form */}
      {showForm && (
        <div className="bg-white border border-green-200 rounded-2xl p-5 mb-6 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4">New Product</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Product Name", key: "name",     placeholder: "e.g. Fresh Spinach" },
              { label: "Weight / Unit",key: "weight",   placeholder: "e.g. 500g"          },
              { label: "Price (₹)",    key: "price",    placeholder: "e.g. 40"            },
              { label: "Old Price (₹)",key: "oldPrice", placeholder: "e.g. 60"            },
              { label: "Rating",       key: "rating",   placeholder: "e.g. 4.5 (200)"     },
            ].map(f => (
              <div key={f.key}>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">{f.label}</label>
                <input type="text" placeholder={f.placeholder} value={form[f.key]}
                  onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-green-500 transition" />
              </div>
            ))}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Category</label>
              <select value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-green-500 transition">
                {categoryOptions.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          {error && <p className="text-red-500 text-xs mt-3 flex items-center gap-1"><i className="ri-error-warning-line"></i>{error}</p>}
          <button onClick={handleAdd}
            className="mt-4 bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition">
            Save Product
          </button>
        </div>
      )}

      {/* Filters */}
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 flex-1 max-w-xs">
          <i className="ri-search-line text-gray-400"></i>
          <input type="text" placeholder="Search products..." value={search}
            onChange={e => setSearch(e.target.value)} className="outline-none text-sm text-gray-700 w-full" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {filterOptions.map(cat => (
            <button key={cat} onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${category === cat ? "bg-green-700 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {["Product", "Category", "Weight", "Price", "Old Price", "Rating", "Status"].map(h => (
                <th key={h} className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map(p => (
              <tr key={p.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    {p.image
                      ? <img src={p.image} alt={p.name} className="w-10 h-10 rounded-xl object-cover bg-gray-100" />
                      : <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-700 font-bold text-sm">{p.name.charAt(0)}</div>
                    }
                    <span className="font-medium text-gray-800">{p.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    p.category === "Vegetables"    ? "bg-green-100 text-green-700"  :
                    p.category === "Fruits"        ? "bg-orange-100 text-orange-700":
                    p.category === "Dairy"         ? "bg-blue-100 text-blue-700"   :
                    p.category === "Personal Care" ? "bg-pink-100 text-pink-700"   :
                    "bg-gray-100 text-gray-600"}`}>
                    {p.category}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{p.weight}</td>
                <td className="px-4 py-3 font-bold text-green-700">₹{p.price}</td>
                <td className="px-4 py-3 text-gray-400 line-through">₹{p.oldPrice}</td>
                <td className="px-4 py-3 text-gray-600">{p.rating}</td>
                <td className="px-4 py-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">In Stock</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProducts;
