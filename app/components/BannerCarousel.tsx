"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const banners = [
    {
      id: 1,
      image: "/banner-1.jpg",
      alt: "Destaque 1",
    },
    {
      id: 2,
      image: "/banner-2.jpg",
      alt: "Destaque 2",
    },
    {
      id: 3,
      image: "/banner-3.jpg",
      alt: "Destaque 3",
    },
    {
      id: 4,
      image: "/banner-4.jpg",
      alt: "Destaque 4",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  }, [banners.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  return (
    <section
      className="py-12 bg-white overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full relative group max-w-screen-2xl mx-auto">
        {/* Trilha do Carrossel - A classe center-carousel agora vem do globals.css */}
        <div
          className="center-carousel flex transition-transform duration-500 ease-out h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
          style={{ "--current-index": currentIndex } as React.CSSProperties}
        >
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className="shrink-0 w-[90%] md:w-[80%] lg:w-[75%] xl:w-[65%] px-2 md:px-4 h-full"
            >
              {/* Container da imagem */}
              <div
                className={`w-full h-full rounded-2xl overflow-hidden shadow-sm transition-all duration-500 ${
                  currentIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-40 scale-95"
                }`}
              >
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-full object-contain object-center bg-[#f4f4f4]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Botão Anterior */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0B306B] p-2 md:p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Banner anterior"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Botão Próximo */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0B306B] p-2 md:p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Próximo banner"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicadores (Bolinhas) */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10 px-3 py-1.5">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-[#E51D24] w-8"
                  : "bg-gray-300 hover:bg-gray-400 w-2.5"
              }`}
              aria-label={`Ir para o banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
