import React, { useEffect, useRef, useState } from 'react';

/**
 * Envuelve contenido para que aparezca con un fundido hacia arriba
 * la primera vez que entra en pantalla.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sin IntersectionObserver (o con el navegador en modo sin animaciones) se muestra directamente.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
      className={`${visible ? 'animate-fade-up' : 'opacity-0'} ${className}`}
    >
      {children}
    </Tag>
  );
}
