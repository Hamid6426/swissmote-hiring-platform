import { MdAssignment, MdPending, MdCheckCircle } from "react-icons/md";
import React from 'react';

export default function AssignmentTeaser() {
  return (
    <div className="p-4 flex flex-col justify-start items-start col-span-6 h-auto lg:h-44 xl:h-64 rounded-xl shadow-md bg-gradient-to-r from-orange-500 to-orange-400 text-white">
      <div className="text-2xl font-bold mb-4 tracking-wide">Assignments</div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <MdAssignment className="text-lg mr-2" />
          <span className="font-semibold mx-1 pr-2">Assignment Assigned:</span>
          <span>10</span>
        </div>
        <div className="flex items-center">
          <MdPending className="text-lg mr-2" />
          <span className="font-semibold mx-1 pr-2">Assignments In Progress:</span>
          <span>4</span>
        </div>
        <div className="flex items-center">
          <MdCheckCircle className="text-lg mr-2" />
          <span className="font-semibold mx-1 pr-2">Assignments Completed:</span>
          <span>6</span>
        </div>
      </div>
    </div>
  );
}
