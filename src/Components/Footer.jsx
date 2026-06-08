import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Css/Images/MAIN LOGO.png";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0a1f0f] text-gray-300 mt-0">

      {/* ── APP DOWNLOAD STRIP ── */}
      <div className="bg-gradient-to-r from-[#013f21] via-[#025c30] to-[#01522b] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">
              <i className="ri-smartphone-line text-white text-2xl"></i>
            </div>
            <div>
              <p className="text-white font-bold text-lg">Get the BODEGA App</p>
              <p className="text-green-300 text-sm">Order faster, track live & get app-only deals</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 bg-black border border-white/20 hover:border-white/50 px-5 py-3 rounded-xl transition group">
              <i className="ri-apple-fill text-white text-2xl"></i>
              <div>
                <p className="text-gray-400 text-[10px]">Download on the</p>
                <p className="text-white font-bold text-sm">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 bg-black border border-white/20 hover:border-white/50 px-5 py-3 rounded-xl transition group">
              <i className="ri-google-play-fill text-white text-2xl"></i>
              <div>
                <p className="text-gray-400 text-[10px]">Get it on</p>
                <p className="text-white font-bold text-sm">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER BODY ── */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* COL 1 — Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="BODEGA" className="w-12 h-12 rounded-xl" />
            <div>
              <h2 className="text-white font-bold text-2xl">BODEGA</h2>
              <p className="text-orange-400 text-xs font-medium">A Place to Feel Fresh Groceries</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Your trusted neighbourhood grocery store — now online. Farm-fresh produce, daily essentials, and more delivered to your door in under 10 minutes.
          </p>

          {/* Delivery promise badges */}
          <div className="flex flex-wrap gap-2 mt-5">
            {[
              { icon: "ri-time-line",         label: "10 Min Delivery" },
              { icon: "ri-shield-check-line", label: "100% Fresh" },
              { icon: "ri-truck-line",        label: "Free above ₹499" },
            ].map((b, i) => (
              <span key={i} className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full">
                <i className={`${b.icon} text-green-400`}></i>
                {b.label}
              </span>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3 mt-6">
            <p className="text-gray-500 text-xs">Follow us:</p>
            {[
              { icon: "ri-instagram-line",  href: "#", color: "hover:bg-pink-600" },
              { icon: "ri-facebook-fill",   href: "#", color: "hover:bg-blue-600" },
              { icon: "ri-twitter-x-line",  href: "#", color: "hover:bg-gray-600" },
              { icon: "ri-youtube-line",    href: "#", color: "hover:bg-red-600" },
              { icon: "ri-whatsapp-line",   href: "#", color: "hover:bg-green-600" },
            ].map((s, i) => (
              <a key={i} href={s.href} className={`w-9 h-9 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white ${s.color} hover:border-transparent transition`}>
                <i className={`${s.icon} text-base`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* COL 2 — Quick Links */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { label: "Home",          to: "/" },
              { label: "Products",      to: "/products" },
              { label: "About Us",      to: "/about" },
              { label: "My Cart",       to: "/cart" },
              { label: "My Wishlist",   to: "/wishlist" },
              { label: "Login",         to: "/login" },
              { label: "Sign Up",       to: "/signup" },
            ].map((l, i) => (
              <li key={i}>
                <Link to={l.to} className="flex items-center gap-2 text-gray-400 hover:text-green-400 text-sm transition group">
                  <i className="ri-arrow-right-s-line text-green-600 group-hover:translate-x-1 transition-transform"></i>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COL 3 — Categories */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Categories</h3>
          <ul className="space-y-3">
            {[
              { label: "Fresh Vegetables" },
              { label: "Fruits" },
              { label: "Dairy & Eggs" },
              { label: "Snacks" },
              { label: "Beverages" },
              { label: "Personal Care" },
              { label: "Bakery" },
            ].map((c, i) => (
              <li key={i}>
                <Link to="/products" className="flex items-center gap-2 text-gray-400 hover:text-green-400 text-sm transition group">
                  <i className="ri-arrow-right-s-line text-green-600 group-hover:translate-x-1 transition-transform"></i>
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COL 4 — Contact + Newsletter */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3 text-gray-400">
              <i className="ri-map-pin-2-line text-green-400 mt-0.5 shrink-0"></i>
              <span>49/1, New Gandhipuram, Sendamangalam Post, Namakkal District, Tamil Nadu</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <i className="ri-phone-line text-green-400 shrink-0"></i>
              <a href="tel:+916383945642" className="hover:text-green-400 transition">+91 6383945642</a>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <i className="ri-mail-line text-green-400 shrink-0"></i>
              <a href="mailto:support@bodega.in" className="hover:text-green-400 transition">support@bodega.in</a>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <i className="ri-time-line text-green-400 shrink-0"></i>
              <span>Mon–Sun: 6:00 AM – 11:00 PM</span>
            </li>
          </ul>

          {/* Newsletter */}
          <div className="mt-6">
            <p className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
              <i className="ri-mail-send-line text-green-400"></i> Subscribe for Offers
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 bg-green-900/40 border border-green-700/50 rounded-xl px-4 py-3">
                <i className="ri-checkbox-circle-fill text-green-400 text-lg"></i>
                <p className="text-green-300 text-sm font-medium">You're subscribed!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-green-500 transition"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl text-sm transition"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── TRUST BADGES ── */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: "ri-secure-payment-line",   label: "100% Secure Payments" },
            { icon: "ri-verified-badge-line",   label: "FSSAI Certified" },
            { icon: "ri-recycle-line",          label: "Eco Friendly Packaging" },
            { icon: "ri-customer-service-2-line", label: "24/7 Customer Support" },
            { icon: "ri-award-line",            label: "Quality Assured" },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-500 text-xs">
              <i className={`${b.icon} text-green-600 text-base`}></i>
              {b.label}
              {i < 4 && <span className="ml-6 text-white/10 hidden md:block">|</span>}
            </div>
          ))}
        </div>
      </div>

      {/* ── PAYMENT METHODS ── */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">We accept:</p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {[
              { icon: "ri-visa-line",           label: "Visa" },
              { icon: "ri-mastercard-line",     label: "Mastercard" },
              { icon: "ri-bank-card-line",      label: "RuPay" },
              { icon: "ri-secure-payment-line", label: "UPI" },
              { icon: "ri-wallet-3-line",       label: "Wallets" },
              { icon: "ri-money-rupee-circle-line", label: "COD" },
            ].map((p, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <i className={`${p.icon} text-gray-300 text-base`}></i>
                <span className="text-gray-400 text-xs font-medium">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs text-center">
            © {new Date().getFullYear()} <span className="text-gray-400 font-semibold">BODEGA Groceries</span>. All rights reserved. Made with{" "}
            <i className="ri-heart-fill text-red-500 text-xs"></i> in Tamil Nadu.
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-600">
            <Link to="#" className="hover:text-green-400 transition">Privacy Policy</Link>
            <Link to="#" className="hover:text-green-400 transition">Terms of Service</Link>
            <Link to="#" className="hover:text-green-400 transition">Refund Policy</Link>
            <Link to="#" className="hover:text-green-400 transition">Sitemap</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
