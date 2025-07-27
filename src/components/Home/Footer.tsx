import { PersonalInfo } from '@/interfaces';

type Props = {
  personalInfo: PersonalInfo;
};

export const Footer = ({ personalInfo }: Props) => {
  return (
    <footer className="py-10 text-center bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400">
      <p>
        &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href={personalInfo.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.683-.23.683-.505 0-.247-.01-1.015-.015-1.994-2.788.607-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.068-.608.068-.608 1.007.072 1.532 1.03 1.532 1.03.89 1.529 2.34 1.089 2.91.833.09-.645.35-1.089.636-1.338-2.22-.253-4.555-1.112-4.555-4.93 0-1.09.39-1.984 1.03-2.68a3.55 3.55 0 01.1-2.642s.83-.268 2.735 1.026c.79-.22 1.63-.33 2.47-.33.84 0 1.68.11 2.47.33 1.905-1.294 2.735-1.026 2.735-1.026.25.64.38 1.49.1 2.642.64.696 1.03 1.59 1.03 2.68 0 3.826-2.338 4.673-4.564 4.92.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .276.21.596.687.504C20.146 20.198 23 16.443 23 12.017 23 6.484 18.522 2 12 2z"
              clipRule="evenodd"></path>
          </svg>
        </a>
        <a
          href={personalInfo.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
          </svg>
        </a>
        <a
          href={`mailto:${personalInfo.contact.email}`}
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 12.713l-11.75 6.787v-13.5l11.75 6.713zm0 0l11.75-6.787v13.5l-11.75-6.713zm0-3.713l-12 7.026v-14.052l12-7.026 12 7.026v14.052l-12-7.026z"></path>
          </svg>
        </a>
      </div>
    </footer>
  );
};
