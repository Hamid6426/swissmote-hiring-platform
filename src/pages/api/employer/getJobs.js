import connectDB from "@/lib/mongodb";
import JobListing from "@/models/JobListing";

export default async function handler(req, res) {
  // Ensure we only handle GET requests for fetching job listings
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    // Connect to the database
    await connectDB();

    // Fetch all job listings from the database
    const jobListings = await JobListing.find().sort({ postedDate: -1 }); // Optionally, sort by postedDate (newest first)
    
    // Return the job listings
    res.status(200).json(jobListings);
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("Error fetching job listings:", error);
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
}


// import connectDB from "@/lib/mongodb";
// import JobListing from "@/models/JobListing";

// export default async function handler(req, res) {
//   await connectDB();

//   const { method } = req;

//   switch (method) {
//     case "GET":
//       try {
//         const jobs = await JobListing.find({});
//         res.status(200).json({ success: true, data: jobs });
//       } catch (error) {
//         res.status(400).json({ success: false, error: error.message });
//       }
//       break;

//     case "POST":
//       try {
//         const job = await JobListing.create(req.body);
//         res.status(201).json({ success: true, data: job });
//       } catch (error) {
//         res.status(400).json({ success: false, error: error.message });
//       }
//       break;

//     default:
//       res.setHeader("Allow", ["GET", "POST"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//       break;
//   }
// }

// import JobListing from "@/models/JobListing";
// import connectDB from "@/lib/mongodb";

// export default async function handler(req, res) {
//   await connectDB();

//   if (req.method === "GET") {
//     try {
//       const jobs = await JobListing.find({});
//       res.status(200).json({ success: true, data: jobs });
//     } catch (error) {
//       res.status(500).json({ success: false, message: "Server error" });
//     }
//   } else if (req.method === "POST") {
//     const { title, description, location, employmentType, salary } = req.body;

//     if (!title || !description || !location || !employmentType || !salary) {
//       return res
//         .status(400)
//         .json({ success: false, message: "All fields are required" });
//     }

//     try {
//       const newJob = new JobListing({
//         title,
//         description,
//         location,
//         employmentType,
//         salary,
//       });

//       await newJob.save();
//       res.status(201).json({ success: true, data: newJob });
//     } catch (error) {
//       res.status(500).json({ success: false, message: "Server error" });
//     }
//   } else {
//     res.setHeader("Allow", ["GET", "POST"]);
//     res.status(405).json({ success: false, message: `Method ${req.method} not allowed` });
//   }
// }

// import connectDB from "@/lib/mongodb";
// import JobListing from "@/models/JobListing";

// export default async function handler(req, res) {
//   await connectDB();

//   if (req.method === "GET") {
//     try {
//       const jobs = await JobListing.find({});
//       res.status(200).json({ success: true, data: jobs });
//     } catch (error) {
//       res.status(500).json({ success: false, message: "Server error" });
//     }
//   } else {
//     res.setHeader("Allow", ["GET"]);
//     res.status(405).json({
//       success: false,
//       message: `Method ${req.method} not allowed`,
//     });
//   }
// }
