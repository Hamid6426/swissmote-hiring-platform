// components/ThemeToggle.js
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark'); // Apply .dark on <html>
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
    className='btn btn-primary px-3 py-1 text-white rounded-2 border-0'
    >
      {isDarkMode ? 'Light' : 'Dark'}
    </button>
  );
}
