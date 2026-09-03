import React from "react";

export default function Brands() {
  const brands = [
    { name: "Fórmula Natural", logo: "/formula-natural.jpg" },
    { name: "Golden", logo: "/golden.png" },
    { name: "Dog Chow", logo: "/dog-chow.png" },
    { name: "Premier", logo: "/premier.png" },
    { name: "Origens", logo: "/origens.png" },
    { name: "Magnus", logo: "/magnus.png" },
    { name: "Spin Pet", logo: "/spin-pet.png" },
    { name: "Petiscão", logo: "/petiscao.png" },
    { name: "Labcon", logo: "/labcon.jpg" },
  ];

  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B306B] mb-2">
          Marcas queridinhas
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          Escolhas de confiança para quem busca qualidade de verdade
        </p>
      </div>

      <div className="relative w-full">
        <div className="flex animate-scroll-infinite gap-4 md:gap-6 px-4">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[120px] h-[70px] md:w-[160px] md:h-[85px] bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* Removi o 'grayscale hover:grayscale-0' da linha abaixo */}
              <img
                src={brand.logo}
                alt={`Logo da marca ${brand.name}`}
                className="max-w-full max-h-full object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
