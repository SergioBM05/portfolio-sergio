import React, { useEffect, useState } from 'react';
import { cintaTecnologias } from '../data/tecnologias';

const ROLES = [
  'Desarrollador Full Stack',
  'Técnico Superior en DAM',
  'React · Java · Laravel',
];

/** Escribe y borra los roles en bucle, como una terminal. */
function RolAnimado() {
  const [indice, setIndice] = useState(0);
  const [texto, setTexto] = useState('');
  const [borrando, setBorrando] = useState(false);
  const [animar, setAnimar] = useState(true);

  useEffect(() => {
    const sinMovimiento =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (sinMovimiento) {
      setAnimar(false);
      setTexto(ROLES[0]);
    }
  }, []);

  useEffect(() => {
    if (!animar) return;

    const completo = ROLES[indice];

    // Pausa larga cuando el rol está escrito del todo, antes de borrarlo.
    if (!borrando && texto === completo) {
      const pausa = setTimeout(() => setBorrando(true), 1800);
      return () => clearTimeout(pausa);
    }

    if (borrando && texto === '') {
      setBorrando(false);
      setIndice((i) => (i + 1) % ROLES.length);
      return;
    }

    const tic = setTimeout(
      () => {
        setTexto((actual) =>
          borrando ? completo.slice(0, actual.length - 1) : completo.slice(0, actual.length + 1)
        );
      },
      borrando ? 35 : 70
    );

    return () => clearTimeout(tic);
  }, [texto, borrando, indice, animar]);

  return (
    <span className="font-mono text-brandGreen">
      {texto}
      {animar && <span className="animate-caret text-brandGreen/80">▊</span>}
    </span>
  );
}

