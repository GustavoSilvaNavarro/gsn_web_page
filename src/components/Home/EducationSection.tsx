import { PersonalInfo } from '@/interfaces';

type Props = {
  personalInfo: PersonalInfo;
};

export const EducationSection = ({ personalInfo }: Props) => {
  return (
    <section
      id="education"
      className="mb-20 md:mb-32 p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-xl border border-gray-200 dark:border-gray-800 animate-fade-in-large delay-600">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {personalInfo.education.map((edu, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md dark:shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
            <p className="text-blue-600 dark:text-blue-300">{edu.institution}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {edu.dates} | {edu.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
