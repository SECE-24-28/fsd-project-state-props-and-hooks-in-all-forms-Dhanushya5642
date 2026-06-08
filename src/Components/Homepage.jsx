import React from "react";
import { Link } from "react-router-dom";
import bagImage from "../Assets/Css/Images/Bag_Image_Generated.png";
import vegetables from "../Assets/Css/Images/Categories/Fresh_Vegetables.png";
import fruits from "../Assets/Css/Images/Categories/Fruits_Collections.png";
import dairy from "../Assets/Css/Images/Categories/Daily_Essentials.png";
import snacks from "../Assets/Css/Images/Categories/SnacksAndBeverages.png";
import personal from "../Assets/Css/Images/Categories/PersonalCare.png";

function Homepage() {
  return (
    <div className="bg-[#f8f8f5]">
      {/* <!--Center Banner--> */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-[78px] leading-[85px] font-bold text-green-900">
              Freshness
              <br />
              Delivered.
            </h1>
            <h1 className="text-[78px] leading-[85px] font-bold text-orange-500">
              Skip the Traffic.
              <br />
              Skip the Queue.
            </h1>
            <p className="text-gray-700 text-xl mt-6 max-w-md">
              Premium quality groceries handpicked for you and delivered to your
              doorstep.
            </p>
            {/* <!-- Features --> */}
            <div className="flex gap-10 mt-10">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border border-green-300 flex items-center justify-center">
                  <i className="ri-secure-payment-line text-green-700 text-2xl"></i>
                </div>
                <p className="text-sm mt-3">
                  No Hidden
                  <br />
                  Charges
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full border border-green-300 flex items-center justify-center">
                  <i className="ri-price-tag-3-line text-green-700 text-2xl"></i>
                </div>

                <p className="text-sm mt-3">
                  Upto 40%
                  <br />
                  Discount
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full border border-green-300 flex items-center justify-center">
                  <i className="ri-wallet-3-line text-green-700 text-2xl"></i>
                </div>

                <p className="text-sm mt-3">
                  Everyday
                  <br />
                  Cashback
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full border border-green-300 flex items-center justify-center">
                  <i className="ri-truck-line text-green-700 text-2xl"></i>
                </div>

                <p className="text-sm mt-3">
                  Fastest
                  <br />
                  Delivery
                </p>
              </div>
            </div>

            <Link
              to="/products"
              className="mt-10 inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-white font-semibold"
            >
              Shop Now
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>

          {/* <!-- Right --> */}
          <div className="relative">
            <img src={bagImage} alt="Bag" className="w-full" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <div className="w-32 h-32 border-2 border-green-400 rounded-full flex flex-col items-center justify-center text-green-700">
                <span className="text-3xl font-bold">100%</span>
                <span className="text-center font-semibold">
                  FRESH
                  <br />
                  ASSURED{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
    <!--Catergories section--> */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-4">
          {/* <!-- Vegetables --> */}
          <div
            style={{
              backgroundImage: `url(${vegetables})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-80 rounded-3xl p-5"
          >
            {" "}
            <h3 className="text-3xl font-bold text-green-900">
              Fresh
              <br />
              Vegetables
            </h3>
            <p className="mt-3">Flat 30% OFF</p>
            {/* <!-- <img src="/Images/References/Categories/Fresh Vegetables.png" className="mt-5" /> -->
             */}
          </div>

          {/* <!-- Fruits --> */}

          <div
            style={{
              backgroundImage: `url(${fruits})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-80 rounded-3xl p-5"
          >
            {" "}
            <h3 className="text-3xl font-bold text-amber-900">
              Fruits
              <br />
              Collection
            </h3>
            <p className="mt-3">Flat 25% OFF</p>
          </div>

          {/* <!-- Dairy --> */}

          <div
            style={{
              backgroundImage: `url(${dairy})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-80 rounded-3xl p-5"
          >
            {" "}
            <h3 className="text-3xl font-bold text-slate-800">
              Dairy
              <br />
              Essentials
            </h3>
            <p className="mt-3">Upto 40% OFF</p>
          </div>

          {/* <!-- Snacks --> */}

          <div
            style={{
              backgroundImage: `url(${snacks})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-80 rounded-3xl p-5"
          >
            {" "}
            <h3 className="text-3xl font-bold text-amber-900">
              Snacks &
              <br />
              Beverages
            </h3>
            <p className="mt-3">Upto 35% OFF</p>
          </div>

          {/* <!-- Personal --> */}

          <div
            style={{
              backgroundImage: `url(${personal})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-80 rounded-3xl p-5"
          >
            {" "}
            <h3 className="text-3xl font-bold text-rose-900">
              Personal
              <br />
              Care
            </h3>
            <p className="mt-3">Upto 30% OFF</p>
          </div>
        </div>
      </section>

      {/* ── CASHBACK BANNER ── */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#013f21] via-[#025c30] to-[#01522b] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* decorative circles */}
          <div className="absolute -top-10 -left-10 w-52 h-52 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-white/5 rounded-full"></div>

          <div className="relative z-10 flex items-center gap-6">
            <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg shrink-0">
              <i className="ri-coupon-2-fill text-green-900 text-4xl"></i>
            </div>
            <div>
              <span className="bg-yellow-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                First Order Offer
              </span>
              <h2 className="text-4xl font-bold text-white mt-2">Get ₹100 Cashback</h2>
              <p className="text-green-200 text-sm mt-1">On your very first order — no minimum required!</p>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="text-center">
              <p className="text-green-300 text-xs mb-2 font-medium">Use Code at Checkout</p>
              <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-6 py-3">
                <i className="ri-gift-2-line text-yellow-400 text-xl"></i>
                <span className="text-white font-bold text-xl tracking-widest">BODEGA100</span>
              </div>
            </div>
            <Link
              to="/products"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-4 rounded-2xl transition flex items-center gap-2 whitespace-nowrap shadow-lg"
            >
              Claim Now <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY BODEGA ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Our Promise</span>
          <h2 className="text-4xl font-bold text-green-900 mt-2">Why Shop With BODEGA?</h2>
          <p className="text-gray-500 text-sm mt-2">Everything you need, nothing you don't.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: "ri-plant-line",          label: "Farm Fresh",       sub: "Direct from farms",    bg: "bg-green-50",  icon_color: "text-green-600" },
            { icon: "ri-price-tag-3-line",    label: "Best Prices",      sub: "Upto 40% off",        bg: "bg-orange-50", icon_color: "text-orange-500" },
            { icon: "ri-box-3-line",          label: "Safe Packing",     sub: "Hygiene guaranteed",  bg: "bg-blue-50",   icon_color: "text-blue-500" },
            { icon: "ri-e-bike-2-line",       label: "10 Min Delivery",  sub: "Fastest in town",    bg: "bg-purple-50", icon_color: "text-purple-500" },
            { icon: "ri-shield-check-line",   label: "Secure Payment",   sub: "100% safe checkout", bg: "bg-teal-50",   icon_color: "text-teal-600" },
            { icon: "ri-refresh-line",        label: "Easy Returns",     sub: "Hassle-free policy", bg: "bg-rose-50",   icon_color: "text-rose-500" },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.bg} rounded-2xl p-5 flex flex-col items-center text-center hover:scale-105 hover:shadow-md transition duration-200 cursor-default`}
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-3">
                <i className={`${item.icon} ${item.icon_color} text-2xl`}></i>
              </div>
              <p className="font-bold text-gray-800 text-sm">{item.label}</p>
              <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEALS OF THE DAY ── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Limited Time</span>
            <h2 className="text-3xl font-bold text-green-900 mt-1">Deals of the Day</h2>
          </div>
          <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 px-4 py-2 rounded-full">
            <i className="ri-timer-flash-line text-orange-500"></i>
            <span className="text-orange-600 font-bold text-sm">Ends Today</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {[
            { name: "Banana Robusta",   price: 37,  old: 55,  img: "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?w=400",  tag: "🔥 Hot Deal" },
            { name: "Fresh Tomatoes",   price: 40,  old: 60,  img: "https://images.pexels.com/photos/533360/pexels-photo-533360.jpeg?w=400",   tag: "🌱 Organic" },
            { name: "Red Apples",       price: 110, old: 150, img: "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?w=400",  tag: "⭐ Bestseller" },
            { name: "Orange Juice 1L",  price: 75,  old: 110, img: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?w=400",  tag: "🥤 Fresh" },
          ].map((deal, i) => {
            const pct = Math.round(((deal.old - deal.price) / deal.old) * 100);
            return (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition duration-300 group">
                <div className="relative overflow-hidden h-44 bg-gray-50">
                  <img
                    src={deal.img}
                    alt={deal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    onError={(e) => { e.target.src = "https://cdn.pixabay.com/photo/2017/10/09/19/23/tomato-2834549_640.jpg"; }}
                  />
                  <span className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {pct}% OFF
                  </span>
                  <span className="absolute top-3 right-3 bg-white/90 text-gray-700 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    {deal.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-sm">{deal.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-green-700 font-bold text-base">₹{deal.price}</span>
                    <span className="text-gray-400 text-xs line-through">₹{deal.old}</span>
                    <span className="ml-auto text-green-600 text-xs font-semibold">Save ₹{deal.old - deal.price}</span>
                  </div>
                  <Link
                    to="/products"
                    className="mt-3 w-full flex items-center justify-center gap-2 border border-green-700 text-green-700 hover:bg-green-700 hover:text-white py-2 rounded-xl text-xs font-semibold transition"
                  >
                    <i className="ri-shopping-cart-2-line"></i> Add to Cart
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 shadow-sm">
          {[
            { icon: "ri-user-smile-line",    value: "50K+",   label: "Happy Customers",  color: "text-green-600" },
            { icon: "ri-shopping-bag-line",  value: "200K+",  label: "Orders Delivered", color: "text-orange-500" },
            { icon: "ri-leaf-line",          value: "500+",   label: "Fresh Products",   color: "text-green-600" },
            { icon: "ri-star-fill",          value: "4.9★",   label: "Average Rating",   color: "text-yellow-500" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-8 px-4 text-center">
              <i className={`${stat.icon} ${stat.color} text-3xl mb-2`}></i>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#013f21] via-[#025c30] to-[#01522b] rounded-3xl px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full"></div>

          <div className="relative z-10">
            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Newsletter
            </span>
            <h2 className="text-3xl font-bold text-white mt-3">Stay Fresh, Stay Updated</h2>
            <p className="text-green-200 text-sm mt-2">Get exclusive deals, recipes & seasonal offers in your inbox.</p>
            <div className="flex gap-2 mt-2">
              {["🎁 Exclusive deals", "🌿 Fresh arrivals", "💸 Special discounts"].map((t, i) => (
                <span key={i} className="bg-white/10 text-green-100 text-xs px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>

          <div className="relative z-10 w-full md:w-auto">
            <div className="flex bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="flex items-center pl-4">
                <i className="ri-mail-line text-gray-400 text-xl"></i>
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-4 text-gray-800 text-sm outline-none min-w-[240px]"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-4 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-green-300 text-xs mt-2 text-center">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
