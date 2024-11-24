import connectDB from "@/backend/config/mongodb";
import Applied from "@/backend/models/Applied";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    const { jobId, candidateName, candidateEmail, coverLetter, resumeUrl } = req.body;

    if (!jobId || !candidateName || !candidateEmail || !coverLetter) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    try {
      const newApplication = new Applied({
        jobId,
        candidateName,
        candidateEmail,
        coverLetter,
        resumeUrl,
      });

      await newApplication.save();
      return res.status(201).json({
        success: true,
        message: "Application submitted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Failed to submit application",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} not allowed`,
    });
  }
}
