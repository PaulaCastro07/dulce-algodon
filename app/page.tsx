// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-[#f1ece2]">

      {/* HERO BANNER LLAMATIVO */}
      {/* HERO BANNER */}
{/* HERO BANNER */}
<section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden flex items-center">

  {/* Imagen de fondo */}
  <Image
    src="/bebe3.jpg"
    alt="Bebé banner"
    fill
    className="object-cover brightness-[0.50]"
    priority
  />

  {/* Gradiente suave a la derecha para leer el texto */}
  <div className="absolute inset-0 bg-gradient-to-l from-[#5a3e29]/55 via-transparent to-transparent" />

  {/* CONTENIDO */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex justify-end items-center">

    {/* TEXTOS ALINEADOS A LA IZQUIERDA, UBICADOS A LA DERECHA */}
    <div className="max-w-md text-left">

      {/* Etiqueta */}
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#bbc191] text-[#5a3e29] text-[11px] font-medium shadow-sm">
        ✨ Nueva colección · Neutros
      </span>

      {/* TITULO MÁS PEQUEÑO */}
      <h1 className="font-title text-3xl md:text-4xl font-semibold text-[#f1ece2] mt-3 leading-snug drop-shadow">
        Ropita suave y cálida
        <br />
        <span className="text-[#bbc191]">
          para sus primeros meses
        </span>
      </h1>

      {/* DESCRIPCIÓN MÁS CHICA */}
      <p className="text-sm md:text-base text-[#f1ece2] mt-3 opacity-95 max-w-sm">
        Prendas en tonos neutros, cómodas y combinables.
        Diseñadas para abrazos, siestas largas y fotos que vas a querer guardar siempre.
      </p>

      {/* BOTONES */}
      <div className="mt-5 flex gap-3">
        <Link
          href="/catalogo"
          className="px-5 py-2 rounded-full bg-[#8a5d3d] text-[#f1ece2] text-sm font-medium shadow-md hover:bg-[#5a3e29] transition"
        >
          Ver catálogo
        </Link>

        <Link
          href="/contacto"
          className="px-5 py-2 rounded-full border border-[#f1ece2]/60 text-[#f1ece2] text-sm font-medium hover:bg-[#f1ece2]/10 transition"
        >
          Hacer un pedido
        </Link>
      </div>
    </div>
  </div>
</section>




      {/* PRODUCTOS DESTACADOS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-[#5a3e29] mb-2">
          Productos destacados
        </h2>
        <p className="text-sm text-[#8a5d3d] mb-6">
          Algunas prendas ideales para regalar o armar la primera valijita del bebé.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* Producto 1 */}
          <article className="bg-white border border-[#bbc191] rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-md transition p-4">
            <Image
              src="/bebe3.jpg"
              alt="Body algodón neutro"
              width={400}
              height={400}
              className="rounded-lg object-cover mb-3"
            />
            <h3 className="text-sm font-semibold text-[#5a3e29]">
              Body algodón neutro
            </h3>
            <p className="text-xs text-[#8a5d3d]">Talles: RN – 6M</p>
            <p className="text-sm text-[#677423] font-bold mt-1">$12.500</p>
            <button className="mt-3 w-full text-xs px-3 py-2 rounded-full bg-[#8a5d3d] text-[#f1ece2] hover:bg-[#5a3e29] transition">
              Ver más
            </button>
          </article>

          {/* Producto 2 */}
          <article className="bg-white border border-[#bbc191] rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-md transition p-4">
            <Image
              src="/bebe3.jpg"
              alt="Mameluco suave"
              width={400}
              height={400}
              className="rounded-lg object-cover mb-3"
            />
            <h3 className="text-sm font-semibold text-[#5a3e29]">
              Mameluco suave
            </h3>
            <p className="text-xs text-[#8a5d3d]">Talles: 3M – 12M</p>
            <p className="text-sm text-[#677423] font-bold mt-1">$18.900</p>
            <button className="mt-3 w-full text-xs px-3 py-2 rounded-full bg-[#8a5d3d] text-[#f1ece2] hover:bg-[#5a3e29] transition">
              Ver más
            </button>
          </article>

          {/* Producto 3 */}
          <article className="bg-white border border-[#bbc191] rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-md transition p-4">
            <Image
              src="/bebe3.jpg"
              alt="Conjunto neutro"
              width={400}
              height={400}
              className="rounded-lg object-cover mb-3"
            />
            <h3 className="text-sm font-semibold text-[#5a3e29]">
              Conjunto neutro
            </h3>
            <p className="text-xs text-[#8a5d3d]">Talles: RN – 6M</p>
            <p className="text-sm text-[#677423] font-bold mt-1">$15.500</p>
            <button className="mt-3 w-full text-xs px-3 py-2 rounded-full bg-[#8a5d3d] text-[#f1ece2] hover:bg-[#5a3e29] transition">
              Ver más
            </button>
          </article>
        </div>
      </section>
    </main>
  );
}
