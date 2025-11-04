import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/login">Login</Link> | 
          <Link to="/signup">Signup</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
