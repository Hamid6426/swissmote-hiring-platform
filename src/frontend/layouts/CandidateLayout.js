import CandidateNavbar from "@/components/Candidate/CandidateNavbar";
import CandidateSidebar from "@/components/Candidate/CandidateSidebar";

export default function CandidateLayout({ children }) {
  return (
    <div className="bg-white dark:bg-neutral-800 dark:text-white w-full min-h-screen flex flex-col px-6">
      <CandidateNavbar />
      <div className="w-full h-fit flex flex-row -z-50">
        <CandidateSidebar />
        <section className="w-full min-h-svh rounded-xl bg-green-200 dark:bg-neutral-900 dark:text-white p-6 mb-6">
          {children}
        </section>
      </div>
    </div>
  );
}
