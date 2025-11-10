// src/pages/Signup.jsx
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authService } from "../api/authService.jsx";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "U",
    first_name: "",
    last_name: "",
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: authService.register,
    onSuccess: () => {
      console.log("✅ Registration successful");
      navigate("/");
    },
    onError: (error) => {
      console.error("Registration failed:", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <h2>Register</h2>

      <input
        placeholder="Email"
        type="email"
        className="w-full border p-2 rounded"
        onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
      />

      <input
        placeholder="Password"
        type="password"
        className="w-full border p-2 rounded"
        onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
      />

      <input
        placeholder="First Name"
        className="w-full border p-2 rounded"
        onChange={(e) => setForm((prev) => ({ ...prev, first_name: e.target.value }))}
      />

      <input
        placeholder="Last Name"
        className="w-full border p-2 rounded"
        onChange={(e) => setForm((prev) => ({ ...prev, last_name: e.target.value }))}
      />

      <select
        className="w-full border p-2 rounded"
        value={form.role}
        onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value }))}
      >
        <option value="U">User</option>
        <option value="R">Restaurant</option>
      </select>

      {error && (
        <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error.message || "Registration failed"}</span>
        </div>
      )}

      <button disabled={isPending} className="w-full bg-black text-white p-2 rounded disabled:opacity-50">
        {isPending ? "Processing..." : "Register"}
      </button>
    </form>
  );
}