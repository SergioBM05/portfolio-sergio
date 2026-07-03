import React from 'react';

export default function Skills() {
  // Clasificación real: Frontend y Backend (con sus respectivos lenguajes y frameworks) y Bases de Datos
  const categoriasSkills = [
    {
      titulo: "Frontend & UI",
      descripcion: "Lenguajes base y frameworks/librerías para construir la interfaz de usuario.",
      tecnologias: [
        { nombre: "JavaScript", bg: "bg-yellow-500/10", border: "border-yellow-500/30", text: "text-yellow-500" },
        { nombre: "React", bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400" },
        { nombre: "Angular", bg: "bg-red-600/10", border: "border-red-600/30", text: "text-red-500" }
      ]
    },
    {
      titulo: "Backend & Logic",
      descripcion: "Tecnologías de servidor, arquitectura de código y frameworks robustos.",
      tecnologias: [
        { nombre: "Java", bg: "bg-orange-600/10", border: "border-orange-600/30", text: "text-orange-500" },
        { nombre: "Python", bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400" },
        { nombre: "PHP", bg: "bg-indigo-500/10", border: "border-indigo-500/30", text: "text-indigo-400" },
        { nombre: "Laravel", bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-500" }
      ]
    },
    {
      titulo: "Bases de Datos",
      descripcion: "Almacenamiento, consultas estructuradas y modelado de datos eficientes.",
      tecnologias: [
        { nombre: "SQL", bg: "bg-sky-600/10", border: "border-sky-600/30", text: "text-sky-400" },
        { nombre: "MongoDB", bg: "bg-emerald-600/10", border: "border-emerald-600/30", text: "text-emerald-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-24 space-y-12">
      {/* Cabecera de la sección */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-white">Habilidades Técnicas</h2>
        <p className="text-slate-400 max-w-2xl">
            Estas son las tecnologias que mas controlo y con las que desarollo mis proyectos
        </p>
      </div>

      {/* Grid de Categorías */}
      <div className="grid md:grid-cols-3 gap-6">
        {categoriasSkills.map((cat, index) => (
          <div 
            key={index} 
            className="bg-darkCard/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-lg hover:border-slate-700 transition-all duration-300"
          >
            {/* Cabecera de la Tarjeta */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">{cat.titulo}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{cat.descripcion}</p>
            </div>

            {/* Tags de Tecnologías con sus colores oficiales */}
            <div className="flex flex-wrap gap-2 pt-2">
              {cat.tecnologias.map((tech, tIdx) => (
                <span 
                  key={tIdx} 
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border ${tech.bg} ${tech.border} ${tech.text}`}
                >
                  {tech.nombre}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}