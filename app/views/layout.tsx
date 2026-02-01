"use client";

import { useState } from "react";
import Menu from "@/components/landing/views/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Menu */}
      <Menu isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Contenido Principal - Se ajusta al ancho del menú */}
      <main
        className={`
        flex-1 transition-all duration-400 ease-in-out
        min-h-screen overflow-y-auto p-6
        ${isSidebarOpen ? "lg:ml-56" : "lg:ml-18"}
        w-full
      `}
      >
        {/* Header responsive para móviles */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <span className="ml-3 font-semibold text-lg">RenshaMarket</span>
        </div>

        {children}
      </main>
    </div>
  );
}
