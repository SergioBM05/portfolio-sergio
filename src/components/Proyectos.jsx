import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { listaProyectos } from '../data/proyectos';

const ESTADOS = {
    completado: {
        texto: 'Completado',
        clase: 'border-brandGreen/25 bg-brandGreen/10 text-brandGreen',
        punto: 'bg-brandGreen',
    },
    desarrollo: {
        texto: 'En desarrollo activo',
        clase: 'border-orange-500/25 bg-orange-500/10 text-orange-400',
        punto: 'animate-pulse bg-orange-400',
    },
};

function IconoCheck({ className = 'h-3 w-3' }) {
    return (
        <svg
            className={`${className} fill-none stroke-current`}
            viewBox="0 0 24 24"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

/** Marco tipo navegador para que la vista previa parezca una web de verdad. */
function MarcoNavegador({ url, children }) {
    return (
        <div className="group relative">
            <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-brandGreen/15 via-transparent to-brandBlue/15 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
            />

            <div className="relative overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900 shadow-2xl">
                {/* Barra de direcciones simulada */}
                <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900/90 px-3 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                    <div className="ml-2 flex-1 truncate rounded-md bg-slate-950/80 px-2.5 py-1 font-mono text-[10px] text-slate-500">
                        {url}
                    </div>
                </div>

                <div className="overflow-hidden bg-slate-950">{children}</div>
            </div>
        </div>
    );
}

/** Vista previa ilustrada del gestor de préstamos (no hay captura pública). */
function PreviewPrestamos() {
    const prestamos = [
        { cliente: 'María G.', cuota: '150 €', tono: 'bg-emerald-400', estado: 'Al día', ancho: '72%' },
        { cliente: 'Carlos R.', cuota: '90 €', tono: 'bg-amber-300', estado: 'Vence en 2 d', ancho: '45%' },
        { cliente: 'Lucía M.', cuota: '220 €', tono: 'bg-rose-400', estado: 'Atrasado', ancho: '30%' },
    ];

    return (
        <div aria-hidden="true" className="space-y-3 p-4 transition-transform duration-500 group-hover:scale-[1.02]">
            <div className="grid grid-cols-3 gap-2">
                {[
                    ['En caja', '4.820 €', 'text-brandGreen'],
                    ['Interés cobrado', '1.265 €', 'text-brandBlue'],
                    ['Pendiente', '7.430 €', 'text-brandPurple'],
                ].map(([etiqueta, valor, color]) => (
                    <div key={etiqueta} className="rounded-lg border border-slate-800 bg-slate-900/70 p-2.5">
                        <p className="text-[9px] uppercase tracking-wider text-slate-500">{etiqueta}</p>
                        <p className={`mt-1 font-mono text-sm font-bold ${color}`}>{valor}</p>
                    </div>
                ))}
            </div>

            <div className="space-y-2 rounded-lg border border-slate-800 bg-slate-900/50 p-3">
                <div className="flex items-center justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Préstamos activos</p>
                    <span className="rounded bg-brandGreen px-2 py-0.5 text-[9px] font-bold text-slate-950">+ Nuevo</span>
                </div>
                {prestamos.map((p) => (
                    <div key={p.cliente} className="space-y-1.5 rounded-md bg-slate-950/70 p-2">
                        <div className="flex items-center justify-between text-[10px]">
                            <span className="font-semibold text-slate-200">{p.cliente}</span>
                            <span className="flex items-center gap-1.5 text-slate-400">
                                <span className={`h-1.5 w-1.5 rounded-full ${p.tono}`} />
                                {p.estado} · <span className="font-mono text-slate-300">{p.cuota}</span>
                            </span>
                        </div>
                        <div className="h-1 overflow-hidden rounded-full bg-slate-800">
                            <div className="h-full rounded-full bg-gradient-to-r from-brandGreen to-brandBlue" style={{ width: p.ancho }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/** Vista previa ilustrada del CRM (proyecto privado). */
function PreviewCrm() {
    const columnas = [
        { nombre: 'Contactado', color: 'bg-brandBlue', leads: ['Clínica Norte', 'Autoescuela Sol'] },
        { nombre: 'Interés real', color: 'bg-brandPurple', leads: ['Bar La Plaza', 'Veterinaria Can'], parado: 1 },
        { nombre: 'Diagnóstico', color: 'bg-amber-300', leads: ['Inmobiliaria Mar'] },
        { nombre: 'Ganado', color: 'bg-brandGreen', leads: ['Logística Sur'] },
    ];

    return (
        <div aria-hidden="true" className="flex transition-transform duration-500 group-hover:scale-[1.02]">
            {/* Menú lateral */}
            <div className="hidden w-14 shrink-0 flex-col items-center gap-2.5 border-r border-slate-800 bg-slate-900/60 py-3 sm:flex">
                <span className="h-6 w-6 rounded-md bg-gradient-to-br from-brandGreen to-brandBlue" />
                {[0, 1, 2, 3, 4].map((i) => (
                    <span key={i} className={`h-1.5 w-6 rounded-full ${i === 1 ? 'bg-brandGreen/70' : 'bg-slate-700'}`} />
                ))}
            </div>

            <div className="min-w-0 flex-1 space-y-3 p-3">
                <div className="flex items-center justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Pipeline de ventas</p>
                    <span className="rounded border border-slate-700 px-1.5 py-0.5 font-mono text-[9px] text-slate-500">Ctrl K</span>
                </div>

                <div className="grid grid-cols-4 gap-1.5">
                    {columnas.map((col) => (
                        <div key={col.nombre} className="space-y-1.5 rounded-md bg-slate-900/60 p-1.5">
                            <div className="flex items-center gap-1">
                                <span className={`h-1.5 w-1.5 rounded-full ${col.color}`} />
                                <p className="truncate text-[8px] font-semibold text-slate-400">{col.nombre}</p>
                            </div>
                            {col.leads.map((lead, i) => (
                                <div
                                    key={lead}
                                    className={`rounded border bg-slate-950/80 p-1.5 ${col.parado === i ? 'border-rose-500/60' : 'border-slate-800'}`}
                                >
                                    <p className="truncate text-[8px] font-medium text-slate-200">{lead}</p>
                                    <p className={`mt-0.5 text-[7px] ${col.parado === i ? 'text-rose-400' : 'text-slate-500'}`}>
                                        {col.parado === i ? '⏳ 6 d sin contacto' : 'Próx.: llamada'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="rounded-md border border-brandPurple/30 bg-brandPurple/5 p-2">
                    <p className="text-[8px] font-semibold uppercase tracking-wider text-brandPurple">✦ Redactor IA</p>
                    <div className="mt-1.5 space-y-1">
                        <span className="block h-1 w-11/12 rounded-full bg-slate-700" />
                        <span className="block h-1 w-4/5 rounded-full bg-slate-700" />
                        <span className="block h-1 w-2/3 rounded-full bg-slate-700" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const PREVIEWS = {
    prestamos: PreviewPrestamos,
    crm: PreviewCrm,
};

/** Captura real si existe; si no, la vista previa ilustrada del proyecto. */
function VistaPrevia({ proy }) {
    const url = proy.web
        ? proy.web.replace(/^https?:\/\//, '').replace(/\/$/, '')
        : `${proy.id}.app · demo privada`;
    const Preview = PREVIEWS[proy.preview];

    return (
        <MarcoNavegador url={url}>
            {proy.imagen ? (
                <img
                    src={proy.imagen}
                    alt={`Captura de pantalla de ${proy.titulo}`}
                    loading="lazy"
                    className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
            ) : (
                Preview && <Preview />
            )}
        </MarcoNavegador>
    );
}

/** Barra que resume cuántas fases del roadmap están completadas. */
function ProgresoRoadmap({ roadmap }) {
    const hechas = roadmap.filter((f) => f.estado === 'hecho').length;
    const porcentaje = Math.round((hechas / roadmap.length) * 100);

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-slate-400">
                    Estado del desarrollo
                </span>
                <span className="font-mono text-brandGreen">
                    {hechas}/{roadmap.length} fases · {porcentaje}%
                </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-brandGreen to-brandBlue transition-[width] duration-700"
                    style={{ width: `${porcentaje}%` }}
                />
            </div>
        </div>
    );
}

function Roadmap({ roadmap }) {
    const base = 'relative overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1';

    return (
        <div className="space-y-5 border-t border-slate-800 pt-6">
            <ProgresoRoadmap roadmap={roadmap} />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {roadmap.map((fase) => {
                    if (fase.estado === 'hecho') {
                        return (
                            <div key={fase.fase} className={`${base} border-slate-800 bg-slate-900/60 hover:border-brandGreen/40`}>
                                <div className="mb-2 flex items-center justify-between">
                                    <p className="font-mono text-[11px] text-slate-500">{fase.fase}</p>
                                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brandGreen">
                                        <IconoCheck />
                                        Hecho
                                    </span>
                                </div>
                                <p className="text-sm font-semibold text-white">{fase.nombre}</p>
                                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{fase.desc}</p>
                            </div>
                        );
                    }

                    if (fase.estado === 'actual') {
                        return (
                            <div key={fase.fase} className={`${base} border-brandGreen/40 bg-slate-900/60 ring-1 ring-brandGreen/20`}>
                                <div className="mb-2 flex items-center justify-between">
                                    <p className="font-mono text-[11px] text-brandGreen">{fase.fase}</p>
                                    <span className="animate-pulse text-[11px] font-bold text-brandGreen">● En curso</span>
                                </div>
                                <p className="text-sm font-semibold text-white">{fase.nombre}</p>
                                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{fase.desc}</p>
                            </div>
                        );
                    }

                    return (
                        <div key={fase.fase} className={`${base} border-dashed border-slate-800 bg-slate-900/20 opacity-60`}>
                            <div className="mb-2 flex items-center justify-between">
                                <p className="font-mono text-[11px] text-slate-600">{fase.fase}</p>
                                <span className="text-[11px] text-slate-600">Pendiente</span>
                            </div>
                            <p className="text-sm font-semibold text-slate-400">{fase.nombre}</p>
                            <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{fase.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

/** Botones de código y demo; si el proyecto es privado lo indica en su lugar. */
function EnlacesProyecto({ proy }) {
    if (!proy.github && !proy.web) {
        return (
            <span className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-400">
                <svg className="h-3.5 w-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="4" y="11" width="16" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                Proyecto privado · demo bajo petición
            </span>
        );
    }

    return (
        <div className="flex shrink-0 flex-wrap items-center gap-2">
            {proy.github && (
                <a
                    href={proy.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-300 transition hover:-translate-y-0.5 hover:border-slate-600 hover:text-white"
                >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    Código
                </a>
            )}

            {proy.web && (
                <a
                    href={proy.web}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-brandGreen px-4 py-2 text-xs font-bold text-slate-950 shadow-lg shadow-brandGreen/20 transition hover:-translate-y-0.5 hover:bg-brandGreen/90"
                >
                    Ver en vivo
                    <svg className="h-3.5 w-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 17 17 7" />
                        <path d="M7 7h10v10" />
                    </svg>
                </a>
            )}
        </div>
    );
}

function TarjetaProyecto({ proy, index }) {
    const estado = ESTADOS[proy.estado] ?? ESTADOS.completado;
    const invertido = index % 2 === 1;

    return (
        <article
            id={`proyecto-${proy.id}`}
            className="group/card relative scroll-mt-28 overflow-hidden rounded-3xl border border-slate-800 bg-darkCard/70 shadow-2xl transition-colors hover:border-slate-700"
        >
            {/* Brillo superior */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brandGreen/60 to-transparent"
            />

            <div className="space-y-8 p-6 md:p-8">
                {/* Cabecera */}
                <div className="flex flex-col justify-between gap-5 border-b border-slate-800 pb-6 md:flex-row md:items-start">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 font-mono text-xs">
                            <span className="text-brandGreen">{String(index + 1).padStart(2, '0')}</span>
                            <span className="uppercase tracking-wider text-slate-500">{proy.categoria}</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-2xl font-bold text-white sm:text-3xl">{proy.titulo}</h3>
                            <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${estado.clase}`}>
                                <span className={`h-1.5 w-1.5 rounded-full ${estado.punto}`} />
                                {estado.texto}
                            </span>
                        </div>

                        <p className="max-w-xl text-sm text-slate-400">{proy.subtitulo}</p>
                    </div>

                    <EnlacesProyecto proy={proy} />
                </div>

                {/* Vista previa + puntos fuertes (alternando el lado en cada tarjeta) */}
                <div className="grid items-center gap-8 md:grid-cols-5">
                    <div className={`md:col-span-3 ${invertido ? 'md:order-2' : ''}`}>
                        <VistaPrevia proy={proy} />
                    </div>

                    <div className={`space-y-6 md:col-span-2 ${invertido ? 'md:order-1' : ''}`}>
                        <div>
                            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Puntos fuertes
                            </h4>
                            <ul className="space-y-2.5">
                                {proy.destacados.map((d) => (
                                    <li key={d} className="flex gap-2.5 text-sm text-slate-300">
                                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brandGreen/15 text-brandGreen">
                                            <IconoCheck className="h-2.5 w-2.5" />
                                        </span>
                                        {d}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Stack</h4>
                            <ul className="flex flex-wrap gap-2">
                                {proy.stack.map((tech) => (
                                    <li
                                        key={tech}
                                        className="rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1 font-mono text-[11px] text-slate-400"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Relato del proyecto */}
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5">
                        <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brandGreen">
                            <span className="h-1 w-6 rounded-full bg-brandGreen/60" />
                            El problema
                        </h4>
                        <p className="text-sm leading-relaxed text-slate-300">{proy.problema}</p>
                    </div>

                    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5">
                        <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brandBlue">
                            <span className="h-1 w-6 rounded-full bg-brandBlue/60" />
                            La solución
                        </h4>
                        <p className="text-sm leading-relaxed text-slate-300">{proy.solucion}</p>
                    </div>
                </div>

                {proy.roadmap?.length > 0 && <Roadmap roadmap={proy.roadmap} />}
            </div>
        </article>
    );
}

export default function Proyectos() {
    return (
        <section id="proyectos" className="scroll-mt-24 space-y-14">
            <Reveal>
                <SectionHeading
                    numero="02"
                    etiqueta="Proyectos"
                    titulo="Lo que he construido"
                    descripcion="Una muestra de las soluciones que he diseñado y desarrollado, desde ideas en producción hasta herramientas en desarrollo activo."
                />
            </Reveal>

            {/* Índice rápido de la vitrina */}
            <Reveal delay={80}>
                <nav aria-label="Índice de proyectos" className="grid gap-3 sm:grid-cols-3">
                    {listaProyectos.map((proy, index) => (
                        <a
                            key={proy.id}
                            href={`#proyecto-${proy.id}`}
                            className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-darkCard/40 p-4 transition hover:-translate-y-0.5 hover:border-brandGreen/40 hover:bg-darkCard/70"
                        >
                            <span className="font-mono text-2xl font-bold text-slate-700 transition-colors group-hover:text-brandGreen">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="min-w-0">
                                <span className="block truncate font-semibold text-white">{proy.titulo}</span>
                                <span className="block truncate text-xs text-slate-500">{proy.categoria}</span>
                            </span>
                        </a>
                    ))}
                </nav>
            </Reveal>

            <div className="space-y-16">
                {listaProyectos.map((proy, index) => (
                    <Reveal key={proy.id} delay={index * 120}>
                        <TarjetaProyecto proy={proy} index={index} />
                    </Reveal>
                ))}
            </div>

            {/* Invitación a ver el resto en GitHub */}
            <Reveal delay={150}>
                <a
                    href="https://github.com/SergioBM05?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-dashed border-slate-800 bg-darkCard/30 p-6 transition-colors hover:border-brandGreen/40 hover:bg-darkCard/60"
                >
                    <div>
                        <p className="font-semibold text-white">Más cosas en mi GitHub</p>
                        <p className="mt-1 text-sm text-slate-400">
                            Experimentos, prácticas y proyectos en curso que no han llegado aquí todavía.
                        </p>
                    </div>
                    <svg
                        className="h-5 w-5 shrink-0 fill-none stroke-slate-500 transition-all group-hover:translate-x-1 group-hover:stroke-brandGreen"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </a>
            </Reveal>
        </section>
    );
}
