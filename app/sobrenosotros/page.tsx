// app/sobrenosotros/page.tsx
export default function SobreNosotros() {
  return (
    <main className="bg-[#faf7f2] px-4 md:px-6 py-10 md:py-16">
      <section className="max-w-5xl mx-auto bg-white/80 rounded-3xl border border-[#e6dfd5] shadow-sm px-5 md:px-8 py-8 md:py-10">
        {/* CABECERA */}
        <header className="mb-8">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#8a5d3d] mb-1">
            Sobre nosotros
          </p>
          <h1 className="font-title text-3xl md:text-4xl text-[#5a3e29] mb-3">
            Dulce Algodón
          </h1>
          <p className="text-sm md:text-base text-[#8a5d3d] max-w-3xl">
            Nacimos con la idea de crear ropita suave, cómoda y en tonos
            neutros, pensada para acompañar los primeros meses de los bebés sin
            perder ese toque cálido y minimalista que tanto nos gusta.
          </p>
        </header>

        {/* BLOQUE PRINCIPAL RESPONSIVE */}
        <div className="grid gap-8 md:grid-cols-[1.3fr,1fr] items-start">
          {/* HISTORIA */}
          <div className="space-y-5">
            <h2 className="font-title text-xl text-[#5a3e29]">
              Hecho con calma, en pequeños lotes
            </h2>
            <p className="text-sm text-[#8a5d3d] leading-relaxed">
              Cada prenda está pensada para ser suave con la piel del bebé y
              práctica para las familias. Usamos tonos neutros que combinan
              entre sí, telas cómodas y detalles simples que no molestan ni
              incomodan.
            </p>
            <p className="text-sm text-[#8a5d3d] leading-relaxed">
              Nos inspiran los abrazos largos, las siestas de tarde y esas
              fotos que vas a querer guardar para siempre. Por eso cuidamos
              tanto el diseño como la calidad y la experiencia desde el primer
              mensaje hasta que recibís el pedido.
            </p>

            {/* MINI LISTA */}
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-[#5a3e29]">
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#8a5d3d]" />
                <span>Prendas pensadas para piel sensible.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#8a5d3d]" />
                <span>Tonos neutros que combinan con todo.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#8a5d3d]" />
                <span>Producción en pequeños lotes, sin apuro.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#8a5d3d]" />
                <span>Atención cercana y personalizada.</span>
              </li>
            </ul>
          </div>

          {/* TARJETAS DE VALORES */}
          <div className="space-y-4">
            <div className="rounded-2xl bg-[#f7f1e8] border border-[#e4d6c6] px-4 py-4">
              <h3 className="font-title text-[15px] text-[#5a3e29] mb-1">
                Suavidad primero
              </h3>
              <p className="text-[12px] text-[#8a5d3d] leading-relaxed">
                Priorizamos telas cómodas y agradables al tacto para que el
                bebé pueda moverse, dormir y jugar sin molestias.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f1e8] border border-[#e4d6c6] px-4 py-4">
              <h3 className="font-title text-[15px] text-[#5a3e29] mb-1">
                Diseño atemporal
              </h3>
              <p className="text-[12px] text-[#8a5d3d] leading-relaxed">
                Colores neutros y líneas simples que no pasan de moda y se
                pueden reutilizar entre hermanitos, primos o amigos.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f1e8] border border-[#e4d6c6] px-4 py-4">
              <h3 className="font-title text-[15px] text-[#5a3e29] mb-1">
                Acompañamos de cerca
              </h3>
              <p className="text-[12px] text-[#8a5d3d] leading-relaxed">
                Te ayudamos a elegir talles, combinaciones y opciones según la
                temporada y la etapa de tu bebé.
              </p>
            </div>
          </div>
        </div>

        {/* MINI CTA AL FINAL */}
        <div className="mt-8 pt-6 border-t border-[#e6dfd5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-[#8a5d3d] max-w-md">
            Si tenés dudas sobre talles, combinaciones o querés armar un
            regalo, escribinos y te ayudamos a elegir cada prenda.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full bg-[#8a5d3d] text-[#f1ece2]
                       px-5 py-2 text-xs font-medium hover:bg-[#5a3e29] transition"
          >
            Escribir para hacer un pedido
          </a>
        </div>
      </section>
    </main>
  );
}
