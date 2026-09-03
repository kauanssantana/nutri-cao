import React from "react";
import {
  Bone,
  Cat,
  Bird,
  Rat,
  Fish,
  Leaf,
  Pill,
  Syringe,
  Package,
  Waves,
} from "lucide-react";

export default function Categories() {
  const categories = [
    { name: "Cães", icon: Bone },
    { name: "Gatos", icon: Cat },
    { name: "Pássaros", icon: Bird },
    { name: "Roedores", icon: Rat }, // Novo item para roedores
    { name: "Peixes", icon: Fish },
    { name: "Tartarugas", icon: Leaf },
    { name: "Medicamentos", icon: Pill },
    { name: "Vacinas", icon: Syringe },
    { name: "Acessórios", icon: Package },
    { name: "Aquarismo", icon: Waves },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B306B] uppercase tracking-wide mb-3">
            O que você procura, nós temos!
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Atendemos diversas espécies e oferecemos tudo o que seu pet precisa
            para viver com saúde e conforto.
          </p>
        </div>

        {/* Grid ajustado dinamicamente para acomodar todas as categorias */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 sm:gap-6 justify-items-center">
          {categories.map((cat, index) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer w-full"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center text-[#0B306B] group-hover:bg-[#0B306B] group-hover:text-white group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                  <IconComponent size={32} strokeWidth={1.75} />
                </div>
                <span className="mt-3 text-sm sm:text-base font-semibold text-slate-700 group-hover:text-[#0B306B] text-center transition-colors">
                  {cat.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
