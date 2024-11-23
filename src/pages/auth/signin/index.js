import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AuthSection from "@/components/Auth/AuthSection";

const Signin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const { email, password } = formData;

    const response = await fetch("/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);

      const userRole = data.role;
      switch (userRole) {
        case "Employer":
          router.push("/employer");
          break;
        case "Candidate":
          router.push("/candidate");
          break;
        default:
          alert("Role not recognized. Please contact support.");
          break;
      }
    } else {
      alert("Login failed. Please check your credentials.");
    }
  }

  return (
    <div className="w-full flex flex-row min-h-dvh">
      <AuthSection />
      <div className="w-7/12 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="flex flex-col gap-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Forgot Password Link */}
            <Link
              className="text-sm text-blue-500 hover:underline mt-1 font-bold"
              href="/auth/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-4 text-sm">
          Don&apos;t have an account yet?{" "}
          <Link
            className="font-bold text-blue-500 hover:underline"
            href="/auth/signup"
          >
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
