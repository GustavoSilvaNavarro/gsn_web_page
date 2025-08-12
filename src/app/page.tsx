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
import { FloatingContactButton } from '@/components/ContactButton';
import { StarsBackground } from '@/components/backgrounds/Stars';

export default function Home() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <NavBar navType="main" />

      <main className="pt-[110px] md:pt-[100px]">
        <MainSection personalInfo={personalDetails} />

        <StarsBackground>
          <div className="container mx-auto px-6 py-6 md:py-12">
            <AboutSection personalInfo={personalDetails} />
            <SkillSection personalInfo={personalDetails} />
            <ProfessionalSection personalInfo={personalDetails} />
            <EducationSection personalInfo={personalDetails} />
          </div>
        </StarsBackground>
      </main>

      <Footer />
      <FloatingContactButton />
    </div>
  );
}
