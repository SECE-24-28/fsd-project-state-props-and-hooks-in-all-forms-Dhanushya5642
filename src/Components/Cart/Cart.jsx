import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const PROMO_CODES = {
  BODEGA100: 100,
  FRESH20: 20,
  SAVE50: 50,
};

function Cart() {
  const { cartItems, removeFromCart, updateQty, clearCart, subtotal, savedAmount } = useCart();
  const [promoInput, setPromoInput] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoMsg, setPromoMsg] = useState({ text: "", success: false });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const deliveryFee = subtotal >= 499 ? 0 : 40;
  const total = subtotal + deliveryFee - promoDiscount;

  const applyPromo = () => {
    const code = promoInput.trim().toUpperCase();
    if (PROMO_CODES[code]) {
      setPromoDiscount(PROMO_CODES[code]);
      setPromoMsg({ text: `✅ "${code}" applied! You saved ₹${PROMO_CODES[code]}`, success: true });
    } else {
      setPromoDiscount(0);
      setPromoMsg({ text: "❌ Invalid promo code", success: false });
    }
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#f8f8f5] flex items-center justify-center">
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100 max-w-md w-full">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-checkbox-circle-fill text-green-600 text-5xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-green-900 mb-2">Order Placed!</h2>
          <p className="text-gray-500 text-sm mb-1">Your fresh groceries are on the way 🚀</p>
          <p className="text-orange-500 font-semibold text-sm mb-8">Estimated delivery: 10 minutes</p>
          <Link
            to="/products"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#f8f8f5] flex items-center justify-center">
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100 max-w-md w-full">
          <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-shopping-cart-2-line text-orange-400 text-5xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-green-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 text-sm mb-8">Looks like you haven't added anything yet!</p>
          <Link
            to="/products"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-800 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f8f5] text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-green-900">My Cart</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              <span className="text-green-700 font-semibold">{cartItems.length} items</span> in your cart
            </p>
          </div>
          <button
            onClick={clearCart}
            className="flex items-center gap-2 text-xs text-red-500 hover:text-red-600 font-semibold border border-red-200 px-4 py-2 rounded-full hover:bg-red-50 transition cursor-pointer"
          >
            <i className="ri-delete-bin-line"></i>
            Clear Cart
          </button>
        </div>

        {/* Delivery Banner */}
        {subtotal < 499 && (
          <div className="bg-orange-50 border border-orange-200 rounded-2xl px-5 py-3 mb-6 flex items-center gap-3">
            <i className="ri-truck-line text-orange-500 text-xl"></i>
            <p className="text-sm text-orange-700 font-medium">
              Add <span className="font-bold">₹{499 - subtotal} more</span> to get FREE delivery!
            </p>
            <div className="ml-auto h-2 bg-orange-200 rounded-full w-40">
              <div
                className="h-2 bg-orange-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.min((subtotal / 499) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        )}
        {subtotal >= 499 && (
          <div className="bg-green-50 border border-green-200 rounded-2xl px-5 py-3 mb-6 flex items-center gap-3">
            <i className="ri-truck-line text-green-600 text-xl"></i>
            <p className="text-sm text-green-700 font-semibold">🎉 You've unlocked FREE delivery!</p>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4 hover:shadow-sm transition"
              >
                {/* Image */}
                <div className="w-20 h-20 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = "https://cdn.pixabay.com/photo/2017/10/09/19/23/tomato-2834549_640.jpg";
                    }}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{item.weight} • {item.category}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <i className="ri-star-fill text-yellow-400 text-xs"></i>
                        <span className="text-xs text-gray-600 font-medium">{item.rating?.split(" ")[0]}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-300 hover:text-red-500 transition cursor-pointer shrink-0"
                    >
                      <i className="ri-close-line text-lg"></i>
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Qty controls */}
                    <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-2 py-1 border border-gray-100">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-6 h-6 flex items-center justify-center text-green-700 hover:bg-green-100 rounded-lg font-bold transition cursor-pointer"
                      >
                        <i className="ri-subtract-line text-sm"></i>
                      </button>
                      <span className="text-sm font-bold text-gray-800 w-5 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-6 h-6 flex items-center justify-center text-green-700 hover:bg-green-100 rounded-lg font-bold transition cursor-pointer"
                      >
                        <i className="ri-add-line text-sm"></i>
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="font-bold text-green-700 text-base">₹{item.price * item.qty}</p>
                      {item.oldPrice && (
                        <p className="text-xs text-gray-400 line-through">₹{item.oldPrice * item.qty}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Savings Badge */}
            {savedAmount > 0 && (
              <div className="bg-green-50 border border-green-100 rounded-2xl px-5 py-3 flex items-center gap-3">
                <i className="ri-price-tag-3-fill text-green-600 text-xl"></i>
                <p className="text-sm text-green-700 font-semibold">
                  🎉 You're saving <span className="font-bold">₹{savedAmount}</span> on this order!
                </p>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="space-y-4">

            {/* Promo Code */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <i className="ri-coupon-3-line text-orange-500"></i>
                Promo Code
              </h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  placeholder="Enter code"
                  className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-green-400"
                />
                <button
                  onClick={applyPromo}
                  className="bg-green-700 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-green-800 transition cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {promoMsg.text && (
                <p className={`text-xs mt-2 font-medium ${promoMsg.success ? "text-green-600" : "text-red-500"}`}>
                  {promoMsg.text}
                </p>
              )}
              <p className="text-xs text-gray-400 mt-2">Try: BODEGA100 • FRESH20 • SAVE50</p>
            </div>

            {/* Bill Summary */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <i className="ri-bill-line text-green-700"></i>
                Bill Summary
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>₹{subtotal}</span>
                </div>
                {savedAmount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Product Discount</span>
                    <span>- ₹{savedAmount}</span>
                  </div>
                )}
                {promoDiscount > 0 && (
                  <div className="flex justify-between text-orange-500">
                    <span>Promo Discount</span>
                    <span>- ₹{promoDiscount}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span className="flex items-center gap-1">
                    Delivery Fee
                    {deliveryFee === 0 && (
                      <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">FREE</span>
                    )}
                  </span>
                  <span className={deliveryFee === 0 ? "text-green-600 font-semibold" : ""}>
                    {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="border-t border-dashed border-gray-200 pt-3 flex justify-between font-bold text-gray-900 text-base">
                  <span>Total</span>
                  <span className="text-green-700">₹{total}</span>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <i className="ri-map-pin-line text-green-700"></i>
                Delivery To
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                49/1, New Gandhipuram,<br />Sendamangalam Post, Namakkal District
              </p>
              <div className="flex items-center gap-2 mt-3 text-xs text-green-700 font-semibold">
                <i className="ri-time-line"></i>
                Estimated delivery in <span className="text-orange-500 ml-1">10 minutes</span>
              </div>
            </div>

            {/* Place Order */}
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition text-base cursor-pointer shadow-sm"
            >
              <i className="ri-secure-payment-line text-xl"></i>
              Place Order • ₹{total}
            </button>

            <Link
              to="/products"
              className="w-full flex items-center justify-center gap-2 text-sm text-green-700 font-semibold hover:text-green-800 transition"
            >
              <i className="ri-arrow-left-line"></i>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
