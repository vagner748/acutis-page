import React, { useState } from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainValidationSection from "../components/PainValidationSection";
import SaintPresentationSection from "../components/SaintPresentationSection";
import SolutionSection from "../components/SolutionSection";
import ContentValueSection from "../components/ContentValueSection";
import UrgencySection from "../components/UrgencySection";
import FinalCtaSection from "../components/FinalCtaSection";
import AboutCarlosSection from "@/components/AboutCarlosSection";
import EbookSection from "@/components/EbookSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "../components/Footer";
import OfferSection from "../components/OfferSection";
import VslSection from "../components/VslSection";
import Popup from "../components/Popup";

const Index = () => {
  const [isPopupOpen, setPopupOpen] = useState(true);
  const [autoplay, setAutoplay] = useState(false);

  const handlePopupClose = () => {
    setPopupOpen(false);
    setAutoplay(true);
  };

  return (
    <div className="min-h-screen">
      <Popup isOpen={isPopupOpen} onClose={handlePopupClose} />
      <Header />
      <main>
        <OfferSection />
        <VslSection autoplay={autoplay} />
        <HeroSection />
        <PainValidationSection />
        <SaintPresentationSection />
        <SolutionSection />
        <ContentValueSection />
        <UrgencySection />
        <FinalCtaSection />
        <AboutCarlosSection />
        <EbookSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
