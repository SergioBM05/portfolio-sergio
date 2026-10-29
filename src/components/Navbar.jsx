import React, { useEffect, useState } from 'react';

const ENLACES = [
  { id: 'sobre-mi', texto: 'Sobre Mí' },
  { id: 'proyectos', texto: 'Proyectos' },
  { id: 'skills', texto: 'Skills' },
  { id: 'contacto', texto: 'Contacto' },
];

export default function Navbar() {
  const [progreso, setProgreso] = useState(0);
  const [conFondo, setConFondo] = useState(false);
  const [activo, setActivo] = useState('');
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Barra de progreso de lectura + fondo sólido al bajar.
  useEffect(() => {
    const alScrollear = () => {
      const alto = document.documentElement.scrollHeight - window.innerHeight;
      setProgreso(alto > 0 ? (window.scrollY / alto) * 100 : 0);
      setConFondo(window.scrollY > 24);
    };

    alScrollear();
    window.addEventListener('scroll', alScrollear, { passive: true });
    return () => window.removeEventListener('scroll', alScrollear);
  }, []);

  // Resalta el enlace de la sección visible.
  useEffect(() => {
    const secciones = ENLACES.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (!secciones.length) return;

    const observer = new IntersectionObserver(
      (entradas) => {
        const visible = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActivo(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
    );

    secciones.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Evita el scroll del fondo mientras el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = menuAbierto ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuAbierto]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        conFondo ? 'border-b border-slate-800/80 bg-darkBg/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      {/* Progreso de lectura */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-brandGreen via-brandBlue to-brandPurple transition-[width] duration-150"
        style={{ width: `${progreso}%` }}
      />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-[0.2em] uppercase"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brandGreen to-brandBlue font-mono text-sm font-bold text-slate-950 transition-transform group-hover:scale-110">
            S
          </span>
          <span className="hidden text-slate-200 transition-colors group-hover:text-white sm:inline">
            Sergio Burbano
          </span>
        </a>

        {/* Navegación de escritorio */}
        <nav className="hidden items-center gap-1 md:flex">
          {ENLACES.map(({ id, texto }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                activo === id ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {texto}
              {activo === id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-brandGreen to-brandBlue" />
              )}
            </a>
          ))}

          <a
            href="/cv.pdf"
            download="CV_Sergio_Burbano.pdf"
            className="ml-3 rounded-lg border border-brandGreen/40 bg-brandGreen/10 px-4 py-2 text-sm font-semibold text-brandGreen transition hover:bg-brandGreen/20"
          >
            CV
          </a>
        </nav>

        {/* Botón del menú móvil */}
        <button
          type="button"
          onClick={() => setMenuAbierto((v) => !v)}
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuAbierto}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-300 transition hover:border-slate-600 hover:text-white md:hidden"
        >
          <svg
            className="h-5 w-5 fill-none stroke-current"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuAbierto ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Panel desplegable móvil */}
      {menuAbierto && (
        <nav className="border-t border-slate-800 bg-darkBg/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {ENLACES.map(({ id, texto }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuAbierto(false)}
                className={`rounded-lg px-4 py-3 text-base transition-colors ${
                  activo === id
                    ? 'bg-slate-900 text-brandGreen'
                    : 'text-slate-300 hover:bg-slate-900/60 hover:text-white'
                }`}
              >
                {texto}
              </a>
            ))}

            <a
              href="/cv.pdf"
              download="CV_Sergio_Burbano.pdf"
              onClick={() => setMenuAbierto(false)}
              className="mt-2 rounded-lg bg-brandGreen px-4 py-3 text-center text-sm font-bold text-slate-950"
            >
              Descargar CV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
