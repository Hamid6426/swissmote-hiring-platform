import React from "react";

const SuccessMeter = ({ percentage }) => {
  const radius = 100; // Radius of the circle
  const strokeWidth = 15; // Width of the stroke
  const circumference = Math.PI * radius; // Circumference of the half-circle
  const offset = circumference - (percentage / 100) * circumference; // Offset for the stroke

  return (
    <div className="relative z-0 flex flex-col justify-center items-center px-6 h-52 gap-4">
      <div>
      <div className="font-bold text-sm">
        Assignment Submitted - Interviews Scheduled
      </div>
      </div>
      <svg
        width={radius * 2 + strokeWidth}
        height={radius + strokeWidth}
        className="transform -rotate-0"
      >
        {/* Background Arc */}
        <path
          d={`M${strokeWidth / 2},${
            radius + strokeWidth / 2
          } a${radius},${radius} 0 0,1 ${radius * 2},0`}
          fill="none"
          stroke="#164ac3" // Light gray background
          strokeWidth={strokeWidth}
        />

        {/* Foreground Arc */}
        <path
          d={`M${strokeWidth / 2},${
            radius + strokeWidth / 2
          } a${radius},${radius} 0 0,1 ${radius * 2},0`}
          fill="none"
          stroke="#16A34A" // Blue foreground
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />

        {/* Percentage Text */}
        <text
          x="50%"
          y="75%"
          textAnchor="middle"
          fontSize="24"
          fontWeight="bold"
          fill="#000"
        >
          {percentage}%
        </text>
      </svg>
     
    </div>
  );
};

export default SuccessMeter;
