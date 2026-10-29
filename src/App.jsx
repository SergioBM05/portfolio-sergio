import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Proyectos from './components/Proyectos';
import Skills from './components/Skills';
import Contact from './components/Contact';

// El fondo base lo pinta `body` (index.css). Si se pusiera aquí, taparía
// las capas decorativas en -z-10 del hero y del resplandor ambiental.
function App() {
  return (
    <div className="relative min-h-screen font-sans text-slate-100 antialiased selection:bg-brandGreen/30 selection:text-white">
      {/* Resplandor ambiental fijo detrás de todo el contenido */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brandGreen/5 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-brandPurple/5 blur-[130px]" />
      </div>

      <a
        href="#sobre-mi"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brandGreen focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-slate-950"
      >
        Saltar al contenido
      </a>

      <Navbar />
      <Hero />

      <main className="mx-auto max-w-6xl space-y-28 px-4 py-24 sm:px-6 sm:space-y-32 lg:px-8">
        <AboutMe />
        <Proyectos />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-slate-800/80 bg-darkBg">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brandGreen to-brandBlue font-mono text-sm font-bold text-slate-950">
              S
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-200">Sergio Burbano</p>
              <p className="text-xs text-slate-500">Desarrollador Full Stack</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/SergioBM05"
              target="_blank"
              rel="noreferrer"
              aria-label="Perfil de GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-500 transition hover:border-slate-600 hover:text-white"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
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
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-500 transition hover:border-slate-600 hover:text-white"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>

            <a
              href="#top"
              aria-label="Volver arriba"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-500 transition hover:border-slate-600 hover:text-white"
            >
              <svg
                className="h-4 w-4 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </a>
          </div>

          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} · Hecho con React y Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
