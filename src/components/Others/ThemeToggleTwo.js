// components/ThemeToggle.js
import { useState, useEffect } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function ThemeToggleTwo() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <button
  onClick={toggleDarkMode}
  className="dark:text-gray-200"
  aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
>
  {isDarkMode ? (
    <div className="flex flex-row items-center gap-6 hover:text-blue-600">
      <MdLightMode size={32} className="" />
      <span className="font-bold">Change Theme</span>
    </div>
  ) : (
    <div className="flex flex-row items-center gap-6 hover:text-blue-600">
      <MdDarkMode size={32} className="" />
      <span className="font-bold">Change Theme</span>
    </div>
  )}
</button>
  );
}
