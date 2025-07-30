// components/Navbar.js
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-md z-50 flex justify-between items-center px-6 py-4">
      <ul className="flex gap-4 sm:gap-6 text-sm sm:text-base">
        {['Hero', 'About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact'].map((section) => (
          <li key={section}>
            <a href={`#${section.toLowerCase()}`} className="hover:text-yellow-400 transition-colors">
              {section}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-yellow-400 text-black px-3 py-1 rounded-full font-medium hover:bg-yellow-300"
      >
        {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </nav>
  );
}
