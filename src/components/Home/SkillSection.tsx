'use client';

import { useAnimation, motion } from 'framer-motion';
import { PersonalInfo, Skill } from '@/interfaces';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { SkillGroup } from '@/components/ui';

type Props = {
  personalInfo: PersonalInfo;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { stiffness: 100, damping: 20 } },
};

export const SkillSection = ({ personalInfo }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [controls, inView]);

  return (
    <motion.section
      id="skills"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="mb-20 md:mb-32 p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-xl border border-gray-200 dark:border-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        Technologies & Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(personalInfo.skills)
          .filter(([key]) => key !== 'softSkills')
          .map(([category, skills]) => (
            <SkillGroup
              key={category}
              category={category}
              skills={skills as Array<Skill>}
              itemVariants={itemVariants}
            />
          ))}
      </div>
    </motion.section>
  );
};
