import { useState } from "react";
import { Mail, Send, MessageCircle } from "lucide-react";
import { FaGithub, FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  // ===== HANDLE CHANGE =====
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ===== SEND EMAIL =====
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_6i1dze7",       // Service ID
      "template_kbjrhws",      // Template ID
      formData,
      "jysPkGYtZUuHZYv15"      // Public Key
    )
    .then(() => {
      setStatus("✅ Message envoyé avec succès !");
      setFormData({ user_email: "", message: "" });
    })
    .catch(() => {
      setStatus("❌ Erreur lors de l'envoi");
    });
  };

  return (
    <section id="contact"
     className="bg-white dark:bg-gray-950 p-10 flex flex-col items-center gap-12">

      {/* ===== TITRE ===== */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 px-6 py-2 rounded-full border border-pink-500 text-pink-400 text-sm bg-pink-500/10 shadow-[0_0_15px_rgba(236,72,153,0.5)]">
          <Mail size={16} className="animate-pulse" />
          Contact
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
          N'hésitez pas à me contacter pour vos projets ou collaborations
        </p>
      </div>

      {/* ===== FORM ===== */}
      <div className="relative w-full max-w-xl p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">

        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl backdrop-blur-md">

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* EMAIL */}
            <input
              type="email"
              name="name"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Votre nom"
              required
              className="p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-700 focus:outline-none focus:border-pink-500 transition"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Votre message..."
              required
              className="p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-700 focus:outline-none focus:border-pink-500 transition"
            ></textarea>

            {/* BOUTON */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition"
            >
              <Send size={18} />
              Envoyer
            </button>

            {/* STATUS */}
            {status && (
              <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2">
                {status}
              </p>
            )}

          </form>

        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <div className="flex flex-col items-center gap-4 mt-10">

        <div className="flex gap-6">

          {/* GitHub */}
          <a href="https://github.com/fredo660" target="_blank" rel="noreferrer"
            className="p-3 rounded-full bg-gray-800 text-white hover:bg-white hover:text-black hover:scale-110 transition">
            <FaGithub size={24} />
          </a>

          {/* Facebook */}
          <a href="#" target="_blank" rel="noreferrer"
            className="p-3 rounded-full bg-gray-800 text-blue-400 hover:bg-blue-500 hover:text-white hover:scale-110 transition">
            <FaFacebook size={24} />
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/261344866015" target="_blank" rel="noreferrer"
            className="p-3 rounded-full bg-gray-800 text-green-400 hover:bg-green-500 hover:text-white hover:scale-110 transition">
            <MessageCircle />
          </a>

        </div>

        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} RANDRIANARISON Nomenjanahary Fredo — Tous droits réservés
        </p>

      </div>

    </section>
  );
}