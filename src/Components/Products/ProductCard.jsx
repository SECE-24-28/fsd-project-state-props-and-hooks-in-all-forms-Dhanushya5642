import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import { useWishlist } from "../Cart/WishlistContext";

function ProductCard({ product }) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  const stockStatus = () => {
    if (!product.inStock) return { label: "Out of Stock", style: "text-red-500" };
    if (product.stock <= 2) return { label: `Only ${product.stock} left!`, style: "text-orange-500" };
    return { label: "In Stock", style: "text-green-600" };
  };
  const stock = stockStatus();

  return (
    <div className="bg-white rounded-[20px] border border-gray-100 hover:shadow-md transition duration-300 flex flex-col p-4 relative">

      {/* Discount Badge */}
      {discount && (
        <span className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
          {discount}% OFF
        </span>
      )}

      {/* Wishlist */}
      <button
        onClick={() => toggleWishlist(product)}
        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition z-10 cursor-pointer"
      >
        <i className={`${wishlisted ? "ri-heart-fill text-red-500" : "ri-heart-line"} text-xl`}></i>
      </button>

      {/* Image */}
      <div className="flex items-center justify-center h-32 mt-2 mb-3 select-none">
        <img
          src={product.image}
          alt={product.name}
          className="h-28 object-contain"
          onError={(e) => {
            e.target.src = "https://cdn.pixabay.com/photo/2017/10/09/19/23/tomato-2834549_640.jpg";
          }}
        />
      </div>

      {/* Badges */}
      <div className="flex items-center gap-1.5 mb-2 flex-wrap">
        <span className="bg-green-50 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
          🌱 Farm Fresh
        </span>
        <span className="bg-blue-50 text-blue-600 text-[10px] font-semibold px-2 py-0.5 rounded-full">
          🚚 Free Delivery
        </span>
      </div>

      {/* Name */}
      <h3 className="text-sm font-semibold text-gray-800 leading-tight">{product.name}</h3>

      {/* Weight */}
      <p className="text-xs text-gray-500 mt-0.5">{product.weight}</p>

      {/* Rating + Delivery Time */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1">
          <i className="ri-star-fill text-yellow-400 text-xs"></i>
          <span className="text-xs font-semibold text-gray-700">
            {product.rating ? product.rating.split(" ")[0] : "4.8"}
          </span>
          <span className="text-xs text-gray-400">
            {product.rating ? product.rating.split(" ")[1] : "(1.2k)"}
          </span>
        </div>
        <span className="flex items-center gap-1 text-[10px] text-gray-500 font-medium">
          <i className="ri-time-line text-green-600"></i>
          {product.deliveryTime}
        </span>
      </div>

      {/* Price + Strikethrough */}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-base font-bold text-green-700">₹{product.price}</span>
        {product.oldPrice && (
          <span className="text-xs text-gray-400 line-through">₹{product.oldPrice}</span>
        )}
      </div>

      {/* Stock Status */}
      <p className={`text-[10px] font-semibold mt-1 ${stock.style}`}>
        ● {stock.label}
      </p>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={!product.inStock}
        className={`w-full mt-3 py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition duration-200 cursor-pointer
          ${
            !product.inStock
              ? "bg-gray-100 border border-gray-200 text-gray-400 cursor-not-allowed"
              : added
              ? "bg-green-700 text-white border border-green-700"
              : "bg-white border border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
          }`}
      >
        <i className={`text-sm ${added ? "ri-check-line" : "ri-shopping-cart-2-line"}`}></i>
        {!product.inStock ? "Out of Stock" : added ? "Added!" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
