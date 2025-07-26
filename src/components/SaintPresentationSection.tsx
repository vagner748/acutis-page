import React from 'react';
import { Star, Crown, Globe, Sparkles } from 'lucide-react';

const SaintPresentationSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
            Conheça São Carlo Acutis:
            <span className="block text-blue-600 mt-2">O Jovem que Uniu Fé e Futuro Digital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O primeiro santo da era digital que transformou a internet em instrumento de evangelização
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Jovem Visionário</h3>
            <p className="text-gray-600">
              Nascido em 1991, partiu aos 15 anos em 2006, mas deixou um legado eterno de como viver a santidade na era digital.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <Crown className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Santo Reconhecido</h3>
            <p className="text-gray-600">
              Beatificado em 2020 e canonizado em 2024: oficialmente reconhecido pela Igreja Católica como o padroeiro da internet.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Inovador Digital</h3>
            <p className="text-gray-600">
              Criou um site revolucionário catalogando milagres eucarísticos, usando a tecnologia para a glória de Deus.
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <blockquote className="text-2xl font-bold mb-4">
              "Todos nascemos originais, mas muitos morrem fotocópias."
            </blockquote>
            <p className="text-lg text-blue-100">
              - São Carlo Acutis, inspirando autenticidade na era digital
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaintPresentationSection;
