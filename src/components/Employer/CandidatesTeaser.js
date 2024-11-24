import { MdStar, MdThumbUp, MdThumbDown } from "react-icons/md";
import React from 'react';

export default function CandidatesTeaser() {
  return (
    <div className="p-4 flex flex-col justify-start items-start col-span-6 h-auto lg:h-48 rounded-xl shadow-md bg-gradient-to-r from-purple-500 to-purple-400 text-white">
      <div className="text-2xl font-bold mb-4 tracking-wide">Candidates</div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <MdStar className="text-lg mr-2" />
          <span className="font-semibold mr-2">Best Candidates:</span>
          <span>0</span>
        </div>
        <div className="flex items-center">
          <MdThumbUp className="text-lg mr-2" />
          <span className="font-semibold mr-2">Good Candidates:</span>
          <span>12</span>
        </div>
        <div className="flex items-center">
          <MdThumbDown className="text-lg mr-2" />
          <span className="font-semibold mr-2">Bad Candidates:</span>
          <span>5</span>
        </div>
      </div>
    </div>
  );
}
