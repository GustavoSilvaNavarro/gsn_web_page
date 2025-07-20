import { PersonalInfo } from '@/app/interfaces';

type Props = {
  personalInfo: PersonalInfo;
};

export const AboutSection = ({ personalInfo }: Props) => {
  return (
    <section
      id="about"
      className="mb-20 md:mb-32 p-8 bg-gray-900 rounded-xl shadow-xl border border-gray-800 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            As a Full-Stack Software Engineer, I thrive on building robust and user-centric applications. My expertise
            spans both frontend and backend development, enabling me to craft seamless experiences from database to user
            interface.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am deeply passionate about delivering high-performance, maintainable, and scalable systems. My approach is
            rooted in clean code principles, modern architectural patterns, and a relentless focus on user satisfaction.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">Key Strengths</h3>
          <ul className="space-y-3 text-lg text-gray-300">
            {personalInfo.skills.softSkills.map((strength, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"></path>
                </svg>
                {strength}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
