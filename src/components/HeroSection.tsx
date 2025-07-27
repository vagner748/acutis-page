import { Button } from "@/components/ui/button";
import { Crown, Shield, Star, Globe, Check, ArrowDown } from "lucide-react";
const HeroSection = () => {
  const handleCTAClick = () => {
    window.location.href = 'https://pay.kiwify.com.br/3Basztq';
  };

  const scrollToFaq = () => {
    const faqSection = document.getElementById('faq-section');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-warm opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 w-full max-w-full min-w-0">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium tracking-wide text-yellow-400 break-words">ESTEJA PREPARADO PARA CANONIZAÇÃO DE CARLO ACUTIS 07 DE SETEMBRO</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-normal">
              PROTEJA SUA FAMILIA
              <span className="text-primary block">NA ERA DIGITAL</span>
              <span className="block text-3xl lg:text-4xl mt-2">COM A SABEDORIA DE SANTO CARLO ACUTIS</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Descubra como a Novena de São Carlo Acutis pode ajudar você a orientar e proteger seus filhos e netos no mundo online, mantendo sua fé e valores cristãos.
            </p>

            <div className="flex items-center justify-start lg:justify-start space-x-2 text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Mais de 10.000 famílias protegidas</span>
            </div>
            <div className="flex items-baseline justify-start lg:justify-start space-x-2 text-muted-foreground">
              <Globe className="w-4 h-4 text-blue-300" />
              <span>Disponível em toda Europa e agora no Brasil</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                onClick={handleCTAClick}
                variant="cta" size="lg" className="text-lg px-8"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>PROTEGER MINHA FAMÍLIA AGORA</span>
                </div>
              </Button>
              <Button 
                onClick={scrollToFaq}
                variant="outline" size="lg" className="text-lg px-8"
              >
                Saiba Mais
              </Button>
            </div>

          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                 
                src="/images/imagem-carlo-acutis.webp" 
                alt="São Carlos Acutis" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-warm text-warm-foreground px-4 py-2 rounded-full shadow-warm">
              <span className="font-medium">São Carlos Acutis</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card shadow-soft p-4 rounded-xl">
              <p className="text-sm font-medium text-foreground">Patrono da Internet</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
