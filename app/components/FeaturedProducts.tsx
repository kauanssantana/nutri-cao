import React from "react";

export default function FeaturedProducts({
  whatsappLink,
}: {
  whatsappLink: string;
}) {
  const products = [
    {
      id: 1,
      title: "Coleira Laser Interativa",
      description:
        "Diversão garantida para o seu pet com esta coleira inovadora de feixe de luz.",
      image: "/coleira-laser.jpg",
      badge: "Lançamento",
      badgeColor: "bg-[#0B306B]",
    },
    {
      id: 2,
      title: "Comedouro de Cerâmica (Coelho)",
      description:
        "🐰 Pequenos detalhes fazem toda a diferença! Cerâmica é uma ótima opção para manter a rotina do seu pet mais segura e confortável. 🤎✨",
      image: "/comedouro-ceramica.jpg",
      badge: null,
    },
    {
      id: 3,
      title: "Areia de Mandioca Natureza Viva",
      description:
        "Sustentável, alto poder de absorção e controle de odores para o seu felino.",
      image: "/areia-mandioca.jpg",
      badge: "Mais Vendido",
      badgeColor: "bg-[#E51D24]",
    },
    {
      id: 4,
      title: "Cookies Fórmula Natural (Gatos)",
      description:
        "Petiscos naturais e deliciosos, ideais para recompensar e cuidar da saúde do seu gatinho.",
      image: "/cookies-gatos.jpg",
      badge: null,
    },
  ];

  return (
    <section id="produtos" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-[#0B306B] mb-2 uppercase">
          Itens mais comprados no momento
        </h2>
        <p className="text-gray-500 mb-10">
          Os queridinhos dos nossos clientes peludos (e de penas também!).
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col group border border-gray-100"
            >
              <div className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <div
                    className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider`}
                  >
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-800 text-lg mb-2 leading-tight">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-auto">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#E51D24] text-white text-center font-bold py-3 rounded-xl hover:bg-red-700 transition-colors uppercase text-sm"
                  >
                    Consultar Valor
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#0B306B] text-[#0B306B] hover:bg-[#0B306B] hover:text-white font-bold py-3 px-8 rounded-full transition-colors uppercase text-sm"
          >
            VER CATÁLOGO COMPLETO NO WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}
