import React from 'react';

export default function AboutMe() {
  const experiencia = [
    {
      puesto: "Desarrollador Web (Prácticas FCT - DAM)",
      empresa: "Rafibra",
      periodo: "Periodo de prácticas Abr 2024 - Jun 2024",
      descripcion: [
        "Mantenimiento correctivo y evolutivo de la aplicación web corporativa de la empresa.",
        "Diseño e implementación de nuevas funciones operativas y ventanas (vistas) interactivas.",
        "Optimización de la interfaz de usuario para mejorar los flujos de trabajo internos."
      ]
    }
  ];

  return (
    <section id="sobre-mi" className="scroll-mt-24 space-y-12">
      {/* Bloque de Presentación */}
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="space-y-2 md:col-span-1">
          <h2 className="text-3xl font-bold tracking-tight text-white">Sobre Mí</h2>
          <p className="text-slate-400 text-sm">Mi enfoque como programador.</p>
        </div>
        <div className="md:col-span-2 text-slate-300 space-y-4">
          <p>
            Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM). Me apasiona programar por la satisfacción de ayudar a la gente automatizando su trabajo
            y ademas yo en el proceso aprender cosas nuevas 
          </p>
        </div>
      </div>

      <hr className="border-slate-800" />

      {/* Bloque de Experiencia Laboral Estructurada */}
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="space-y-2 md:col-span-1">
          <h2 className="text-2xl font-bold tracking-tight text-white">Experiencia</h2>
          <p className="text-slate-400 text-sm">Trayectoria en entornos reales.</p>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          {experiencia.map((job, index) => (
            <div key={index} className="bg-darkCard/50 border border-slate-800/80 rounded-xl p-6 space-y-4 hover:border-slate-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-white">{job.puesto}</h3>
                  <p className="text-sm font-semibold text-brandGreen">{job.empresa}</p>
                </div>
                <span className="text-xs text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-850 self-start sm:self-center">
                  {job.periodo}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
                {job.descripcion.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}