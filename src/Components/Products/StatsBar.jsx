import React from "react";

function StatsBar() {
  return (
    <div className="grid grid-cols-4 gap-5 mb-8">
      
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h3 className="text-2xl font-bold text-green-700">500+</h3>
        <p className="text-gray-700 text-sm mt-1">Products</p>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h3 className="text-2xl font-bold text-green-700">10 Min</h3>
        <p className="text-gray-700 text-sm mt-1">Delivery</p>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h3 className="text-2xl font-bold text-green-700">100%</h3>
        <p className="text-gray-700 text-sm mt-1">Fresh Products</p>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h3 className="text-2xl font-bold text-green-700">24/7</h3>
        <p className="text-gray-700 text-sm mt-1">Support</p>
      </div>

    </div>
  );
}

export default StatsBar;
