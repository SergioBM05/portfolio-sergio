import React from 'react';

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 space-y-6">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold tracking-tight text-white">Contacto</h2>
        <p className="text-slate-400">¿Quieres contar conmigo para tu equipo? Aquí tienes mis accesos directos.</p>
      </div>
      
      <div className="bg-gradient-to-br from-darkCard to-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 text-center space-y-6">
        <p className="text-slate-300 max-w-md mx-auto text-sm">
          Disponible para incorporación inmediata, proyectos freelance o resolución de dudas sobre mi código.
        </p>
        
        {/* Contenedor de Botones de Contacto */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          
          {/* Botón Gmail */}
          <a 
            href="mailto:sergio.burbano.mj@gmail.com" 
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-slate-900 hover:bg-slate-950 border border-slate-700 text-slate-300 hover:text-white font-medium text-sm rounded-lg transition-colors shadow-md"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>Gmail</span>
          </a>

          {/* Botón GitHub */}
          <a 
            href="https://github.com/SergioBM05" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-slate-900 hover:bg-slate-950 border border-slate-700 text-slate-300 hover:text-white font-medium text-sm rounded-lg transition-colors shadow-md"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>

          {/* Botón Descargar CV */}
          <a 
            href="/tu-cv.pdf" 
            download="CV_Sergio.pdf"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-brandGreen/90 hover:bg-brandGreen text-slate-950 font-bold text-sm rounded-lg transition-colors shadow-lg shadow-brandGreen/10"
          >
            <svg 
              className="w-4 h-4 stroke-current fill-none" 
              viewBox="0 0 24 24" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Descargar CV</span>
          </a>

        </div>
      </div>
    </section>
  );
}