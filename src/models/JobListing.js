import mongoose from "mongoose";

const JobListingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    employmentType: { type: String, enum: ["Full-time", "Part-time", "Contract", "Internship"], required: true },
    salary: { type: Number, required: true },
    postedDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.JobListing || mongoose.model("JobListing", JobListingSchema);
