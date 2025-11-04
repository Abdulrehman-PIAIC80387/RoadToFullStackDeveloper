import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    alert("Logged in (fake)! Redirecting to /");
    navigate("/");
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 login-bg">
      <div className="card shadow p-4 login-card">
        <h3 className="text-center mb-4 fw-bold">Sign In</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="mail" className="form-label fw-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="mail"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button>

          <div className="text-center">
            <Link to="/forgot-password" className="custom-link">
              Forgot Password?
            </Link>
          </div>
        </form>

        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <Link to="/signup" className="fw-bold custom-link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
