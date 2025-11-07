import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold tracking-tight text-gray-900 hover:opacity-80">
          Fitra Rizky Oktarian
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#about" className="relative group">About
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gray-900 transition-all group-hover:w-full" />
          </a>
          <a href="#projects" className="relative group">Projects
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gray-900 transition-all group-hover:w-full" />
          </a>
          <a href="#contact" className="relative group">Contact
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gray-900 transition-all group-hover:w-full" />
          </a>
        </nav>
      </div>
    </header>
  );
}
