import { useState } from "react";
import LeftSidebar from "./LeftSideBar";
import CenterPanel from "./CenterPanel";
import RightSidebar from "./RightSideBar";
import AdminProducts from "./AdminProducts";
import AdminOrders from "./AdminOrders";
import AdminCustomers from "./AdminCustomers";
import AdminInventory from "./AdminInventory";
import AdminOffers from "./AdminOffers";
import AdminDelivery from "./AdminDelivery";
import AdminReports from "./AdminReports";
import AdminCategories from "./AdminCategories";

function AdminLayout() {
  const [activePage, setActivePage] = useState("dashboard");
  const [openProductForm, setOpenProductForm] = useState(false);

  const handleSetActivePage = (page, extra) => {
    setOpenProductForm(page === "products" && extra?.openForm === true);
    setActivePage(page);
  };

  const renderMain = () => {
    if (activePage === "products")  return <div className="flex-1 overflow-y-auto"><AdminProducts openForm={openProductForm} /></div>;
    if (activePage === "orders")    return <div className="flex-1 overflow-y-auto"><AdminOrders /></div>;
    if (activePage === "customers") return <div className="flex-1 overflow-y-auto"><AdminCustomers /></div>;
    if (activePage === "inventory") return <div className="flex-1 overflow-y-auto"><AdminInventory /></div>;
    if (activePage === "offers")     return <div className="flex-1 overflow-y-auto"><AdminOffers /></div>;
    if (activePage === "delivery")   return <div className="flex-1 overflow-y-auto"><AdminDelivery /></div>;
    if (activePage === "reports")    return <div className="flex-1 overflow-y-auto"><AdminReports /></div>;
    if (activePage === "categories") return <div className="flex-1 overflow-y-auto"><AdminCategories /></div>;
    return (
      <main className="flex-1 overflow-y-auto">
        <CenterPanel activePage={activePage} />
      </main>
    );
  };

  return (
    <div className="h-screen flex overflow-hidden">
      <LeftSidebar activePage={activePage} setActivePage={handleSetActivePage} />
      {renderMain()}
      {activePage === "dashboard" ? <RightSidebar setActivePage={handleSetActivePage} /> : null}
    </div>
  );
}

export default AdminLayout;
