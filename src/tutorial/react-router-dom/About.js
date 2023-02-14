import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      Halaman About
      <p>
        link untuk masuk kedalam Categories:
        <Link to="/about/categories"> CategoriesGo</Link>
      </p>
      <Outlet />
    </div>
  );
}
