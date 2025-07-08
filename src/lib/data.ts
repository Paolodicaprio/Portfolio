export const personalInfo = {
  name: "Ken Paolo DAGBA",
  title: "Développeur Full Stack & Analyste Programmeur",
  email: "dagbapaolo@gmail.com",
  phone: "+229 0153546802",
  location: "Abomey Calavi, Womey, Bénin",
  bio: "Développeur Full Stack et analyste programmeur, diplômé de l'ENEAM et étudiant en Master Génie Logiciel à l'IFRI. Passionné par la création d'applications performantes et modernes, je maîtrise les outils front-end et back-end. J'ai une grande capacité d'adaptation aux nouvelles technologies et une expérience dans des projets réels, notamment en intégration API, développement responsive, et gestion d'authentification sécurisée.",
  socialLinks: {
    github: "https://github.com/Paolodicaprio",
    linkedin: "https://www.linkedin.com/in/paolo-dagba-1315a6266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/It_sPaolo?t=bMbXUk0CDs8xqm_SaaJepg&s=09",
  },
};

export const skills = [
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "TypeScript", level: 40, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Vue.js", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Flutter", level: 70, category: "mobile" },
  { name: "PHP", level: 85, category: "backend" },
  { name: "Python", level: 85, category: "backend" },
  { name: "WordPress", level: 75, category: "cms" },
  { name: "Drupal", level: 70, category: "cms" },
  { name: "Agile Methodology", level: 80, category: "methodology" },
  { name: "API Integration", level: 75, category: "other" },
];

export const experiences = [
  {
    company: "FRIARE",
    position: "Développeur Full Stack",
    startDate: "2024",
    endDate: "Present",
    description: [
      "Intégration d'interfaces UI avec React + Tailwind CSS",
      "Intégration des endpoints API d'authentification et de gestion des sessions utilisateur",
      "Collaboration avec l'équipe backend pour la sécurisation des échanges API et l'amélioration du flux d'authentification",
      "Intégration d'outils de veille technologique comme Google Alerts et Inoreader",
    ]
  },
  {
    company: "RINTIO",
    position: "Stage Académique",
    startDate: "2022",
    endDate: "2023",
    description: [
      "Développement web et mobile (VueJS, Angular, Flutter)",
      "Tests fonctionnels/unitaires",
      "Intégration GitLab et WordPress",
      "Conception d'une application web responsive de veille technologique",
    ]
  },
  {
    company: "Freelance",
    position: "Développeur Full Stack",
    startDate: "2023",
    endDate: "Présent",
    description: [
      "Développement d'applications web et mobile sur mesure pour divers clients",
      "Conception d'APIs RESTful avec Node.js et Express",
      "Création d'interfaces utilisateur avec React et React Native",
      "Consultation technique et accompagnement dans les choix technologiques",
      "Mise en place de solutions Open Data pour des organisations locales"
    ]
  }
];

export const education = [
  {
    degree: "Master en Génie Logiciel",
    institution: "IFRI",
    startYear: "2023",
    endYear: "en cours",
    description: "Spécialisation en développement de logiciels et génie logiciel.",
  },
  {
    degree: "Licence en Analyse Informatique et Programmation",
    institution: "ENEAM, Cotonou",
    startYear: "2022",
    endYear: "2023",
    description: "Formation approfondie en programmation et analyse de systèmes informatiques.",
  },
];

export const certifications = [
  {
    name: "Programming in Python",
    issuer: "Meta via Coursera",
    date: "2025",
    link: "https://coursera.org/share/fb7f3888f8fc69607793be0baa966dea",
  },
  {
    name: "Meta Back-End Developer",
    issuer: "Meta via Coursera",
    date: "2025",
    link: "https://coursera.org/share/c2624643be1535c11cc9b00fe0122465",
  },
  {
    name: "JavaScript",
    issuer: "Codingame",
    date: "2023",
    link: "https://www.codingame.com/certification/zr7kBCv9vJsRKbVUX6KY_w",
  },
  {
    name: "Django Web Framework",
    issuer: "Meta via Coursera",
    date: "2025",
    link: "https://coursera.org/share/e3a5d9bfc5054b3c75f2787357c83318",
  },
  {
    name: "APIs",
    issuer: "Meta via Coursera",
    date: "2025",
    link: "https://coursera.org/share/b84ec449195acc5bfa403b7309465ae5",
  },
  {
    name: "The Full Stack",
    issuer: "Meta via Coursera",
    date: "2025",
    link: "https://coursera.org/share/edffb496188fb89ac63022704861dfb6",
  },
];

