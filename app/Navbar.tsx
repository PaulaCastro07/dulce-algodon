"use client";

import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">

      {/* ICONO HOJITA MINIMALISTA */}
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ece2] border border-[#5a3e29]/40">
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
        <span className="font-title text-lg md:text-xl text-[#5a3e29]">
          Dulce Algodón
        </span>
        <span className="text-[11px] md:text-xs tracking-wide text-[#8a5d3d]">
          ropa para bebés
        </span>
      </div>

    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="w-full border-b border-[#5a3e29]/25 bg-[#bbc191]/95 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Logo />

        {/* LINKS */}
        <div className="flex items-center gap-6 text-sm font-medium text-[#5a3e29]">
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

      </nav>
    </header>
  );
}
