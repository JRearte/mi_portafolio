import { useState } from "react";
import emailjs from "emailjs-com";
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRM_ID,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).catch(() => { });

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_DEV_ID,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        toast.success("Mensaje enviado correctamente", { theme: "dark" });
        form.reset();
      })
      .catch(() => {
        toast.error("Error al enviar mensaje", { theme: "dark" });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="formulario"
      className="min-h-screen flex items-center px-4 py-20 text-white"
    >
      <ToastContainer position="bottom-right" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto / CTA */}
        <div className="space-y-6">
          <h2 className="
              flex items-center justify-center md:justify-start
              gap-3
              text-4xl font-doto font-bold
              text-center md:text-left
              drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]
            ">
            Hablemos
          </h2>


          <p className="font-ibm-plex-mono text-lg text-gray-300 leading-relaxed text-justify">
            Si tenés una idea, un proyecto o necesitás ayuda técnica,
            escribime. Me interesa trabajar en soluciones reales,
            bien pensadas y mantenibles.
          </p>


          <p className="text-sm text-gray-400 font-ibm-plex-mono">
            Respondo normalmente en menos de 24hs.
          </p>
        </div>

        {/* Formulario */}
        <form
          onSubmit={sendEmail}
          className="bg-stone-900/80 backdrop-blur-md p-8 rounded-2xl
                     shadow-xl border border-white/10 flex flex-col gap-6"
        >
          {/* Nombre */}
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
              className="w-full pl-10 p-3 rounded-xl bg-stone-800/70
                         placeholder-gray-400 focus:outline-none
                         focus:ring-2 focus:ring-white/40"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              required
              className="w-full pl-10 p-3 rounded-xl bg-stone-800/70
                         placeholder-gray-400 focus:outline-none
                         focus:ring-2 focus:ring-white/40"
            />
          </div>

          {/* Mensaje */}
          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
            <textarea
              name="message"
              rows={5}
              placeholder="Escribí tu mensaje..."
              required
              className="w-full pl-10 pt-3 rounded-xl bg-stone-800/70
                         placeholder-gray-400 focus:outline-none
                         focus:ring-2 focus:ring-white/40 resize-none"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2
                       bg-white/10 hover:bg-white text-white
                       hover:text-stone-950 transition
                       py-3 rounded-xl font-semibold
                       disabled:opacity-50 border border-white/20 cursor-pointer"
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
            {!loading && <FiSend />}
          </button>
        </form>
      </div>
    </section>
  );
}
