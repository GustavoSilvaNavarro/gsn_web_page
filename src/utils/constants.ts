import { PersonalInfo } from '@/interfaces';

export const personalDetails: PersonalInfo = {
  name: 'Gustavo A. Silva Navarro',
  title: 'Software Engineer',
  profile:
    'Full-Stack Software Engineer with strong proficiency in both frontend and backend development. Experienced in building scalable, maintainable systems using TypeScript, Node.js, and Python. Skilled in modern frameworks, API design, and database architecture. Passionate about delivering clean, user-focused applications with high performance and reliability.',
  skills: {
    // languages: ['JavaScript', 'Python', 'TypeScript'],
    // frontend: ['ReactJs', 'Nextjs', 'React Native'],
    // backend: ['Nest.js', 'Express.js', 'Fastify', 'FastAPI'],
    // databases: ['Timescale', 'MySQL', 'Postgres', 'MongoDB', 'Redis'],
    // devops: ['Docker', 'Podman', 'k8s'],
    // messaging: ['NATS', 'GraphQL', 'Websockets'],
    // cloud: ['GCP', 'AWS', 'Terraform'],
    // styling: ['HTML', 'CSS', 'Sass', 'Tailwindcss'],
    // ai: ['Tensorflow', 'Langchain', 'AI agents'],
    frontend: [
      {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      {
        name: 'TailwindCSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      },
    ],
    backend: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      {
        name: 'Express',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
      },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
      {
        name: 'Spring Boot',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
      },
      { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg' },
    ],
    databases: [
      {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
    ],
    tools: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      {
        name: 'Kubernetes',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg',
      },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    ],
    softSkills: [
      'Problem-solver and critical thinker',
      'Quick learner with ability to adapt to new tools and frameworks',
      'Flexible and collaborative in cross-functional teams',
      'Fully bilingual, English & Spanish',
    ],
  },
  experience: [
    {
      title: 'Software Engineer',
      company: 'Powerflex',
      dates: '2023-Present',
      location: 'Remote EST',
      achievements: [
        'Drove the integration of OCPI protocol, enabling EVSE network interoperability with external providers.',
        "Engineered and deployed a cross-cloud data sync service (GCP→AWS), through NATS, to deliver EVSE telemetry for Amazon's 35k+ station fleet.",
        'Architected and owned vehicle telematics and charging session integration to support real-time charging data for new fleet drivers.',
        'Implemented OpenADR demand-response capabilities to support load-shedding via real-time event processing and optimization logic.',
        'Led the integration of ISO-15118 certificate services for 50,000+ EVSEs, ensuring secure communication with a registration authority.',
        'Delivered new JT48 EVSE remote start session flow, enabling seamless charging initiation for fleet drivers via remote commands.',
        'Built a fleet-wide monitoring and alerting system to track EVSE health and status across multiple clients and geographic sites.',
        'Developed and led RFID integration to enable secure field-based charging session initiations across the EVSE network.',
        'Conducted 15+ technical interviews, focusing on coding skills and problem-solving proficiency.',
        'Provided technical mentorship and conducted code reviews, driving improvements in team efficiency and code quality.',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'EventPlanner',
      dates: '2022-2023',
      location: 'Remote EST',
      achievements: [
        'Collaborated effectively within a 3-person engineering team, adhering to robust Git workflows and best practices for version control.',
        'Led the successful migration to TypeScript across both backend and frontend, significantly improving code quality and type safety.',
        'Developed unit and integration tests using Jest to ensure application reliability and maintainability.',
        'Restructured data models and optimized database queries to improve performance.',
        'Identified and resolved bugs and application breakpoints, increasing system stability.',
        'Refactored server architecture for modularity and maintainability, implemented centralized error handling.',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Crafters',
      dates: '2022-2022',
      location: 'Remote EST',
      achievements: [
        'Developed modular, state-managed React components using Context API and custom hooks.',
        'Integrated Stripe for secure, high-performance payment processing.',
        'Structured backend using MVC architecture to ensure clean, maintainable, and reusable code.',
        'Implemented Framer Motion to deliver polished, interactive UI animations.',
        'Optimized image loading on the main page to enhance initial load performance and user experience.',
      ],
    },
    {
      title: 'Turbomachinery Maintenance Engineer - Acting Supervisor',
      company: 'Pluspetrol',
      dates: '2020-2022',
      location: 'Cusco, Peru',
      achievements: [
        'Supervised a team of 15-30 mechanical and electrical technicians, ensuring high operational efficiency and safety.',
        'Led high-impact maintenance interventions to eliminate unplanned equipment downtime and restore plant operations.',
        'Aligned maintenance programs with organizational goals to support long-term reliability and performance targets.',
        'Conducted performance evaluations and implemented improvement plans to elevate team capabilities and accountability.',
        'Managed a $53M maintenance budget, recovering $5M in potential losses through cost controls and strategic planning.',
        'Collaborated with senior leadership to coordinate plant-wide initiatives and critical maintenance activities.',
      ],
    },
  ],
  education: [
    {
      degree: 'Certification, Full Stack Software Engineering',
      institution: 'CodeWorks',
      dates: '2022-2022',
      location: 'Remote EST',
    },
    {
      degree: 'ME, Oil & Gas Production',
      institution: 'Instituto Tecnológico de Buenos Aires',
      dates: '2018-2019',
      location: 'Buenos Aires, Argentina',
    },
    {
      degree: 'BE, Mechanical and Electrical',
      institution: 'Universidad de Piura',
      dates: '2013-2018',
      location: 'Piura, Peru',
    },
  ],
  contact: {
    email: 'gustavo.silva.nav@gmail.com',
    github: 'https://github.com/GustavoSilvaNavarro',
    linkedin: 'https://www.linkedin.com/in/gustavo-silva-navarro',
  },
};
