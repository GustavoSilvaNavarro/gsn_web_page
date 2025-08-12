import { PersonalInfo } from '@/interfaces';
import { FaDownload, FaEye } from 'react-icons/fa';
import { CoderBackground } from '@/components/backgrounds/CoderBackground';

type Props = {
  personalInfo: PersonalInfo;
};

export const MainSection = ({ personalInfo }: Props) => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center px-4 md:px-8 py-24 min-h-[calc(100vh-110px)] md:min-h-[calc(100vh-100px)]">
      <CoderBackground />
      <div className="flex flex-col items-center gap-4 mb-8 z-20">
        <h1 className="text-4xl md:text-6xl font-semibold max-w-2xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent leading-tight animate-gradient">
          {personalInfo.shortName} - building user-centric digital solutions.
        </h1>
      </div>

      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-100 max-w-4xl text-pretty z-20">
        {personalInfo.headline}
      </p>

      <div className="flex flex-col md:flex-row gap-4 z-10 mt-8">
        <a
          href="/Gustavo_Silva_resume.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
          Download CV <FaDownload />
        </a>
        <a
          href="#experience"
          className="bg-transparent border-2 border-blue-700 dark:border-blue-700 hover:bg-blue-700 dark:hover:bg-gray-800 text-blue-700 dark:text-gray-100 hover:text-white py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
          View My Work <FaEye />
        </a>
      </div>
    </section>
  );
};