/** Maqueta de editor de código que acompaña al texto del hero. */
function TarjetaCodigo() {
  return (
    <div className="relative">
      {/* Resplandor de fondo */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brandGreen/20 via-brandBlue/10 to-brandPurple/20 blur-2xl"
      />

      <div className="relative rounded-2xl border border-slate-700/50 bg-darkCard/90 shadow-2xl backdrop-blur overflow-hidden">
        {/* Barra de la ventana */}
        <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900/60 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-3 font-mono text-xs text-slate-500">sergio.js</span>
        </div>

        <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
          <code>
            <span className="text-slate-600">1 </span>
            <span className="text-brandPurple">const</span>{' '}
            <span className="text-brandBlue">sergio</span>{' '}
            <span className="text-slate-400">=</span> <span className="text-slate-300">{'{'}</span>
            {'\n'}
            <span className="text-slate-600">2 </span>
            {'  '}
            <span className="text-slate-400">rol</span>
            <span className="text-slate-500">:</span>{' '}
            <span className="text-brandGreen">'Full Stack Developer'</span>
            <span className="text-slate-500">,</span>
            {'\n'}
            <span className="text-slate-600">3 </span>
            {'  '}
            <span className="text-slate-400">stack</span>
            <span className="text-slate-500">:</span>{' '}
            <span className="text-slate-300">[</span>
            <span className="text-brandGreen">'React'</span>
            <span className="text-slate-500">, </span>
            <span className="text-brandGreen">'Java'</span>
            <span className="text-slate-500">, </span>
            <span className="text-brandGreen">'Laravel'</span>
            <span className="text-slate-300">]</span>
            <span className="text-slate-500">,</span>
            {'\n'}
            <span className="text-slate-600">4 </span>
            {'  '}
            <span className="text-slate-400">ubicacion</span>
            <span className="text-slate-500">:</span>{' '}
            <span className="text-brandGreen">'España'</span>
            <span className="text-slate-500">,</span>
            {'\n'}
            <span className="text-slate-600">5 </span>
            {'  '}
            <span className="text-slate-400">disponible</span>
            <span className="text-slate-500">:</span>{' '}
            <span className="text-orange-400">true</span>
            <span className="text-slate-500">,</span>
            {'\n'}
            <span className="text-slate-600">6 </span>
            {'  '}
            <span className="text-brandBlue">construir</span>
            <span className="text-slate-300">()</span>{' '}
            <span className="text-slate-300">{'{'}</span>
            {'\n'}
            <span className="text-slate-600">7 </span>
            {'    '}
            <span className="text-brandPurple">return</span>{' '}
            <span className="text-brandGreen">'software que ahorra tiempo'</span>
            <span className="text-slate-500">;</span>
            {'\n'}
            <span className="text-slate-600">8 </span>
            {'  '}
            <span className="text-slate-300">{'}'}</span>
            {'\n'}
            <span className="text-slate-600">9 </span>
            <span className="text-slate-300">{'};'}</span>
          </code>
        </pre>
      </div>

      {/* Tarjetas flotantes decorativas */}
      <div
        aria-hidden="true"
        className="animate-float absolute -right-3 -top-5 hidden rounded-xl border border-brandGreen/30 bg-darkCard/95 px-4 py-2.5 shadow-lg backdrop-blur sm:block"
      >
        <p className="text-[10px] uppercase tracking-wider text-slate-500">Estado</p>
        <p className="flex items-center gap-1.5 text-sm font-semibold text-brandGreen">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brandGreen" />
          Disponible
        </p>
      </div>

      <div
        aria-hidden="true"
        className="animate-float absolute -bottom-6 -left-4 hidden rounded-xl border border-brandBlue/30 bg-darkCard/95 px-4 py-2.5 shadow-lg backdrop-blur sm:block"
        style={{ animationDelay: '1.5s' }}
      >
        <p className="text-[10px] uppercase tracking-wider text-slate-500">Formación</p>
        <p className="text-sm font-semibold text-brandBlue">Grado Superior DAM</p>
      </div>
    </div>
  );
}

/** Cinta infinita con los logos de las tecnologías. */
function CintaTecnologias() {
  return (
    <div className="relative mt-20 overflow-hidden border-y border-slate-800/80 bg-slate-950/40 py-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-darkBg to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-darkBg to-transparent"
      />

      {/* Dos grupos idénticos: al desplazar el 50% el bucle encaja sin salto. */}
      <div className="animate-marquee flex w-max">
        {[0, 1].map((grupo) => (
          <div key={grupo} className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={grupo === 1}>
            {cintaTecnologias.map((tech) => (
              <div
                key={tech.nombre}
                className="flex shrink-0 items-center gap-3 opacity-50 transition-opacity hover:opacity-100"
              >
                <img src={tech.logo} alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
                <span className="text-sm font-medium tracking-wide text-slate-400">
                  {tech.nombre}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Fondo decorativo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg mask-fade absolute inset-0 opacity-40" />
        <div className="animate-blob absolute -left-20 top-10 h-72 w-72 rounded-full bg-brandGreen/20 blur-[100px]" />
        <div
          className="animate-blob absolute right-0 top-32 h-80 w-80 rounded-full bg-brandBlue/15 blur-[110px]"
          style={{ animationDelay: '6s' }}
        />
        <div
          className="animate-blob absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brandPurple/15 blur-[110px]"
          style={{ animationDelay: '12s' }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-4 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Columna de texto */}
          <div className="animate-fade-up space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-brandGreen/30 bg-brandGreen/10 px-4 py-1.5 text-xs font-medium text-brandGreen">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brandGreen opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brandGreen" />
              </span>
              Disponible para incorporación inmediata
            </span>

            <div className="space-y-3">
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Sergio
                <br />
                <span className="text-gradient">Burbano</span>
              </h1>

              <p className="min-h-[1.75rem] text-lg sm:text-xl">
                <RolAnimado />
              </p>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-slate-400">
              Creo aplicaciones web que automatizan trabajo real. Me mueve la satisfacción de
              resolver un problema concreto de alguien y aprender algo nuevo por el camino.
            </p>

            {/* Llamadas a la acción */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#proyectos"
                className="group inline-flex items-center gap-2 rounded-xl bg-brandGreen px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-brandGreen/20 transition hover:-translate-y-0.5 hover:bg-brandGreen/90 hover:shadow-xl hover:shadow-brandGreen/30"
              >
                Ver proyectos
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

              <a
                href="/cv.pdf"
                download="CV_Sergio_Burbano.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-800/60"
              >
                <svg
                  className="h-4 w-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Descargar CV
              </a>

              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href="https://github.com/SergioBM05"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Perfil de GitHub"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 transition hover:-translate-y-0.5 hover:border-slate-600 hover:text-white"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>

                <a
                  href="mailto:sergio.burbano.mj@gmail.com"
                  aria-label="Enviar un correo"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 transition hover:-translate-y-0.5 hover:border-slate-600 hover:text-white"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Columna visual */}
          <div className="animate-fade-up lg:pl-6" style={{ animationDelay: '180ms' }}>
            <TarjetaCodigo />
          </div>
        </div>
      </div>

      <CintaTecnologias />
    </section>
  );
}
