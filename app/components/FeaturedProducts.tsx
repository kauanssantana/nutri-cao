import React from "react";

export default function FeaturedProducts({
  whatsappLink,
}: {
  whatsappLink: string;
}) {
  const products = [
    // Produtos Antigos (Lote 1)
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
      title: "Comedouro de Cerâmica",
      description:
        "🐰 Pequenos detalhes fazem toda a diferença! Cerâmica é uma ótima opção para manter a rotina mais segura.",
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
      title: "Cookies Fórmula Natural",
      description:
        "Petiscos naturais e deliciosos, ideais para recompensar e cuidar da saúde do seu gatinho.",
      image: "/cookies-gatos.jpg",
      badge: null,
    },
    // Novos Produtos (Lote 2)
    {
      id: 5,
      title: "Mochila de Transporte",
      description:
        "Leve seu pet com conforto, segurança e muito estilo! 🐾🎒 Perfeitas para passeios e idas ao veterinário.",
      image: "/mochila-transporte.jpeg",
      badge: "Novidade",
      badgeColor: "bg-[#0B306B]",
    },
    {
      id: 6,
      title: "Snack Porta Comprimidos",
      description:
        "Snack natural que facilita a vida 🐶💊 Com vitaminas e probióticos. Mais saúde, menos drama!",
      image: "/snack-comprimidos.jpeg",
      badge: null,
    },
    {
      id: 7,
      title: "Sticks Naturais Fit",
      description:
        "Feitos com 70% de carne e 35% de proteínas, enriquecidos com frutas. A recompensa ideal!",
      image: "/sticks-naturais-fit.jpeg",
      badge: "Saudável",
      badgeColor: "bg-[#25D366]",
    },
    {
      id: 8,
      title: "Caminhas Donut's",
      description:
        "Conforto e fofura em um só lugar! 💕 As caminhas mais macias pra deixar o descanso ainda melhor.",
      image: "/caminhas-donuts.jpeg",
      badge: "Destaque",
      badgeColor: "bg-[#FFE115] text-[#0B306B]",
    },
    {
      id: 9,
      title: "Bandanas Estilosas",
      description:
        "Estilo que late mais alto! 🐶💖 Bandanas que deixam seu pet ainda mais fofo e cheio de personalidade.",
      image: "/bandanas-estilosas.jpeg",
      badge: null,
    },
    {
      id: 10,
      title: "Biscoitos Dog Chow",
      description:
        "Mais do que um petisco, um momento de carinho! 💚 Crocantes, nutritivos e cheios de sabor.",
      image: "/biscoitos-dog-chow.jpeg",
      badge: null,
    },
    {
      id: 11,
      title: "Roupinhas Soft São Pet",
      description:
        "Macias, confortáveis e com forro peluciado pra proteger do frio com muito charme!",
      image: "/roupinhas-soft-sao-pet.jpeg",
      badge: "Inverno",
      badgeColor: "bg-[#0B306B]",
    },
    {
      id: 12,
      title: "Patezinho Recovery Royal Canin",
      description:
        "Ideal para pós-cirúrgico e recuperação nutricional. Ajuda na imunidade e recuperação rápida.",
      image: "/patezinho-recovery-royal-canin.jpeg",
      badge: "Clínico",
      badgeColor: "bg-[#E51D24]",
    },
    // Lote 3
    {
      id: 13,
      title: "Comedouro e Bebedouro Automático",
      description:
        "Simplesmente lindo esse comedouro duplo automático 🐾😸🐶 Garanta o comedouro perfeito para seu pet!",
      image: "/bebedouro.jpg",
      badge: "Destaque",
      badgeColor: "bg-[#FFE115] text-[#0B306B]",
    },
    {
      id: 14,
      title: "Bolsa de Transporte",
      description:
        "Bolsa de transporte confortável e segura para seu pet! 🐾 Com abertura superior e laterais com tela.",
      image: "/bolsa-transporte.jpg",
      badge: "Novidade",
      badgeColor: "bg-[#0B306B]",
    },
    {
      id: 15,
      title: "Bifinhos Keldog",
      description:
        "Bifinhos Keldog 💙 Sabores diversos em embalagens econômicas. Deliciosamente suculento!",
      image: "/bifinhos.jpg",
      badge: "Mais Vendido",
      badgeColor: "bg-[#E51D24]",
    },
    {
      id: 16,
      title: "Colônia Sanol Dog",
      description:
        "Perfume suave e duradouro! Opções para Fêmea (Red Flowers), Macho (Marine Green) e Filhotes (Baby Lavender).",
      image: "/colonia.jpg",
      badge: "Essencial",
      badgeColor: "bg-[#25D366]",
    },
    {
      id: 17,
      title: "Gaiola para Hamster com Tubos",
      description:
        "Proporcione diversão! Conta com tubos interligados para explorar, roda de exercício e andares.",
      image: "/gaiola.jpg",
      badge: "Roedores",
      badgeColor: "bg-[#0B306B]",
    },
    {
      id: 18,
      title: "Mega Ball Hamster",
      description:
        "Bola de exercício colorida e segura para seu pequeno roedor gastar energia com muita diversão.",
      image: "/mega-ball-hamster.jpg",
      badge: null,
    },
    // Lote 4 (Aves)
    {
      id: 19,
      title: "Viveiro para Aves",
      description:
        "Dê mais espaço e conforto para sua ave voar! Conta com estrutura espaçosa, poleiros e rodinhas para mobilidade.",
      image: "/viveiro.jpg",
      badge: "Aves",
      badgeColor: "bg-[#0B306B]",
    },
    {
      id: 20,
      title: "TV Interativa para Calopsita",
      description:
        "Diversão garantida! Brinquedos e acessórios para aves, como esta TV interativa que vai entreter sua calopsita por horas.",
      image: "/brinquedo-calop.jpg",
      badge: "Destaque",
      badgeColor: "bg-[#FFE115] text-[#0B306B]",
    },
  ];

  return (
    <section id="produtos" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0B306B] mb-2 uppercase">
              Vitrine de Produtos
            </h2>
            <p className="text-gray-500">
              Os queridinhos dos nossos clientes peludos.
            </p>
          </div>
        </div>

        {/* Grid ajustado para comportar mais itens de forma elegante */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group border border-gray-100"
            >
              <div className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <div
                    className={`absolute top-3 left-3 ${product.badgeColor} ${product.badgeColor.includes("text-") ? "" : "text-white"} text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm`}
                  >
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-grow border-t border-gray-50">
                <h3 className="font-bold text-[#0B306B] text-lg mb-2 leading-tight">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6 line-clamp-3">
                  {product.description}
                </p>
                <div className="mt-auto pt-2">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white border-2 border-[#E51D24] text-[#E51D24] text-center font-bold py-2.5 rounded-xl hover:bg-[#E51D24] hover:text-white transition-colors uppercase text-sm"
                  >
                    Consultar Valor
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0B306B] text-white hover:bg-blue-900 font-bold py-4 px-10 rounded-full transition-transform hover:scale-105 uppercase text-sm shadow-lg shadow-blue-900/20"
          >
            VER CATÁLOGO COMPLETO NO WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}
