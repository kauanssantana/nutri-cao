import React from "react";
import { MessageCircle, MapPin, Clock } from "lucide-react";

// Ícone do Instagram em SVG
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer({ whatsappLink }: { whatsappLink: string }) {
  return (
    <footer className="bg-[#0B306B] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
        <div className="flex flex-col gap-6">
          <div className="bg-white p-3 rounded-xl w-fit">
            <img
              src="/logo.png"
              alt="Nutri-Cão Rações"
              className="w-32 object-contain"
            />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
            O lugar onde a nutrição e o bem-estar do seu pet vêm em primeiro
            lugar. Os melhores produtos para cuidar de quem te faz feliz!
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/nutricao.oficial_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E51D24] transition-colors"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E51D24] transition-colors"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg text-[#FFE115] uppercase tracking-wider mb-2">
            Contato
          </h4>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
          >
            <MessageCircle size={18} className="text-[#FFE115]" /> (11)
            5927-5335
          </a>
          <div className="flex items-start gap-3 text-gray-300 mt-2">
            <MapPin size={18} className="text-[#FFE115] mt-1 shrink-0" />
            <p>
              R. Jequirituba, 1999
              <br />
              Jardim Santa Barbara
              <br />
              São Paulo - SP, 04822-000
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg text-[#FFE115] uppercase tracking-wider mb-2">
            Horário de Funcionamento
          </h4>
          <div className="flex items-center gap-3 text-gray-300">
            <Clock size={18} className="text-[#FFE115]" />
            <ul className="space-y-2">
              <li className="flex justify-between w-48">
                <span>Segunda a Sábado:</span>
                <span className="font-bold text-white">09:00 às 20:00</span>
              </li>
              <li className="flex justify-between w-48">
                <span>Domingo:</span>
                <span className="font-bold text-white">09:00 às 14:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          © {new Date().getFullYear()} Nutri-Cão Rações. Todos os direitos
          reservados.
        </p>
        <p>Desenvolvido com carinho para o seu pet.</p>
      </div>
    </footer>
  );
}
