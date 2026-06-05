// Datos estáticos (sin backend) que reflejan los reemplazos de microcopy:
//  - Códigos `06-...-202602041` -> Nombres reales de las materias (F2 / H6)
//  - Etiquetas con estado y próxima entrega (F1 / H4)
//  - Fechas legibles ("vence mañana a las 11:59 p.m.") (F5 / H2)

export const user = {
  fullNameDb: 'GUTIERREZ GONZALEZ JERSSON DANIEL', // tal como viene del sistema
  displayName: 'Jersson Daniel Gutiérrez',          // Title Case rediseñado
  shortName: 'Jersson',
  studentCode: '2060071-3743',
  email: 'jersson.gutierrez@correounivalle.edu.co',
  country: 'Colombia',
  campus: 'Sede regional Tuluá',
  program: 'Ingeniería de Sistemas y Computación',
  about:
    'Soy Jersson Daniel Gutiérrez, vengo de El Cerrito (Valle del Cauca) y curso Ingeniería de Sistemas. Mis expectativas en el programa son formarme como profesional y aprender mucho de mis profesores y compañeros.',
  avatar:
    'https://api.dicebear.com/9.x/initials/svg?seed=Jersson%20Gutierrez&backgroundType=gradientLinear&backgroundColor=B30000,8C0000',
};

// Materias del semestre actual con metadatos accionables (Falla 1 corregida)
export const courses = [
  {
    id: 'taller-escritura',
    legacyCode: '06-202009M-50-202602041',
    name: 'Taller de Escritura e Investigación',
    group: 'Grupo 50',
    teacher: 'Prof. María Helena Ríos',
    color: 'from-amber-200 to-amber-100',
    cover:
      'linear-gradient(135deg, #f6e6c8 0%, #f3d0a8 50%, #e7b582 100%)',
    progress: 62,
    status: 'al-dia', // al-dia | pendiente | calificacion | urgente
    pending: 0,
    nextDue: null,
    summary: 'Próxima sesión: lectura crítica del capítulo 4.',
  },
  {
    id: 'gestion-proyectos',
    legacyCode: '06-750030C-50-202602041',
    name: 'Herramientas para la Gestión de Proyectos de TI',
    group: 'Grupo 50',
    teacher: 'Prof. Camilo Andrade',
    color: 'from-rose-100 to-rose-50',
    cover:
      'linear-gradient(135deg, #e1f0fb 0%, #b9d4ee 50%, #f7c6c2 100%)',
    progress: 78,
    status: 'pendiente',
    pending: 1,
    nextDue: 'Entrega laboratorio 4 · vence el viernes 23 a las 11:59 p.m.',
    summary: '1 actividad pendiente esta semana.',
  },
  {
    id: 'diseno-contenido',
    legacyCode: '06-750040C-51-202602041',
    name: 'Diseño de Contenido para Interfaces de Usuario',
    group: 'Grupo 51',
    teacher: 'Prof. Andrés Castaño',
    color: 'from-sky-200 to-sky-100',
    cover:
      'linear-gradient(135deg, #cfe7ff 0%, #a9d0ff 50%, #7eb4f7 100%)',
    progress: 84,
    status: 'urgente',
    pending: 3,
    nextDue: 'Exposición 9: Normas APA/IEEE/Icontec · vence hoy a las 11:59 p.m.',
    summary: '3 entregas atrasadas. Revisa el cronograma.',
  },
  {
    id: 'proyecto-integrador',
    legacyCode: '06-750037C-50-202602041',
    name: 'Proyecto Integrador II',
    group: 'Grupo 50',
    teacher: 'Prof. Liliana Pérez',
    color: 'from-pink-300 to-pink-200',
    cover:
      'linear-gradient(135deg, #fdd3df 0%, #f8b1c6 50%, #f088a8 100%)',
    progress: 70,
    status: 'al-dia',
    pending: 0,
    nextDue: null,
    summary: 'Sin entregas pendientes esta semana.',
  },
  {
    id: 'innovacion',
    legacyCode: '06-750032C-50-202602041',
    name: 'Innovación y Emprendimiento Empresarial',
    group: 'Grupo 50',
    teacher: 'Prof. Daniel Mejía',
    color: 'from-fuchsia-200 to-pink-100',
    cover:
      'linear-gradient(135deg, #f9d6e9 0%, #f3b3d4 50%, #ec8fbe 100%)',
    progress: 55,
    status: 'calificacion',
    pending: 0,
    nextDue: null,
    summary: 'Calificación del parcial 1 disponible.',
  },
  {
    id: 'impactos-ambientales',
    legacyCode: '06-730017B-52-202602041',
    name: 'Impactos Ambientales',
    group: 'Grupo 52',
    teacher: 'Prof. Mauricio Lozano',
    color: 'from-emerald-200 to-emerald-100',
    cover:
      'linear-gradient(135deg, #c8eecf 0%, #97dca6 50%, #57b96f 100%)',
    progress: 48,
    status: 'pendiente',
    pending: 1,
    nextDue: 'Exposiciones · vence el miércoles 27 a las 11:59 p.m.',
    summary: '1 exposición pendiente la próxima semana.',
  },
];

