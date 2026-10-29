import React from 'react';

/**
 * Cabecera común a todas las secciones: etiqueta numerada, título y descripción.
 */
export default function SectionHeading({ numero, etiqueta, titulo, descripcion, centrado = false }) {
  return (
    <div className={`space-y-4 ${centrado ? 'text-center mx-auto max-w-2xl' : ''}`}>
      <div className={`flex items-center gap-3 ${centrado ? 'justify-center' : ''}`}>
        <span className="font-mono text-xs text-brandGreen">{numero}</span>
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          {etiqueta}
        </span>
        <span className="h-px w-10 bg-gradient-to-r from-brandGreen/60 to-transparent" />
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{titulo}</h2>

      {descripcion && (
        <p className={`text-slate-400 leading-relaxed ${centrado ? '' : 'max-w-2xl'}`}>
          {descripcion}
        </p>
      )}
    </div>
  );
}
