import React from "react";
import ApplyForm from "../../../components/Candidate/ApplyForm";

// export async function getServerSideProps(context) {
//   const { jobId } = context.params;
//   const res = await fetch(`${process.env.API_URL}/api/jobs/${jobId}`);
//   const job = await res.json();

//   return { props: { job } };
// }

export default function Index({ job }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">title</h1>
      <p className="text-gray-700">description</p>
      <p className="text-gray-500 mt-4">Location</p>
      <p className="text-gray-500">Employment Type: employmentType</p>
      <p className="text-gray-500">Salary: salary</p>
      {/* <ApplyForm jobId={job._id} /> */}
    </div>
  );
}