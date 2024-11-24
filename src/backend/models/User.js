import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['Candidate', 'Employer'] }, // Ensure role is defined here
  resetPasswordToken: String,
  resetPasswordTokenExpiry: Date,
});

export default mongoose.models.User || mongoose.model('User', userSchema);
