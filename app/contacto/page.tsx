export default function Contacto() {
  return (
    <main className="bg-[#f1ece2] min-h-screen px-4 sm:px-6 py-14">
      {/* CONTENEDOR PRINCIPAL */}
      <section className="w-full max-w-5xl mx-auto bg-white/90 border border-[#e5ddcf] rounded-3xl shadow-md px-6 sm:px-10 py-10">
        {/* CABECERA */}
        <header className="mb-8">
          <h1 className="font-title text-3xl md:text-4xl text-[#5a3e29] mb-2">
            Contacto
          </h1>
          <p className="text-sm md:text-base text-[#8a5d3d] max-w-2xl leading-relaxed">
            Escribinos si querés hacer un pedido, consultar talles, combinar
            prendas o armar un regalo especial. Te respondemos siempre con
            mucho cariño 💛
          </p>
        </header>

        {/* LAYOUT DOS COLUMNAS EN DESKTOP */}
        <div className="grid gap-10 lg:grid-cols-[3fr,2fr] items-start">
          {/* FORMULARIO MINIMALISTA */}
          <form className="space-y-6">
            {/* Nombre + Email en dos columnas en desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nombre */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#5a3e29] mb-1">
                  Nombre
                </label>
                <div className="flex items-center gap-3 bg-[#f9f6f1] border border-[#d8cebe] rounded-xl px-4 py-3">
                  {/* icono usuario */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a5d3d"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="3" />
                    <path d="M5 19c1.5-3 3.7-4.5 7-4.5s5.5 1.5 7 4.5" />
                  </svg>

                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full bg-transparent outline-none text-[#5a3e29] placeholder:text-[#b8a89a]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#5a3e29] mb-1">
                  Email
                </label>
                <div className="flex items-center gap-3 bg-[#f9f6f1] border border-[#d8cebe] rounded-xl px-4 py-3">
                  {/* icono mail */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8a5d3d"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>

                  <input
                    type="email"
                    placeholder="tucorreo@gmail.com"
                    className="w-full bg-transparent outline-none text-[#5a3e29] placeholder:text-[#b8a89a]"
                  />
                </div>
              </div>
            </div>

            {/* Mensaje */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#5a3e29] mb-1">
                Mensaje
              </label>
              <div className="flex items-start gap-3 bg-[#f9f6f1] border border-[#d8cebe] rounded-xl px-4 py-3">
                {/* icono mensaje */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5d3d"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1"
                >
                  <path d="M4 5h16v11H8l-4 3z" />
                </svg>

                <textarea
                  rows={4}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full bg-transparent outline-none text-[#5a3e29] placeholder:text-[#b8a89a] resize-none"
                />
              </div>
            </div>

            {/* BOTÓN */}
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 rounded-full bg-[#8a5d3d] text-[#f1ece2] text-sm font-semibold shadow-md hover:bg-[#5a3e29] transition"
            >
              Enviar mensaje
            </button>
          </form>

          {/* COLUMNA DERECHA: INFO EXTRA */}
          <aside className="flex flex-col gap-6">
            {/* WhatsApp */}
            <div className="bg-[#f9f6f1] border border-[#e1d7c8] rounded-2xl px-4 py-4">
              <p className="text-xs font-semibold text-[#5a3e29] mb-1">
                WhatsApp
              </p>
              <p className="text-xs text-[#8a5d3d] mb-3">
                Para respuestas más rápidas, podés escribirnos directo:
              </p>
              <a
                href="https://wa.me/5491123456789"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#bbc191] text-[#5a3e29] text-xs font-medium hover:bg-[#a9b07f] transition"
              >
                {/* icono tipo chat */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#5a3e29"
                >
                  <path d="M4 4h16v11H7l-3 3z" />
                </svg>
                Enviar WhatsApp
              </a>
            </div>

            {/* Datos de contacto */}
            <div className="bg-[#f9f6f1] border border-[#e1d7c8] rounded-2xl px-4 py-4">
              <p className="text-xs font-semibold text-[#5a3e29] mb-2">
                Datos útiles
              </p>
              <ul className="space-y-1 text-xs text-[#8a5d3d]">
                <li>
                  <span className="font-semibold">Email:</span> hola@dulcealgodon.com
                </li>
                <li>
                  <span className="font-semibold">Horario:</span> Lun a Vie de 10 a 18 hs
                </li>
                <li>
                  <span className="font-semibold">Envíos:</span> CABA y GBA
                </li>
              </ul>
            </div>

            {/* Redes sociales */}
            <div>
              <p className="text-xs font-semibold text-[#5a3e29] mb-2">
                Seguinos
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#f9f6f1] border border-[#e1d7c8] hover:bg-[#f1e5d7] transition"
                >
                  {/* icono instagram */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5a3e29"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="6" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17" cy="7" r="1" />
                  </svg>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#f9f6f1] border border-[#e1d7c8] hover:bg-[#f1e5d7] transition"
                >
                  {/* icono facebook */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5a3e29"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 9h2V7c0-1.1.9-2 2-2h2v3h-2v2h2l-.5 3H14v7h-3v-7h-1V9z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* MAPA */}
            <div>
              <p className="text-xs font-semibold text-[#5a3e29] mb-2">
                Estamos en CABA
              </p>
              <div className="rounded-2xl overflow-hidden border border-[#e1d7c8] shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.27456537934!2d-58.51569974031165!3d-34.615796048253486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1764305438140!5m2!1ses!2sar"
                  width="100%"
                  height="200"
                  loading="lazy"
                ></iframe>
              </div>
              <p className="mt-1 text-[11px] text-[#b19b86]">
                Podés coordinar entrega o retirarlo por la zona a convenir.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
