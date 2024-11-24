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
import ThemeToggleGreenTwo from "@/components/Others/ThemeToggleGreenTwo";
import ThemeToggleGreen from "@/components/Others/ThemeToggleGreen";

export default function CandidateNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="h-20 z-50 w-full flex flex-row justify-between items-center pr-4 drop-shadow-lg dark:text-white">
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
        <ThemeToggleGreen />
        <Link href="/candidate" className="hover:scale-125">
          <MdNotifications className="w-8 h-8 hover:text-green-500" />
        </Link>
        <Link href="/candidate" className="hover:scale-125">
          <MdChat className="w-8 h-8 hover:text-green-500" />
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
          <MdClose className="w-8 h-8 text-green-500" />
        ) : (
          <MdMenu className="w-8 h-8 text-green-500" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="z-50 absolute top-20 right-0 w-72 border-4 rounded-xl border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 dark:text-white shadow-lg flex flex-col items-start gap-6 p-4">
          <ThemeToggleGreenTwo />
          <Link
            href="/candidate"
            className="flex items-center gap-6 hover:text-green-500 font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            <MdNotifications className="w-8 h-8 " />
            Notifications
          </Link>
          <Link
            href="/candidate"
            className="flex items-center gap-6 hover:text-green-500 font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            <MdChat className="w-8 h-8 hover:text-green-500" /> Chat
          </Link>
          <Link
            href="/candidate"
            className="flex items-center gap-6 hover:text-green-500 font-bold"
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
