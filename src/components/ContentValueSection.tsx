import React from 'react';
import { Check } from 'lucide-react';

const ContentValueSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
            O Que Você Receberá Nesta
            <span className="block text-blue-600 mt-2">Novena Completa e Transformadora</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um guia espiritual completo para 9 dias de proteção e orientação divina
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">9 Dias de Orações Profundas</h3>
              </div>
              <p className="text-gray-600">
                Orações específicas e poderosas para a proteção espiritual e digital de seus filhos e netos, com instruções claras.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Orações para Criadores Digitais</h3>
              </div>
              <p className="text-gray-600">
                Intercessão especial para aqueles que trabalham ou interagem intensamente com a tecnologia, buscando inspiração e ética.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Reflexões para Unir Gerações</h3>
              </div>
              <p className="text-gray-600">
                Conteúdo que promove o diálogo e a compreensão entre avós, pais e netos, superando a lacuna digital.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Guia para Uso Cristão da Tecnologia</h3>
              </div>
              <p className="text-gray-600">
                Orientações práticas sobre como transformar a tecnologia em ferramenta de evangelização e crescimento espiritual.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Milagres e Testemunhos</h3>
              </div>
              <p className="text-gray-600">
                Histórias reais e documentadas da intercessão de São Carlo Acutis, reforçando a fé e a esperança.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Reflexões para Tempos Modernos</h3>
              </div>
              <p className="text-gray-600">
                Abordagens espirituais para desafios contemporâneos como vícios digitais, pressão social e crises familiares.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentValueSection;
