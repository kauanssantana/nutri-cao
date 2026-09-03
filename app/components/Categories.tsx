import React from "react";
import { Bone, Cat, Bird, Fish } from "lucide-react";

export default function Categories() {
  const categories = [
    { name: "Cães", icon: <Bone size={32} /> },
    { name: "Gatos", icon: <Cat size={32} /> },
    { name: "Pássaros", icon: <Bird size={32} /> },
    { name: "Peixes", icon: <Fish size={32} /> },
    { name: "Farmácia", icon: <div className="text-3xl font-bold">+</div> },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-[#0B306B] mb-10 uppercase tracking-wide">
          Compre por Categoria
        </h2>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#produtos"
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-50 border-2 border-gray-100 flex items-center justify-center text-[#0B306B] group-hover:bg-[#FFE115] group-hover:border-[#FFE115] group-hover:scale-110 transition-all shadow-sm cursor-pointer">
                {cat.icon}
              </div>
              <span className="font-bold text-sm sm:text-base text-gray-700 group-hover:text-[#0B306B]">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
