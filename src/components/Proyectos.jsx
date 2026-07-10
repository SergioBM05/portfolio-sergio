import React from 'react';
import fotoMealScane from '../assets/proyectoMealScan.png'

export default function Proyectos() {
    const listaProyectos = [
        {
            titulo: "MealScan",
            subtitulo: "Escáner de calorías inteligente y planificador deportivo integral.",
            github: "https://github.com/SergioBM05/contadorCalorias",
            web: "https://contador-calorias-one.vercel.app/",
            imagen: fotoMealScane, 
            enDesarrollo: true,
            problema: "Esta app web nace de mi necesidad por querer poder calcular lo que como sin tener que pagarle a una app cuando yo mismo puedo desarollarlo ",
            solucion: "Automatizar el proceso a través del reconocimiento visual. Al tomar una fotografía del plato, una IA identifica los ingredientes y calcula instantáneamente los macronutrientes, enlazando el progreso con mis rutinas de entrenamiento.",
            roadmap: [
                { fase: "Fase 1", nombre: "Base & Auth", desc: "Modelado de bases de datos y perfiles.", estado: "hecho" },
                { fase: "Fase 2", nombre: "Escáner de Fotos", desc: "Integración de la API de visión y cálculo calórico.", estado: "hecho" },
                { fase: "Fase 3", nombre: "Módulo FitPlan", desc: "Planificación de entrenamientos y cargas.", estado: "hecho" },
                { fase: "Fase 4", nombre: "Métricas Avanzadas", desc: "Gráficos interactivos de rendimiento.", estado: "hecho" }
            ]
        }
    ];

    return (
        <section id="proyectos" className="scroll-mt-24 space-y-12">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-white">Proyectos</h2>
                <p className="text-slate-400 max-w-2xl">
                    Una muestra de las soluciones que he diseñado y desarrollado, desde ideas en producción hasta herramientas en desarrollo activo.
                </p>
            </div>

            <div className="space-y-16">
                {listaProyectos.map((proy, index) => (
                    <div key={index} className="bg-darkCard border border-slate-800 rounded-2xl p-6 md:p-8 space-y-8 shadow-xl">

                        {/* Cabecera del Proyecto */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/50 pb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white">{proy.titulo}</h3>
                                <p className="text-sm text-slate-400 mt-1">{proy.subtitulo}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                {/* Botón de GitHub */}
                                <a
                                    href={proy.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-slate-900 hover:bg-slate-950 border border-slate-700 text-slate-300 rounded-lg transition-colors"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                    <span>GitHub</span>
                                </a>

                                {/* Botón Enlace Externo */}
                                <a
                                    href={proy.web}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-slate-900 hover:bg-slate-950 border border-slate-700 text-slate-300 rounded-lg transition-colors"
                                >
                                    <svg
                                        className="w-4 h-4 stroke-current fill-none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                    </svg>
                                </a>

                                {/* Etiqueta de estado */}
                                {proy.enDesarrollo ? (
                                    <span className="px-3 py-1.5 text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-full">
                                        En Desarrollo Activo
                                    </span>
                                ) : (
                                    <span className="px-3 py-1.5 text-xs font-semibold bg-brandGreen/10 text-brandGreen border border-brandGreen/20 rounded-full">
                                        Completado
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Distribución corregida: Imagen sin recortes + Textos */}
                        <div className="grid md:grid-cols-5 gap-8 items-start">
                            {/* Bloque de la Imagen (Se eliminó bg-slate-900 y object-cover por object-contain) */}
                            {proy.imagen && (
                                <div className="md:col-span-2 w-full rounded-xl overflow-hidden border border-slate-800/60">
                                    <img 
                                        src={proy.imagen} 
                                        alt={`Captura de pantalla de ${proy.titulo}`} 
                                        className="w-full h-auto object-contain opacity-95 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            )}

                            {/* Bloque del Contenido */}
                            <div className={`space-y-6 ${proy.imagen ? 'md:col-span-3' : 'md:col-span-5'}`}>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-brandGreen">El Problema</h4>
                                    <p className="text-slate-300 text-sm leading-relaxed">{proy.problema}</p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-brandBlue">La Solución</h4>
                                    <p className="text-slate-300 text-sm leading-relaxed">{proy.solucion}</p>
                                </div>
                            </div>
                        </div>

                        {/* Renderizado Condicional del Roadmap */}
                        {proy.enDesarrollo && proy.roadmap && proy.roadmap.length > 0 && (
                            <div className="space-y-4 pt-4">
                                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Estado del Desarrollo (Roadmap)</h4>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {proy.roadmap.map((fase, fIdx) => {
                                        if (fase.estado === "hecho") {
                                            return (
                                                <div key={fIdx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 relative overflow-hidden">
                                                    <div className="absolute top-2 right-2 text-brandGreen text-xs font-bold">✓ Hecho</div>
                                                    <p className="text-xs font-medium text-slate-500">{fase.fase}</p>
                                                    <p className="text-sm font-semibold text-white mt-1">{fase.nombre}</p>
                                                    <p className="text-xs text-slate-400 mt-2">{fase.desc}</p>
                                                </div>
                                            );
                                        } else if (fase.estado === "actual") {
                                            return (
                                                <div key={fIdx} className="p-4 rounded-xl bg-slate-900/60 border border-brandGreen/40 relative overflow-hidden ring-1 ring-brandGreen/20">
                                                    <div className="absolute top-2 right-2 text-brandGreen text-xs font-bold animate-pulse">● Ejecutando</div>
                                                    <p className="text-xs font-medium text-brandGreen">{fase.fase}</p>
                                                    <p className="text-sm font-semibold text-white mt-1">{fase.nombre}</p>
                                                    <p className="text-xs text-slate-300 mt-2">{fase.desc}</p>
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div key={fIdx} className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/80 opacity-60">
                                                    <p className="text-xs font-medium text-slate-600">{fase.fase}</p>
                                                    <p className="text-sm font-semibold text-slate-400 mt-1">{fase.nombre}</p>
                                                    <p className="text-xs text-slate-500 mt-2">{fase.desc}</p>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </section>
    );
}