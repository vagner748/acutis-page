import React from 'react';
import { Heart } from 'lucide-react';

const PainValidationSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8">
        Você sabia que mais de 93% das crianças e adolescentes têm dificuldades em separar o real do virtual?
          <span className="block text-red-600 mt-2"> Em um mundo onde a tecnologia pode afastar nossos filhos da fé. <br /> É hora de agir!</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <p className="text-gray-700 text-lg">
                Seus filhos e netos passam horas conectados, e você se pergunta: 
                <strong className="text-red-600"> "O que eles estão realmente vendo?"</strong>
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <p className="text-gray-700 text-lg">
                A velocidade do mundo digital parece impossível de acompanhar, e você se sente 
                <strong className="text-red-600"> impotente para protegê-los</strong>.
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <p className="text-gray-700 text-lg">
                O medo dos perigos online – cyberbullying, conteúdo impróprio, influências negativas – é uma 
                <strong className="text-red-600"> sombra constante</strong>.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <p className="text-gray-700 text-lg">
                Você anseia por uma forma de guiá-los espiritualmente neste novo território, mas 
                <strong className="text-red-600"> não sabe por onde começar</strong>.
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <p className="text-gray-700 text-lg">
                A distância geracional na tecnologia parece intransponível, mas 
                <strong className="text-red-600"> o amor e a fé podem construir pontes</strong>.
              </p>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-blue-800 font-medium text-lg">
                <Heart className="w-5 h-5 inline mr-2" />
                Você não está sozinho(a) nesta preocupação. Milhares de pais e avós no Brasil compartilham desta angústia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainValidationSection;
