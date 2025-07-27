import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Heart, Users, Crown, ArrowRight } from 'lucide-react';

const FinalCtaSection = () => {
  const handleCTAClick = () => {
    window.location.href = 'https://pay.kiwify.com.br/3Basztq';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-tight">
              Não Deixe Seus Entes Queridos
              <span className="block text-yellow-400 mt-2">Navegarem Sozinhos</span>
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comece hoje mesmo a novena que já trouxe paz e proteção para milhares de famílias europeias agora no Brasil
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-lg font-bold mb-2">Proteção Imediata</h3>
                <p className="text-blue-100">Comece a proteger sua família hoje mesmo</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-lg font-bold mb-2">Paz Interior</h3>
                <p className="text-blue-100">Durma tranquilo sabendo que eles estão protegidos</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-lg font-bold mb-2">União Familiar</h3>
                <p className="text-blue-100">Fortaleça os laços através da fé compartilhada</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 flex flex-col items-center">
            <Button 
              onClick={handleCTAClick}
              variant="cta" size="lg" className="w-full max-w-sm text-xl px-12 py-6"
            >
              <div className="flex items-center justify-center space-x-3">
                <Crown className="w-6 h-6" />
                <span>OBTER A NOVENA AGORA</span>
                <ArrowRight className="w-6 h-6" />
              </div>
            </Button>
            
            <p className="text-blue-200 text-sm">
              ✓ Acesso imediato ✓ Guia completo para 9 dias ✓ Proteção espiritual garantida
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
