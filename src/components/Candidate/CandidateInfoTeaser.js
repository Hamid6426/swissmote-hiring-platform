import { MdLocationOn, MdWork, MdSchool } from "react-icons/md"; // Updated icons
import React from 'react';

export default function CandidateInfoTeaser() {
  return (
    <div className="p-4 flex flex-col justify-start items-start col-span-6 h-auto lg:h-52 rounded-xl shadow-md bg-gradient-to-r from-blue-500 to-blue-400 text-white">
      <div className="text-2xl font-bold mb-4 tracking-wide">Mian Hamid Ur Rehman</div> {/* Candidate's name */}

      <div className="flex flex-col gap-4">
        {/* Candidate Location */}
        <div className="flex items-center">
          <MdLocationOn className="text-lg mr-2" />
          <span className="font-semibold mr-2">Location:</span>
          <span>Nowshera, KPK, Pakistan</span>
        </div>
        {/* Candidate Field/Work Preference */}
        <div className="flex items-center">
          <MdWork className="text-lg mr-2" />
          <span className="font-semibold mr-2">Field:</span>
          <span>Web Development</span>
        </div>
        {/* Candidate Education/Qualification */}
        <div className="flex items-center">
          <MdSchool className="text-lg mr-2" />
          <span className="font-semibold mr-2">Qualification:</span>
          <span>BS in Computer Science</span>
        </div>
      </div>
    </div>
  );
}
