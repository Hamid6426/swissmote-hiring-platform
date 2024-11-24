import EmployerNavbar from "@/components/Employer/EmployerNavbar";
import EmployerSidebar from "@/components/Employer/EmployerSidebar";

export default function EmployerLayout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col px-6">
      <EmployerNavbar />
      <div className="w-full h-fit flex flex-row -z-20">
        <EmployerSidebar />
        <section className="w-full min-h-svh rounded-xl bg-blue-100 px-6 py-4 -z-20">
          {children}
        </section>
      </div>
    </div>
  );
}
