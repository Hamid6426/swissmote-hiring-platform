import { MdCalendarToday, MdClose, MdCheckCircle, MdAlarmOff } from "react-icons/md";
import React from 'react';

export default function InterviewStats({ scheduled, canceled, attended, missed }) {
    return (
      <div className="p-4 flex flex-col justify-start items-start col-span-6 h-auto lg:h-60 rounded-xl shadow-md bg-gradient-to-r from-teal-500 to-teal-400 text-white">
        <div className="text-2xl font-bold mb-4 tracking-wide">Interview Stats</div>
  
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <MdCalendarToday className="text-lg mr-2" />
            <span className="font-semibold mr-2">Scheduled Interviews:</span>
            <span>{scheduled}</span>
          </div>
          <div className="flex items-center">
            <MdClose className="text-lg mr-2" />
            <span className="font-semibold mr-2">Canceled Interviews:</span>
            <span>{canceled}</span>
          </div>
          <div className="flex items-center">
            <MdCheckCircle className="text-lg mr-2" />
            <span className="font-semibold mr-2">Interviews Attended:</span>
            <span>{attended}</span>
          </div>
          <div className="flex items-center">
            <MdAlarmOff className="text-lg mr-2" />
            <span className="font-semibold mr-2">Interviews Missed:</span>
            <span>{missed}</span>
          </div>
        </div>
      </div>
    );
  }
  