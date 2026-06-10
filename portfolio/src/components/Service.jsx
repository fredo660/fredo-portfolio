import { Code, Map, BarChart3, Globe, Database, CheckCircle, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Code size={45} />,
    title: "Développement Frontend",
    desc: "Création d'interfaces modernes, réactives et performantes.",
    color: "from-blue-500",
    items: ["Interfaces dynamiques et interactives", "Design responsive (mobile & desktop)", "Expérience utilisateur optimisée"],
  },
  {
    icon: <Map size={45} />,
    title: "Développement Backend",
    desc: "Développement d'API, gestion de bases de données et logique serveur robuste",
    color: "from-purple-500",
    items: ["Création d'API performantes", "Gestion de l'authentification", "Sécurisation des données"],
  },
  {
    icon: <BarChart3 size={45} />,
    title: "Web Mapping / SIG",
    desc: "Conception de cartes interactives avec Leaflet, GeoServer et données géospatiales.",
    color: "from-pink-500",
    items: ["Création de cartes interactives", "Intégration de données géographiques", "Analyse spatiale"],
  },
  {
    icon: <Globe size={45} />,
    title: "Data Visualisation",
    desc: "Analyse et visualisation de données pour l'aide à la décision.",
    color: "from-green-500",
    items: ["Visualisation de données", "Analyse pour la prise de décision", "Création de tableaux de bord"],
  },
  {
    icon: <Database size={45} />,
    title: "Base de Données",
    desc: "Conception et gestion de bases de données (MySQL, PostgreSQL).",
    color: "from-yellow-400",
    items: ["Structuration des données", "Optimisation des requêtes", "Gestion des relations"],
  },
];

export default function Services() {
  return (
    <section id="services" className="p-10 bg-gray-50 dark:bg-gray-950 flex flex-col items-center gap-10 transition-colors duration-300">

      {/* TITRE */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 px-6 py-2 rounded-full border border-blue-500/40 text-blue-500 dark:text-blue-400 text-sm bg-blue-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-105 transition-all duration-300">
          <Sparkles size={16} className="animate-pulse" />
          Services
        </div>
        
        <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
          Des solutions modernes adaptées à vos besoins digitaux et géospatiaux
        </p>
      </div>

      {/* CARTES */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {services.map((s, i) => (
          <div key={i} className={`group relative p-[2px] rounded-xl bg-gradient-to-r ${s.color}`}>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center backdrop-blur-md group-hover:bg-gray-50 dark:group-hover:bg-gray-800 transition h-full">

              <div className="mx-auto text-gray-700 dark:text-white mb-4 group-hover:scale-110 transition w-fit">
                {s.icon}
              </div>

              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-3">
                {s.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">
                {s.desc}
              </p>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-4 opacity-60" />

              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-300">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500 dark:text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}