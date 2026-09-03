import React from "react";
import { MapPin, Navigation, Car } from "lucide-react";

export default function LocationSection() {
  return (
    <section
      id="localizacao"
      className="py-16 bg-gray-50 border-t border-gray-100 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-[#0B306B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin size={14} className="text-[#E51D24]" />
            Nossa Localização
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B306B] uppercase tracking-wide mb-3">
            Onde Estamos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            Venha nos visitar em nossa loja física! Estamos de portas abertas
            para receber você e seu pet com todo o carinho.
          </p>
        </div>

        {/* Card Principal com Informações e Mapa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
          {/* Informações de Endereço */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#0B306B] mb-2">
                Nutri-Cão Rações
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed flex items-start gap-3">
                <MapPin size={20} className="text-[#E51D24] shrink-0 mt-1" />
                <span>
                  R. Jequirituba, 1999 - Jardim Santa Barbara, São Paulo - SP,
                  04822-000
                </span>
              </p>
            </div>

            <div className="space-y-3 border-t border-gray-100 pt-4">
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Car size={16} />
                </div>
                <span>Estacionamento exclusivo para clientes</span>
              </div>
            </div>

            <div>
              <a
                href="https://maps.google.com/?q=R.+Jequirituba,+1999+-+Jardim+Santa+Barbara,+S%C3%A3o+Paulo+-+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0B306B] hover:bg-blue-900 text-white font-bold py-3.5 px-6 rounded-xl transition-transform hover:scale-105 uppercase text-xs tracking-wider shadow-sm w-full sm:w-auto"
              >
                <Navigation size={16} />
                <span>Como Chegar (Google Maps)</span>
              </a>
            </div>
          </div>

          {/* Mapa do Google Embed */}
          <div className="w-full h-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-inner border border-gray-200">
            <iframe
              title="Localização Nutri-Cão Rações"
              src="https://maps.google.com/maps?q=Rua+Jequirituba,+1999+-+Jardim+Santa+Barbara,+S%C3%A3o+Paulo&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
