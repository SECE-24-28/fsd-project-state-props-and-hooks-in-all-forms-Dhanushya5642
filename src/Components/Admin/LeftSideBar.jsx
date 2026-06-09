import React from "react";
import BagImage from "../../Assets/Css/Images/Admin_Left_Bag.png";
import Logo from "../../Assets/Css/Images/MAIN LOGO.png"

const navItems = [
  { key: "dashboard",  icon: "bi bi-house",              label: "Dashboard"       },
  { key: "products",   icon: "bi bi-box",                label: "Products"        },
  { key: "categories", icon: "bi bi-grid",               label: "Categories"      },
  { key: "orders",     icon: "bi bi-cart3",              label: "Orders"          },
  { key: "customers",  icon: "bi bi-people",             label: "Customers"       },
  { key: "inventory",  icon: "bi bi-bag",                label: "Inventory"       },
  { key: "offers",     icon: "bi bi-percent",            label: "Offers & Coupons"},
  { key: "delivery",   icon: "bi bi-truck",              label: "Delivery"        },
  { key: "reports",    icon: "bi bi-file-earmark-text",  label: "Reports"         },
  { key: "settings",   icon: "bi bi-gear",               label: "Settings"        },
];

function LeftSidebar({ activePage, setActivePage }) {
  return (
    <aside className="w-[220px] h-screen overflow-y-auto bg-gradient-to-b from-[#002714] via-[#012e17] to-[#00180c] text-white flex flex-col p-3">
      <div className="flex items-center gap-3 mb-8">
        <img src={Logo} className="w-12 h-12" />
        <div>
          <h1 className="text-2xl font-bold">BODEGA</h1>
          <p className="text-xs text-yellow-400 font-semibold">Admin Panel</p>
        </div>
      </div>

      <div className="flex-1 space-y-1">
        {navItems.map(item => (
          <button
            key={item.key}
            onClick={() => setActivePage(item.key)}
            className={`w-full h-9 text-xs rounded-xl flex items-center px-4 gap-3 transition ${
              activePage === item.key
                ? "bg-[#5baa41] text-white font-semibold"
                : "hover:bg-white/10 text-white/80"
            }`}
          >
            <i className={item.icon}></i>
            {item.label}
          </button>
        ))}
      </div>

      <div className="mb-3">
        <img src={BagImage} className="rounded-3xl w-full" />
      </div>

      <div className="bg-white/10 rounded-2xl p-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/100" className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="font-semibold text-sm">{localStorage.getItem("userName") || "Admin"}</h3>
            <p className="text-xs text-green-200">Super Admin</p>
          </div>
        </div>
        <i className="bi bi-chevron-down"></i>
      </div>
    </aside>
  );
}

export default LeftSidebar;
