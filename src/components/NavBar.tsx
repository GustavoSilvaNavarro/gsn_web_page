import Link from 'next/link';
import { ModeToggle } from '@/components/ui/toggle/DarkModeToggle';

export const NavBar = () => {
  return (
    <nav className="fixed w-full z-60 bg-white bg-opacity-90 dark:bg-gray-950 dark:bg-opacity-90 backdrop-blur-sm shadow-md dark:shadow-lg py-4 px-6 md:px-12 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        GS<span className="text-gray-800 dark:text-gray-100">.dev</span>
      </div>
      <ul className="flex space-x-6">
        <li>
          <a
            href="#about"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            Skills
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            Experience
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            Education
          </a>
        </li>
        <li>
          <Link
            href="/challenges"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            Challenges
          </Link>
        </li>
      </ul>
      <ModeToggle />
    </nav>
  );
};
