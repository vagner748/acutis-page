import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Clock } from 'lucide-react';

const UrgencySection = () => {
  const handleCTAClick = () => {
    window.location.href = 'https://pay.kiwify.com.br/3Basztq';
  };

  return (
    <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-red-200">
          <Clock className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
            O Futuro Digital Não Espera:
            <span className="block text-red-600 mt-2">Proteja Quem Você Ama Agora</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  A cada dia, o ambiente digital se torna mais complexo e desafiador para as famílias brasileiras.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Seus filhos e netos precisam de um escudo espiritual AGORA, antes que influências negativas se enraízem.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Cada momento de hesitação é uma oportunidade perdida de proteção espiritual.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  A novena oferece uma solução imediata e poderosa que você pode começar hoje mesmo.
                </p>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={handleCTAClick}
            variant="cta" size="lg" className="text-lg px-8"
          >
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>COMEÇAR A PROTEÇÃO AGORA</span>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
