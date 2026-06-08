import React from "react";

function OfferBanner() {
  return (
    <section className="max-w-[1600px] mx-auto px-10 mt-8">
      <div className="bg-gradient-to-r from-green-700 to-green-900 rounded-[28px] px-10 py-6 flex justify-between items-center text-white">
        
        <div className="flex items-center gap-4">
          <div className="text-4xl">⚡</div>
          <div>
            <h2 className="text-2xl font-bold text-green-900">Delivery in 10 Minutes</h2>
            <p className="text-green-100 text-sm">Fresh groceries delivered super fast</p>
          </div>
        </div>

        <div className="h-12 w-[1px] bg-green-400"></div>

        <div className="flex items-center gap-4">
          <div className="text-4xl">🚚</div>
          <div>
            <h2 className="text-2xl font-bold text-green-900">Free Delivery</h2>
            <p className="text-green-100 text-sm">On orders above ₹499</p>
          </div>
        </div>

        <div className="h-12 w-[1px] bg-green-400"></div>

        <div className="flex items-center gap-4">
          <div className="text-4xl">🥬</div>
          <div>
            <h2 className="text-2xl font-bold text-green-900">Farm Fresh</h2>
            <p className="text-green-100 text-sm">Directly sourced from farmers</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default OfferBanner;
