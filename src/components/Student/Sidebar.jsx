import { useState, useEffect } from "react";

const navLinks = [
  { id: "notas", label: "Notas" },
  { id: "asistencia", label: "Asistencia" },
  { id: "horario", label: "Horario" },
];

export default function Sidebar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const updateActive = () => {
      setActive(window.location.hash.replace("#", ""));
    };

    window.addEventListener("hashchange", updateActive);
    updateActive(); // inicial
    return () => window.removeEventListener("hashchange", updateActive);
  }, []);

  return (
    <aside className="fixed top-0 left-0 flex flex-col bg-[var(--background-secondary)] p-4 gap-y-6 h-full border-r border-[var(--border)] w-48">
      <div>
        <span className="font-black">PIGE</span>
      </div>

      <nav>
        <span className="text-black font-medium text-sm">Panel</span>
        <ul className="flex flex-col gap-1 mt-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`block w-full px-3 py-2 text-sm rounded-md transition-colors ${
                  active === link.id
                    ? "bg-gray-300 font-semibold"
                    : "text-[var(--gray-text)] hover:bg-gray-200"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
