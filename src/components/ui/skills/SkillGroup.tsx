'use client';

import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Skill } from '@/interfaces';
import { SkillIcon } from './SkillIcon';

type Props = {
  category: string;
  skills: Array<Skill>;
  itemVariants: Variants;
};

export const SkillGroup = ({ category, skills, itemVariants }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const displayCategory = category.replace(/([A-Z])/g, ' $1').trim();

  return (
    <motion.div
      variants={itemVariants}
      className={`
        relative p-4 rounded-xl shadow-md dark:shadow-lg transition-all duration-500 ease-in-out cursor-pointer overflow-hidden
        min-h-[150px] flex flex-col items-center justify-center text-center bg-gray-100 dark:bg-gray-800 border
        border-gray-200 dark:border-gray-700
        ${isHovered ? 'z-20 transform scale-105 bg-gray-200 dark:bg-gray-700 border-blue-400 dark:border-blue-500' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <h4
        className={`
          category-title text-xl font-thin text-blue-600 dark:text-blue-300 capitalize mb-4
          absolute top-4 left-0 right-0 px-4 transition-opacity duration-500 ease-in-out transform
          ${isHovered ? 'opacity-100 relative translate-y-0 animate-fade-in' : 'opacity-0 -translate-y-2'}
        `}>
        {displayCategory}
      </h4>
      <div
        className={`
          icons-container flex flex-wrap justify-center items-center w-full max-h-full overflow-y-auto custom-scrollbar
          transition-all duration-500 ease-in-out
          ${isHovered ? 'gap-4 pt-10' : 'gap-2 pt-0'}
        `}>
        {skills.map((skill) => (
          <SkillIcon key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};
