import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const CANALES = [
  {
    nombre: 'Email',
    detalle: 'sergio.burbano.mj@gmail.com',
    href: 'mailto:sergio.burbano.mj@gmail.com',
    acento: 'text-brandGreen',
    fondo: 'from-brandGreen/20 to-transparent',
    icono: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
  },
  {
    nombre: 'GitHub',
    detalle: '@SergioBM05',
    href: 'https://github.com/SergioBM05',
    externo: true,
    acento: 'text-brandBlue',
    fondo: 'from-brandBlue/20 to-transparent',
    icono: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    ),
  },
  {
    nombre: 'Currículum',
    detalle: 'Descargar en PDF',
    href: '/cv.pdf',
    descarga: 'CV_Sergio_Burbano.pdf',
    acento: 'text-brandPurple',
    fondo: 'from-brandPurple/20 to-transparent',
    icono: (
      <>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 space-y-12">
      <Reveal>
        <SectionHeading
          numero="04"
          etiqueta="Contacto"
          titulo="¿Hablamos?"
          descripcion="Disponible para incorporación inmediata, proyectos freelance o resolver dudas sobre mi código. Respondo rápido."
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-darkCard to-slate-900/80 p-8 md:p-12">
          {/* Decoración de fondo */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="grid-bg absolute inset-0 opacity-20" />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brandGreen/10 blur-[90px]" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-brandPurple/10 blur-[90px]" />
          </div>

          <div className="relative space-y-10">
            <div className="space-y-3 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brandGreen/30 bg-brandGreen/10 px-4 py-1.5 text-xs font-medium text-brandGreen">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brandGreen" />
                Abierto a nuevas oportunidades
              </span>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Cuéntame qué quieres construir
              </h3>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-400">
                Elige el canal que prefieras y te contesto lo antes posible.
              </p>
            </div>

            {/* Canales de contacto */}
            <div className="grid gap-4 sm:grid-cols-3">
              {CANALES.map((canal) => (
                <a
                  key={canal.nombre}
                  href={canal.href}
                  {...(canal.externo ? { target: '_blank', rel: 'noreferrer' } : {})}
                  {...(canal.descarga ? { download: canal.descarga } : {})}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-slate-700"
                >
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${canal.fondo} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative space-y-2">
                    <span
                      className={`mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 ${canal.acento}`}
                    >
                      <svg
                        className="h-5 w-5 fill-none stroke-current"
                        viewBox="0 0 24 24"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {canal.icono}
                      </svg>
                    </span>

                    <p className="font-semibold text-white">{canal.nombre}</p>
                    <p className="truncate text-xs text-slate-500">{canal.detalle}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Acción principal */}
            <div className="text-center">
              <a
                href="mailto:sergio.burbano.mj@gmail.com"
                className="group inline-flex items-center gap-2 rounded-xl bg-brandGreen px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-brandGreen/20 transition hover:-translate-y-0.5 hover:bg-brandGreen/90 hover:shadow-xl hover:shadow-brandGreen/30"
              >
                Escríbeme un correo
                <svg
                  className="h-4 w-4 fill-none stroke-current transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
