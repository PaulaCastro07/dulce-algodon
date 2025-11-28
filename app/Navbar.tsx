"use client";

import { useState } from "react";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-3">
      {/* ICONO HOJITA MINIMALISTA */}
      <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#f1ece2] border border-[#5a3e29]/40">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5a3e29"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 21c10 0 14-9 14-15-4.5 0-9 2-12 6-2 3-2 6-2 9z" />
        </svg>
      </div>

      {/* TEXTO DEL LOGO */}
      <div className="flex flex-col leading-tight">
        <span className="font-title text-base sm:text-lg md:text-xl text-[#5a3e29]">
          Dulce Algodón
        </span>
        <span className="hidden xs:block text-[10px] sm:text-[11px] md:text-xs tracking-wide text-[#8a5d3d]">
          ropa para bebés
        </span>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="w-full border-b border-[#5a3e29]/25 bg-[#bbc191]/95 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Logo />

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#5a3e29]">
          <Link href="/catalogo" className="hover:text-[#8a5d3d] transition">
            Catálogo
          </Link>
          <Link href="/sobrenosotros" className="hover:text-[#8a5d3d] transition">
            Sobre nosotros
          </Link>
          <Link href="/contacto" className="hover:text-[#8a5d3d] transition">
            Contacto
          </Link>
        </div>

        {/* BOTÓN HAMBURGUESA MOBILE (ANIMADO) */}
        <button
          className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-full border border-[#5a3e29]/40 bg-[#f1ece2]/70 transition"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          {/* LÍNEA SUPERIOR */}
          <span
            className={`absolute block h-[2px] w-5 bg-[#5a3e29] rounded-full transition-all duration-300
              ${open ? "rotate-45 translate-y-[2px]" : "-translate-y-2"}
            `}
          />

          {/* LÍNEA DEL MEDIO */}
          <span
            className={`absolute block h-[2px] w-5 bg-[#5a3e29] rounded-full transition-all duration-300
              ${open ? "opacity-0" : "opacity-100"}
            `}
          />

          {/* LÍNEA INFERIOR */}
          <span
            className={`absolute block h-[2px] w-5 bg-[#5a3e29] rounded-full transition-all duration-300
              ${open ? "-rotate-45 -translate-y-[2px]" : "translate-y-2"}
            `}
          />
        </button>
      </nav>

      {/* MENÚ MOBILE DESPLEGABLE */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 pb-3 pt-1 flex flex-col gap-2 text-sm font-medium text-[#5a3e29] bg-[#bbc191]/95 border-t border-[#5a3e29]/15">
          <Link
            href="/catalogo"
            className="py-1 hover:text-[#8a5d3d] transition"
            onClick={closeMenu}
          >
            Catálogo
          </Link>
          <Link
            href="/sobrenosotros"
            className="py-1 hover:text-[#8a5d3d] transition"
            onClick={closeMenu}
          >
            Sobre nosotros
          </Link>
          <Link
            href="/contacto"
            className="py-1 hover:text-[#8a5d3d] transition"
            onClick={closeMenu}
          >
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
}
