import { PersonalInfo } from '@/app/interfaces';
import { SkillBadge } from '../SkillBadge';

type Props = {
  personalInfo: PersonalInfo;
};

export const SkillSection = ({ personalInfo }: Props) => {
  return (
    <section
      id="skills"
      className="mb-20 md:mb-32 p-8 bg-gray-900 rounded-xl shadow-xl border border-gray-800 animate-fade-in delay-200">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Technologies & Skills</h2>
      <div className="space-y-10">
        {Object.entries(personalInfo.skills)
          .filter(([key]) => key !== 'softSkills')
          .map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6 capitalize border-b border-gray-700 pb-3">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
