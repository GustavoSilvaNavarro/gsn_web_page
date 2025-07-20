import { NavBar, MainSection } from '@/app/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans antialiased">
      <NavBar />
      <main className="container mx-auto px-6 py-24 md:py-32">
        <MainSection />
      </main>
    </div>
  );
}
