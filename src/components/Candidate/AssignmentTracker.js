import { MdAssignmentTurnedIn, MdSend, MdVisibility, MdThumbUp } from "react-icons/md";
import React from 'react';

export default function AssignmentTracker() {
  return (
    <div className="p-4 flex flex-col justify-start items-start col-span-6 h-auto lg:h-60 rounded-xl shadow-md bg-gradient-to-r from-purple-500 to-purple-400 text-white">
      <div className="text-2xl font-bold mb-4 tracking-wide">Assignment Info</div>

      <div className="flex flex-col gap-4">
        {/* Assignments Done */}
        <div className="flex items-center">
          <MdAssignmentTurnedIn className="text-lg mr-2" />
          <span className="font-semibold mr-2">Assignments Done:</span>
          <span>12</span> {/* Placeholder value, replace with dynamic data */}
        </div>
        {/* Assignments Sent */}
        <div className="flex items-center">
          <MdSend className="text-lg mr-2" />
          <span className="font-semibold mr-2">Assignments Sent:</span>
          <span>10</span> {/* Placeholder value, replace with dynamic data */}
        </div>
        {/* Assignments Viewed */}
        <div className="flex items-center">
          <MdVisibility className="text-lg mr-2" />
          <span className="font-semibold mr-2">Assignments Viewed:</span>
          <span>8</span> {/* Placeholder value, replace with dynamic data */}
        </div>
        {/* Assignments Marked as Good */}
        <div className="flex items-center">
          <MdThumbUp className="text-lg mr-2" />
          <span className="font-semibold mr-2">Assignments Marked</span>
          <span>6</span> {/* Placeholder value, replace with dynamic data */}
        </div>
      </div>
    </div>
  );
}
