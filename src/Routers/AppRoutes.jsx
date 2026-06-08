import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "..//Components/Homepage";
import AboutPage from "../Components/AboutPage";
import Products from "../Components/Products";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import MainLayout from "../Layouts/MainLayout";
import AdminPanel from "../Components/AdminPanel";
import Cart from "../Components/Cart/Cart";
import Wishlist from "../Components/Wishlist";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </>
  );
}
export default AppRoutes;
