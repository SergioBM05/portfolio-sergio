import React from 'react';
import logoJS from '../assets/logoJS.png';
import logoReact from '../assets/logoReact.png';
import logoAngular from '../assets/logoAngular.png';
import logoJava from '../assets/logoJava.png';
import logoPython from '../assets/logoPython.png';
import logoPHP from '../assets/logoPHP.png';
import logoLaravel from '../assets/logoLaravel.png';
import logoMongo from '../assets/logoMongo.png';
import logoSql from '../assets/logoSql.png';

export default function Skills() {
  const categoriasSkills = [
    {
      titulo: "Frontend & UI",
      colorTitulo: "text-cyan-400",
      tecnologias: [
        { 
          nombre: "JavaScript", 
          icono: <img src={logoJS} alt="JavaScript" className="w-14 h-14 object-contain block" /> 
        },
        { 
          nombre: "React", 
          icono: <img src={logoReact} alt="React" className="w-14 h-14 object-contain block" /> 
        },
        { 
          nombre: "Angular", 
          icono: <img src={logoAngular} alt="Angular" className="w-14 h-14 object-contain block" /> 
        }
      ]
    },
    {
      titulo: "Backend & Logic",
      colorTitulo: "text-slate-200",
      tecnologias: [
        { 
          nombre: "Java", 
          icono: <img src={logoJava} alt="Java" className="w-14 h-14 object-contain block" /> 
        },
        { 
          nombre: "Python", 
          icono: <img src={logoPython} alt="Python" className="w-14 h-14 object-contain block" /> 
        },
        { 
          nombre: "PHP", 
          icono: <img src={logoPHP} alt="PHP" className="w-14 h-14 object-contain block" /> 
        },
        { 
          nombre: "Laravel", 
          icono: <img src={logoLaravel} alt="Laravel" className="w-200 h-14 object-contain block" /> 
        }
      ]
    },
    {
      titulo: "Bases de Datos",
      colorTitulo: "text-orange-300",
      tecnologias: [
        { 
          nombre: "SQL", 
          icono: <img src={logoSql} alt="Sql" className="w-200 h-14 object-contain block" /> 
        },
        { 
          nombre: "MongoDB", 
          icono: <img src={logoMongo} alt="Mongo" className="w-200 h-14 object-contain block" /> 
        }
      ]
    },
    {
      titulo: "Herramientas",
      colorTitulo: "text-blue-400",
      tecnologias: [
        { 
          nombre: "Git", 
          icono: <svg viewBox="0 0 24 24" className="w-14 h-14 fill-[#F05032]"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.738 2.738c.642-.22 1.385-.078 1.9.438.835.835.835 2.188 0 3.023-.835.836-2.188.836-3.023 0-.516-.516-.658-1.258-.438-1.9l-2.613-2.613v4.46c.215.176.417.4.568.665.835.836.835 2.188 0 3.023-.835.836-2.188.836-3.023 0-.835-.836-.835-2.188 0-3.023.21-.21.458-.363.72-.45V9.45c-.262-.087-.51-.24-.72-.45-.516-.516-.658-1.258-.438-1.9L6.5 4.837 1.455 9.88c-.604.604-.604 1.583 0 2.189l10.478 10.478c.604.604 1.582.604 2.188 0l9.425-9.425c.604-.604.604-1.584 0-2.189z"/></svg> 
        },
        { 
          nombre: "GitHub", 
          icono: <svg viewBox="0 0 24 24" className="w-14 h-14 fill-white"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg> 
        },
      ]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-24 space-y-12">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white">Habilidades Técnicas</h2>
        <p className="text-slate-400 max-w-2xl">
          Estas son las tecnologías que más controlo y con las que desarrollo mis proyectos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categoriasSkills.map((cat, index) => (
          <div 
            key={index} 
            className="bg-[#0b0f19]/90 border border-slate-800/80 rounded-[2rem] p-8 transition-all duration-300 hover:border-slate-700/60 shadow-xl"
          >
            <h3 className={`text-2xl font-bold text-center mb-10 tracking-wide ${cat.colorTitulo}`}>
              {cat.titulo}
            </h3>

            <div className="grid grid-cols-3 gap-y-10 gap-x-4">
              {cat.tecnologias.map((tech, tIdx) => (
                <div key={tIdx} className="flex flex-col items-center justify-center gap-4 group">
                  <div className="transform transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                    {tech.icono}
                  </div>
                  <span className="text-[13px] font-medium text-slate-300 tracking-wide text-center">
                    {tech.nombre}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}