// Cronograma reescrito en lenguaje humano (Falla 5 corregida)
export const schedule = [
  {
    dateLabel: 'Hoy · viernes 22 de mayo de 2026',
    items: [
      {
        time: '23:59',
        title: 'Exposición 9: Normas APA / IEEE / Icontec',
        course: 'Diseño de Contenido para Interfaces de Usuario',
        status: 'late',
        action: 'Subir mi entrega',
      },
      {
        time: '23:59',
        title: 'Proyecto de clase: Entregable 3',
        course: 'Diseño de Contenido para Interfaces de Usuario',
        status: 'late',
        action: 'Subir mi entrega',
      },
      {
        time: '23:59',
        title: 'Laboratorio 4',
        course: 'Herramientas para la Gestión de Proyectos de TI',
        status: 'late',
        action: 'Subir mi entrega',
      },
    ],
  },
  {
    dateLabel: 'Miércoles 27 de mayo de 2026',
    items: [
      {
        time: '23:59',
        title: 'Exposiciones por equipos',
        course: 'Impactos Ambientales',
        status: 'soon',
        action: 'Ver detalles',
      },
    ],
  },
  {
    dateLabel: 'Viernes 29 de mayo de 2026',
    items: [
      {
        time: '23:59',
        title: 'Exposición 10: Prompts para IA',
        course: 'Diseño de Contenido para Interfaces de Usuario',
        status: 'soon',
        action: 'Ver detalles',
      },
    ],
  },
];

// Etiquetas de semestre en lenguaje natural (Falla 5 corregida)
export const semesters = [
  { id: 'actual', label: 'Semestre actual (febrero – junio 2026)' },
  { id: '2025-2', label: 'Semestre agosto – diciembre 2025' },
  { id: '2025-1', label: 'Semestre febrero – junio 2025' },
  { id: '2024-2', label: 'Semestre agosto – diciembre 2024' },
  { id: '2024-1', label: 'Semestre febrero – junio 2024' },
  { id: '2023-2', label: 'Semestre agosto – diciembre 2023' },
  { id: '2023-1', label: 'Semestre febrero – junio 2023' },
  { id: 'extra',  label: 'Materias adicionales o especiales' },
];

// Accesos rápidos del dashboard (con descripciones útiles)
export const quickAccess = [
  {
    id: 'biblioteca',
    title: 'Biblioteca',
    description: 'Busca libros, bases de datos y reserva salas.',
    icon: 'book',
  },
  {
    id: 'correo',
    title: 'Correo institucional',
    description: 'Abre tu bandeja @correounivalle.edu.co.',
    icon: 'mail',
  },
  {
    id: 'reglamento',
    title: 'Reglamento estudiantil',
    description: 'Consulta tus derechos y deberes.',
    icon: 'doc',
  },
  {
    id: 'herramientas',
    title: 'Caja de herramientas',
    description: 'Plantillas, formatos y guías académicas.',
    icon: 'tool',
  },
  {
    id: 'bienestar',
    title: 'Bienestar universitario',
    description: 'Citas, deporte, cultura y apoyo psicológico.',
    icon: 'heart',
  },
];
