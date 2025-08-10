import Link from 'next/link';
import { ModeToggle } from '@/components/ui/toggle/DarkModeToggle';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import the icons

const mainPageLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
];

type NavBarProps = {
  navType: 'main' | 'challenges';
};

export const NavBar = ({ navType }: NavBarProps) => {
  return (
    <nav className="fixed w-full z-60 bg-white bg-opacity-90 dark:bg-gray-950 dark:bg-opacity-90 backdrop-blur-sm shadow-md dark:shadow-lg">
      <div className="flex justify-between items-center py-4 px-6 md:px-12 border-b border-gray-200 dark:border-gray-800">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          GS<span className="text-gray-800 dark:text-gray-100">.dev</span>
        </Link>
        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                href={'/challenges'}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                challenges
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/GustavoSilvaNavarro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/gustavo-silva-navarro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <FaLinkedin size={24} />
            </a>
            <ModeToggle />
          </div>
        </div>
      </div>

      {navType === 'main' ? (
        <div className="flex justify-center py-2 px-6 md:px-12">
          <ul className="flex space-x-6">
            {mainPageLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  );
};
