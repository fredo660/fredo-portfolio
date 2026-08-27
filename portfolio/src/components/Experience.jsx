import { Briefcase, GraduationCap, MapPinned, Code, Sparkles } from "lucide-react"

const experiences = [
  {
    title: "Application mobile de géolocalisation des établissements",
    company: "Projet personnel • React Native / Expo",
    date: "Août 2026 — En cours",
    icon: <MapPinned size={20} />,
    description:
      "Développement d'une application mobile de géolocalisation des établissements à Madagascar. Carte interactive avec position GPS en temps réel et boussole, calcul d'itinéraires routiers (voiture/à pied), recherche et filtres par catégorie, backend Supabase.",
    technologies: [
      "React Native",
      "Expo",
      "Supabase",
      "Leaflet",
      "expo-location",
      "OSRM",
    ],
  },
  {
    title: "GeoDecision Madagascar — WebGIS d’aide à la décision",
    company: "Projet académique • EMIT",
    date: "Août 2026 — En cours",
    icon: <MapPinned size={20} />,
    description:
      "Conception d’une plateforme WebGIS dédiée à l’analyse territoriale et à l’aide à la décision pour la gestion des infrastructures publiques à Madagascar. Intégration de données géographiques, bases de données spatiales, cartographie interactive et outils d’analyse.",
    technologies: [
      "ExtJS",
      "GeoExt",
      "python",
      "OpenLayers",
      "PostgreSQL",
      "PostGIS",
      "GeoServer",
      "API REST",
    ],
  },
  {
    title: "Tableau de bord des soins dentaires",
    company: "Projet Data Visualisation • Power BI",
    date: "Juillet 2026",
    icon: <Code size={20} />,
    description:
      "Conception d’un tableau de bord interactif pour l’analyse et la visualisation de données de soins dentaires. Mise en place d’indicateurs et de visualisations permettant de faciliter le suivi des données et l’aide à la décision.",
    technologies: [
      "Power BI",
      "Data Analysis",
      "Data Visualization",
    ],
  },
  {
    title: "Plateforme SIG de suivi de la déforestation",
    company: "Projet Web SIG • EMIT",
    date: "juin 2026",
    icon: <MapPinned size={20} />,
    description:
      "Conception d'une plateforme SIG permettant de suivi la déforestation sur cinq régions de la côte Est de Madagascar (2015–2023). Publication de services OGC (WMS/WFS) avec GeoServer, gestion des métadonnées ISO 19115 via GeoNetwork, stockage des données spatiales dans PostgreSQL/PostGIS et visualisation cartographique avec React.",
    technologies: [
      "React",
      "GeoServer",
      "GeoNetwork",
      "PostGIS",
      "PostgreSQL",
      "Leaflet",
      "Python",
      "ISO 19115"
    ],
  },
  {
    title: "Détecteur de messages spam & Classification des ménages vulnérables",
    company: "Projets Data Science / IA",
    date: "Mai 2026",
    icon: <Code size={20} />,
    description: "Développement de deux modèles : un détecteur de spam basé sur le NLP (classification binaire) et un modèle de classification des ménages vulnérables à partir de données socio-économiques pour l'aide à la décision.",
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "NLP"],
  },
  {
    title: "Développeur Web SIG",
    company: "ITDC — Stage professionnel",
    date: "Oct – Dec 2025",
    icon: <MapPinned size={20} />,
    description: "Développement d'une plateforme web cartographique pour la visualisation de données géospatiales. Intégration de couches WMS/WFS avec GeoServer, gestion et structuration des données avec Supabase et PostgreSQL.",
    technologies: ["Leaflet", "React", "GeoServer", "Supabase", "PostgreSQL"],
  },
  {
    title: "Développeur Web Full Stack",
    company: "CISCO Mananjary — Stage académique",
    date: "Juil – Sep 2024",
    icon: <Briefcase size={20} />,
    description: "Développement d'une application web de gestion et visualisation de données scolaires pour la Circonscription Scolaire de Mananjary. Conception d'interfaces modernes et manipulation de bases de données relationnelles.",
    technologies: ["React", "Node.js", "MySQL", "API REST", "JavaScript"],
  },
  {
    title: "Développeur Web",
    company: "DREN Vatovavy — Stage académique",
    date: "Juin – Aoû 2023",
    icon: <Briefcase size={20} />,
    description: "Développement d'une application de gestion au sein de la Direction Régionale de l'Éducation Nationale Vatovavy.",
    technologies: ["C#", ".NET"],
  },
  {
    title: "Projets académiques",
    company: "EMIT — Université de Fianarantsoa",
    date: "2022 – 2024",
    icon: <GraduationCap size={20} />,
    description: "Gestion d'étudiant en Spring Boot, gestionnaire de connexion (application mobile), gestion de réservation de billets (Java), gestion des frais de scolarité (PHP/JavaScript).",
    technologies: ["Spring Boot", "Java", "PHP", "JavaScript"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 dark:bg-gray-950 py-20 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        {/* TITRE */}
        <div className="flex flex-col items-center gap-4 mb-20">
          <div className="flex items-center gap-2 px-6 py-2 rounded-full border border-blue-500/40 text-blue-500 dark:text-blue-400 text-sm bg-blue-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-105 transition-all duration-300">
            <Sparkles size={16} className="animate-pulse" />
            Expériences & Projets
          </div>
        
          <p className="text-gray-500 dark:text-gray-400 text-center max-w-2xl">
            Découvrez mes expériences professionnelles, projets web SIG
            et réalisations en développement et visualisation de données.
          </p>
        </div>

        <div className="relative">
          {/* Ligne centrale */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent -translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                {/* Point central */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-20">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-50 dark:border-gray-950 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                </div>

                {/* Carte */}
                <div className="w-full md:w-[46%] bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-blue-300 dark:hover:border-zinc-600 hover:-translate-y-1 shadow-sm dark:shadow-none transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white p-3 rounded-xl flex-shrink-0">
                      {exp.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <h3 className="text-gray-900 dark:text-white font-semibold text-base">
                          {exp.title}
                        </h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full whitespace-nowrap">
                          {exp.date}
                        </span>
                      </div>

                      <p className="text-blue-500 dark:text-blue-400 font-medium text-sm mt-1">
                        {exp.company}
                      </p>

                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mt-3">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}