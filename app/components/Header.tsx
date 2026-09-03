import React from "react";
import { MessageCircle, MapPin, Truck, Star } from "lucide-react";

export default function Header({ whatsappLink }: { whatsappLink: string }) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Barra superior de informações */}
      <div className="bg-[#0B306B] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <MapPin size={14} className="text-[#FFE115] shrink-0" />
            <span>R. Jequirituba, 1999 - Jardim Santa Barbara, São Paulo</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Truck size={14} className="text-[#FFE115]" />
              <span>Entrega até 2 km</span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-[#FFE115] text-[#FFE115]" />
              <span className="font-bold">4,9</span>
              <span className="text-gray-300">(103 avaliações)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cabeçalho principal */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img
            src="/logo.png"
            alt="Nutri-Cão Rações"
            className="w-24 md:w-28 object-contain"
          />
        </a>

        {/* Links de navegação entre as seções */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <a href="#" className="hover:text-[#0B306B] transition-colors">
            Início
          </a>
          <a
            href="#produtos"
            className="hover:text-[#0B306B] transition-colors"
          >
            Produtos
          </a>
          <a href="#marcas" className="hover:text-[#0B306B] transition-colors">
            Marcas
          </a>
          <a
            href="#avaliacoes"
            className="hover:text-[#0B306B] transition-colors"
          >
            Avaliações
          </a>
          <a
            href="#servicos"
            className="hover:text-[#0B306B] transition-colors"
          >
            Serviços
          </a>
        </nav>

        {/* Botão de Ação rápida */}
        <div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E51D24] hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-full transition-all text-xs md:text-sm uppercase tracking-wider shadow-sm"
          >
            <MessageCircle size={18} />
            <span>Pedir via WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
