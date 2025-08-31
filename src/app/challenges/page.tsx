import { NavBar } from '@/components/NavBar';
import { FunCoderPage } from '@/components/challenges/Challenges';

export default function Challenges() {
  return (
    <div className="h-screen flex flex-col">
      <NavBar navType="challenges" fixedNav={false} />

      <main className="flex-grow">
        <FunCoderPage />
      </main>
    </div>
  );
}
