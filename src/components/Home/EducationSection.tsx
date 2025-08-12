'use client';

import { useAnimation, motion, type Variants } from 'framer-motion';
import { PersonalInfo } from '@/interfaces';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

type Props = {
  personalInfo: PersonalInfo;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

export const EducationSection = ({ personalInfo }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [controls, inView]);

  return (
    <motion.section
      id="education"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="mb-20 md:mb-32 p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-xl border border-gray-200 dark:border-gray-800 scroll-mt-[10rem]">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {personalInfo.education.map((edu, index) => (
          <motion.div
            key={index}
            className="h-full"
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)',
              transition: { duration: 0.2 },
            }}>
            <Card className="flex flex-col h-full">
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
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
