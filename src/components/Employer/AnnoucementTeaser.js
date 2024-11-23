import React from 'react';

export default function AnnouncementTeaser () {
  const announcements = [
    { id: 1, title: "Office Closed on Friday so those who have int...", date: "Nov 20, 2024" },
    { id: 2, title: "The submission date of the assignment is exte...", date: "Nov 18, 2024" },
  ];

  return (
    <div className="p-4 col-span-6 h-48 rounded-xl shadow-md bg-gradient-to-r from-green-500 to-green-400 text-white">
      <div className="text-2xl font-bold mb-4 tracking-wide">Recent Announcements</div>

      <div className="flex flex-col gap-4">
        {announcements.slice(0, 3).map((announcement) => (
          <div key={announcement.id} className="flex justify-between items-center">
            <span className="font-semibold text-sm">{announcement.title}</span>
            <span className="text-sm text-white">{announcement.date}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => window.location.href = '/employer/assignments'}
        className="mt-4 bg-white text-green-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition"
      >
        Read More
      </button>
    </div>
  );
}
