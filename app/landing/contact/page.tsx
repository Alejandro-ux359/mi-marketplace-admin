// app/contacto/page.tsx
"use client";

import { useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

// Redes sociales con íconos reales
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío
    setTimeout(() => {
      console.log("Formulario enviado:", formData);
      setIsSubmitting(false);
      setSubmitStatus("success");

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          asunto: "",
          mensaje: "",
        });
      }, 3000);
    }, 1500);
  };

  const canalesContacto = [
    {
      icon: <EmailIcon className="h-8 w-8" />,
      titulo: "Correo Electrónico",
      detalles: ["soporte@renshamarket.com"],
      color: "bg-red-50 text-red-600",
      delay: "0ms",
    },
    {
      icon: <SupportAgentIcon className="h-8 w-8" />,
      titulo: "Asistencia",
      detalles: ["+1 (234) 567-8901"],
      color: "bg-blue-50 text-blue-600",
      delay: "100ms",
    },
    {
      icon: <AccessTimeIcon className="h-8 w-8" />,
      titulo: "Horarios",
      detalles: ["Lunes a Viernes: 9:00 - 18:00", "Sábados: 10:00 - 14:00"],
      color: "bg-purple-50 text-purple-600",
      delay: "200ms",
    },
  ];

  const departamentos = [
    "Soporte Técnico",
    "Ventas y Onboarding",
    "Facturación y Pagos",
    "Marketing y Colaboraciones",
    "Desarrollo de Negocios",
  ];

  const redesSociales = [
    {
      icon: <FacebookIcon className="h-6 w-6" />,
      nombre: "Facebook",
      url: "#",
      color: "hover:bg-blue-100 hover:text-blue-600",
      bgColor: "bg-blue-50 text-blue-600",
    },
    {
      icon: <InstagramIcon className="h-6 w-6" />,
      nombre: "Instagram",
      url: "#",
      color: "hover:bg-pink-100 hover:text-pink-600",
      bgColor: "bg-pink-50 text-pink-600",
    },
    {
      icon: <XIcon className="h-6 w-6" />,
      nombre: "X (Twitter)",
      url: "#",
      color: "hover:bg-gray-100 hover:text-gray-800",
      bgColor: "bg-gray-50 text-gray-800",
    },
    {
      icon: <LinkedInIcon className="h-6 w-6" />,
      nombre: "LinkedIn",
      url: "#",
      color: "hover:bg-blue-100 hover:text-blue-700",
      bgColor: "bg-blue-50 text-blue-700",
    },
    {
      icon: <YouTubeIcon className="h-6 w-6" />,
      nombre: "YouTube",
      url: "#",
      color: "hover:bg-red-100 hover:text-red-600",
      bgColor: "bg-red-50 text-red-600",
    },
  ];

  const preguntasFrecuentes = [
    {
      pregunta: "¿Cuál es el tiempo de respuesta promedio?",
      respuesta:
        "Respondemos todas las consultas en menos de 24 horas hábiles. Para casos urgentes, tenemos un canal prioritario disponible.",
    },
    {
      pregunta: "¿Ofrecen soporte 24/7?",
      respuesta:
        "Sí, nuestro soporte técnico está disponible 24/7 para emergencias del sistema. El soporte general opera de 9:00 a 18:00 de lunes a viernes.",
    },
    {
      pregunta: "¿Hablan otros idiomas?",
      respuesta:
        "Ofrecemos soporte en español, inglés y portugués. Nuestro equipo es multicultural para atender mejor a nuestra comunidad global.",
    },
    {
      pregunta: "¿Cómo puedo convertirme en vendedor?",
      respuesta:
        "Simplemente completa nuestro formulario de registro, verifica tu cuenta y podrás comenzar a vender en menos de 24 horas. El proceso es completamente gratuito.",
    },
    {
      pregunta: "¿Qué comisiones cobran?",
      respuesta:
        "Actualmente ofrecemos 0% de comisión para vendedores fundadores por los primeros 6 meses. Después, aplicamos una comisión competitiva del 5-10% dependiendo del producto.",
    },
    {
      pregunta: "¿Cómo protegen mis datos personales?",
      respuesta:
        "Implementamos cifrado de extremo a extremo, cumplimos con las normativas de protección de datos y nunca compartimos tu información con terceros sin tu consentimiento.",
    },
    {
      pregunta: "¿Puedo vender productos internacionalmente?",
      respuesta:
        "Sí, nuestra plataforma permite ventas internacionales. Te ayudamos con la logística, aduanas y pagos internacionales para que puedas expandir tu negocio.",
    },
    {
      pregunta: "¿Qué métodos de pago aceptan?",
      respuesta:
        "Aceptamos tarjetas de crédito/débito, PayPal, transferencias bancarias y criptomonedas. Estamos constantemente añadiendo más opciones de pago.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white pt-16">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Estamos aquí para ayudarte. ¡Hablemos sobre cómo podemos impulsar
              tu negocio!
            </p>
          </div>
        </div>
      </div>

      {/* Canales de Contacto - Centradas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
            {canalesContacto.map((canal, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: canal.delay }}
              >
                <div
                  className={`${canal.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}
                >
                  {canal.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">
                  {canal.titulo}
                </h3>
                <ul className="space-y-2 text-center">
                  {canal.detalles.map((detalle, i) => (
                    <li key={i} className="text-gray-600">
                      {detalle}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Formulario */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <EmailIcon className="h-8 w-8 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Envíanos un mensaje
                  </h2>
                  <p className="text-gray-600">
                    Te responderemos en menos de 24 horas
                  </p>
                </div>
              </div>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <svg
                        className="h-5 w-5 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">
                        ¡Mensaje enviado exitosamente!
                      </p>
                      <p className="mt-1 text-sm">
                        Nos pondremos en contacto contigo pronto.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
                  Hubo un error al enviar el mensaje. Por favor, inténtalo de
                  nuevo.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto *
                    </label>
                    <select
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white transition"
                    >
                      <option value="">Selecciona un asunto</option>
                      {departamentos.map((depto, index) => (
                        <option key={index} value={depto}>
                          {depto}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition"
                    placeholder="Describe cómo podemos ayudarte..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    "Enviar mensaje"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Información Adicional */}
          <div className="space-y-8 h-full">
            {/* FAQ Ampliada */}
            <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-8 border border-indigo-100 h-160 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-600 p-2 rounded-lg">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Preguntas frecuentes
                </h3>
              </div>

              <div className="space-y-4 overflow-y-auto flex-1 pr-2">
                {preguntasFrecuentes.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-white rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors"
                  >
                    <summary className="flex justify-between items-center cursor-pointer text-gray-800 font-medium hover:text-indigo-700 transition-colors">
                      <span className="pr-4">{faq.pregunta}</span>
                      <span className="text-indigo-600 transition-transform duration-300 group-open:rotate-180 shrink-0">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-4 pl-4 border-l-2 border-indigo-200">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.respuesta}
                      </p>
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-indigo-200">
                <p className="text-sm text-gray-600 text-center">
                  ¿No encuentras tu pregunta?{" "}
                  <a
                    href="#"
                    className="text-indigo-600 font-medium hover:text-indigo-800"
                  >
                    Ver todas las FAQ
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 REDES SOCIALES  */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-linear-to-r from-indigo-500 to-purple-500 p-2 rounded-lg" />
              <h3 className="text-2xl font-bold text-gray-900">
                Síguenos en redes
              </h3>
            </div>

            <p className="text-gray-600 mb-6 text-center">
              Mantente al día con nuestras últimas noticias, consejos y ofertas
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
              {redesSociales.map((red, index) => (
                <a
                  key={index}
                  href={red.url}
                  className={`${red.bgColor} ${red.color} rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className="mb-2 text-2xl">{red.icon}</div>
                  <span className="text-xs font-medium">{red.nombre}</span>
                </a>
              ))}
            </div>

            <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">
                  #RenshaMarket
                </span>{" "}
                — Comparte tu experiencia con nosotros
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
