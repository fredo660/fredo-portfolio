import { useState, useEffect } from "react";
import { Play, Pause, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    bgClass: "from-green-500/10 to-emerald-500/5",
    title: "Suivi déforestation — Côte Est Madagascar",
    images: [
      "/projects/defor.png",
      "/projects/defor1.png",
      "/projects/defor2.png",
      "/projects/defor3.png",
    ],
    desc: "Plateforme SIG de suivi de la déforestation sur 5 régions de la côte est de Madagascar (2015–2023). 1 727 975 polygones · 3 145 158 ha analysés. Infrastructure GeoServer + GeoNetwork + PostgreSQL/PostGIS sous VirtualBox.",
    tech: ["React", "GeoServer", "GeoNetwork", "PostGIS", "PostgreSQL", "OGC WMS/WFS", "ISO 19115", "Python"],
    techColor: ["blue", "green", "teal", "green", "yellow", "teal", "purple", "green"],
    liveUrl: null,
    githubUrl: "https://github.com/fredo660",
    badge: "Projet académique · EMIT",
    stats: [
      { label: "Polygones", value: "1,7M" },
      { label: "Surface", value: "3,1M ha" },
      { label: "Années", value: "2015–2023" },
      { label: "Régions", value: "5" },
    ],
  },
  {
    bgClass: "from-blue-500/10 to-cyan-500/5",
    title: "Carte résultats scolaires Madagascar",
    images: [
      "/projects/map1.png",
      "/projects/map2.png",
      "/projects/map3.png",
      "/projects/map4.png",
    ],
    desc: "Plateforme web cartographique SIG permettant de consulter et visualiser les résultats scolaires des circonscriptions à Madagascar. Cartes interactives avec filtres géographiques.",
    tech: ["React", "Leaflet", "GeoServer", "Supabase", "PostgreSQL"],
    techColor: ["blue", "green", "green", "yellow", "yellow"],
    liveUrl: "https://map-cartographie.onrender.com",
    githubUrl: "https://github.com/fredo660",
  },
  {
    bgClass: "from-purple-500/10 to-pink-500/5",
    title: "Dashboard éducatif — Taux de réussite",
    images: [
      "/projects/m.png",
      "/projects/m.png",
      "/projects/m.png",
    ],
    desc: "Analyse et visualisation des taux de réussite et d'abandon scolaire. Tableaux de bord interactifs pour l'aide à la décision dans le secteur éducatif malgache.",
    tech: ["React", "Node.js", "MySQL", "API REST"],
    techColor: ["blue", "purple", "yellow", "blue"],
    liveUrl: null,
    githubUrl: "https://github.com/fredo660",
  },
  {
    bgClass: "from-yellow-500/10 to-orange-500/5",
    title: "Détecteur de messages spam",
    images: [
      "/projects/spam1.png",
      "/projects/spam2.png",
      "/projects/spam3.png",
      "/projects/spam4.png",
    ],
    desc: "Application de détection automatique de messages spam basée sur le traitement du langage naturel (NLP). Modèle entraîné avec classification binaire pour filtrer les messages indésirables.",
    tech: ["Python", "NLP", "Scikit-learn", "Pandas", "Machine Learning"],
    techColor: ["green", "green", "green", "green", "purple"],
    liveUrl: null,
    githubUrl: "https://github.com/fredo660",
  },
  {
    bgClass: "from-green-500/10 to-teal-500/5",
    title: "Classification des ménages vulnérables",
    images: [
      "/projects/vulne1.png",
      "/projects/vulne2.png",
      "/projects/vulne3.png",
      "/projects/vulne4.png",
    ],
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
  teal:   "bg-teal-50   dark:bg-teal-500/10   text-teal-600   dark:text-teal-400   border border-teal-200   dark:border-teal-500/20",
};

function ProjectSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const extendedImages = [...images, images[0]];

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, [playing]);

  useEffect(() => {
    if (current === images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
      }, 700);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 750);
    }
  }, [current, images.length]);

  return (
    <div className="relative h-56 overflow-hidden">
      <div
        className={`flex h-full ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {extendedImages.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full h-56 flex-shrink-0 object-cover"
            alt=""
          />
        ))}
      </div>

      <button
        onClick={() => setPlaying(!playing)}
        className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full"
      >
        {playing ? <Pause size={14} /> : <Play size={14} />}
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              current % images.length === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Carte spéciale pour le projet déforestation (mis en avant)
function DeforestationCard({ project }) {
  return (
    <div className="md:col-span-2 group bg-gray-50 dark:bg-zinc-900 border border-green-200 dark:border-green-900/50 rounded-2xl overflow-hidden hover:border-green-400 dark:hover:border-green-700 hover:scale-[1.01] shadow-sm dark:shadow-none transition-all duration-300">
      <div className="grid md:grid-cols-2">

        {/* Slider gauche */}
        <div className="relative">
          <ProjectSlider images={project.images} />
          {/* Badge projet phare */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Projet phare
          </div>
        </div>

        {/* Contenu droite */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            {/* Badge académique */}
            <span className="inline-block px-3 py-1 bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-500/20 text-xs font-semibold rounded-full mb-3">
              {project.badge}
            </span>

            <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-3 leading-snug">
              {project.title}
            </h3>

            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
              {project.desc}
            </p>

            {/* Statistiques réelles */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {project.stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-2 bg-white dark:bg-zinc-800 rounded-xl border border-gray-100 dark:border-zinc-700"
                >
                  <div className="text-green-600 dark:text-green-400 font-bold text-sm">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Régions */}
            <div className="flex flex-wrap gap-1 mb-4">
              {["Sava", "Analanjirofo", "Atsinanana", "Vatovavy", "Fitovinany"].map(r => (
                <span
                  key={r}
                  className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 text-xs rounded-full"
                >
                  {r}
                </span>
              ))}
            </div>

            {/* Stack tech */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className={`px-2.5 py-1 rounded-full text-xs ${techColors[project.techColor[i]]}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Boutons */}
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-500/20 text-xs hover:bg-green-100 dark:hover:bg-green-500/20 transition"
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
            {/* Lien GeoServer */}
            <a
              href="http://localhost:8180/geoserver/madagascar_deforestation/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-500/20 text-xs hover:bg-teal-100 dark:hover:bg-teal-500/20 transition"
            >
              <ExternalLink size={13} />
              GeoServer WMS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [deforestation, ...otherProjects] = projects;

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        {/* Titre */}
        <div className="flex flex-col items-center gap-3 mb-14">
          <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/40 text-purple-500 dark:text-purple-400 text-sm bg-purple-500/10 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Projets
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-center max-w-xl">
            Applications web, cartographie interactive, SIG et intelligence artificielle
          </p>
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Projet déforestation — mis en avant, pleine largeur */}
          <DeforestationCard project={deforestation} />

          {/* Autres projets */}
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-300 dark:hover:border-zinc-600 hover:scale-[1.02] shadow-sm dark:shadow-none transition-all duration-300"
            >
              <ProjectSlider images={project.images} />

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