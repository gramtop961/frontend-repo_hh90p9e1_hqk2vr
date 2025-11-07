export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Tentang Fitra</h2>
        </div>
        <div className="md:col-span-7 text-gray-700 leading-relaxed text-base md:text-lg">
          <p>
            Saya Fitra Rizky Oktarian, seorang [bidang] dengan passion dalam [minat]. Saya suka menciptakan solusi yang inovatif dan estetik, berfokus pada kejelasan, aksesibilitas, dan pengalaman pengguna yang halus.
          </p>
          <p className="mt-6">
            Keahlian utama mencakup desain antarmuka, pengembangan web modern, dan eksplorasi visual digital. Prinsip saya sederhana: minimalisme yang bermakna, fungsionalitas yang jelas, dan detail yang presisi.
          </p>
        </div>
      </div>
    </section>
  );
}
