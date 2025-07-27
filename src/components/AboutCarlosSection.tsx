import { Card } from "@/components/ui/card";
import { Heart, Globe, Users, BookOpen } from "lucide-react";

const AboutCarlosSection = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-6 h-6 text-primary" />
                <span className="text-primary font-medium uppercase tracking-wider text-sm">
                  São Carlos Acutis
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                O Primeiro Santo da Era Digital
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Carlos Acutis (1991-2006) foi um jovem italiano que usou a tecnologia 
                para evangelizar e servir a Deus. Beatificado em 2020, ele é considerado 
                o patrono da internet e um modelo para jovens de todo o mundo.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Por que ele inspira nossa abordagem digital?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Usou a internet para o bem:</strong> Criou sites sobre milagres eucarísticos 
                    para evangelizar outros jovens
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Equilibrio saudável:</strong> Sabia quando se desconectar para orar, 
                    estudar e estar com a família
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong>Propósito divino:</strong> Via a tecnologia como uma ferramenta 
                    para servir a Deus e ao próximo
                  </p>
                </div>
              </div>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground">
              "A internet é um dom de Deus"
              <cite className="block text-sm font-medium text-foreground mt-2">
                - São Carlos Acutis
              </cite>
            </blockquote>
          </div>

          {/* Cards with info */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Patrono da Internet</h3>
                  <p className="text-muted-foreground text-sm">
                    Carlos é reconhecido como o padroeiro dos programadores, 
                    webdesigners e de todos que trabalham na área digital.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-warm-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Exemplo para Famílias</h3>
                  <p className="text-muted-foreground text-sm">
                    Sua vida mostra como a tecnologia pode unir famílias 
                    ao invés de separá-las, quando usada com sabedoria.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Educação Digital</h3>
                  <p className="text-muted-foreground text-sm">
                    Ensinou que podemos usar as redes sociais e a internet 
                    para crescer espiritualmente e ajudar outros.
                  </p>
                </div>
              </div>
            </Card>

            {/* Quote card */}
            <Card className="p-6 bg-gradient-warm">
              <div className="text-center">
                <h3 className="font-serif text-xl font-bold text-warm-foreground mb-3">
                  "Todos nascem como originais, mas muitos morrem como fotocópias"
                </h3>
                <p className="text-warm-foreground/80 text-sm">
                  Uma das frases mais famosas de Carlos Acutis, que nos lembra 
                  da importância de ser autêntico, mesmo no mundo digital.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCarlosSection;