import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Services from "./components/Services";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function NutriCaoLandingPage() {
  const WHATSAPP_NUMBER = "551159275335";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos.`;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-800">
      <Header whatsappLink={WHATSAPP_LINK} />
      <Hero whatsappLink={WHATSAPP_LINK} />
      <Categories />
      <FeaturedProducts whatsappLink={WHATSAPP_LINK} />
      <Services />
      <Footer whatsappLink={WHATSAPP_LINK} />
      <WhatsAppButton whatsappLink={WHATSAPP_LINK} />
    </div>
  );
}
