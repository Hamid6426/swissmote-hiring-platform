import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MdAddCircleOutline,
  MdChat,
  MdCampaign,
  MdNotifications,
  MdMenu,
  MdClose,
} from "react-icons/md";
import ThemeToggleTwo from "@/components/Others/ThemeToggleTwo";
import ThemeToggle from "@/components/Others/ThemeToggle";

export default function EmployerNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="h-20 z-50 w-full flex flex-row justify-between items-center pr-4 drop-shadow-lg">
      {/* Logo */}
      <div className="dark:hidden flex">
        <Image
          src="/swissmote-logo.svg"
          width={180}
          height={40}
          alt="swissmote logo"
        />
      </div>
      <div className="hidden dark:flex">
        <Image
          src="/swissmote-logo-dark.svg"
          width={180}
          height={40}
          alt="swissmote logo"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row items-center justify-center gap-8">
        <ThemeToggle />
        <Link href="/employer" className="hover:scale-125">
          <MdCampaign className="w-8 h-8 hover:text-blue-500" />
        </Link>
        <Link href="/employer" className="hover:scale-125">
          <MdNotifications className="w-8 h-8 hover:text-blue-500" />
        </Link>
        <Link href="/employer/post-job" className="hover:scale-125">
          <MdAddCircleOutline className="w-8 h-8 hover:text-blue-500" />
        </Link>
        <Link href="/employer" className="hover:scale-125">
          <MdChat className="w-8 h-8 hover:text-blue-500" />
        </Link>
        <button>
          <Image
            src="/profile.png"
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full border border-black hover:scale-110"
          />
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <MdClose className="w-8 h-8 text-blue-500" />
        ) : (
          <MdMenu className="w-8 h-8 text-blue-500" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="z-50 absolute top-20 right-0 w-72 border-4 rounded-xl border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 dark:text-white shadow-lg flex flex-col items-start gap-6 p-4">
          <ThemeToggleTwo />
          <Link
            href="/employer"
            className="flex items-center gap-5 ml-1 font-bold hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            <MdCampaign className="w-8 h-8 " /> Campaign
          </Link>
          <Link
            href="/employer"
            className="flex items-center gap-6 font-bold hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            <MdNotifications className="w-8 h-8" /> Notifications
          </Link>
          <Link
            href="/employer/post-job"
            className="flex items-center gap-6 font-bold hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            <MdAddCircleOutline className="w-8 h-8" /> Post Job
          </Link>
          <Link
            href="/employer"
            className="flex items-center gap-6 font-bold hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            <MdChat className="w-8 h-8" /> Chat
          </Link>
          <Link
            href="/employer"
            className="flex items-center gap-6 font-bold hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/profile.png"
              alt="Profile Picture"
              width={32}
              height={32}
              className="rounded-full border border-black"
            />
            Profile
          </Link>
        </div>
      )}
    </div>
  );
}
