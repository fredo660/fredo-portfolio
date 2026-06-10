import { Code, Server, Database, Wrench, Map, Brain, Sparkles } from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: <Code size={36} className="text-blue-500 dark:text-blue-400 mb-3" />,
    gradient: "from-blue-500 to-cyan-400",
    color: "blue",
    items: ["ReactJs", "NextJS", "Tailwind CSS", "Framer Motion", "Material UI", "JavaScript"],
  },
  {
    title: "Backend",
    icon: <Server size={36} className="text-purple-500 dark:text-purple-400 mb-3" />,
    gradient: "from-purple-500 to-pink-500",
    color: "purple",
    items: ["Node.js", "Express.js", "REST API", "JWT Auth", "Python"],
  },
  {
    title: "Base de Données",
    icon: <Database size={36} className="text-yellow-500 dark:text-yellow-400 mb-3" />,
    gradient: "from-yellow-400 to-orange-500",
    color: "yellow",
    items: ["MySQL", "PostgreSQL", "Supabase", "SQL"],
  },
  {
    title: "SIG / Web Mapping",
    icon: <Map size={36} className="text-green-500 dark:text-green-400 mb-3" />,
    gradient: "from-green-400 to-emerald-500",
    color: "green",
    items: ["Leaflet", "GeoServer", "QGIS", "GeoJSON"],
  },
  {
    title: "Data Science / IA",
    icon: <Brain size={36} className="text-teal-500 dark:text-teal-400 mb-3" />,
    gradient: "from-teal-400 to-cyan-500",
    color: "teal",
    items: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "NLP"],
  },
  {
    title: "Outils",
    icon: <Wrench size={36} className="text-gray-500 dark:text-gray-300 mb-3" />,
    gradient: "from-gray-500 to-gray-300",
    color: "gray",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
];

const badgeStyle = {
  blue:   "bg-blue-50   dark:bg-blue-500/10   text-blue-600   dark:text-blue-400   border-blue-200   dark:border-blue-500/20   hover:bg-blue-500   hover:text-white hover:border-blue-500",
  purple: "bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-500/20 hover:bg-purple-500 hover:text-white hover:border-purple-500",
  yellow: "bg-yellow-50 dark:bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-400/20 hover:bg-yellow-400 hover:text-black  hover:border-yellow-400",
  green:  "bg-green-50  dark:bg-green-400/10  text-green-600  dark:text-green-400  border-green-200  dark:border-green-400/20  hover:bg-green-500  hover:text-white hover:border-green-500",
  teal:   "bg-teal-50   dark:bg-teal-400/10   text-teal-600   dark:text-teal-400   border-teal-200   dark:border-teal-400/20   hover:bg-teal-500   hover:text-white hover:border-teal-500",
  gray:   "bg-gray-100  dark:bg-gray-400/10   text-gray-600   dark:text-gray-300   border-gray-200   dark:border-gray-400/20   hover:bg-gray-500   hover:text-white hover:border-gray-500",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        {/* Titre */}
        <div className="flex flex-col items-center gap-3 mb-14">
          <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-green-500/40 text-green-600 dark:text-green-400 text-sm bg-green-500/10 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            <Sparkles size={14} className="animate-pulse" />
            Compétences
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center">
            Technologies maîtrisées
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
            Stack technique en développement Full Stack, SIG et Data Science
          </p>
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative p-[1.5px] rounded-xl bg-gradient-to-r ${skill.gradient} hover:shadow-lg transition-all duration-300`}
            >
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl h-full hover:scale-[1.01] transition-transform duration-300">

                <div className="flex justify-center">{skill.icon}</div>

                <h3 className="text-gray-900 dark:text-white font-bold text-base text-center mb-1">
                  {skill.title}
                </h3>

                <div className="w-10 h-[1.5px] bg-gray-200 dark:bg-zinc-700 mx-auto mb-4" />

                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs rounded-full border ${badgeStyle[skill.color]} transition-all duration-200 cursor-default`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}