import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/Others/ThemeToggle";
import ThemeToggleGreenTwo from "@/components/Others/ThemeToggleGreenTwo";
import {
  MdMenu,
  MdClose,
  MdHome,
  MdContactPage,
  MdInfo,
  MdWork,
  MdPeople,
} from "react-icons/md";

export default function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-neutral-950 dark:text-white w-full h-16 flex flex-row justify-between items-center drop-shadow-md px-6 absolute top-0">
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
      <div className="hidden md:flex flex-row justify-center items-center h-16 gap-4 lg:gap-6">
        <Link href="/" className="hover:text-blue-500 font-bold">
          Home
        </Link>
        <Link href="/info/contact-us" className="hover:text-blue-500 font-bold">
          Contact us
        </Link>
        <Link href="/info/about-us" className="hover:text-blue-500 font-bold">
          About us
        </Link>
        <ThemeToggle />
        <Link
          href="/auth/signup"
          className="px-4 py-2 bg-indigo-600 text-white font-medium hover:bg-blue-500 hover:text-white rounded-full"
        >
          Seek Job
        </Link>
        <Link
          href="/auth/signup"
          className="px-4 py-2 bg-indigo-600 text-white font-medium hover:bg-blue-500 hover:text-white rounded-full"
        >
          Hire Talent
        </Link>
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
        <div className="z-50 absolute top-16 right-0 w-72 border-4 rounded-xl border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 dark:text-white shadow-lg flex flex-col items-start gap-6 p-4">
          <Link
            href="/"
            className="hover:text-indigo-500 font-bold flex items-center gap-6"
          >
            <MdHome className="w-8 h-8" /> Home
          </Link>
          <Link
            href="/info/contact-us"
            className="hover:text-indigo-500 font-bold flex items-center gap-6"
          >
            <MdContactPage className="w-8 h-8" /> Contact Us
          </Link>
          <Link
            href="/info/about-us"
            className="hover:text-indigo-500 font-bold flex items-center gap-6"
          >
            <MdInfo className="w-8 h-8" /> About Us
          </Link>
          <ThemeToggleGreenTwo />
          <Link
            href="/auth/signup"
            className="hover:text-indigo-500 font-bold flex items-center gap-6"
          >
            <MdWork className="w-8 h-8" /> Seek Job
          </Link>
          <Link
            href="/auth/signup"
            className="hover:text-indigo-500 font-bold flex items-center gap-6"
          >
            <MdPeople className="w-8 h-8" /> Hire Talent
          </Link>
        </div>
      )}
    </div>
  );
}
