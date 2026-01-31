"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const navItems = [
    { href: "/landing/home", label: "Inicio" },
    { href: "/landing/about", label: "Sobre Nosotros" },
    { href: "/landing/contact", label: "Contacto" },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              RenshaMarket
            </span>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2"
                >
                  <span
                    className={`
                    transition-colors duration-200
                    ${active ? "text-indigo-600 font-semibold" : "text-gray-600 hover:text-indigo-500"}
                  `}
                  >
                    {item.label}
                  </span>

                  {/* Indicador activo */}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-indigo-600 rounded-t-lg"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/auth/login"
              className="text-gray-600 hover:text-indigo-600 font-medium px-3 py-1 transition"
            >
              Ingresar
            </Link>
            <Link
              href="/auth/registre"
              className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 font-medium transition shadow-sm"
            >
              Registrarse
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    block px-4 py-3 rounded-lg mx-2 transition
                    ${
                      active
                        ? "bg-indigo-50 text-indigo-600 border-l-4 border-indigo-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    }
                  `}
                >
                  {item.label}
                  {active && (
                    <span className="float-right mt-1 w-2 h-2 bg-indigo-600 rounded-full"></span>
                  )}
                </Link>
              );
            })}

            <div className="border-t pt-3 mt-3">
              <Link
                href="/auth/login"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 mx-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                Ingresar
              </Link>
              <Link
                href="/auth/registre"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 mx-2 mt-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white text-center rounded-lg hover:from-indigo-700 hover:to-purple-700"
              >
                Comenzar gratis
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
