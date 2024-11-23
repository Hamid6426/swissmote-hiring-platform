import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdDashboard,
  MdWork,
  MdPeople,
  MdAssignment,
  MdCalendarToday,
  MdMessage,
  MdAnnouncement,
  MdBusiness,
} from "react-icons/md";

export default function EmployerSidebar() {
  const navItems = [
    { name: "Dashboard", path: "/employer", icon: <MdDashboard /> },
    { name: "Job Listings", path: "/employer/job-listings", icon: <MdWork /> },
    { name: "Candidates", path: "/employer/candidates", icon: <MdPeople /> },
    {
      name: "Assignments",
      path: "/employer/assignments",
      icon: <MdAssignment />,
    },
    {
      name: "Interviews",
      path: "/employer/interviews",
      icon: <MdCalendarToday />,
    },
    { name: "Messages", path: "/employer/messages", icon: <MdMessage /> },
    {
      name: "Announcements",
      path: "/employer/announcements",
      icon: <MdAnnouncement />,
    },
    { name: "Company", path: "/employer/company", icon: <MdBusiness /> },
  ];

  const router = useRouter(); // Get the current route

  return (
    <div className="text-black min-w-60 flex flex-col py-6 bg-blue-100 rounded-xl mr-5" >
      <nav className="flex flex-col justify-center items-start w-full px-4 gap-y-4">
        {navItems.map((navItem, index) => (
          <Link
            key={index}
            href={navItem.path}
            className={` px-4 py-3 transition w-full rounded-full ${
              router.pathname === navItem.path
                ? "bg-blue-600 text-white font-bold"
                : "hover:bg-blue-400 hover:text-white font-medium bg-blue-200"
            }`}
          >
            <div className="flex flex-row gap-3 items-center">
              <span className="text-lg">{navItem.icon}</span>
              <span>{navItem.name}</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
