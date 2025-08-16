import { NavBar } from '@/components/NavBar';
import { FunCoderPage } from '@/components/challenges/Challenges';

export default function Challenges() {
  return (
    <div className="h-screen">
      <NavBar navType="challenges" />

      <main className="mt-16">
        <FunCoderPage />
      </main>
    </div>
  );
}
