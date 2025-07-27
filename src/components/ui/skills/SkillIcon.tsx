import Image from 'next/image';
import { Skill } from '@/interfaces'; // Import the Skill interface

type Props = {
  skill: Skill;
};

export const SkillIcon = ({ skill }: Props) => {
  return (
    // Added bg-gray-100 for the white-ish background and rounded-md for slight rounding
    <div className="flex flex-col items-center justify-center p-2 bg-gray-100 rounded-md shadow-sm">
      <Image className="skill-icon w-10 h-10 object-contain" src={skill.icon} alt={skill.name} width="40" height="40" />
    </div>
  );
};
