import { MdLocationOn, MdWork, MdAccessTime, MdAttachMoney } from "react-icons/md";
import React from 'react';

export default function JobSearchSettings() {
  return (
    <div className="p-4 flex flex-col justify-start items-start col-span-6 h-auto lg:h-60 rounded-xl shadow-md bg-gradient-to-r from-indigo-500 to-indigo-400 text-white">
      <div className="text-2xl font-bold mb-4 tracking-wide">Job Search Preferences</div>

      <div className="flex flex-col gap-4">
        {/* Preferred Location */}
        <div className="flex items-center">
          <MdLocationOn className="text-lg mr-2" />
          <span className="font-semibold mr-2">Preferred Location:</span>
          <span>Remote</span>
        </div>
        {/* Desired Job Role/Field */}
        <div className="flex items-center">
          <MdWork className="text-lg mr-2" />
          <span className="font-semibold mr-2">Desired Role:</span>
          <span>Frontend Developer</span>
        </div>
        {/* Job Type */}
        <div className="flex items-center">
          <MdAccessTime className="text-lg mr-2" />
          <span className="font-semibold mr-2">Job Type:</span>
          <span>Full-Time</span>
        </div>
        {/* Expected Salary */}
        <div className="flex items-center">
          <MdAttachMoney className="text-lg mr-2" />
          <span className="font-semibold mr-2">Expected Salary:</span>
          <span>$40,000 - $50,000 annually</span>
        </div>
      </div>
    </div>
  );
}
