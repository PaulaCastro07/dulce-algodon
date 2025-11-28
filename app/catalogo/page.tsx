"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type TipoProducto = "todos" | "body" | "mameluco" | "conjunto" | "accesorio";

const productos = [
  {
    id: 1,
    nombre: "Body algodón neutro",
    precio: "$12.500",
    talles: ["RN", "3M", "6M"],
    descripcion: "Body suave en tono arena, ideal para el uso diario.",
    imagen: "/bebe3.jpg",
    tipo: "body" as TipoProducto,
    nuevo: true,
  },
  {
    id: 2,
    nombre: "Mameluco beige suave",
    precio: "$18.900",
    talles: ["3M", "6M", "9M", "12M"],
    descripcion: "Mameluco calentito y cómodo para días frescos.",
    imagen: "/bebe3.jpg",
    tipo: "mameluco" as TipoProducto,
    nuevo: false,
  },
  {
    id: 3,
    nombre: "Conjunto neutro premium",
    precio: "$15.500",
    talles: ["RN", "3M", "6M"],
    descripcion: "Body + pantaloncito combinados en tonos neutros.",
    imagen: "/bebe3.jpg",
    tipo: "conjunto" as TipoProducto,
    nuevo: true,
  },
  {
    id: 4,
    nombre: "Gorrito + mitones",
    precio: "$8.000",
    talles: ["Talle único"],
    descripcion: "Set suave para abrigar cabecita y manos.",
    imagen: "/bebe3.jpg",
    tipo: "accesorio" as TipoProducto,
    nuevo: false,
  },
];

const tipos: { id: TipoProducto; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "body", label: "Bodies" },
  { id: "mameluco", label: "Mamelucos" },
  { id: "conjunto", label: "Conjuntos" },
  { id: "accesorio", label: "Accesorios" },
];

const tallesFiltro = ["Todos", "RN", "3M", "6M", "9M", "12M", "Talle único"];

export default function CatalogoPage() {
  const [filtroTipo, setFiltroTipo] = useState<TipoProducto>("todos");
  const [filtroTalle, setFiltroTalle] = useState<string>("Todos");

  const filtrados = productos.filter((p) => {
    const coincideTipo = filtroTipo === "todos" || p.tipo === filtroTipo;
    const coincideTalle =
      filtroTalle === "Todos" || p.talles.includes(filtroTalle);
    return coincideTipo && coincideTalle;
  });

  return (
    <main className="bg-[#faf7f2] text-[#5a3e29] px-4 md:px-6 py-10 md:py-16">
      {/* PANEL CENTRAL QUE ORDENA TODO */}
      <section className="max-w-6xl mx-auto bg-white/80 rounded-3xl border border-[#e6dfd5] shadow-sm px-5 md:px-8 py-8 md:py-10">
        {/* CABECERA */}
        <header className="mb-6 md:mb-8">
          <h1 className="font-title text-3xl md:text-4xl mb-2">Catálogo</h1>
          <p className="text-sm md:text-base text-[#8a5d3d] max-w-2xl">
            Prendas suaves en tonos neutros y cálidos, pensadas para acompañar
            los primeros meses del bebé con comodidad y estilo.
          </p>
        </header>

        {/* FILTROS COMPACTOS Y ORDENADOS */}
        <div className="mb-6 md:mb-8">
          {/* Tipos */}
          <div className="flex flex-wrap gap-2 mb-2">
            {tipos.map((t) => (
              <button
                key={t.id}
                onClick={() => setFiltroTipo(t.id)}
                className={`px-3 py-1 rounded-full text-[11px] border transition 
                  ${
                    filtroTipo === t.id
                      ? "bg-[#8a5d3d] text-[#faf7f2] border-[#8a5d3d]"
                      : "border-[#d8cfc4] text-[#5a3e29] hover:border-[#8a5d3d]/50"
                  }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="w-full h-px bg-[#e6ded4] mb-2" />

          {/* Talles */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[10px] text-[#8a5d3d] mr-1">Talle:</span>
            {tallesFiltro.map((t) => (
              <button
                key={t}
                onClick={() => setFiltroTalle(t)}
                className={`px-3 py-1 rounded-full text-[10px] border transition
                  ${
                    filtroTalle === t
                      ? "bg-[#bbc191] text-[#5a3e29] border-[#bbc191]"
                      : "text-[#5a3e29] border-[#d8cfc4] hover:border-[#8a5d3d]/40"
                  }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* GRID DE PRODUCTOS */}
        <div className="grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-2xl border border-[#e9e3db] shadow-[0_4px_12px_rgba(0,0,0,0.04)]
                         hover:shadow-[0_10px_22px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:-rotate-[0.3deg]
                         transition-all duration-200 p-3 flex flex-col"
            >
              {/* Imagen */}
              <div className="relative w-full h-32 rounded-xl overflow-hidden bg-[#f3ebe2]">
                <Image
                  src={p.imagen}
                  alt={p.nombre}
                  fill
                  className="object-cover"
                />
                {p.nuevo && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#bbc191] text-[#5a3e29] shadow-sm">
                    Nuevo
                  </span>
                )}
              </div>

              {/* Contenido */}
              <div className="mt-3 flex flex-col gap-1 flex-1">
                <h3 className="font-title text-[14px] leading-snug">
                  {p.nombre}
                </h3>

                <p className="text-[11px] text-[#8a5d3d]">
                  Talles: {p.talles.join(" · ")}
                </p>

                <p className="text-[11px] text-[#8a5d3d] line-clamp-2">
                  {p.descripcion}
                </p>

                <div className="mt-1 inline-flex items-center gap-1">
                  <span className="text-[10px] uppercase tracking-wide text-[#8a5d3d]">
                    Precio
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#f1ece2] text-[12px] font-semibold text-[#677423]">
                    {p.precio}
                  </span>
                </div>

                <div className="mt-3">
                  <Link href={`/producto/${p.id}`}>
                    <button
                      className="w-full text-[11px] py-2 rounded-full bg-[#8a5d3d] text-[#faf7f2]
                                 hover:bg-[#5a3e29] transition"
                    >
                      Ver más
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {filtrados.length === 0 && (
            <p className="text-sm text-[#8a5d3d] col-span-full">
              No encontramos prendas con esos filtros. Probá cambiarlos 💛
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
