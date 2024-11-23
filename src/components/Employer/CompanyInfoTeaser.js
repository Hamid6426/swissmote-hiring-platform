import { MdLocationOn, MdBusiness, MdComputer } from "react-icons/md";
import React from 'react'

export default function CompanyInfoTeaser() {
  return (
    <div className="p-4 flex flex-col justify-start items-start col-span-6 h-48 rounded-xl shadow-md bg-gradient-to-r from-blue-500 to-blue-400 text-white">
  <div className="text-2xl font-bold mb-4 tracking-wide">Persist Ventures</div>

  <div className="flex flex-col gap-4">
    <div className="flex items-center">
      <MdLocationOn className="text-lg mr-2" />
      <span className="font-semibold mr-2">Location:</span>
      <span>Remote Work</span>
    </div>
    <div className="flex items-center">
      <MdComputer className="text-lg mr-2" />
      <span className="font-semibold mr-2">Industry:</span>
      <span>Information Technology</span>
    </div>
    <div className="flex items-center">
      <MdBusiness className="text-lg mr-2" />
      <span className="font-semibold mr-2">Business Size:</span>
      <span>Large Business</span>
    </div>
  </div>
</div>
  )
}

