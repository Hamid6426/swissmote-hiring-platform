module.exports = {
    user_id: "integer",
    name: "string",
    email: "string",
    phone: "string",
    role: "string", // "candidate" or "employer"
    profile_picture: "string", // URL
    resume: "string", // URL to resume or file
    skills: ["string"],
    experience: ["string"]
  };