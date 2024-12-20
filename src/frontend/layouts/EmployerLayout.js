import EmployerNavbar from "@/components/Employer/EmployerNavbar";
import EmployerSidebar from "@/components/Employer/EmployerSidebar";

export default function EmployerLayout({ children }) {
  return (
    <div className="bg-white dark:bg-neutral-800 dark:text-white w-full min-h-screen flex flex-col px-6">
      <EmployerNavbar />
      <div className="w-full h-fit flex flex-row -z-20">
        <EmployerSidebar />
        <section className="w-full min-h-svh rounded-lg bg-blue-200 px-6 py-4 -z-20 dark:bg-neutral-900 dark:text-white">
          {children}
        </section>
      </div>
    </div>
  );
}
