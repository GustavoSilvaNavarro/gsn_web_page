import Image from 'next/image';
import { Skill } from '@/interfaces';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type Props = {
  skill: Skill;
};

export const SkillIcon = ({ skill }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex flex-col items-center justify-center p-2 bg-gray-100 dark:bg-gray-200 rounded-md shadow-sm dark:shadow-md cursor-pointer">
            <Image
              className="skill-icon w-10 h-10 object-contain"
              src={skill.icon}
              alt={skill.name}
              width="40"
              height="40"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-gray-800 text-white dark:bg-blue-600 dark:text-white p-2 rounded-md shadow-lg">
          <p>{skill.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
