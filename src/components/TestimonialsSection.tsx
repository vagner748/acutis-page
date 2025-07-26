import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Mãe de 3 filhos",
      location: "São Paulo, SP",
      content: "Este eBook mudou completamente nossa relação com a tecnologia em casa. Agora meus filhos entendem a importância de usar a internet de forma responsável e com propósito.",
      rating: 5,
      initials: "MS"
    },
    {
      name: "João Santos",
      role: "Avô e Educador",
      location: "Rio de Janeiro, RJ",
      content: "Como avô, eu me sentia perdido com toda essa tecnologia. O guia me ajudou a me conectar melhor com meus netos e a orientá-los de forma amorosa e segura.",
      rating: 5,
      initials: "JS"
    },
    {
      name: "Ana Costa",
      role: "Mãe de adolescentes",
      location: "Belo Horizonte, MG",
      content: "Os ensinamentos baseados em Carlos Acutis trouxeram uma perspectiva única. Meus filhos agora veem a tecnologia como uma ferramenta para servir a Deus e ao próximo.",
      rating: 5,
      initials: "AC"
    },
    {
      name: "Carlos Oliveira",
      role: "Pai e Pastor",
      location: "Brasília, DF",
      content: "Recomendo este material para todas as famílias da nossa comunidade. É prático, baseado na fé e realmente funciona no dia a dia.",
      rating: 5,
      initials: "CO"
    },
    {
      name: "Isabel Ferreira",
      role: "Avó de 7 netos",
      location: "Salvador, BA",
      content: "Mesmo sendo de uma geração diferente, consegui entender e aplicar as orientações. Agora me sinto mais confiante para orientar meus netos.",
      rating: 5,
      initials: "IF"
    },
    {
      name: "Roberto Lima",
      role: "Pai de gêmeos",
      location: "Recife, PE",
      content: "O material é muito completo e fácil de entender. As ferramentas de controle parental que aprendi aqui são fantásticas.",
      rating: 5,
      initials: "RL"
    }
  ];

  return (
    <section id="testemunhos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Quote className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Testemunhos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Famílias Transformadas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como outras famílias estão aplicando os ensinamentos de Carlos Acutis 
            em suas vidas digitais e colhendo frutos abençoados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-foreground text-accent-foreground" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback className="bg-gradient-primary text-white">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-warm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-warm-foreground mb-4">
              Junte-se a mais de 50.000 famílias
            </h3>
            <p className="text-warm-foreground/80 mb-6">
              que já estão vivendo uma experiência digital mais segura e abençoada
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-warm-foreground">4.9</div>
                <div className="text-sm text-warm-foreground/70">Avaliação</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-warm-foreground">50k+</div>
                <div className="text-sm text-warm-foreground/70">Downloads</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-warm-foreground">98%</div>
                <div className="text-sm text-warm-foreground/70">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;