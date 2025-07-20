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
  languages: Array<string>;
  frontend: Array<string>;
  backend: Array<string>;
  databases: Array<string>;
  devops: Array<string>;
  messaging: Array<string>;
  cloud: Array<string>;
  styling: Array<string>;
  ai: Array<string>;
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
