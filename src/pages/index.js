import LandingNavbar from "@/components/Others/LandingNavbar";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-indigo-600 min-w-full min-h-svh flex flex-row">
      <LandingNavbar />
      <div className="grid grid-cols-2 w-full">
        <div className="col-span-1 pl-12 flex flex-col justify-center items-center w-full">
          <div className="flex flex-col items-start  gap-6">
          <div className="font-bold text-3xl">Tired of getting <span className="text-white">REJECTIONS?</span></div>
          <div className="font-bold text-3xl">Get hired with your <span className="text-white">SKILLS</span></div>
          <div className="font-bold text-3xl">Rather than your <span className="text-white">RESUME</span></div>
          <Link
            href="/auth/signup"
            className="rounded-xl px-6 py-3 text-xl bg-white text-indigo-600 font-black hover:text-white hover:bg-blue-500"
          >
            START YOUR JOURNEY HERE
          </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center gap-6 w-full">
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
