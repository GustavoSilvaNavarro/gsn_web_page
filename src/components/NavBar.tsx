export const NavBar = () => {
  return (
    <nav className="fixed w-full z-10 bg-gray-950 bg-opacity-90 backdrop-blur-sm shadow-lg py-4 px-6 md:px-12 flex justify-between items-center border-b border-gray-800">
      <div className="text-2xl font-bold text-blue-400">
        GS<span className="text-gray-100">.dev</span>
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
            Skills
          </a>
        </li>
        <li>
          <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
            Experience
          </a>
        </li>
        <li>
          <a href="#education" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
            Education
          </a>
        </li>
        {/* Placeholder for Challenges page link - In a real Next.js app, this would be <Link href="/challenges"> */}
        <li>
          <a href="/challenges" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
            Challenges
          </a>
        </li>
      </ul>
    </nav>
  );
};