export const languages = [
  { name: "Français", proficiency: "Courant" },
  { name: "Anglais", proficiency: "Intermédiaire" },
  { name: "Fon", proficiency: "Langue maternelle" },
];

export const projects = [
  {
    title: "Application de Veille Technologique",
    description: "Application web responsive permettant la veille technologique à travers l'intégration de divers services comme Google Alerts.",
    technologies: ["React", "Tailwind CSS", "API Integration"],
    link: "#",
    image: "/images/project1.jpg",
    featured: true,
  },
  {
    title: "Système d'Authentification Sécurisée",
    description: "Développement d'un système d'authentification robuste avec gestion des sessions utilisateurs et protection contre les attaques courantes.",
    technologies: ["Laravel", "Vue.js", "JWT"],
    link: "#",
    image: "/images/project2.jpg",
    featured: true,
  },
  {
    title: "Application Mobile de Gestion",
    description: "Application mobile cross-platform pour la gestion de ressources et le suivi de projets.",
    technologies: ["Flutter", "Firebase", "REST API"],
    link: "#",
    image: "/images/project3.jpg",
    featured: true,
  },
  {
    title: "Site E-commerce",
    description: "Plateforme e-commerce complète avec système de paiement intégré et gestion des stocks.",
    technologies: ["WordPress", "WooCommerce", "PHP"],
    link: "#",
    image: "/images/project4.jpg",
    featured: false,
  },
  {
    title: "Application Mobile OpenData",
    description: "Application Android pour collecter des données via questionnaires et intégration avec des APIs Open Data",
    technologies: ["React Native", "Node.js", "MongoDB", "REST API"],
    link: "#",
    image: "/images/opendata-app.jpg", 
    featured: true,
    details: [
      "Collecte de données via formulaires dynamiques",
      "Synchronisation offline/online des données",
      "Visualisation des données collectées",
      "Intégration avec des APIs Open Data existantes"
    ]
  },
];

export const services = [
  {
    title: "Développement Frontend",
    description: "Création d'interfaces utilisateur modernes, réactives et intuitives avec les technologies JavaScript les plus récentes.",
    icon: "CodeBracketIcon",
  },
  {
    title: "Développement Backend",
    description: "Conception et développement de serveurs robustes, APIs et bases de données pour soutenir vos applications.",
    icon: "ServerIcon",
  },
  {
    title: "Développement Mobile",
    description: "Création d'applications mobiles cross-platform pour iOS et Android avec Flutter et React Native.",
    icon: "DevicePhoneMobileIcon",
  },
  {
    title: "Intégration CMS",
    description: "Mise en place et personnalisation de systèmes de gestion de contenu comme WordPress et Drupal.",
    icon: "DocumentTextIcon",
  },
  {
    title: "Consultation Technique",
    description: "Conseil en architecture logicielle, choix technologiques et bonnes pratiques de développement.",
    icon: "ChatBubbleBottomCenterTextIcon",
  },
];

export const blogPosts = [
  {
    title: "Les meilleures pratiques pour le développement React en 2025",
    slug: "meilleures-pratiques-react-2025",
    excerpt: "Découvrez les techniques et patterns les plus efficaces pour développer des applications React performantes et maintenables.",
    date: "2025-05-15",
    tags: ["React", "Frontend", "JavaScript"],
    image: "/images/blog1.jpg",
  },
  {
    title: "Comment intégrer l'IA dans votre flux de développement",
    slug: "integration-ia-flux-developpement",
    excerpt: "Un guide pratique pour tirer parti des outils d'IA afin d'améliorer votre productivité en tant que développeur.",
    date: "2025-04-20",
    tags: ["IA", "Productivité", "Développement"],
    image: "/images/blog2.jpg",
  },
  {
    title: "Flutter vs React Native: Quel framework choisir en 2025?",
    slug: "flutter-vs-react-native-2025",
    excerpt: "Une comparaison approfondie des deux frameworks de développement mobile cross-platform les plus populaires.",
    date: "2025-03-10",
    tags: ["Mobile", "Flutter", "React Native"],
    image: "/images/blog3.jpg",
  },
];