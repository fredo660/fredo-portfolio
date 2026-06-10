import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    emoji: "🗺️",
    bgClass: "from-blue-500/10 to-cyan-500/5",
    title: "Carte résultats scolaires Madagascar",
    desc: "Plateforme web cartographique SIG permettant de consulter et visualiser les résultats scolaires des circonscriptions à Madagascar. Cartes interactives avec filtres géographiques.",
    tech: ["React", "Leaflet", "GeoServer", "Supabase", "PostgreSQL"],
    techColor: ["blue", "green", "green", "yellow", "yellow"],
    liveUrl: "https://map-cartographie.onrender.com",
    githubUrl: "https://github.com/fredo660",
  },
  {
    emoji: "📊",
    bgClass: "from-purple-500/10 to-pink-500/5",
    title: "Dashboard éducatif — Taux de réussite",
    desc: "Analyse et visualisation des taux de réussite et d'abandon scolaire. Tableaux de bord interactifs pour l'aide à la décision dans le secteur éducatif malgache.",
    tech: ["React", "Node.js", "MySQL", "API REST"],
    techColor: ["blue", "purple", "yellow", "blue"],
    liveUrl: null,
    githubUrl: "https://github.com/fredo660",
  },
  {
    emoji: "🛡️",
    bgClass: "from-yellow-500/10 to-orange-500/5",
    title: "Détecteur de messages spam",
    desc: "Application de détection automatique de messages spam basée sur le traitement du langage naturel (NLP). Modèle entraîné avec classification binaire pour filtrer les messages indésirables.",
    tech: ["Python", "NLP", "Scikit-learn", "Pandas", "Machine Learning"],
    techColor: ["green", "green", "green", "green", "purple"],
    liveUrl: null,
    githubUrl: "https://github.com/fredo660",
  },
  {
    emoji: "🏠",
    bgClass: "from-green-500/10 to-teal-500/5",
    title: "Classification des ménages vulnérables",
    desc: "Modèle de classification des ménages vulnérables à partir de données socio-économiques. Aide à la prise de décision pour les politiques sociales à Madagascar.",
    tech: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    techColor: ["green", "purple", "green", "green"],
    liveUrl: null,
    githubUrl: "https://github.com/fredo660",
  },
];

const techColors = {
  blue:   "bg-blue-50   dark:bg-blue-500/10   text-blue-600   dark:text-blue-400   border border-blue-200   dark:border-blue-500/20",
  purple: "bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20",
  green:  "bg-green-50  dark:bg-green-500/10  text-green-600  dark:text-green-400  border border-green-200  dark:border-green-500/20",
  yellow: "bg-yellow-50 dark:bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-400/20",
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        {/* Titre */}
        <div className="flex flex-col items-center gap-3 mb-14">
          <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/40 text-purple-500 dark:text-purple-400 text-sm bg-purple-500/10 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Projets
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center">
            Mes réalisations
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center max-w-xl">
            Applications web, cartographie interactive et intelligence artificielle
          </p>
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-300 dark:hover:border-zinc-600 hover:scale-[1.02] shadow-sm dark:shadow-none transition-all duration-300"
            >
              {/* Header */}
              <div className={`h-28 flex items-center justify-center bg-gradient-to-br ${project.bgClass} text-5xl`}>
                {project.emoji}
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-xs ${techColors[project.techColor[i]]}`}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 text-xs hover:bg-blue-100 dark:hover:bg-blue-500/20 transition"
                    >
                      <ExternalLink size={13} />
                      Voir le projet
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-zinc-700 text-xs hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
                  >
                    <FaGithub size={13} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}