import LandingNavbar from "@/components/Others/LandingNavbar";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-indigo-500 dark:bg-indigo-900 min-w-full min-h-svh flex flex-row">
      <LandingNavbar />
      <div className="grid grid-cols-2 w-full">
        <div className="col-span-2 lg:col-span-1 pl-0 lg:pl-12 flex flex-col justify-center items-center w-full">
          <div className="flex flex-col items-center lg:items-start gap-6">
          <div className="font-bold text-xl md:text-3xl dark:text-white">Tired of getting <span className="text-white dark:text-red-600">REJECTIONS?</span></div>
          <div className="font-bold text-xl md:text-3xl dark:text-white">Get hired with your <span className="text-white dark:text-red-600">SKILLS!</span></div>
          <div className="font-bold text-xl md:text-3xl dark:text-white">Rather than your <span className="text-white dark:text-red-600">RESUME</span></div>
          <Link
            href="/auth/signin"
            className="rounded-xl px-6 py-3 text-base md:text-xl bg-white text-indigo-600 dark:text-indigo-950 font-black hover:text-white hover:bg-blue-500"
          >
            START YOUR JOURNEY HERE
          </Link>
          </div>
        </div>
        <div className="col-span-1 hidden lg:flex flex-col justify-center items-center gap-6 w-full">
          <Image
            src="/design-asset-1.png"
            width={256}
            height={280}
            alt="design asset"
          />
        </div>
      </div>
    </div>
  );
}
