import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, BookOpen, Users, Star } from "lucide-react";

const EbookSection = () => {
  return (
    <section id="ebook" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">eBook Gratuito</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Guia Completo para a Era Digital
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra como Carlos Acutis pode inspirar sua família a navegar com segurança 
            e propósito no mundo digital de hoje.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* eBook Preview */}
          <div className="relative">
            <div className="bg-gradient-warm p-8 rounded-2xl shadow-warm transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-xl p-6 shadow-soft">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    Proteja sua Família na Era Digital
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Guia Inspirado em São Carlos Acutis
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <span>📱 Segurança Digital</span>
                    <span>👨‍👩‍👧‍👦 Para Famílias</span>
                    <span>🙏 Baseado na Fé</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Badge */}
            <div className="absolute -top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-glow">
              <span className="font-bold">GRÁTIS</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                O que você vai aprender:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Educação Digital Cristã</h4>
                    <p className="text-muted-foreground">Como ensinar valores cristãos no ambiente digital</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Ferramentas de Proteção</h4>
                    <p className="text-muted-foreground">Controles parentais e recursos de segurança</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Diálogo em Família</h4>
                    <p className="text-muted-foreground">Como conversar sobre tecnologia com amor e sabedoria</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Exemplo de Carlos Acutis</h4>
                    <p className="text-muted-foreground">Inspiração do primeiro santo da era digital</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">50k+</div>
                <div className="text-xs text-muted-foreground">Famílias</div>
              </Card>
              <Card className="p-4 text-center">
                <Star className="w-6 h-6 text-accent-foreground mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">4.9</div>
                <div className="text-xs text-muted-foreground">Avaliação</div>
              </Card>
              <Card className="p-4 text-center">
                <Download className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">100%</div>
                <div className="text-xs text-muted-foreground">Gratuito</div>
              </Card>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <Button variant="cta" size="lg" className="w-full text-lg">
                <Download className="w-5 h-5 mr-2" />
                Baixar eBook Gratuito Agora
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Sem spam • Sem cobrança • Acesso imediato
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookSection;