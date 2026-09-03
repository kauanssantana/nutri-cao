import React from "react";
import { Star, Quote, ExternalLink } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Suzy Galvão",
      role: "Cliente via WhatsApp",
      comment:
        "Eu não vou muito na loja sempre peço pelo whatsapp e sou muito bem atendida vcs estão de parabéns",
      rating: 5,
    },
    {
      id: 2,
      name: "Luiza Holanda",
      role: "Cliente Local",
      comment:
        "Melhor loja pet da região. Tem uma variedade enorme de produtos, atendimento impecável. A loja é super limpa, extremamente organizada e dá gosto de entrar. Sempre encontro tudo que preciso e ainda sou bem atendida. Recomendo demais!",
      rating: 5,
    },
    {
      id: 3,
      name: "Daiane Lopes Fernandes Rodrigues",
      role: "Cliente Verificada",
      comment:
        "Quero parabenizar o excelente atendimento da atendente Emily. Mto proativa, simpática e ágil em tirar dúvidas. Por mais profissionais assim e que sejam reconhecidos. Sem contar a variedade de preços que são excelentes e a entrega gratuita até minha residência. Ganhou uma cliente 👏👍",
      rating: 5,
    },
    {
      id: 4,
      name: "Guto Prado",
      role: "Cliente Local",
      comment:
        "Bom atendimento, prestativos, variedades de produtos, preços e serviços condizentes com o mercado... Recomendo",
      rating: 5,
    },
    {
      id: 5,
      name: "Rosilene Rodrigues",
      role: "Local Guide",
      comment:
        "Equipe super atenciosa. Preços acessíveis. Muito obrigada e Parabéns pelo atendimento.",
      rating: 5,
    },
    {
      id: 6,
      name: "Renata Araújo",
      role: "Cliente Local",
      comment:
        "Excelente loja com uma ótima localização, tem estacionamento exclusivo, atendimento excepcional, loja recém inaugurada com ótimos funcionários para nosso atendimento e grande variedade de produtos.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            Avaliação 4.9 no Google
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B306B] uppercase tracking-wide mb-3">
            O que dizem sobre nós
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            O carinho e o cuidado com os animais são o nosso compromisso diário.
            Veja a opinião real de quem confia no nosso trabalho.
          </p>
        </div>

        {/* Grid de Depoimentos Reais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <Quote
                className="absolute top-6 right-6 text-gray-200"
                size={36}
              />

              <div>
                {/* Estrelas */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="border-t border-gray-200/60 pt-4 mt-auto">
                <h3 className="font-bold text-[#0B306B] text-base">
                  {review.name}
                </h3>
                <p className="text-xs text-gray-400 font-medium">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão para ver todas as avaliações no Google */}
        <div className="text-center">
          <a
            href="https://share.google/BhDOOMp38FbUSMCC6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-[#0B306B] text-[#0B306B] hover:bg-[#0B306B] hover:text-white font-bold py-3.5 px-8 rounded-full transition-all uppercase text-sm shadow-sm"
          >
            <span>Ver todas as avaliações no Google</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
