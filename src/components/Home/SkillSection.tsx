import { PersonalInfo, Skill } from '@/interfaces'; // Import PersonalInfo interface
import { SkillGroup } from '@/components/ui'; // Import SkillGroup component

type Props = {
  personalInfo: PersonalInfo;
};

export const SkillSection = ({ personalInfo }: Props) => {
  return (
    <section
      id="skills"
      className="mb-20 md:mb-32 p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-xl border border-gray-200
      dark:border-gray-800 animate-fade-in delay-200">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        Technologies & Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(personalInfo.skills)
          .filter(([key]) => key !== 'softSkills')
          .map(([category, skills]) => (
            <SkillGroup key={category} category={category} skills={skills as Array<Skill>} />
          ))}
      </div>
    </section>
  );
};
