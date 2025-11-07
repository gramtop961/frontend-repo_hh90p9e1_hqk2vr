import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">Fitra Rizky Oktarian</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-xl">
            Web Developer · UI/UX Designer · Digital Artist
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-white text-sm hover:bg-black transition">Lihat Proyek</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-gray-300 px-6 py-3 text-sm text-gray-900 hover:bg-gray-50 transition">Kontak</a>
          </div>
        </div>
      </div>
    </section>
  );
}
