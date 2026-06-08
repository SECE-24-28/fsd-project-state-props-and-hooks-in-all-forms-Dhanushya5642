import React from "react";

function FilterSidebar() {
  return (
    <aside className="w-[280px] bg-white rounded-3xl border border-gray-100 p-6 h-fit shadow-sm">
      <h3 className="text-xl font-bold mb-6 text-gray-800">
        Filter By
      </h3>

      {/* Availability */}
      <div className="mb-6 border-b border-gray-100 pb-6">
        <h4 className="font-semibold mb-3 text-gray-700">
          Availability
        </h4>
        <label className="flex items-center gap-2 text-gray-600 hover:text-green-800 cursor-pointer">
          <input 
            type="checkbox" 
            className="w-4 h-4 rounded border-gray-300 text-green-700 focus:ring-green-500" 
          />
          <span className="text-sm">In Stock</span>
        </label>
      </div>

      {/* Category */}
      <div className="mb-6 border-b border-gray-100 pb-6">
        <h4 className="font-semibold mb-3 text-gray-700">
          Category
        </h4>
        <div className="space-y-2.5">
          {["Vegetables", "Fruits", "Dairy", "Bakery"].map((cat) => (
            <label key={cat} className="flex items-center gap-2 text-gray-600 hover:text-green-800 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-gray-300 text-green-700 focus:ring-green-500" 
              />
              <span className="text-sm">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-semibold mb-3 text-gray-700">
          Price Range
        </h4>
        <input 
          type="range" 
          min="0" 
          max="500" 
          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-700" 
        />
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>₹0</span>
          <span>₹500</span>
        </div>
      </div>
    </aside>
  );
}

export default FilterSidebar;
