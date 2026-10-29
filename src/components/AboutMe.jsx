import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const ESTADISTICAS = [
  { valor: 'DAM', etiqueta: 'Técnico Superior' },
  { valor: '9+', etiqueta: 'Tecnologías' },
  { valor: '1', etiqueta: 'App en producción' },
  { valor: '2024', etiqueta: 'Prácticas en empresa' },
];

const ENFOQUE = [
  {
    titulo: 'Automatizar',
    texto: 'Busco el proceso manual que roba horas y lo convierto en un par de clics.',
    color: 'text-brandGreen',
    fondo: 'from-brandGreen/20 to-brandGreen/5',
    icono: (
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    ),
  },
  {
    titulo: 'Aprender',
    texto: 'Cada proyecto es una excusa para meterme con una tecnología que no dominaba.',
    color: 'text-brandBlue',
    fondo: 'from-brandBlue/20 to-brandBlue/5',
    icono: (
      <>
        <path d="M12 3 2 8l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </>
    ),
  },
  {
    titulo: 'Cuidar la interfaz',
    texto: 'Una herramienta solo sirve si la gente entiende cómo usarla a la primera.',
    color: 'text-brandPurple',
    fondo: 'from-brandPurple/20 to-brandPurple/5',
    icono: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </>
    ),
  },
];

const EXPERIENCIA = [
  {
    puesto: 'Desarrollador Web (Prácticas FCT - DAM)',
    empresa: 'Rafibra',
    periodo: 'Abr 2024 — Jun 2024',
    descripcion: [
      'Mantenimiento correctivo y evolutivo de la aplicación web corporativa de la empresa.',
      'Diseño e implementación de nuevas funciones operativas y ventanas (vistas) interactivas.',
      'Optimización de la interfaz de usuario para mejorar los flujos de trabajo internos.',
    ],
  },
];

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 space-y-14">
      <Reveal>
        <SectionHeading
          numero="01"
          etiqueta="Sobre Mí"
          titulo="Programo para quitarle trabajo repetitivo a la gente"
          descripcion="Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM). Me apasiona programar por la satisfacción de ayudar automatizando el trabajo de otros y, de paso, aprender algo nuevo en cada proyecto."
        />
      </Reveal>

      {/* Datos rápidos */}
      <Reveal delay={80}>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {ESTADISTICAS.map((dato) => (
            <div
              key={dato.etiqueta}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-darkCard/60 p-5 text-center transition-colors hover:border-slate-700"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brandGreen/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <p className="text-2xl font-bold text-white sm:text-3xl">{dato.valor}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">{dato.etiqueta}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Cómo trabajo */}
      <div className="grid gap-5 md:grid-cols-3">
        {ENFOQUE.map((item, i) => (
          <Reveal key={item.titulo} delay={120 + i * 100}>
            <div className="group h-full rounded-2xl border border-slate-800 bg-darkCard/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700">
              <div
                className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.fondo} ${item.color}`}
              >
                <svg
                  className="h-5 w-5 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {item.icono}
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white">{item.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.texto}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Experiencia en formato línea de tiempo */}
      <div className="space-y-8 pt-4">
        <Reveal>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold tracking-tight text-white">Experiencia</h3>
            <span className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent" />
          </div>
        </Reveal>

        <div className="relative space-y-8 border-l border-slate-800 pl-8 sm:pl-10">
          {EXPERIENCIA.map((job, index) => (
            <Reveal key={index} delay={index * 120}>
              <div className="relative">
                {/* Punto de la línea de tiempo */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[41px] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-brandGreen bg-darkBg sm:-left-[49px]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brandGreen" />
                </span>

                <div className="rounded-2xl border border-slate-800 bg-darkCard/60 p-6 transition-colors hover:border-slate-700">
                  <div className="flex flex-col justify-between gap-3 border-b border-slate-800 pb-4 sm:flex-row sm:items-center">
                    <div>
                      <h4 className="text-lg font-bold text-white">{job.puesto}</h4>
                      <p className="mt-0.5 text-sm font-semibold text-brandGreen">{job.empresa}</p>
                    </div>
                    <span className="self-start rounded-full border border-slate-800 bg-slate-900 px-3 py-1 font-mono text-xs text-slate-400 sm:self-center">
                      {job.periodo}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {job.descripcion.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                        <svg
                          className="mt-1 h-3.5 w-3.5 shrink-0 fill-none stroke-brandGreen"
                          viewBox="0 0 24 24"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
