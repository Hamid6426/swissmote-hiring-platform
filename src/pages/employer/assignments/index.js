import React, { useEffect, useState } from "react";

export default function JobListingsPage() {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/employer/getJobs");
        const data = await response.json(); // Convert response to JSON
        if (Array.isArray(data)) {
          setJobListings(data); // Ensure that we are setting an array
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error fetching job listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="w-100 min-h-svh rounded-xl bg-blue-100">
      <div className="min-w-full">
        <h1 className="text-2xl font-semibold mb-6">Job Listings</h1>

        {loading ? (
          <div>Loading job listings...</div>
        ) : jobListings.length === 0 ? (
          <div>No job listings found.</div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {jobListings.map((job) => (
              <div
                key={job._id}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-600 mt-2">
                  {/* Render the description with line breaks */}
                  <pre className="whitespace-pre-wrap">{job.description}</pre>
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  Location: <span className="font-medium">{job.location}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Employment Type:{" "}
                  <span className="font-medium">{job.employmentType}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Salary: <span className="font-medium">{job.salary}</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
