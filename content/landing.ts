export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const externalLinks = {
  github: "https://github.com/alexanderbeleno16",
  githubRepositories: "https://github.com/alexanderbeleno16?tab=repositories",
  behance: "https://www.behance.net/jostindavidjr",
  linkedin: "https://www.linkedin.com/in/jostin-beleno/",
  cv: "/cv/CV%20-%20Jostin%20Bele%C3%B1o%20-%20es.pdf",
} as const;

export const contact = {
  email: "jostinbeleno777@gmail.com",
} as const;

export const hero = {
  eyebrow: "Digital Designer / UI Designer / Creative Tech Designer",
  name: "Jostin Beleño",
  title: "Hola, soy",
  summary:
    "Diseñador gráfico y digital en Barranquilla, Colombia. Creo identidades, experiencias UI y piezas multimedia con criterio corporativo y un enfoque creative-tech para marcas que quieren verse premium y vender mejor.",
  image: {
    src: "/profile/perfil_2026.png",
    alt: "Retrato profesional de Jostin Beleño con traje oscuro y camisa blanca.",
  },
} as const;

export const stats = [
  { value: "2024+", label: "Actuando en mercado" },
  { value: "3", label: "Etapas profesionales" },
  { value: "360", label: "Diseño + contenido" },
  { value: "UI", label: "Foco de crecimiento" },
] as const;

export const skillGroups = [
  {
    icon: "BRD",
    title: "Branding & identidad visual",
    tags: [
      "Branding",
      "Identidad visual",
      "Dirección de arte",
      "Social media design",
      "Diseño editorial",
    ],
  },
  {
    icon: "UIX",
    title: "UI / Diseño digital",
    tags: [
      "UI Design",
      "Sistemas visuales",
      "Wireframing",
      "Prototipado",
      "Responsive design",
      "WordPress",
    ],
  },
  {
    icon: "MOT",
    title: "Multimedia & motion",
    tags: [
      "Motion graphics",
      "Edición de video",
      "Narrativa visual",
      "Contenido digital",
      "Piezas multimedia",
    ],
  },
  {
    icon: "DEV",
    title: "Creative tech",
    tags: ["HTML5", "CSS3", "SCSS", "JavaScript", "Figma handoff", "No-code + IA"],
  },
] as const;

export const aiStack = [
  "Claude",
  "ChatGPT",
  "Gemini",
  "Canva AI",
  "Adobe Firefly",
  "AI-assisted creative work",
] as const;

