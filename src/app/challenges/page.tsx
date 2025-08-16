import { NavBar } from '@/components/NavBar';
import { FunCoderPage } from '@/components/challenges/Challenges';

export default function Challenges() {
  return (
    <div className="h-screen">
      <NavBar navType="challenges" />

      <main className="h-screen pt-20 px-6">
        <FunCoderPage />
      </main>
    </div>
  );
}
