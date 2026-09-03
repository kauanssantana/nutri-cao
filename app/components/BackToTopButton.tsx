"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="fixed bottom-8 right-30 z-40 bg-white text-[#0B306B] hover:bg-gray-100 p-3.5 rounded-full shadow-lg border border-gray-100 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      title="Voltar ao topo"
    >
      <ArrowUp
        size={20}
        className="group-hover:-translate-y-0.5 transition-transform"
      />
    </button>
  );
}
