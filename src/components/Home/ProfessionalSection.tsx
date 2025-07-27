import { PersonalInfo } from '@/interfaces';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type Props = {
  personalInfo: PersonalInfo;
};

export const ProfessionalSection = ({ personalInfo }: Props) => {
  return (
    <section
      id="experience"
      className="mb-20 md:mb-32 p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-xl border border-gray-200 dark:border-gray-800 animate-fade-in-large delay-400">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        Professional Experience
      </h2>
      <div className="relative border-l-4 border-blue-600 dark:border-blue-600 pl-6 md:pl-12">
        <Accordion type="single" collapsible className="w-full">
          {personalInfo.experience.map((job, index) => (
            <AccordionItem
              value={`item-${index}`}
              key={index}
              className="mb-8 relative border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
              <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-600 rounded-full -left-8 md:-left-10 top-4 border-2 border-gray-100 dark:border-gray-900"></div>

              <AccordionTrigger className="flex flex-col items-start text-left hover:no-underline px-0 py-0">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">{job.title}</h3>
                <p className="text-blue-600 dark:text-blue-300 text-lg mb-2">
                  {job.company} | {job.dates} | {job.location}
                </p>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-0">
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
