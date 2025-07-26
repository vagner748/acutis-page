import { Heart, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CA</span>
              </div>
              <span className="font-serif font-semibold text-lg text-foreground">Carlos Acutis</span>
            </div>
            <p className="text-muted-foreground">
              Inspirando famílias a navegar com segurança e propósito 
              no mundo digital, seguindo o exemplo de São Carlos Acutis.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm">Feito com amor para sua família</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#sobre" className="block text-muted-foreground hover:text-primary transition-colors">
                Sobre Carlos Acutis
              </a>
              <a href="#ebook" className="block text-muted-foreground hover:text-primary transition-colors">
                Baixar eBook
              </a>
              <a href="#beneficios" className="block text-muted-foreground hover:text-primary transition-colors">
                Benefícios
              </a>
              <a href="#testemunhos" className="block text-muted-foreground hover:text-primary transition-colors">
                Testemunhos
              </a>
              <a href="#faq" className="block text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Recursos</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Comunidade Online
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Materiais Extras
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Suporte
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Blog
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="mailto:contato@example.com" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contato@example.com</span>
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-medium text-foreground mb-3">Nos siga</h4>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-8 h-8 bg-muted-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <span className="text-xs font-bold">f</span>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-muted-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <span className="text-xs font-bold">@</span>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-muted-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <span className="text-xs font-bold">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 Projeto Carlos Acutis. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;