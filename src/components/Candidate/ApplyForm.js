import React, { useState } from "react";

export default function ApplyForm({ jobId }) {
  const [formData, setFormData] = useState({
    candidateName: "",
    candidateEmail: "",
    coverLetter: "",
    resumeUrl: "", // Optional field for resume link
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("/api/candidate/applied", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, jobId }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Application submitted successfully!");
        setFormData({
          candidateName: "",
          candidateEmail: "",
          coverLetter: "",
          resumeUrl: "",
        });
      } else {
        setErrorMessage(data.message || "Failed to submit application");
      }
    } catch (err) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Apply for this Job</h2>

      {successMessage && <div className="text-green-600 mb-4">{successMessage}</div>}
      {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="candidateName" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="candidateName"
            name="candidateName"
            value={formData.candidateName}
            onChange={handleChange}
            className="py-2 px-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="candidateEmail" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="candidateEmail"
            name="candidateEmail"
            value={formData.candidateEmail}
            onChange={handleChange}
            className="py-2 px-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="coverLetter" className="block text-sm font-medium">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            rows="5"
            className="py-2 px-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="resumeUrl" className="block text-sm font-medium">
            Resume Link (Optional)
          </label>
          <input
            type="url"
            id="resumeUrl"
            name="resumeUrl"
            value={formData.resumeUrl}
            onChange={handleChange}
            className="py-2 px-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
