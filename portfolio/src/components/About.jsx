import { Code, Map, BarChart3, User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="p-10 bg-white dark:bg-gray-950 flex flex-col items-center gap-10 transition-colors duration-300">

      {/* TITRE HAUT */}
      <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
        <User className="text-blue-500 dark:text-blue-400" size={20} />
        <h2 className="text-gray-800 dark:text-white font-semibold tracking-wide">
          Présentation
        </h2>
      </div>

      {/* TITRE GRAND */}
      <div className="relative mt-1 px-6 py-3">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white relative z-10">
          À propos de moi
        </h2>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-60 h-20 bg-gradient-to-r from-blue-700 to-purple-500 blur-3xl opacity-20 dark:opacity-40" />
        </div>
      </div>

      {/* CARTE PRINCIPALE */}
      <div className="relative max-w-5xl w-full p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center shadow-xl backdrop-blur-md">
          <p className="text-gray-800 dark:text-white text-xl leading-relaxed">
            Je suis{" "}
            <span className="font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              RANDRIANARISON Nomenjanahary Fredo
            </span>
            , développeur Full Stack spécialisé dans la création d'applications web et de solutions géospatiales.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto my-6 rounded-full" />
          <p className="text-gray-500 dark:text-gray-300 text-lg italic">
            Spécialisé en Systèmes d'Information Géographique (SIG),
            cartographie interactive et visualisation de données.
          </p>
        </div>
      </div>

      {/* 3 CARTES */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">

        {/* Carte 1 */}
        <div className="group relative p-[2px] rounded-xl bg-gray-200 dark:bg-gray-800 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center transition-all duration-300 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 h-full">
            <Code size={40} className="mx-auto text-blue-500 dark:text-blue-400 mb-4 group-hover:text-cyan-500 transition" />
            <h3 className="text-gray-900 dark:text-white text-lg font-bold mb-2">
              Développement Full Stack
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Création d'applications web complètes avec React, Node.js et bases de données.
            </p>
          </div>
        </div>

        {/* Carte 2 */}
        <div className="group relative p-[2px] rounded-xl bg-gray-200 dark:bg-gray-800 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center transition-all duration-300 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 h-full">
            <Map size={40} className="mx-auto text-purple-500 dark:text-purple-400 mb-4 group-hover:text-pink-400 transition" />
            <h3 className="text-gray-900 dark:text-white text-lg font-bold mb-2">
              Web Mapping / SIG
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Conception de cartes interactives avec Leaflet, GeoServer et données géospatiales.
            </p>
          </div>
        </div>

        {/* Carte 3 */}
        <div className="group relative p-[2px] rounded-xl bg-gray-200 dark:bg-gray-800 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center transition-all duration-300 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 h-full">
            <BarChart3 size={40} className="mx-auto text-pink-500 dark:text-pink-400 mb-4 group-hover:text-yellow-400 transition" />
            <h3 className="text-gray-900 dark:text-white text-lg font-bold mb-2">
              Data & Visualisation
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Analyse et visualisation de données pour l'aide à la décision.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}