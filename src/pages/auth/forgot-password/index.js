import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AuthSection from "@/components/Auth/AuthSection";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true); // Set loading state

    const response = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    setIsLoading(false); // Reset loading state

    if (response.ok) {
      setMessage(
        "Password reset email sent successfully. Please check your inbox."
      );
    } else {
      setMessage(data.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="w-full flex flex-row min-h-dvh dark:bg-neutral-800 dark:text-white">
      <AuthSection />
      <div className="w-7/12 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="flex flex-col gap-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded font-bold hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Reset Link"}
            </button>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 mt-4">
            <div className="">Recalled something?</div>
            <Link
              href="/auth/signin"
              className="text-sm text-blue-500 hover:underline mt-1 font-bold"
            >
              Try again
            </Link>
          </div>
        </form>

        {/* Message Alert */}
        {message && (
          <div
            className={`mt-4 px-4 py-2 text-sm rounded ${
              response?.ok
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
            role="alert"
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
