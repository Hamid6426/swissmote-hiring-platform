import verifyToken from "@/backend/utils/verifyToken";
import connectDB from "@/backend/config/mongodb";
import User from "@/backend/models/User"; // Adjust the path as needed
import SuccessMeter from "@/components/Candidate/SuccessMeter";
import CandidateInfoTeaser from "@/components/Candidate/CandidateInfoTeaser";
import JobSearchSettings from "@/components/Candidate/JobSearchSettings";
import AssignmentTracker from "@/components/Candidate/AssignmentTracker";
import RecentAnnouncement from "@/components/Candidate/RecentAnnoucement";
import InterviewStats from "@/components/Candidate/InterviewStats";
import LatestNotifications from "@/components/Candidate/LatestNotifications";

export async function getServerSideProps(context) {
  try {
    await connectDB();
    const token = context.req.cookies.token || "";
    const decodedToken = verifyToken(token);

    if (!decodedToken || decodedToken.role !== "Candidate") {
      return {
        redirect: { destination: "/auth/signin", permanent: false },
      };
    }

    const user = await User.findById(decodedToken.userId)
      .select("fullName role");

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

export default function CandidateDashboard({ userData }) {
  return (
    <div className=" bg-green-200 dark:bg-neutral-900 dark:text-white">
      <h1 className="text-2xl font-semibold mb-4 ">
        Welcome, {userData.fullName}
      </h1>

      <div className="grid grid-cols-12 gap-x-4 gap-y-5 ">
        <div className="col-span-12 xl:col-span-6 rounded-xl drop-shadow-lg bg-white text-black">
          <SuccessMeter percentage={40} />
        </div>
        <div className="col-span-12 xl:col-span-6 rounded-xl drop-shadow-lg  ">
          <CandidateInfoTeaser />
        </div>
        <div className="col-span-12 xl:col-span-6 rounded-xl drop-shadow-lg  ">
          <JobSearchSettings />
        </div>

        <div className="col-span-12 lg:col-span-6 xl:col-span-3 rounded-xl drop-shadow-lg  ">
          <AssignmentTracker />
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-3 rounded-xl drop-shadow-lg  ">
          <InterviewStats scheduled={4} canceled={1} attended={3} missed={1} />
        </div>
        <div className="col-span-12 xl:col-span-6 rounded-xl drop-shadow-lg  ">
          <RecentAnnouncement />
        </div>
        <div className="col-span-12 xl:col-span-6 rounded-xl drop-shadow-lg  ">
          <LatestNotifications />
        </div>
      </div>
    </div>
  );
}
