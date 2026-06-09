import React from "react";
import AdminLayout from "../Components/Admin/AdminLayout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role     = localStorage.getItem("role");
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn || role !== "admin") {
      navigate("/", { replace: true });
    }
  }, []);

  const role = localStorage.getItem("role");
  if (role !== "admin") return null;

  return <AdminLayout />;
};

export default AdminPanel;