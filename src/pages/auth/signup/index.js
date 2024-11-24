// @/pages/auth/signup/index.js

import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AuthSection from "@/components/Auth/AuthSection";

export default function Signup() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push("/auth/signin");
    } else {
      const errorData = await response.json();
      setError(errorData.message || "Sign up failed.");
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full flex flex-row min-h-dvh dark:bg-neutral-800">
      <AuthSection />
      <div className="w-7/12 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-6 dark:text-white">Sign Up</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="flex flex-col gap-4">
            {/* Full Name Field */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-white">
                Email address
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
                className="block text-sm font-medium mb-2 dark:text-white"
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
                className="w-full px-4 py-2 border rounded border-gray-400 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Role Field */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium mb-2 dark:text-white">
                Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="dark:text-black w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="" disabled>
                  Select your role
                </option>
                <option value="Candidate">Candidate</option>
<option value="Employer">Employer</option>

              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`mt-4 w-full py-2 rounded font-bold hover:bg-blue-500 ${
              isLoading ? "bg-gray-400" : "bg-indigo-600"
            } text-white`}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-4 text-sm dark:text-white">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="font-bold text-blue-500 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
