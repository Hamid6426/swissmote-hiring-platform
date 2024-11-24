import connectDB from "@/backend/config/mongodb";
import JobListing from "@/backend/models/JobListing";

export default async function handler(req, res) {

  await connectDB();

  if (req.method === "POST") {
    const { title, description, location, employmentType, salary } = req.body;

    if (!title || !description || !location || !employmentType || !salary) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    try {
      const newJob = new JobListing({
        title,
        description,
        location,
        employmentType,
        salary,
      });

      await newJob.save();
      res.status(201).json({ success: true, data: newJob });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({
      success: false,
      message: `Method ${req.method} not allowed`,
    });
  }
}
