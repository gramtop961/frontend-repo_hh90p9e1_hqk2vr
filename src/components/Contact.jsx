export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Mari Berkolaborasi</h2>
          <p className="mt-4 text-gray-600">Halo! Mari berkolaborasi untuk mewujudkan ide Anda. Isi formulir atau kirim email langsung.</p>
          <div className="mt-6 space-y-2 text-sm text-gray-700">
            <p><span className="font-medium">Email:</span> fitra@example.com</p>
            <p><span className="font-medium">LinkedIn:</span> linkedin.com/in/fitrarizky</p>
          </div>
        </div>
        <div className="md:col-span-7">
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-4">
            <input className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Nama" />
            <input type="email" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Email" />
            <textarea rows="5" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Pesan" />
            <button className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </section>
  );
}
