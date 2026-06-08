import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "./Cart/WishlistContext";
import { useCart } from "./Cart/CartContext";

function Wishlist() {
  const { wishlistItems, removeFromWishlist, totalWishlist } = useWishlist();
  const { addToCart } = useCart();

  const totalSavings = wishlistItems.reduce(
    (sum, item) => sum + ((item.oldPrice || item.price) - item.price),
    0
  );

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#f8f8f5] flex items-center justify-center">
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100 max-w-md w-full">
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-heart-line text-red-400 text-5xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-green-900 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-500 text-sm mb-8">Save items you love and come back to them anytime!</p>
          <Link
            to="/products"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-800 transition"
          >
            Explore Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f8f5] text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-green-900 flex items-center gap-2">
              <i className="ri-heart-fill text-red-500"></i>
              My Wishlist
            </h1>
            <p className="text-sm text-gray-500 mt-0.5">
              <span className="text-green-700 font-semibold">{totalWishlist} items</span> saved for later
            </p>
          </div>
          <Link
            to="/products"
            className="flex items-center gap-2 text-xs text-green-700 font-semibold border border-green-200 px-4 py-2 rounded-full hover:bg-green-50 transition"
          >
            <i className="ri-add-line"></i>
            Add More Items
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-8 mt-5">
          <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
              <i className="ri-heart-fill text-red-500 text-xl"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{totalWishlist}</p>
              <p className="text-xs text-gray-500">Saved Items</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <i className="ri-price-tag-3-fill text-green-600 text-xl"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-700">₹{totalSavings}</p>
              <p className="text-xs text-gray-500">Potential Savings</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
              <i className="ri-shopping-bag-fill text-orange-500 text-xl"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">
                ₹{wishlistItems.reduce((sum, item) => sum + item.price, 0)}
              </p>
              <p className="text-xs text-gray-500">Total Value</p>
            </div>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {wishlistItems.map((item) => {
            const discount = item.oldPrice
              ? Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)
              : null;

            return (
              <div
                key={item.id}
                className="bg-white rounded-[20px] border border-gray-100 hover:shadow-md transition duration-300 flex flex-col p-4 relative"
              >
                {/* Discount Badge */}
                {discount && (
                  <span className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                    {discount}% OFF
                  </span>
                )}

                {/* Remove from Wishlist */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition z-10 cursor-pointer"
                  title="Remove from wishlist"
                >
                  <i className="ri-heart-fill text-xl"></i>
                </button>

                {/* Image */}
                <div className="flex items-center justify-center h-32 mt-2 mb-3 select-none">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 object-contain"
                    onError={(e) => {
                      e.target.src = "https://cdn.pixabay.com/photo/2017/10/09/19/23/tomato-2834549_640.jpg";
                    }}
                  />
                </div>

                {/* Tags */}
                <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                  <span className="bg-green-50 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    🌱 Farm Fresh
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-gray-800 leading-tight">{item.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{item.weight}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  <i className="ri-star-fill text-yellow-400 text-xs"></i>
                  <span className="text-xs font-semibold text-gray-700">
                    {item.rating?.split(" ")[0]}
                  </span>
                  <span className="text-xs text-gray-400">{item.rating?.split(" ")[1]}</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-base font-bold text-green-700">₹{item.price}</span>
                  {item.oldPrice && (
                    <span className="text-xs text-gray-400 line-through">₹{item.oldPrice}</span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => addToCart(item)}
                    disabled={!item.inStock}
                    className={`flex-1 py-2 px-2 rounded-xl font-semibold text-xs flex items-center justify-center gap-1 transition cursor-pointer
                      ${!item.inStock
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                        : "bg-white border border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                      }`}
                  >
                    <i className="ri-shopping-cart-2-line text-sm"></i>
                    {item.inStock ? "Add to Cart" : "Out of Stock"}
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="w-9 h-9 flex items-center justify-center rounded-xl border border-red-200 text-red-400 hover:bg-red-50 hover:text-red-500 transition cursor-pointer"
                    title="Remove"
                  >
                    <i className="ri-delete-bin-line text-sm"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 bg-gradient-to-r from-[#013f21] via-[#001f0f] to-[#01522b] rounded-3xl p-8 flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-xl">Ready to checkout?</h3>
            <p className="text-green-300 text-sm mt-1">Add all your wishlist items to cart in one click.</p>
          </div>
          <button
            onClick={() => wishlistItems.forEach((item) => item.inStock && addToCart(item))}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition flex items-center gap-2 cursor-pointer"
          >
            <i className="ri-shopping-cart-2-line text-lg"></i>
            Add All to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default Wishlist;
