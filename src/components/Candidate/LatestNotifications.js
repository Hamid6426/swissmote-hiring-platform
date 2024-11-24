import React from 'react';

export default function LatestNotifications() {
  const notifications = [
    { id: 1, message: "Your interview with XYZ Company has been scheduled.", date: "Nov 20, 2024" },
    { id: 2, message: "Your assignment submission was marked as excellent.", date: "Nov 18, 2024" },
    { id: 3, message: "You have a new message from recruiter ABC.", date: "Nov 15, 2024" },
    { id: 4, message: "The application deadline for Job XYZ is approaching soon.", date: "Nov 10, 2024" },
  ];

  return (
    <div className="p-4 col-span-6 h-auto lg:h-60 rounded-xl shadow-md bg-gradient-to-r from-blue-500 to-blue-400 text-white">
      <div className="text-2xl font-bold mb-4 tracking-wide">Latest Notifications</div>

      <div className="flex flex-col gap-4">
        {notifications.slice(0, 3).map((notification) => (
          <div key={notification.id} className="flex justify-between items-center">
            <span className="font-semibold text-sm">{notification.message}</span>
            <span className="text-sm">{notification.date}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => window.location.href = '/candidate/notifications'}
        className="mt-4 bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition"
      >
        View All Notifications
      </button>
    </div>
  );
}
