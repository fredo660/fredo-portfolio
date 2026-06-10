import { Download, Send, MapPinned, ChevronDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-4 sm:px-6 pt-24 sm:pt-28 overflow-hidden relative transition-colors duration-300"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* LEFT */}
        <div className="flex flex-col items-start text-left order-1 lg:order-1">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/40 text-blue-500 dark:text-blue-400 text-xs sm:text-sm bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.3)] animate-pulse mb-5">
            <MapPinned size={14} />
            Disponible pour des projets
          </div>

          {/* Titre */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white mb-3">
            Salut, je suis{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              <br />Fredo RANDRIANARISON
            </span>
          </h1>

          {/* Animation */}
          <div className="h-9 sm:h-10 mb-2">
            <TypeAnimation
              sequence={[
                "Développeur Full Stack", 2000,
                "Développeur Web SIG", 2000,
                "Spécialiste Cartographie Interactive", 2000,
                "Data Scientist / IA", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-lg sm:text-xl md:text-2xl font-bold text-violet-500 dark:text-violet-300"
            />
          </div>

          {/* Description */}
          <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
  Développeur Full Stack spécialisé en développement web, analyse et
  visualisation de données ainsi qu’en cartographie interactive.
  Master 2 en Informatique - l’Université de Fianarantsoa.
</p>

          {/* Boutons */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300"
            >
              <Send size={15} />
              Voir mes projets
            </a>
            <a
              href="/RANDRIANARISON Nomenjanahary Fredo.pdf"
              download
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900/70 text-zinc-700 dark:text-gray-300 text-sm hover:border-blue-500 hover:text-blue-500 hover:scale-105 transition-all duration-300"
            >
              <Download size={15} />
              Télécharger CV
            </a>
          </div>

          {/* Stats */}
          <div className="mt-8 flex gap-5 sm:gap-8">
            <div className="text-center">
              <p className="text-2xl font-extrabold text-gray-900 dark:text-white">4+</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Projets réalisés</p>
            </div>
            <div className="w-px bg-zinc-200 dark:bg-zinc-800" />
            <div className="text-center">
              <p className="text-2xl font-extrabold text-gray-900 dark:text-white">3</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Stages effectués</p>
            </div>
            <div className="w-px bg-zinc-200 dark:bg-zinc-800" />
            <div className="text-center">
              <p className="text-2xl font-extrabold text-gray-900 dark:text-white">M2</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Niveau d'études</p>
            </div>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="flex justify-center lg:justify-end order-2 lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-2xl opacity-20 dark:opacity-30 animate-pulse" />

            <div className="relative bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-[32px] p-2 backdrop-blur-xl">
              <img
                src="images/b14793be-28ee-4100-939f-52a98fad94f4.jpg"
                alt="Fredo RANDRIANARISON"
                className="w-[160px] h-[200px] sm:w-[210px] sm:h-[260px] md:w-[260px] md:h-[320px] lg:w-[300px] lg:h-[370px] rounded-[26px] object-cover object-top"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg animate-bounce">
              
              <span className="text-gray-400 dark:text-gray-500 text-xs">Full Stack Developer</span>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll icon */}
      <a href="#about" className="absolute bottom-6 text-gray-400 dark:text-gray-500 animate-bounce">
        <ChevronDown size={30} />
      </a>
    </section>
  );
}