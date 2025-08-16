'use client'; // This is a client component

import { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from '@/components/ui/toggle/DarkModeToggle';
import { FaGithub, FaLinkedin, FaBars } from 'react-icons/fa';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

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
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-60 bg-white bg-opacity-90 dark:bg-gray-950 dark:bg-opacity-90 backdrop-blur-sm shadow-md dark:shadow-lg">
      <div className="flex justify-between items-center py-4 px-6 md:px-12 border-b border-gray-200 dark:border-gray-800">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Goose<span className="text-gray-800 dark:text-gray-100">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                href="/challenges"
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

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button className="ml-4 p-2 text-gray-600 dark:text-gray-300">
                <FaBars size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="z-70 flex flex-col w-[300px] sm:w-[400px]">
              <SheetHeader className="pb-4">
                <SheetTitle className="text-center">Goose.dev</SheetTitle>
                <SheetDescription className="sr-only">Portfolio navigation menu</SheetDescription>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto px-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/"
                      onClick={() => setIsSheetOpen(false)}
                      className="py-2 px-4 rounded-md text-lg font-bold text-gray-800 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                      Home
                    </Link>
                    {navType === 'main' && (
                      <div className="flex flex-col space-y-2">
                        {mainPageLinks.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsSheetOpen(false)}
                            className="py-2 px-4 rounded-md ml-4 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-lg">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link
                    href={'/challenges'}
                    onClick={() => setIsSheetOpen(false)}
                    className="py-2 px-4 rounded-md text-lg font-bold text-gray-800 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                    Challenges
                  </Link>
                </div>
              </div>

              <div className="pt-4 pb-4 mt-auto flex space-x-6 justify-center border-t border-gray-200 dark:border-gray-800">
                <a
                  href="https://github.com/GustavoSilvaNavarro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gustavo-silva-navarro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {navType === 'main' ? (
        <div className="hidden md:flex justify-center py-2 px-6 md:px-12">
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
