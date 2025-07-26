import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "O eBook é realmente gratuito?",
      answer: "Sim! O eBook é completamente gratuito. Nossa missão é ajudar o maior número possível de famílias a navegar com segurança no mundo digital, inspirados pelo exemplo de São Carlos Acutis."
    },
    {
      question: "Como Carlos Acutis pode ajudar na educação digital?",
      answer: "Carlos Acutis é um exemplo único de como usar a tecnologia com propósito divino. Ele criou sites, usou a internet para evangelizar e manteve um equilíbrio saudável. Seu exemplo nos ensina que a tecnologia pode ser uma ferramenta de bem quando usada com sabedoria e fé."
    },
    {
      question: "O material é adequado para avós que não entendem muito de tecnologia?",
      answer: "Absolutamente! O guia foi pensado especialmente para pais e avós de todas as idades. Usamos linguagem simples, explicações claras e exemplos práticos. Você não precisa ser um especialista em tecnologia para aplicar as orientações."
    },
    {
      question: "Que idade meus filhos/netos devem ter para aplicar essas orientações?",
      answer: "As orientações servem para crianças e adolescentes de todas as idades. O material aborda desde os primeiros contatos com dispositivos (2-5 anos) até adolescentes (15+ anos), sempre com abordagens adequadas para cada faixa etária."
    },
    {
      question: "O conteúdo é baseado apenas na fé católica?",
      answer: "Embora seja inspirado em São Carlos Acutis, as orientações práticas sobre segurança digital, controles parentais e uso consciente da tecnologia são universais e podem ser aplicadas por famílias de diferentes backgrounds religiosos."
    },
    {
      question: "Como recebo o eBook após o download?",
      answer: "Após clicar no botão de download, você receberá imediatamente um link por email com o arquivo PDF. O material estará disponível para download em até 5 minutos."
    },
    {
      question: "Posso compartilhar o eBook com outros pais?",
      answer: "Sim! Incentivamos o compartilhamento responsável. Você pode compartilhar o link desta página com outros pais e avós para que eles também possam baixar gratuitamente."
    },
    {
      question: "O material é atualizado regularmente?",
      answer: "Sim! O mundo digital evolui rapidamente, por isso atualizamos o conteúdo regularmente. Quem faz o download recebe notificações sobre atualizações importantes."
    },
    {
      question: "Existe algum suporte ou comunidade para tirar dúvidas?",
      answer: "Após o download, você receberá acesso a uma comunidade online exclusiva onde pode tirar dúvidas, compartilhar experiências e receber suporte de outros pais e especialistas."
    },
    {
      question: "As ferramentas mencionadas funcionam em todos os dispositivos?",
      answer: "O guia aborda ferramentas e estratégias que funcionam em smartphones, tablets, computadores e Smart TVs, tanto Android quanto iOS, Windows e outros sistemas operacionais."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HelpCircle className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Perguntas Frequentes
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Tire suas Dúvidas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as principais dúvidas sobre o eBook e 
            como aplicar os ensinamentos de Carlos Acutis em sua família.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional help */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-3">
              Ainda tem dúvidas?
            </h3>
            <p className="text-white/90 mb-6">
              Nossa equipe está aqui para ajudar você e sua família a navegar 
              com segurança no mundo digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="mailto:contato@example.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Enviar Email
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-medium rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;