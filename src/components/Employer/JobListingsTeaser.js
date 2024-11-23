import { MdWork, MdPaid, MdRemoveCircleOutline } from "react-icons/md";
import React from 'react';

export default function JobListingsTeaser() {
  return (
    <div className="p-4 flex flex-col justify-start items-start col-span-6 h-48 rounded-xl shadow-md bg-gradient-to-r from-sky-500 to-sky-400 text-white">
      <div className="text-2xl font-bold mb-4 tracking-wide">Job Listings</div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <MdWork className="text-lg mr-2" />
          <span className="font-semibold mr-2">Jobs:</span>
          <span>3</span>
        </div>
        <div className="flex items-center">
          <MdPaid className="text-lg mr-2" />
          <span className="font-semibold mr-2">Paid Internships:</span>
          <span>1</span>
        </div>
        <div className="flex items-center">
          <MdRemoveCircleOutline className="text-lg mr-2" />
          <span className="font-semibold mr-2">Unpaid Internships:</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
}
