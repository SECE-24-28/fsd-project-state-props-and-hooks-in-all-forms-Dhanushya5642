import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MyProfile() {
  const navigate = useNavigate();
  const name  = localStorage.getItem("userName") || "";
  const email = localStorage.getItem("email")    || "";
  const phone = localStorage.getItem("phone")    || "";

  const [form, setForm]       = useState({ name, email, phone });
  const [saved, setSaved]     = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", form.name);
    localStorage.setItem("email",    form.email);
    localStorage.setItem("phone",    form.phone);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#f8f8f5] flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 w-full max-w-lg p-8">

        {/* Avatar */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-3">
            <i className="ri-user-fill text-green-700 text-4xl"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">{form.name || "My Profile"}</h1>
          <p className="text-sm text-gray-500 mt-0.5">{form.email}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="space-y-5">
          {[
            { label: "Full Name",     key: "name",  icon: "ri-user-line",  type: "text"  },
            { label: "Email Address", key: "email", icon: "ri-mail-line",  type: "email" },
            { label: "Phone Number",  key: "phone", icon: "ri-phone-line", type: "tel"   },
          ].map(f => (
            <div key={f.key}>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">{f.label}</label>
              <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2.5 focus-within:border-green-500 transition">
                <i className={`${f.icon} text-gray-400`}></i>
                <input
                  type={f.type}
                  value={form[f.key]}
                  onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  className="flex-1 outline-none text-sm text-gray-700"
                  placeholder={f.label}
                />
              </div>
            </div>
          ))}

          <button type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2">
            <i className="ri-save-line"></i> Save Changes
          </button>

          {saved && (
            <p className="text-center text-green-600 text-sm font-medium flex items-center justify-center gap-1">
              <i className="ri-checkbox-circle-line"></i> Profile updated successfully!
            </p>
          )}
        </form>

        <button onClick={() => navigate(-1)}
          className="mt-5 w-full text-sm text-gray-500 hover:text-gray-700 transition flex items-center justify-center gap-1">
          <i className="ri-arrow-left-line"></i> Go Back
        </button>
      </div>
    </div>
  );
}

export default MyProfile;
