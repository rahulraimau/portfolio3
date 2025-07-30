// components/Layout.js
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Navbar />
      <main className="flex-1 overflow-y-auto p-8 max-w-6xl mx-auto">{children}</main>
    </div>
  );
}

// components/Navbar.js
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const links = ['hero', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];

  return (
    <nav className="h-screen w-48 bg-gray-100 dark:bg-gray-800 border-r dark:border-gray-700 p-4 fixed left-0 top-0 flex flex-col items-start gap-4">
      <h1 className="text-xl font-bold mb-6 text-yellow-500">Rahul Rai</h1>
      {links.map(link => (
        <a
          key={link}
          href={`#${link}`}
          className="capitalize hover:text-yellow-400 transition text-sm"
        >
          {link}
        </a>
      ))}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mt-auto text-xs px-3 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-300"
      >
        Toggle {darkMode ? 'Light' : 'Dark'}
      </button>
    </nav>
  );
}
