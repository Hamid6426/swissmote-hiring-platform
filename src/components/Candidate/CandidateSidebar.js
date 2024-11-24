import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdDashboard,
  MdWork,
  MdCalendarToday,
  MdCampaign,
  MdAssignment,
  MdPerson,
  MdSend,
  MdNotifications,
  MdMessage,
} from "react-icons/md";

export default function CandidateSidebar() {
  const navItems = [
    {
      name: "Dashboard",
      path: "/candidate",
      icon: <MdDashboard className="w-6 h-6" />,
    },
    {
      name: "Find Jobs",
      path: "/candidate/find-jobs",
      icon: <MdWork className="w-6 h-6" />,
    },
    {
      name: "Applications",
      path: "/candidate/applications",
      icon: <MdAssignment className="w-6 h-6" />,
    },
    {
      name: "Submissions",
      path: "/candidate/submissions",
      icon: <MdSend className="w-6 h-6" />,
    },
    {
      name: "Interviews",
      path: "/candidate/interviews",
      icon: <MdCalendarToday className="w-6 h-6" />,
    },
    {
      name: "Announcements",
      path: "/candidate/announcements",
      icon: <MdCampaign className="w-6 h-6" />,
    },
    {
      name: "Notifications",
      path: "/candidate/notifications",
      icon: <MdNotifications className="w-6 h-6" />, // New button
    },
    {
      name: "Messages",
      path: "/candidate/messages",
      icon: <MdMessage className="w-6 h-6" />, // New button
    },
    {
      name: "Profile",
      path: "/candidate/profile",
      icon: <MdPerson className="w-6 h-6" />,
    },
  ];

  const router = useRouter(); // Get the current route

  return (
    <div className="text-black md:min-w-52 flex flex-col dark:text-white rounded-xl">
      <nav className="flex flex-col justify-center items-start w-full pr-4 gap-y-4">
        {navItems.map((navItem, index) => (
          <Link
            key={index}
            href={navItem.path}
            className={` px-3 py-3 transition w-full rounded-xl md:rounded-full  ${
              router.pathname === navItem.path
                ? "bg-green-600 text-white font-bold"
                : "hover:bg-green-600 hover:text-white font-medium bg-green-300 text-black"
            }`}
          >
            <div className="flex flex-row md:gap-3 items-center">
              <span className="text-lg">{navItem.icon}</span>
              <span className="hidden md:flex">{navItem.name}</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
