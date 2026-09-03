import React from "react";
import { Star } from "lucide-react";

export default function Hero({ whatsappLink }: { whatsappLink: string }) {
  return (
    <section className="bg-[#FFE115] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-6 z-10">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full w-fit text-[#0B306B] font-bold text-sm">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            Melhor Pet Shop do Jardim Santa Barbara
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B306B] leading-tight">
            O lugar onde a <span className="text-[#E51D24]">nutrição</span> e o{" "}
            <span className="text-[#E51D24]">bem-estar</span> do seu pet vêm em
            primeiro lugar.
          </h1>
          <p className="text-lg md:text-xl text-[#0B306B]/80 font-medium max-w-lg">
            Aqui você encontra os melhores produtos para cuidar de quem te faz
            feliz. Rações, medicamentos, acessórios e muito mais!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E51D24] hover:bg-red-700 text-white text-center font-bold py-4 px-8 rounded-xl transition-transform hover:scale-105 uppercase tracking-wide text-lg shadow-lg shadow-red-500/30"
            >
              COMPRAR AGORA
            </a>
          </div>
        </div>

        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 mt-8 md:mt-0">
          <img
            src="/fachada.jpg"
            alt="Fachada da Loja Nutri-Cão"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
