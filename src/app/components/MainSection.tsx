import Image from 'next/image';
import { personalDetails } from '@/app/utils';

export const MainSection = () => {
  return (
    <section id="hero" className="flex flex-col items-center text-center mb-20 md:mb-32">
      <div className="relative w-50 h-50 rounded-full bg-gray-800 flex items-center justify-center mb-8 overflow-hidden border-4 border-blue-500 shadow-xl">
        <Image
          src="/gsn.jpeg"
          alt="Gustavo Silva Navarro"
          fill // Fills the parent container
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up">
        Hello, I&apos;m <span className="text-blue-400">{personalDetails.name}</span>.
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8 animate-fade-in-up delay-200 text-justify text-pretty">
        {personalDetails.profile}
      </p>
      <a
        href="#experience"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400">
        View My Work
      </a>
    </section>
  );
};
