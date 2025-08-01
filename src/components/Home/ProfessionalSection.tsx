'use client';

import { useAnimation, motion, type Variants } from 'framer-motion';
import { PersonalInfo } from '@/interfaces';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

type Props = {
  personalInfo: PersonalInfo;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

export const ProfessionalSection = ({ personalInfo }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [controls, inView]);

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="mb-20 md:mb-32 p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-xl border border-gray-200 dark:border-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        Professional Experience
      </h2>
      <div className="relative border-l-4 border-blue-600 dark:border-blue-600 pl-6 md:pl-12">
        <Accordion type="single" collapsible className="w-full">
          {personalInfo.experience.map((job, index) => (
            <motion.div variants={itemVariants} key={index}>
              <AccordionItem
                value={`item-${index}`}
                className="mb-8 relative border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 group">
                <div
                  className={cn(
                    'w-3 h-3',
                    'md:w-4 md:h-4',
                    'bg-blue-600 dark:bg-blue-600 rounded-full',
                    '-left-4',
                    'md:-left-10',
                    'absolute top-4 border-2 border-gray-100 dark:border-gray-900',
                  )}></div>
                <AccordionTrigger className="flex flex-col items-start text-left hover:no-underline px-0 py-0 transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-blue-700 dark:hover:text-blue-400">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">{job.title}</h3>
                  <p className="text-blue-600 dark:text-blue-300 text-lg mb-2 opacity-90">
                    {job.company} | {job.dates} | {job.location}
                  </p>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-0 overflow-hidden">
                  <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
                    {job.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="relative pl-6 text-gray-700 dark:text-gray-300 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full text-base">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
};
