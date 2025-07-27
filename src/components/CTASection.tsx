import { Button } from "@/components/ui/button";
import { Download, Clock, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          <div>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Clock className="w-6 h-6 text-white/80" />
              <span className="text-white/80 font-medium uppercase tracking-wider text-sm">
                Não Deixe para Amanhã
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              O Futuro Digital da sua
              <span className="block">Família Começa Hoje</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Junte-se a mais de 50.000 pais e avós que já estão protegendo e 
              educando suas famílias no mundo digital com sabedoria e fé.
            </p>
          </div>

          {/* Benefits checklist */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 text-white">
              <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
              <span>Download Imediato</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
              <span>Acesso a Comunidade</span>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-6 flex flex-col items-center">
            <Button 
              variant="warm" 
              size="lg" 
              className="text-lg px-12 py-4 shadow-warm text-warm-foreground hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar eBook Gratuito Agora
            </Button>
            
            <p className="text-sm text-white/70">
              ✨ Sem cadastro complexo • Sem spam • Acesso imediato
            </p>
          </div>

          {/* Urgency */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto border border-white/20">
            <h3 className="font-semibold text-white mb-2">
              ⚡ Cada dia conta na proteção digital
            </h3>
            <p className="text-white/80 text-sm">
              A cada minuto que passa, milhares de crianças acessam conteúdo inadequado. 
              Proteja sua família hoje mesmo.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-white/60 text-sm">
            <span>⭐ Mais de 50.000 downloads</span>
            <span>💝 Avaliação 4.9/5</span>
            <span>🔒 Seus dados estão seguros</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;