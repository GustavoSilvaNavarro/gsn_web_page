export const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="bg-gray-700 text-blue-300 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white">
    {skill}
  </span>
);
