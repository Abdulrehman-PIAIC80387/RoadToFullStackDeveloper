import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";

export default function App() {
  return (
    <div>
      <header style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
        <nav>
          <Link to="/">Home</Link> {" | "}
          <Link to="/login">Login</Link> {" | "}
          <Link to="/signup">Sign up</Link>
        </nav>
      </header>

      <main style={{ padding: 12 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* fallback route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is a tiny demo. Use the links to open Login / Signup.</p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>404 — Not Found</h2>
      <p>
        Try <Link to="/">Home</Link>.
      </p>
    </div>
  );
}
