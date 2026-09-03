import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({
  whatsappLink,
}: {
  whatsappLink: string;
}) {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebd5b] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
