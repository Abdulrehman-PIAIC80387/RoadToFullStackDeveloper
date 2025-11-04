import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // placeholder: signup logic here
    alert("Account created (fake)! Redirecting to /login");
    navigate("/login");
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input type="text" required placeholder="Your name" />
        </div>
        <div>
          <label>Email</label>
          <br />
          <input type="email" required placeholder="you@example.com" />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input type="password" required />
        </div>
        <button type="submit">Create account</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
