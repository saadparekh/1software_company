export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 text-center py-8 border-t border-slate-800">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-blue-400">Codexa</span> — Empowering Innovation.
      </p>
    </footer>
  );
}