export const projects = [
  {
    title: "Identidad Personal",
    description:
      "Pieza audiovisual de identidad visual personal con enfoque en presentación profesional, estilo digital y narrativa de marca.",
    image: "/projects/identidad-personal/Creative%20Cloud%20Player%201.0.110.mp4",
    gallery: [
      "/projects/identidad-personal/Creative%20Cloud%20Player%201.0.110.mp4",
    ],
    alt: "Video de identidad personal con dirección visual para presentación de marca profesional.",
    tags: ["Branding", "Video", "Motion", "IA", "Figma", "After Effects"],
    primaryAction: "Demo",
    demoHref: "https://www.behance.net/gallery/216383289/IDENTIDAD-PERSONAL",
  },
  {
    title: "DuoLuxe Essence",
    description:
      "Ecosistema de marca premium para fragancias con dirección visual sobria, contenido comercial y experiencia de compra elegante.",
    image: "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200031.png",
    gallery: [
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200031.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200052.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200122.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200148.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200213.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200306.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200409.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200419.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200429.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200437.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200524.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200545.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200621.png",
    ],
    alt: "Landing premium para perfumería con fotografía elegante, reflejos de vidrio y fondo oscuro.",
    tags: ["Astro", "Next.js", "TailwindCSS", "Supabase", "Vercel", "Figma", "HTML5", "CSS", "Claude Design", "Google Stitch"],
    primaryAction: "Demo",
    demoHref: "https://duoluxe.vercel.app/",
  },
  {
    title: "Nova Design",
    description:
      "Propuesta visual de portafolio digital con estética premium, jerarquía clara y composición enfocada en presentar servicios creativos con impacto.",
    image: "/projects/nova-design/dise%C3%B1o_portafolio_1.png",
    gallery: [
      "/projects/nova-design/dise%C3%B1o_portafolio_1.png",
    ],
    alt: "Diseño de portafolio digital Nova Design con dirección visual moderna y composición premium.",
    tags: ["UI Design", "Branding", "Creative Direction", "Visual System", "Figma", "HTML5", "CSS", "Claude Design", "Google Stitch"],
    primaryAction: "Demo",
    demoStatus: "offline",
    contactAction: false,
  },
  {
    title: "Deep Nova",
    description:
      "Exploración de identidad e interfaz con enfoque creative-tech, profundidad visual y narrativa digital para una presencia de marca más diferencial.",
    image: "/projects/deep-nova/dise%C3%B1o_portafolio_2.png",
    gallery: [
      "/projects/deep-nova/dise%C3%B1o_portafolio_2.png",
    ],
    alt: "Diseño Deep Nova con estética oscura, acentos tecnológicos y composición visual creativa.",
    tags: ["Creative Tech", "UI Concept", "Digital Design", "Visual Identity", "Figma", "HTML5", "CSS", "Claude Design", "Google Stitch"],
    primaryAction: "Demo",
    demoStatus: "offline",
    contactAction: false,
  },
  {
    title: "Soluambiente",
    description:
      "Diseño de piezas visuales corporativas para comunicación digital, contenido institucional y presencia de marca.",
    image: "/projects/soluambiente/Captura%20de%20pantalla%202026-06-05%20100129.png",
    gallery: [
      "/projects/soluambiente/Captura%20de%20pantalla%202026-06-05%20100129.png",
      "/projects/soluambiente/Captura%20de%20pantalla%202026-06-05%20100200.png",
      "/projects/soluambiente/Captura%20de%20pantalla%202026-06-05%20100228.png",
      "/projects/soluambiente/Captura%20de%20pantalla%202026-06-05%20100249.png",
      "/projects/soluambiente/Captura%20de%20pantalla%202026-06-05%20100339.png",
      "/projects/soluambiente/Captura%20de%20pantalla%202026-06-05%20100358.png",
      "/projects/soluambiente/Captura%20de%20pantalla%202026-06-05%20100418.png",
    ],
    alt: "Piezas visuales de Soluambiente para comunicación corporativa y contenido digital.",
    tags: ["Branding", "Diseño digital", "Social Media", "Figma", "Adobe", "Canva AI", "Claude"],
    primaryAction: "Demo",
    demoHref: "https://www.behance.net/gallery/230062811/IDENTIFICACION-LABORAL-CARNET",
  },
  {
    title: "JAW",
    description:
      "Sistema visual para marca con múltiples piezas de presentación, composición gráfica y aplicación digital.",
    image: "/projects/JAW/Captura%20de%20pantalla%202026-06-05%20093126.png",
    gallery: [
      "/projects/JAW/Captura%20de%20pantalla%202026-06-05%20093126.png",
      "/projects/JAW/Captura%20de%20pantalla%202026-06-05%20093200.png",
      "/projects/JAW/Captura%20de%20pantalla%202026-06-05%20093232.png",
      "/projects/JAW/Captura%20de%20pantalla%202026-06-05%20093304.png",
      "/projects/JAW/Captura%20de%20pantalla%202026-06-05%20093332.png",
      "/projects/JAW/Captura%20de%20pantalla%202026-06-05%20093356.png",
      "/projects/JAW/Captura%20de%20pantalla%202026-06-05%20093423.png",
      "/projects/JAW/Captura%20de%20pantalla%202026-06-05%20093451.png",
      "/projects/JAW/Captura%20de%20pantalla%202026-06-05%20093527.png",
      "/projects/JAW/Captura%20de%20pantalla%202026-06-05%20095730.png",
      "/projects/JAW/Captura%20de%20pantalla%202026-06-05%20095751.png",
      "/projects/JAW/Captura%20de%20pantalla%202026-06-05%20095811.png",
      "/projects/JAW/Captura%20de%20pantalla%202026-06-05%20095829.png",
      "/projects/JAW/Captura%20de%20pantalla%202026-06-05%20095847.png",
      "/projects/JAW/Captura%20de%20pantalla%202026-06-05%20095904.png",
      "/projects/JAW/Captura%20de%20pantalla%202026-06-05%20095922.png",
    ],
    alt: "Galería visual del proyecto JAW con piezas de identidad y composición digital.",
    tags: ["Identidad visual", "Branding", "Composición", "Figma", "Adobe", "Canva AI", "Claude"],
    primaryAction: "Demo",
    demoHref: "https://www.behance.net/gallery/216356095/CORPORATE-MANUAL",
  },
  {
    title: "Compact Visual Company",
    description:
      "Concepto visual corporativo con piezas de presentación enfocadas en claridad, consistencia y presencia digital.",
    image: "/projects/compact-visual-company/Captura%20de%20pantalla%202026-06-05%20092606.png",
    gallery: [
      "/projects/compact-visual-company/Captura%20de%20pantalla%202026-06-05%20092606.png",
      "/projects/compact-visual-company/Captura%20de%20pantalla%202026-06-05%20092641.png",
      "/projects/compact-visual-company/Captura%20de%20pantalla%202026-06-05%20092840.png",
      "/projects/compact-visual-company/Captura%20de%20pantalla%202026-06-05%20092921.png",
    ],
    alt: "Piezas de Compact Visual Company con diseño corporativo y enfoque visual digital.",
    tags: ["Brand System", "Corporate Design", "Figma", "Adobe", "Claude"],
    primaryAction: "Demo",
    demoHref: "https://www.behance.net/gallery/166071937/Compact-Visual-Company",
  },
  {
    title: "Campañas Digitales",
    description:
      "Serie de piezas para campañas visuales y comunicación digital con enfoque en impacto, composición y claridad comercial.",
    image: "/projects/campa%C3%B1a/campana.png",
    gallery: [
      "/projects/campa%C3%B1a/campana.png",
      "/projects/campa%C3%B1a-2/campa%C3%B1a2.png",
      "/projects/campa%C3%B1a-3/campana-3.png",
    ],
    alt: "Piezas gráficas de campañas digitales para comunicación visual de marca.",
    tags: ["Social Media", "Campañas", "Diseño gráfico", "Figma", "Adobe", "Canva AI", "Claude"],
    primaryAction: "Demo",
    demoHref: "https://www.behance.net/gallery/230061921/FLYER-COMUNICATIVOS",
  },
  {
    title: "Montajes Visuales",
    description:
      "Composición y montaje visual para piezas gráficas con enfoque en presentación, estética y comunicación digital.",
    image: "/projects/montajes/montaje-1.png",
    gallery: ["/projects/montajes/montaje-1.png"],
    alt: "Montaje visual para pieza gráfica y composición digital.",
    tags: ["Montaje", "Photoshop", "Composición", "Figma", "Adobe", "Claude"],
    primaryAction: "Demo",
    demoHref: "https://www.behance.net/gallery/230060233/MONTAJE-PAISAJISMOS",
  },
  {
    title: "Logo Company Design",
    description:
      "Exploración de logotipo y dirección visual para una identidad de marca clara, adaptable y reconocible.",
    image: "/projects/logo-company-design/logo-1.png",
    gallery: ["/projects/logo-company-design/logo-1.png"],
    alt: "Diseño de logotipo para identidad de marca corporativa.",
    tags: ["Logo Design", "Branding", "Identidad visual", "Figma", "Adobe", "Canva AI", "Claude"],
    primaryAction: "Demo",
    demoHref: "https://www.behance.net/gallery/206258025/Logo-Company-Design",
  },
] as const;

