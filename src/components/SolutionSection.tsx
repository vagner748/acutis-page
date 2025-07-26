import React from 'react';
import { Shield, BookOpen, Users, Check } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
            A Novena de São Carlo Acutis:
            <span className="block text-green-600 mt-2">Um Guia Espiritual para a Família Moderna</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme sua preocupação em proteção ativa através da poderosa intercessão do santo da internet
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proteção Espiritual Ativa</h3>
                <p className="text-gray-600">
                  Uma intercessão poderosa para blindar seus entes queridos contra as armadilhas digitais e espirituais do mundo moderno.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Discernimento para a Juventude</h3>
                <p className="text-gray-600">
                  Desenvolve sabedoria nos jovens para distinguir o bem do mal, o real do ilusório, no vasto universo online.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">União Familiar na Fé</h3>
                <p className="text-gray-600">
                  Reconecta pais, avós e filhos através de valores espirituais compartilhados, construindo diálogo sobre fé e tecnologia.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center mb-6">
                <img 
                  src="/images/ebook-preview.png" 
                  alt="Novena de São Carlo Acutis - E-book Cover"
                  className="w-32 h-auto mx-auto mb-4 rounded-lg shadow-md border-4 border-yellow-500"
                  loading="lazy"
                />
                <h3 className="text-2xl font-bold text-gray-900">Paz Interior Garantida</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Alívio da ansiedade constante</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Confiança na proteção divina</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Noites de sono tranquilas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Certeza de estar agindo corretamente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
