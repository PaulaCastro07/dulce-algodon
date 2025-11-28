// app/contacto.tsx
export default function ContactoPage() {
    return (
      <main className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-2">
        <section>
          <h1 className="text-2xl font-semibold mb-3">Contacto y pedidos</h1>
          <p className="text-sm text-slate-700 mb-4">
            Podés escribirnos por WhatsApp o Instagram para ver todos los modelos,
            consultar talles y armar tu pedido.
          </p>
  
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-white font-medium text-xs hover:bg-emerald-600 transition w-fit"
            >
              💬 Escribir por WhatsApp
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500 text-white font-medium text-xs hover:bg-pink-600 transition w-fit"
            >
              📸 Ver catálogo en Instagram
            </a>
          </div>
        </section>
  
        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 text-sm">
          <p className="font-semibold mb-2">
            Dejar una consulta rápida
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400"
            />
            <input
              type="text"
              placeholder="Email o Instagram"
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400"
            />
            <textarea
              rows={3}
              placeholder="Contanos qué estás buscando (talle, prenda, color...)"
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400"
            />
            <button
              type="button"
              className="w-full px-4 py-2 rounded-full bg-pink-500 text-white text-sm font-medium hover:bg-pink-600 transition"
            >
              Enviar consulta (maqueta)
            </button>
          </form>
          <p className="mt-2 text-[11px] text-slate-400">
            *Formulario de ejemplo. Para pedidos reales, usá WhatsApp o Instagram.
          </p>
        </section>
      </main>
    );
  }
  