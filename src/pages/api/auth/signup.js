// @/pages/api/auth/signup.js

import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Only allow POST
  }

  await connectDB();

  const { fullName, email, password, role } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const user = new User({ fullName, email, password: hashedPassword, role });
  await user.save();

  res.status(201).json({ message: "User registered successfully" });
}
