// components/Navbar.js
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-md z-50">
      <ul className="flex justify-center gap-6 p-4 text-sm sm:text-base">
        {['Hero', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((section) => (
          <li key={section}>
            <a href={`#${section.toLowerCase()}`} className="hover:text-yellow-400 transition-colors">
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
