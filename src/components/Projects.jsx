const projects = [
  {
    title: 'Proyek E-commerce A',
    desc: 'Desain dan pengembangan antarmuka e-commerce modern dengan fokus pada performa dan pengalaman checkout.',
    image: 'https://images.unsplash.com/photo-1657812159103-1b2a52a7f5e8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcm95ZWslMjBFLWNvbW1lcmNlJTIwQXxlbnwwfDB8fHwxNzYyNTM4ODIyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '#',
  },
  {
    title: 'Dashboard Analitik B',
    desc: 'Sistem visualisasi data interaktif untuk insights bisnis realtime dengan desain yang bersih dan responsif.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1640&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Portofolio Kreatif C',
    desc: 'Eksplorasi identitas visual dan pengalaman mikro-animasi untuk menonjolkan karya kreatif.',
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1640&auto=format&fit=crop',
    link: '#',
  },
];

function ProjectCard({ title, desc, image, link }) {
  return (
    <a href={link} className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition bg-white">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
        <span className="mt-4 inline-block text-sm font-medium text-gray-900 group-hover:underline">Lihat Proyek →</span>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Pilihan Proyek</h2>
          <a href="#contact" className="text-sm text-gray-700 hover:underline">Butuh sesuatu yang spesifik?</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
