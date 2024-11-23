import LandingNavbar from "@/components/Others/LandingNavbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-w-full min-h-svh flex justify-center items-center">
      <LandingNavbar />
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="font-bold text-4xl">Tired of Rejections?</div>
        <div className="font-bold text-4xl">Get hired based on your SKILLS</div>
        <div className="font-bold text-4xl">rather than your RESUME</div>
        <Link
          href="/auth/signup"
          className="rounded-xl px-10 py-4 text-2xl bg-indigo-800 text-white font-medium hover:bg-blue-700 hover:text-white"
        >
          START YOUR JOURNEY HERE
        </Link>
      </div>
    </div>
  );
}
