import React from "react";
import { Search, MapPin, Star, Truck, MessageCircle } from "lucide-react";

export default function Header({ whatsappLink }: { whatsappLink: string }) {
  return (
    <>
      {/* 1. TOP BAR INSTITUCIONAL */}
      <div className="bg-[#0B306B] text-white text-xs font-medium py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <MapPin size={14} className="text-[#FFE115] shrink-0" />
            <span>R. Jequirituba, 1999 - Jardim Santa Barbara, São Paulo</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Truck size={14} className="text-[#FFE115]" /> Entrega até 2 km
            </span>
            <span className="flex items-center gap-1">
              <Star size={14} className="text-[#FFE115] fill-[#FFE115]" /> 4,9
              (103 avaliações)
            </span>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center gap-4 sm:gap-8">
          {/* Logo */}
          <div className="w-32 sm:w-40 flex-shrink-0">
            <img
              src="/logo.png"
              alt="Nutri-Cão Rações"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Search Bar (Visual) */}
          <div className="hidden md:flex flex-1 max-w-2xl relative">
            <input
              type="text"
              placeholder="O que o seu pet precisa hoje?"
              className="w-full bg-gray-100 rounded-full py-3 px-6 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B306B]"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#0B306B]">
              <Search size={20} />
            </button>
          </div>

          {/* CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-[#E51D24] hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-colors uppercase text-sm tracking-wide"
          >
            <MessageCircle size={18} />
            Pedir via WhatsApp
          </a>
        </div>
      </nav>
    </>
  );
}
