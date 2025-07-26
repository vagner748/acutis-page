import { Card } from "@/components/ui/card";
import { Shield, Heart, Users, BookOpen, Smartphone, Home } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Proteção Digital",
      description: "Ferramentas e estratégias para manter sua família segura online"
    },
    {
      icon: Heart,
      title: "Valores Cristãos",
      description: "Integre a fé no uso da tecnologia, seguindo o exemplo de Carlos Acutis"
    },
    {
      icon: Users,
      title: "União Familiar",
      description: "Fortaleça os laços familiares através de uma navegação consciente"
    },
    {
      icon: BookOpen,
      title: "Educação Contínua",
      description: "Aprenda constantemente sobre as novas tecnologias e seus desafios"
    },
    {
      icon: Smartphone,
      title: "Uso Consciente",
      description: "Desenvolva hábitos saudáveis no uso de dispositivos digitais"
    },
    {
      icon: Home,
      title: "Ambiente Seguro",
      description: "Crie um lar onde a tecnologia serve ao bem da família"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Benefícios</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Transforme sua Família Digital
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra como mais de 50 mil pais e avós estão criando ambientes digitais 
            mais seguros e saudáveis para suas famílias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">93%</div>
            <div className="text-muted-foreground">das crianças e adolescentes têm dificuldades em se desconectar</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Em um minuto</div>
            <div className="text-muted-foreground">crianças podem acessar conteúdo adulto sem supervisão</div>
          </div>
          <div className="text-3xl font-bold text-center">
            <div className="text-primary mb-2">Seja um ministério</div>
            <div className="text-muted-foreground">junto aos filhos e netos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3 horas</div>
            <div className="text-muted-foreground">de tela por dia</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;