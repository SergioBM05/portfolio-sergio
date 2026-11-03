import fotoMealScan from '../assets/proyectoMealScan.png';

/**
 * Proyectos de la vitrina. Si un proyecto no tiene captura (`imagen`), se dibuja
 * una vista previa ilustrada según `preview`. `github` y `web` son opcionales:
 * si faltan, la tarjeta indica que el código es privado.
 */
export const listaProyectos = [
    {
        id: 'mealscan',
        titulo: 'MealScan',
        categoria: 'Salud · IA',
        subtitulo: 'Escáner de calorías inteligente y planificador deportivo integral.',
        github: 'https://github.com/SergioBM05/contadorCalorias',
        web: 'https://contador-calorias-one.vercel.app/',
        imagen: fotoMealScan,
        video: '/videos/mealscan.mp4',
        poster: '/videos/mealscan.jpg',
        estado: 'completado',
        stack: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'Gemini AI', 'Recharts'],
        problema: 'Esta app web nace de mi necesidad por querer poder calcular lo que como sin tener que pagarle a una app cuando yo mismo puedo desarrollarlo.',
        solucion: 'Automatizar el proceso a través del reconocimiento visual. Al tomar una fotografía del plato, una IA identifica los ingredientes y calcula instantáneamente los macronutrientes, enlazando el progreso con mis rutinas de entrenamiento.',
        destacados: [
            'Reconocimiento de platos por foto con Gemini',
            'Cálculo automático de macronutrientes',
            'Planificador de entrenamientos (FitPlan)',
            'Gráficas de progreso interactivas',
        ],
        roadmap: [
            { fase: 'Fase 1', nombre: 'Base & Auth', desc: 'Modelado de bases de datos y perfiles.', estado: 'hecho' },
            { fase: 'Fase 2', nombre: 'Escáner de Fotos', desc: 'Integración de la API de visión y cálculo calórico.', estado: 'hecho' },
            { fase: 'Fase 3', nombre: 'Módulo FitPlan', desc: 'Planificación de entrenamientos y cargas.', estado: 'hecho' },
            { fase: 'Fase 4', nombre: 'Métricas Avanzadas', desc: 'Gráficos interactivos de rendimiento.', estado: 'hecho' },
        ],
    },
    {
        id: 'prestamos',
        titulo: 'Gestor de Préstamos',
        categoria: 'Finanzas · Full stack',
        subtitulo: 'Plataforma para gestionar préstamos, cuotas y cobros con panel de administrador y acceso para clientes.',
        github: 'https://github.com/SergioBM05/app-prestamos',
        web: 'https://app-prestamos-indol.vercel.app/',
        preview: 'prestamos',
        estado: 'completado',
        stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Firebase', 'Vercel'],
        problema: 'Llevar préstamos a mano en libretas u hojas de cálculo hace que se pierdan pagos, se calculen mal los intereses y el cliente nunca sepa con certeza cuánto le queda por pagar.',
        solucion: 'Una app con API propia que genera el plan de cuotas a partir del capital, el interés y la frecuencia, registra abonos parciales, controla el saldo en caja y da a cada cliente su propio acceso para consultar su deuda.',
        destacados: [
            'Plan de cuotas automático (por nº de cuotas o por importe)',
            'Modalidad de "solo intereses" con capital aplazado',
            'Semáforo de vencimientos y saldo de caja en tiempo real',
            'Varios administradores y credenciales para clientes vía WhatsApp',
        ],
    },
    {
        id: 'crm',
        titulo: 'Rielden Comercial',
        categoria: 'CRM · IA',
        subtitulo: 'CRM interno para el equipo comercial de Rielden: pipeline de ventas, seguimiento diario y redactor de correos con IA.',
        preview: 'crm',
        video: '/videos/crm.mp4',
        poster: '/videos/crm.jpg',
        privado: true,
        estado: 'desarrollo',
        stack: ['React', 'Vite', 'Tailwind CSS', 'Express', 'SQLite', 'Claude API', 'Web Push'],
        problema: 'El equipo comercial seguía a sus prospectos entre hojas de cálculo, notas y el correo, así que los leads se quedaban parados y nadie sabía qué tocaba hacer cada día.',
        solucion: 'Un CRM a medida, sincronizado en tiempo real entre los socios, con un embudo Kanban, trabajo diario priorizado, rutas de puerta fría por cercanía y una IA que redacta los correos siguiendo el método comercial de la empresa.',
        destacados: [
            'Pipeline Kanban con detección de leads parados',
            'Redactor de correos con IA integrado con Gmail',
            'Rutas de visitas ordenadas por cercanía',
            'Notificaciones push, helpdesk y diagnósticos para clientes',
        ],
    },
    {
        id: 'agenticos',
        titulo: 'AgenticOS',
        categoria: 'IA · Herramientas',
        subtitulo: 'Centro de control para agentes de IA: tokens, coste, presupuestos y avisos al móvil.',
        video: '/videos/agenticos.mp4',
        poster: '/videos/agenticos.jpg',
        privado: true,
        estado: 'desarrollo',
        stack: ['React 19', 'Node.js', 'Recharts', 'SSE'],
        problema: 'Al trabajar con varios agentes de IA a la vez es difícil saber cuántos tokens consumen, cuánto cuesta cada uno y cuándo uno se queda esperando un permiso.',
        solucion: 'Un panel único que muestra en tiempo real el consumo de tokens, el coste estimado y el estado de cada agente, controla los presupuestos y avisa al móvil cuando hace falta intervenir.',
        destacados: [
            'Consumo de tokens y coste estimado en tiempo real',
            'Gráficas de uso de los últimos 30 días',
            'Presupuestos con seguimiento del gasto mensual',
            'Avisos al móvil cuando un agente espera permiso',
        ],
    },
];
