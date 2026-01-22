// app/sobre-nosotros/page.tsx
import Image from "next/image";

export default function SobreNosotrosPage() {
  // const teamMembers = [
  //   {
  //     name: "Alex Rodríguez",
  //     role: "CEO & Fundador",
  //     image: "/team/alex.jpg",
  //     description: "10+ años en e-commerce y tecnología",
  //   },
  //   {
  //     name: "María González",
  //     role: "Directora de Marketing",
  //     image: "/team/maria.jpg",
  //     description: "Especialista en crecimiento digital",
  //   },
  //   {
  //     name: "Carlos Mendoza",
  //     role: "CTO",
  //     image: "/team/carlos.jpg",
  //     description: "Experto en escalabilidad de plataformas",
  //   },
  //   {
  //     name: "Laura Fernández",
  //     role: "Directora de Soporte",
  //     image: "/team/laura.jpg",
  //     description: "Apasionada por la experiencia del cliente",
  //   },
  // ];

  const valores = [
    "Innovación constante",
    "Transparencia total",
    "Soporte excepcional",
    "Crecimiento conjunto",
    "Seguridad garantizada",
  ];

  // Función auxiliar para descripciones (puedes ajustarla)
  function getDescripcionValor(valor: string) {
    const descripciones: Record<string, string> = {
      "Innovación constante":
        "Siempre buscamos nuevas formas de mejorar tu experiencia de venta.",
      "Transparencia total":
        "Operamos con total claridad en comisiones y procesos.",
      "Soporte excepcional":
        "Estamos aquí para ayudarte en cada paso del camino.",
      "Crecimiento conjunto": "Tu éxito es nuestro éxito, crecemos juntos.",
      "Seguridad garantizada":
        "Protegemos cada transacción con los más altos estándares.",
      Transparencia: "Operamos con total claridad en comisiones y procesos.",
      Innovación: "Implementamos las últimas tecnologías para tu crecimiento.",
      Confianza: "Creemos en relaciones comerciales seguras y verificadas.",
      Comunidad: "Conectamos emprendedores para crecer juntos.",
      Simplicidad: "Interfaces intuitivas que facilitan cada transacción.",
    };

    return (
      descripciones[valor] || "Un pilar fundamental de nuestra plataforma."
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre RenshaMarket
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Revolucionando la forma en que los emprendedores venden en línea
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Por Qué Existimos
              </h2>

              {/* Encabezado con icono */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">💡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    La Frustración que Nos Motivó
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Descubrimos un problema real y construimos la solución
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 shrink-0">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold">
                      Negocios locales invisibles:
                    </span>{" "}
                    Productos y servicios de calidad que no llegaban a los
                    compradores que los buscaban.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 shrink-0">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold">
                      Consumidores frustrados:
                    </span>{" "}
                    Personas usando VPNs para comprar en el extranjero lo que ya
                    existía en su propia ciudad.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 shrink-0">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold">Nuestra solución:</span> Una
                    plataforma que conecta directamente emprendedores con
                    compradores locales, simplificando el comercio y potenciando
                    la economía regional.
                  </p>
                </div>
              </div>

              <div className="mt-10 p-6 bg-linear-to-r from-indigo-500 to-purple-500 rounded-2xl text-white">
                <p className="text-lg font-semibold text-center">
                  Hoy, estamos construyendo el puente digital que nuestra
                  comunidad necesitaba.
                </p>
              </div>
            </div>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/landing/diseñoVisual2.svg"
                alt="Equipo de RenshaMarket"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-indigo-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nuestra Misión
              </h3>
              <p className="text-gray-700">
                Empoderar a emprendedores y pequeñas empresas con herramientas
                profesionales de e-commerce, simplificando la venta en línea y
                eliminando barreras tecnológicas.
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nuestra Visión
              </h3>
              <p className="text-gray-700">
                Ser la plataforma líder en Latinoamérica para la creación y
                gestión de marketplaces, transformando la economía digital de la
                región para 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 md:py-28 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              Nuestra Filosofía
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Valores que{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                Nos Definen
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Creemos en construir algo más que una plataforma: una comunidad
              donde cada vendedor crece.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="group relative">
                {/* Tarjeta con efectos */}
                <div
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
                        border border-gray-100 group-hover:border-indigo-200
                        h-full flex flex-col"
                >
                  {/* Ícono decorativo */}
                  <div className="absolute -top-4 left-8">
                    <div
                      className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-500 to-purple-500 
                            flex items-center justify-center text-white font-bold text-lg
                            shadow-lg group-hover:scale-110 transition-transform duration-300"
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="mt-8 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">
                      {valor}
                    </h3>

                    {/* Línea decorativa */}
                    <div
                      className="w-12 h-1 bg-linear-to-r from-indigo-400 to-purple-400 rounded-full mb-4 
                            group-hover:w-16 transition-all duration-300"
                    ></div>

                    {/* Descripción dinámica según el valor */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {getDescripcionValor(valor)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Separador decorativo */}
          <div className="mt-20 pt-8 border-t border-gray-200 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-6 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </div>
            <p className="text-center text-gray-500 italic max-w-2xl mx-auto">
              Estos valores guían cada decisión que tomamos y cada función que
              construimos.
            </p>
          </div>
        </div>
      </section>

      {/* Equipo */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Conoce a Nuestro Equipo
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Un grupo apasionado de expertos en tecnología, marketing y comercio
            electrónico.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-xl transition"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-linear-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Pioneros */}
      <section className="py-20 bg-linear-to-br from-indigo-900 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            La Nueva Era del E-commerce
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Acabamos de empezar y ya estamos cambiando la forma en que las
            personas compran y venden online. Sé de los primeros en aprovechar
            esta oportunidad única.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-1">Sin</div>
              <div className="text-sm opacity-80">complicaciones</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-1">Con</div>
              <div className="text-sm opacity-80">visibilidad</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-1">Para</div>
              <div className="text-sm opacity-80">emprendedores</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-1">Hecho</div>
              <div className="text-sm opacity-80">con pasión</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/registro"
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition inline-block"
            >
              Abrir Mi Tienda
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
