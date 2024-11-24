import mongoose from "mongoose";

const AppliedSchema = new mongoose.Schema(
  {
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "JobListing", required: true }, // Reference to the job listing
    candidateName: { type: String, required: true },
    candidateEmail: { type: String, required: true },
    coverLetter: { type: String, required: true },
    resumeUrl: { type: String }, // Optional if candidates upload a resume
    appliedDate: { type: Date, default: Date.now }, // Auto-generated application date
  },
  { timestamps: true }
);

export default mongoose.models.Applied || mongoose.model("Applied", AppliedSchema);
