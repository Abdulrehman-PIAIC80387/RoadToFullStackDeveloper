// src/pages/Login.jsx
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../api/authService.jsx";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const { mutate, isPending, error } = useMutation({
    mutationFn: authService.login,
    onSuccess: () => {
      console.log("Login successful");
      // redirect if needed
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <h2>Login</h2>

      <input
        placeholder="Email"
        type="email"
        className="w-full border p-2 rounded"
        onChange={(e) =>
          setForm((prev) => ({
            ...prev,
            username: e.target.value,
          }))
        }
      />

      <input
        placeholder="Password"
        type="password"
        className="w-full border p-2 rounded"
        onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
      />

      {error && <p style={{ color: "red" }}>{error.message}</p>}

      <button
        disabled={isPending}
        className="w-full bg-black text-white p-2 rounded"
      >
        {isPending ? "Processing..." : "Login"}
      </button>
    </form>
  );
}