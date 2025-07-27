import Image from 'next/image';
import { Skill } from '@/interfaces'; // Import the Skill interface

type Props = {
  skill: Skill;
};

export const SkillIcon = ({ skill }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 bg-gray-100 dark:bg-gray-200 rounded-md shadow-sm dark:shadow-md">
      <Image className="skill-icon w-10 h-10 object-contain" src={skill.icon} alt={skill.name} width="40" height="40" />
    </div>
  );
};
