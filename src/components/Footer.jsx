export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {year} Fitra Rizky Oktarian. All rights reserved.</p>
        <div className="flex items-center gap-4 text-gray-700">
          <a href="#" className="hover:underline text-sm">LinkedIn</a>
          <a href="#" className="hover:underline text-sm">Instagram</a>
          <a href="#" className="hover:underline text-sm">Dribbble</a>
        </div>
      </div>
    </footer>
  );
}
