import { PersonalInfo } from '@/interfaces';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

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
          <Card
            key={index}
            className="flex flex-col h-full hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</CardTitle>
              <CardDescription className="text-blue-600 dark:text-blue-300">{edu.institution}</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow"></CardContent>

            <CardFooter className="text-gray-600 dark:text-gray-400 text-sm flex justify-between items-center">
              <span>{edu.dates}</span>
              <span>{edu.location}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
