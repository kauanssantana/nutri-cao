import React from "react";
import { Truck, CreditCard, MapPin } from "lucide-react";

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-16 bg-white overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative rounded-3xl overflow-hidden shadow-lg border-4 border-[#FFE115]">
          <img
            src="/carro-entrega.jpg"
            alt="Carro de Entrega Nutri-Cão"
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="order-1 md:order-2 flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B306B] leading-tight">
            Facilidade e rapidez <br />
            <span className="text-[#E51D24]">direto na sua porta!</span>
          </h2>
          <p className="text-lg text-gray-600">
            Trabalhamos com uma grande variedade de rações, medicamentos,
            vacinas, acessórios e aquarismo. Tudo isso com um serviço pensado
            para o seu conforto.
          </p>

          <ul className="space-y-4 mt-4">
            <li className="flex items-start gap-4">
              <div className="bg-[#FFE115]/30 p-3 rounded-xl text-[#0B306B]">
                <Truck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#0B306B] text-lg">
                  Entrega Rápida
                </h4>
                <p className="text-gray-500">
                  Entregamos em até 2 km de distância da nossa loja.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-[#FFE115]/30 p-3 rounded-xl text-[#0B306B]">
                <CreditCard size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#0B306B] text-lg">
                  Diversas Formas de Pagamento
                </h4>
                <p className="text-gray-500">
                  Aceitamos cartões de crédito, débito e pagamento por
                  aproximação (NFC).
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-[#FFE115]/30 p-3 rounded-xl text-[#0B306B]">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#0B306B] text-lg">
                  Loja Física Completa
                </h4>
                <p className="text-gray-500">
                  Compras na loja com estacionamento exclusivo.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
