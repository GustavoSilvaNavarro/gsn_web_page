'use client';

import { useAnimation, motion } from 'framer-motion';
import { PersonalInfo } from '@/interfaces';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

type Props = {
  personalInfo: PersonalInfo;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const leftItemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      stiffness: 100,
      damping: 20,
    },
  },
};

const rightItemVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      stiffness: 100,
      damping: 20,
    },
  },
};

export const AboutSection = ({ personalInfo }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [controls, inView]);

  return (
    <motion.section
      id="about"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="my-20 md:mb-32 p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-xl border border-gray-200 dark:border-gray-800 scroll-mt-[10rem]">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div variants={leftItemVariants} className="relative">
          <motion.div
            className="w-full h-[350px] relative rounded-xl overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
            <Image
              src="/gsn.jpeg"
              alt="Gustavo Silva"
              width={1280}
              height={1237}
              className="w-full h-full object-cover object-center"
              priority
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-blue-700 bg-opacity-80 flex flex-col p-8 text-white shadow-[0_0_15px_rgba(37,99,235,0.7)] overflow-y-auto items-start text-left">
              <p className="text-justify text-lg leading-relaxed mb-4">
                As a Full-Stack Software Engineer, I thrive on building robust and user-centric applications. My
                expertise spans both frontend and backend development, enabling me to craft seamless experiences from
                database to user interface.
              </p>
              <p className="text-lg leading-relaxed text-justify">
                I am deeply passionate about delivering high-performance, maintainable, and scalable systems. My
                approach is rooted in clean code principles, modern architectural patterns, and a relentless focus on
                user satisfaction.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div variants={rightItemVariants}>
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Key Strengths</h3>
          <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
            {personalInfo.skills.softSkills.map((strength, index) => (
              <motion.li key={index} variants={rightItemVariants} className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"></path>
                </svg>
                {strength}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};
