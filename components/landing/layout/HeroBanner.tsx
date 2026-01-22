"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section
      id="shopnow"
      className="relative flex items-center pt-16"
      style={{
        minHeight: "100vh",
        paddingBottom: "100px",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 70%, #475569 100%)",
      }}
    >
      {/* Overlay adicional para suavizar */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-900/20 via-transparent to-purple-900/10"></div>

      {/* Patrón de puntos sutiles */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-linear(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full py-12">
        {/* TEXTO */}
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Vende tus productos
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
              en tu propio marketplace
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-xl">
            Crea tu tienda, gestiona pedidos y llega a más clientes desde una
            sola plataforma segura y profesional.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/register"
              className="px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Comenzar a vender
            </Link>

            <Link
              href="#about"
              className="px-6 py-3 border border-slate-400/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Saber más
            </Link>
          </div>
        </div>

        {/* MOCKUP */}
        <div className="relative flex justify-center">
          <div className="relative">
            {/* Efecto de brillo detrás */}
            <div className="absolute -inset-4 bg-linear-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>

            {/* Contenedor de la imagen con bordes redondeados */}
            <div className="relative bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
              <Image
                src="/mockup/shop.webp"
                alt="Marketplace Dashboard"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Elementos decorativos flotantes */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-500/30 rounded-full blur-md"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500/30 rounded-full blur-md"></div>
          </div>
        </div>
      </div>

      {/* Olas decorativas en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          className="relative block w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        ></svg>
      </div>
    </section>
  );
}
