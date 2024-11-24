import React from "react";

export default function MessagesTeaser() {
  const messages = [
    {
      id: 1,
      sender: "John Doe",
      text: "Please review the latest draft.",
      date: "Nov 21, 2024",
    },
    {
      id: 2,
      sender: "Jane Smith",
      text: "Looking forward to the meeting.",
      date: "Nov 20, 2024",
    },
  ];

  return (
    <div className="p-4 col-span-6 h-auto lg:h-64 rounded-xl shadow-md bg-gradient-to-r from-rose-500 to-rose-400 text-white">
      <div className="text-2xl font-bold mb-4 tracking-wide">
        Recent Messages
      </div>

      <div className="flex flex-col gap-4">
        {messages.slice(0, 3).map((message) => (
          <div key={message.id} className="flex flex-col gap-1">
            <div className="flex flex-row justify-between items-center">
              <span className="font-semibold">{message.sender}</span>
              <span className="text-xs text-white">{message.date}</span>
            </div>
            <span className="text-sm text-white">{message.text}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => (window.location.href = "/messages")}
        className="mt-4 bg-white text-purple-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition"
      >
        Read More
      </button>
    </div>
  );
}
