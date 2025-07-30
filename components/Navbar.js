export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white">
      <ul className="flex gap-6 justify-center">
        <li><a href="#hero">Hero</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
