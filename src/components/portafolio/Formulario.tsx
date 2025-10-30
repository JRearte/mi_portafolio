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
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    emailjs.sendForm(
      serviceID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRM_ID as string,
      form,
      publicKey
    ).catch(err => console.error("Error al enviar confirmación:", err));

    emailjs.sendForm(
      serviceID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_DEV_ID as string,
      form,
      publicKey
    )
    .then(() => {
      toast.success("Mensaje enviado correctamente", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
      });
      form.reset();
      setLoading(false);
    })
    .catch(() => {
      toast.error("Error al enviar mensaje", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
      });
      setLoading(false);
    });
  };

  return (
    <>
    <section id="formulario" className="select-none text-white pt-16 pb-8 px-4 py-20">
      <ToastContainer />

      <form
        onSubmit={sendEmail}
        className="max-w-lg mx-auto p-8 bg-stone-900/80 backdrop-blur-md rounded-2xl shadow-xl flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-gray-50 text-center">Contáctame</h2>

        {/* Nombre */}
        <div className="relative">
          <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="w-full pl-10 p-3 rounded-xl bg-stone-800/60 text-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full pl-10 p-3 rounded-xl bg-stone-800/60 text-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mensaje */}
        <div className="relative">
          <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
          <textarea
            name="message"
            placeholder="Escribe tu mensaje..."
            rows={6}
            required
            className="w-full pl-10 pt-3 rounded-xl bg-stone-800/60 text-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Botón */}
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 bg-stone-600 hover:bg-stone-50 transition text-white font-semibold py-3 rounded-xl disabled:opacity-50 border border-white/20 hover:text-stone-950"
        >
          {loading ? "Enviando..." : "Enviar"}
          {!loading && <FiSend />}
        </button>
      </form>
      </section>
    </>
  );
}
