import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdDashboard,
  MdWork,
  MdCalendarToday,
  MdMessage,
  MdAssignment,
  MdPerson,
} from "react-icons/md";

export default function CandidateSidebar() {
  const navItems = [
    { name: "Dashboard", path: "/candidate", icon: <MdDashboard /> },
    { name: "Job Listings", path: "/candidate/search-job", icon: <MdWork /> },
    { name: "Applications", path: "/candidate/applications", icon: <MdAssignment /> },
    { name: "Interviews", path: "/candidate/interviews", icon: <MdCalendarToday /> },
    { name: "Messages", path: "/candidate/messages", icon: <MdMessage /> },
    { name: "Profile", path: "/candidate/profile", icon: <MdPerson /> },
  ];

  const router = useRouter(); // Get the current route

  return (
    <div className="text-black min-w-60 flex flex-col py-6 bg-green-100 rounded-xl mr-5" >
      <nav className="flex flex-col justify-center items-start w-full px-4 gap-y-4">
        {navItems.map((navItem, index) => (
          <Link
            key={index}
            href={navItem.path}
            className={` px-4 py-2 transition w-full rounded-full ${
              router.pathname === navItem.path
                ? "bg-green-600 text-white font-bold"
                : "hover:bg-green-400 hover:text-white font-medium bg-green-200"
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
