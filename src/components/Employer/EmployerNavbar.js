import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MdAddCircleOutline,
  MdChat,
  MdCampaign,
  MdNotifications,
  MdDarkMode,
} from "react-icons/md";

export default function EmployerNavbar() {
  return (
    <div className="h-20 w-full flex flex-row justify-between items-center pr-1 drop-shadow-lg">
      <Image
        src="/swissmote-logo.svg"
        alt="profile picture"
        width={180}
        height={40}
      />
      <div className="flex flex-row items-center gap-8">
        <button>
          <MdDarkMode className="w-8 h-8" />
        </button>
        <Link href="#">
          <MdCampaign className="w-8 h-8" />
        </Link>
        <Link href="#">
          <MdNotifications className="w-8 h-8" />
        </Link>
        <Link href="/employer/post-job">
          <MdAddCircleOutline className="w-8 h-8" />
        </Link>
        <Link href="#">
          <MdChat className="w-8 h-8" />
        </Link>
        <button>
          <Image
            src="/profile.png"
            alt="profile picture"
            width={40}
            height={40}
            className="rounded-full border border-black "
          />
        </button>
      </div>
    </div>
  );
}
