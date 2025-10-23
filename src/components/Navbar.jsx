import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const links = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-slate-900 text-white py-5 px-10 flex justify-between items-center shadow-lg sticky top-0 z-50">
      <h1 className="text-3xl font-bold tracking-wide text-blue-500">Codexa</h1>
      <div className="space-x-8 text-lg">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`hover:text-blue-400 ${
              pathname === link.path ? "text-blue-400 font-semibold" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
