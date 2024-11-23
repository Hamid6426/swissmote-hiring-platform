import verifyToken from "@/utils/verifyToken";
import User from "@/models/User"; // Adjust the path as needed
import CompletionMeter from "../../components/Employer/CompletionMeter";
import CompanyInfoTeaser from "../../components/Employer/CompanyInfoTeaser";
import JobListingsTeaser from "../../components/Employer/JobListingsTeaser";
import CandidatesTeaser from "../../components/Employer/CandidatesTeaser";
import InterviewTeaser from "../../components/Employer/InterviewTeaser";
import AssignmentTeaser from "../../components/Employer/AssignmentTeaser";
import AnnouncementTeaser from "../../components/Employer/AnnoucementTeaser";
import MessagesTeaser from "../../components/Employer/MessagesTeaser";

export async function getServerSideProps(context) {
  try {
    // await connectDB();
    const token = context.req.cookies.token || "";
    const decodedToken = verifyToken(token);

    if (!decodedToken || decodedToken.role !== "Candidate") {
      return {
        redirect: { destination: "/auth/signin", permanent: false },
      };
    }

    const user = await User.findById(decodedToken.userId).select("fullName role").lean();
    if (!user) {
      return {
        redirect: { destination: "/auth/signin", permanent: false },
      };
    }

    return {
      props: {
        userData: { fullName: user.fullName, role: user.role },
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      notFound: true,
    };
  }
}

export default function EmployerDashboard({ userData }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">
        Welcome, {userData.fullName}
      </h1>

      <div className="grid grid-cols-12 gap-x-4 gap-y-5">
        <div className="col-span-6 rounded-xl drop-shadow-lg bg-white">
          <CompletionMeter percentage={68} />
        </div>
        <div className="col-span-6 rounded-xl drop-shadow-lg bg-white">
          <CompanyInfoTeaser />
        </div>
        <div className="col-span-3 rounded-xl drop-shadow-lg bg-white">
          <JobListingsTeaser />
        </div>

        <div className="col-span-3 rounded-xl drop-shadow-lg bg-white">
          <CandidatesTeaser />
        </div>
        <div className="col-span-6 rounded-xl drop-shadow-lg bg-white">
          <AnnouncementTeaser />
        </div>
        <div className="col-span-6 rounded-xl drop-shadow-lg bg-white">
          <MessagesTeaser />
        </div>

        <div className="col-span-3 rounded-xl drop-shadow-lg bg-white">
          <InterviewTeaser />
        </div>
        <div className="col-span-3 rounded-xl drop-shadow-lg bg-white">
          <AssignmentTeaser />
        </div>
      </div>
    </div>
  );
}
