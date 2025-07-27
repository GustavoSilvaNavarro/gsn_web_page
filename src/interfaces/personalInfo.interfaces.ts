export type PersonalInfo = {
  name: string;
  title: string;
  profile: string;
  skills: Skills;
  experience: Array<ExperienceItem>;
  education: Array<EducationItem>;
  contact: Contact;
};

type Skills = {
  languages: Array<Skill>;
  cloudDevops: Array<Skill>;
  messaging: Array<Skill>;
  monitoring: Array<Skill>;
  styling: Array<Skill>;
  frontEnd: Array<Skill>;
  backEnd: Array<Skill>;
  databases: Array<Skill>;
  testing: Array<Skill>;
  tools: Array<Skill>;
  softSkills: Array<string>;
};

type ExperienceItem = {
  title: string;
  company: string;
  dates: string;
  location: string;
  achievements: Array<string>;
};

type EducationItem = {
  degree: string;
  institution: string;
  dates: string;
  location: string;
};

type Contact = {
  email: string;
  github: string;
  linkedin: string;
};

export type Skill = { name: string; icon: string };
