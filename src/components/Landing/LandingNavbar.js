import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdDarkMode } from "react-icons/md";

export default function LandingNavbar() {
  return (
    <div className="bg-white w-full h-16 flex flex-row justify-between items-center drop-shadow-md px-6 absolute top-0">
      <div>
        <Image
          src="/swissmote-logo.svg"
          width={180}
          height={40}
          alt="swissmote logo"
        />
      </div>
      <div className="flex flex-row justify-center items-center h-16 gap-6">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="/contact-us" className="hover:text-blue-400">Contact us</Link>
        <Link href="/about-us" className="hover:text-blue-400">About us</Link>
        <MdDarkMode className="w-8 h-8 hover:text-blue-400" />
        <Link href="/auth/signup" className="px-4 py-2 bg-indigo-800 text-white font-medium hover:bg-blue-700 hover:text-white rounded-full">Seek Job</Link>
        <Link href="/auth/signin" className="px-4 py-2 bg-indigo-800 text-white font-medium hover:bg-blue-700 hover:text-white rounded-full">Hire Talent</Link>
      </div>
    </div>
  );
}