export const timeline = [
  {
    period: "Diciembre 2025 — Actualidad",
    role: "Freelance Designer — Proyectos de marca y experiencia digital",
    description: [
      "Diseño de identidades visuales y sistemas de marca para emprendedores y negocios en crecimiento.",
      "Creación de interfaces digitales y piezas para redes sociales con enfoque en conversión y consistencia visual.",
      "Uso de herramientas de IA creativa para acelerar propuestas sin perder criterio de dirección de arte.",
      "Iteración directa con clientes para aterrizar objetivos comerciales en entregables visuales claros.",
    ],
  },
  {
    period: "Febrero 2025 — Julio 2025",
    role: "Practicante en diseño gráfico — Soluambiente S.A.S",
    description: [
      "Desarrollo de material corporativo y apoyo en campañas visuales para comunicación institucional.",
      "Producción de piezas para medios digitales y físicos respetando lineamientos de marca.",
      "Trabajo colaborativo con equipos internos para mantener calidad visual y coherencia en entregables.",
    ],
  },
  {
    period: "Marzo 2024 — Noviembre 2024",
    role: "Freelance en diseño, branding y contenido digital",
    description: [
      "Gestión integral de proyectos visuales para clientes independientes, desde briefing hasta entrega.",
      "Diseño de branding, piezas de social media y contenido multimedia para posicionamiento digital.",
      "Implementación de soluciones web ligeras con WordPress, HTML5, CSS3 y JavaScript.",
    ],
  },
] as const;

export const aiWorkflow = {
  eyebrow: "Capacidades y metodología",
  title: "Diseño creativo apoyado en tecnología",
  description:
    "Combino fundamentos de diseño con herramientas de creative-tech para entregar resultados sólidos, medibles y visualmente diferenciales.",
  pillars: [
    {
      icon: "FIG",
      title: "Diseño estratégico",
      description:
        "Estructuro objetivos de negocio, tono visual y mensajes clave antes de producir piezas o interfaces.",
      tags: ["Brief", "Dirección de arte", "UX baseline"],
    },
    {
      icon: "VIS",
      title: "Sistemas visuales coherentes",
      description:
        "Organizo paletas, tipografias, componentes y reglas de uso para sostener consistencia en cada canal.",
      tags: ["UI Kit", "Brand system", "Consistency"],
    },
    {
      icon: "MOT",
      title: "Contenido multimedia",
      description:
        "Desarrollo piezas para social media, video y motion que conservan identidad y elevan la percepcion de marca.",
      tags: ["After Effects", "Filmora", "Canva Pro"],
    },
    {
      icon: "TEC",
      title: "Implementación digital",
      description:
        "Conecto diseño y desarrollo con WordPress y front-end base para que la ejecución final respete la propuesta visual.",
      tags: ["WordPress", "HTML5", "CSS3", "SCSS", "JavaScript"],
    },
    {
      icon: "AIX",
      title: "Aceleración con IA",
      description:
        "Integro IA generativa para investigar, idear y prototipar más rápido sin sacrificar criterio profesional.",
      tags: ["Claude", "ChatGPT", "Gemini", "Adobe Firefly", "Canva AI"],
    },
  ],
} as const;

export const footerLinks = [
  { label: "GitHub", href: externalLinks.github },
  { label: "LinkedIn", href: externalLinks.linkedin },
  { label: "Ver CV", href: externalLinks.cv },
] as const;
