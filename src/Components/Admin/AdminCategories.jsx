import React, { useState } from "react";
import productsList from "../../productsData";

const initialCategories = [
  { id: 1, name: "Vegetables",   icon: "ri-plant-line",        color: "bg-green-100 text-green-700",   description: "Fresh farm vegetables"       },
  { id: 2, name: "Fruits",       icon: "ri-leaf-line",         color: "bg-orange-100 text-orange-700", description: "Seasonal & exotic fruits"     },
  { id: 3, name: "Dairy",        icon: "ri-drop-line",         color: "bg-blue-100 text-blue-700",     description: "Milk, cheese & dairy items"   },
  { id: 4, name: "Snacks",       icon: "ri-store-2-line",      color: "bg-yellow-100 text-yellow-700", description: "Chips, biscuits & more"       },
  { id: 5, name: "Beverages",    icon: "ri-cup-line",          color: "bg-purple-100 text-purple-700", description: "Juices, teas & drinks"        },
  { id: 6, name: "Personal Care",icon: "ri-heart-pulse-line",  color: "bg-pink-100 text-pink-700",     description: "Skincare & hygiene products"  },
];

const colorOptions = [
  { label: "Green",  value: "bg-green-100 text-green-700"   },
  { label: "Orange", value: "bg-orange-100 text-orange-700" },
  { label: "Blue",   value: "bg-blue-100 text-blue-700"     },
  { label: "Purple", value: "bg-purple-100 text-purple-700" },
  { label: "Pink",   value: "bg-pink-100 text-pink-700"     },
  { label: "Yellow", value: "bg-yellow-100 text-yellow-700" },
];

function AdminCategories() {
  const [categories, setCategories] = useState(initialCategories);
  const [showForm,   setShowForm]   = useState(false);
  const [form,       setForm]       = useState({ name: "", icon: "ri-grid-line", description: "", color: colorOptions[0].value });
  const [error,      setError]      = useState("");

  const getCategoryCount = (name) => productsList.filter(p => p.category === name).length;

  const handleAdd = () => {
    if (!form.name.trim()) { setError("Category name is required."); return; }
    if (categories.find(c => c.name.toLowerCase() === form.name.toLowerCase())) {
      setError("Category already exists."); return;
    }
    setError("");
    setCategories(prev => [...prev, { id: prev.length + 1, name: form.name.trim(), icon: form.icon, color: form.color, description: form.description }]);
    setForm({ name: "", icon: "ri-grid-line", description: "", color: colorOptions[0].value });
    setShowForm(false);
  };

  const handleDelete = (id) => setCategories(prev => prev.filter(c => c.id !== id));

  return (
    <div className="p-6 flex-1 overflow-y-auto h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
          <p className="text-sm text-gray-500 mt-0.5">{categories.length} categories</p>
        </div>
        <button onClick={() => { setShowForm(!showForm); setError(""); }}
          className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition">
          <i className={`ri-${showForm ? "close" : "add"}-line`}></i> {showForm ? "Cancel" : "Add Category"}
        </button>
      </div>

      {/* Add Form */}
      {showForm && (
        <div className="bg-white border border-green-200 rounded-2xl p-5 mb-6 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4">New Category</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Category Name</label>
              <input type="text" placeholder="e.g. Bakery" value={form.name}
                onChange={e => { setForm(p => ({ ...p, name: e.target.value })); setError(""); }}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-green-500 transition" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Description</label>
              <input type="text" placeholder="Short description" value={form.description}
                onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-green-500 transition" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Color Theme</label>
              <select value={form.color} onChange={e => setForm(p => ({ ...p, color: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-green-500 transition">
                {colorOptions.map(c => <option key={c.label} value={c.value}>{c.label}</option>)}
              </select>
            </div>
          </div>
          {error && <p className="text-red-500 text-xs mt-3 flex items-center gap-1"><i className="ri-error-warning-line"></i>{error}</p>}
          <button onClick={handleAdd}
            className="mt-4 bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition">
            Save Category
          </button>
        </div>
      )}

      {/* Category Cards */}
      <div className="grid grid-cols-3 gap-4">
        {categories.map(cat => (
          <div key={cat.id} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition group">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-2xl ${cat.color} flex items-center justify-center`}>
                <i className={`${cat.icon} text-2xl`}></i>
              </div>
              <button onClick={() => handleDelete(cat.id)}
                className="opacity-0 group-hover:opacity-100 transition text-red-400 hover:text-red-600 p-1">
                <i className="ri-delete-bin-line text-sm"></i>
              </button>
            </div>
            <h3 className="font-bold text-gray-800 text-base">{cat.name}</h3>
            <p className="text-xs text-gray-400 mt-1">{cat.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${cat.color}`}>
                {getCategoryCount(cat.name)} products
              </span>
              <span className="text-xs text-green-600 font-semibold">Active</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminCategories;
