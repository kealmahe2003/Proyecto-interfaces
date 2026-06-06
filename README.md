# Campus Virtual Univalle — Prototipo de Rediseño

## Integrantes
- Jersson Daniel Gutierrez
- Juan Camilo Gutierrez
- Kevin Alexander Marín
- Carlos Fernando Padilla

---

Prototipo **estático y funcional** (sin base de datos) del rediseño del Campus
Virtual de la Universidad del Valle, construido para la asignatura
**Diseño de Contenido para Interfaces de Usuario**.

Cubre las **5 pantallas** del flujo principal y aplica las correcciones
documentadas en los tres informes del equipo:

1. **Home Público** (`/`)
2. **Login** (`/login`)
3. **Dashboard / Área Personal** (`/dashboard`)
4. **Mis Materias** (`/mis-materias`)
5. **Perfil / Mi progreso** (`/perfil`)

Para ingresar a cada pantalla, debe colocar la ruta en la url.

---

## Stack

- React 18 + Vite 5
- React Router 6
- TailwindCSS 3 con paleta institucional, sombras suaves y estados accesibles
- Tipografías: **Plus Jakarta Sans** (display) + **Inter** (texto) vía Google Fonts
- Sistema de iconos propio (`<Icon name="…" />`) inspirado en Lucide
- Portadas de curso ilustradas en SVG con patrones por materia

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre <http://localhost:5173>. Para iniciar sesión usa cualquier contraseña
de 4 caracteres o más.

Para construir la versión de producción:

```bash
npm run build
npm run preview
```

## Mapa de correcciones aplicadas

| Falla | Heurística | Pantalla | Cómo se corrigió en el prototipo |
|------|------------|----------|----------------------------------|
| F1 | H4 Consistencia y estándares | Mis Materias / Dashboard | `CourseCard.jsx` añade badge de estado, barra de progreso, docente, grupo y línea "Próxima entrega". |
| F2 | H6 Reconocimiento vs. recuerdo | Dashboard / Cronograma | `mockData.js` reemplaza códigos `06-…-202602041` por nombres reales (p. ej. *Diseño de Contenido para Interfaces de Usuario · Grupo 51*). El código original queda como dato secundario. |
| F3 | H1 Visibilidad del estado | Login | Banner de bienvenida, aviso proactivo de sesión expirada, errores empáticos con acción de salida (`Login.jsx`). |
| F4 | WCAG 1.4.3 Contraste | Home Público | Bloques "Atención", "Ayudas rápidas" y "Recursos académicos" rediseñados con texto sobre blanco (`HomePublic.jsx`), cumpliendo ≥ 4.5:1. Íconos con `aria-hidden` y alternativas. |
| F5 | H2 Coincidencia sistema/usuario | Todas | Menú: *Inicio · Mis materias · Mi progreso*. Botón *Ingresar al Campus*. *Semestre 2020 II* → *Semestre agosto – diciembre 2020*. *Cursos no regulares* → *Materias adicionales o especiales*. Cronograma humanizado. |

## Microcopy clave aplicado

Tomado de las Tablas 5, 6 y del Anexo de Microcopy del *Informe de la Segunda Entrega*:

- Botón principal de Login: **Ingresar al Campus**
- Etiqueta de usuario: **Código de estudiante (p. ej., 2060071-3743)**
- Enlace de recuperación junto al campo de contraseña: **¿La olvidaste?**
- Error de credenciales: *"No reconocemos esa combinación. Revisa que tu código de estudiante y tu contraseña sean correctos."*
- Sesión expirada: *"Tu sesión cerró por inactividad. Si estabas enviando un formulario, puede que necesites repetir ese paso."*
- Tarjeta de curso (estado): *Al día · Tareas pendientes · Entregas atrasadas · Calificación disponible*
- Cronograma: *"Exposición 10: Prompts para IA · vence el viernes 29 a las 11:59 p.m."*
- Etiquetas de perfil: *Actualizar mis datos · Cerrar sesión con seguridad · Mi progreso por semestre*

## Estructura del proyecto

```
src/
├── App.jsx                       # Router de las 5 pantallas
├── main.jsx
├── index.css                     # Tailwind + tokens (botones, badges, chips, focus)
├── data/
│   └── mockData.js               # Datos estáticos ya con microcopy rediseñado
├── components/
│   ├── UnivalleLogo.jsx          # Logo institucional vectorial
│   ├── Icon.jsx                  # Set de iconos reutilizable (estilo Lucide)
│   ├── CourseCover.jsx           # Portadas ilustradas por materia (SVG)
│   ├── PublicHeader.jsx          # Header con top-bar + nav principal
│   ├── AuthHeader.jsx            # Menú: Inicio / Mis materias / Mi progreso + dropdown de cuenta
│   ├── Footer.jsx                # Footer multi-columna estilo enterprise
│   └── CourseCard.jsx            # Tarjeta con cover, badge, progreso y próxima entrega
└── pages/
    ├── HomePublic.jsx            # Pantalla 1 — hero con mockup, ayudas y app vida
    ├── Login.jsx                 # Pantalla 2 — split con storytelling lateral
    ├── Dashboard.jsx             # Pantalla 3 — hero greeting, KPIs, timeline, sidebar
    ├── MisCursos.jsx             # Pantalla 4 — pestañas, vista grid/lista, stats
    └── Perfil.jsx                # Pantalla 5 — hero banner, identidad, pestañas
```

## Accesibilidad

- Paleta con contraste **AA** (>= 4.5:1 para texto normal).
- Enlace *Saltar al contenido* visible al enfocar (Tab) en cada pantalla.
- Etiquetas de formulario visibles permanentes, `aria-describedby` con hints
  de formato y `aria-invalid` para errores.
- Roles ARIA en pestañas, alertas (`role="alert"`/`status`) y barras de
  progreso.
- Foco visible con anillo azul (#1B5FB3) sobre todos los elementos
  interactivos.
