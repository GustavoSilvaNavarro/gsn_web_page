import {
  NavBar,
  MainSection,
  AboutSection,
  SkillSection,
  ProfessionalSection,
  EducationSection,
  Footer,
} from '@/components';
import { personalDetails } from '@/utils';

export default function Home() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <NavBar />
      <main className="container mx-auto px-6 py-24 md:py-32">
        <MainSection personalInfo={personalDetails} />
        <AboutSection personalInfo={personalDetails} />
        <SkillSection personalInfo={personalDetails} />
        <ProfessionalSection personalInfo={personalDetails} />
        <EducationSection personalInfo={personalDetails} />
      </main>
      <Footer personalInfo={personalDetails} />
    </div>
  );
}
