import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { logos } from '../data/tecnologias';

const ICONO_GIT = (
  <svg viewBox="0 0 24 24" className="h-10 w-10 fill-[#F05032]" aria-hidden="true">
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.738 2.738c.642-.22 1.385-.078 1.9.438.835.835.835 2.188 0 3.023-.835.836-2.188.836-3.023 0-.516-.516-.658-1.258-.438-1.9l-2.613-2.613v4.46c.215.176.417.4.568.665.835.836.835 2.188 0 3.023-.835.836-2.188.836-3.023 0-.835-.836-.835-2.188 0-3.023.21-.21.458-.363.72-.45V9.45c-.262-.087-.51-.24-.72-.45-.516-.516-.658-1.258-.438-1.9L6.5 4.837 1.455 9.88c-.604.604-.604 1.583 0 2.189l10.478 10.478c.604.604 1.582.604 2.188 0l9.425-9.425c.604-.604.604-1.584 0-2.189z" />
  </svg>
);

const ICONO_GITHUB = (
  <svg viewBox="0 0 24 24" className="h-10 w-10 fill-white" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const categoriasSkills = [
  {
    titulo: 'Frontend & UI',
    acento: 'text-cyan-400',
    resplandor: 'from-cyan-500/20',
    borde: 'group-hover:border-cyan-500/30',
    icono: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
    tecnologias: [
      { nombre: 'JavaScript', logo: logos.js },
      { nombre: 'React', logo: logos.react },
      { nombre: 'Angular', logo: logos.angular },
    ],
  },
  {
    titulo: 'Backend & Lógica',
    acento: 'text-brandGreen',
    resplandor: 'from-brandGreen/20',
    borde: 'group-hover:border-brandGreen/30',
    icono: (
      <>
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </>
    ),
    tecnologias: [
      { nombre: 'Java', logo: logos.java },
      { nombre: 'Python', logo: logos.python },
      { nombre: 'PHP', logo: logos.php },
      { nombre: 'Laravel', logo: logos.laravel },
    ],
  },
  {
    titulo: 'Bases de Datos',
    acento: 'text-orange-300',
    resplandor: 'from-orange-500/20',
    borde: 'group-hover:border-orange-500/30',
    icono: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </>
    ),
    tecnologias: [
      { nombre: 'SQL', logo: logos.sql },
      { nombre: 'MongoDB', logo: logos.mongo },
    ],
  },
  {
    titulo: 'Herramientas',
    acento: 'text-brandPurple',
    resplandor: 'from-brandPurple/20',
    borde: 'group-hover:border-brandPurple/30',
    icono: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
    tecnologias: [
      { nombre: 'Git', svg: ICONO_GIT },
      { nombre: 'GitHub', svg: ICONO_GITHUB },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 space-y-12">
      <Reveal>
        <SectionHeading
          numero="03"
          etiqueta="Skills"
          titulo="Mi caja de herramientas"
          descripcion="Estas son las tecnologías que más controlo y con las que desarrollo mis proyectos."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {categoriasSkills.map((cat, index) => (
          <Reveal key={cat.titulo} delay={index * 90}>
            <div
              className={`group relative h-full overflow-hidden rounded-3xl border border-slate-800 bg-darkCard/70 p-7 transition-all duration-300 hover:-translate-y-1 ${cat.borde}`}
            >
              {/* Resplandor de color al pasar el ratón */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${cat.resplandor} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Cabecera de la categoría */}
              <div className="relative mb-7 flex items-center gap-3 border-b border-slate-800 pb-5">
                <span
                  className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 ${cat.acento}`}
                >
                  <svg
                    className="h-5 w-5 fill-none stroke-current"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {cat.icono}
                  </svg>
                </span>

                <h3 className={`flex-1 text-xl font-bold tracking-wide ${cat.acento}`}>
                  {cat.titulo}
                </h3>

                <span className="rounded-full bg-slate-900 px-2.5 py-1 font-mono text-[11px] text-slate-500">
                  {cat.tecnologias.length}
                </span>
              </div>

              {/* Tecnologías */}
              <div className="relative grid grid-cols-3 gap-4 sm:grid-cols-4">
                {cat.tecnologias.map((tech) => (
                  <div
                    key={tech.nombre}
                    className="flex flex-col items-center gap-3 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/60"
                  >
                    <div className="flex h-12 w-12 items-center justify-center transition-transform duration-300 hover:scale-110">
                      {tech.svg ?? (
                        <img
                          src={tech.logo}
                          alt={tech.nombre}
                          loading="lazy"
                          className="h-11 w-11 object-contain"
                        />
                      )}
                    </div>
                    <span className="text-center text-xs font-medium tracking-wide text-slate-400">
                      {tech.nombre}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
