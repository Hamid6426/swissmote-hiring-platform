import { MdEvent, MdCheckCircle, MdCancel } from "react-icons/md";
import React from 'react';

export default function InterviewTeaser() {
  return (
    <div className="p-4 flex flex-col justify-start items-start col-span-6 h-auto lg:h-44 xl:h-64 rounded-xl shadow-md bg-gradient-to-r from-indigo-500 to-indigo-400 text-white">
      <div className="text-2xl font-bold mb-4 tracking-wide">Interviews</div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <MdEvent className="text-lg mr-2" />
          <span className="font-semibold mx-1 pr-2">Scheduled Interviews:</span>
          <span>8</span>
        </div>
        <div className="flex items-center">
          <MdCheckCircle className="text-lg mr-2" />
          <span className="font-semibold mx-1 pr-2">Completed Interviews:</span>
          <span>5</span>
        </div>
        <div className="flex items-center">
          <MdCancel className="text-lg mr-2" />
          <span className="font-semibold mx-1 pr-3">Cancelled Interviews:</span>
          <span>2</span>
        </div>
      </div>
    </div>
  );
}
