import CandidateNavbar from "@/components/Candidate/CandidateNavbar";
import CandidateSidebar from "@/components/Candidate/CandidateSidebar";

export default function CandidateLayout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col px-6">
      <CandidateNavbar />
      <div className="w-full h-fit flex flex-row -z-50">
        <CandidateSidebar />
        <section className="w-full min-h-svh rounded-xl bg-green-100 px-6 py-4">
          {children}
        </section>
      </div>
    </div>
  );
}
