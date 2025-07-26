import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">CA</span>
          </div>
          <span className="font-serif font-semibold text-lg text-foreground">Carlos Acutis</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a onClick={() => handleScroll('sobre')} className="text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </a>
          <a onClick={() => handleScroll('ebook')} className="text-muted-foreground hover:text-foreground transition-colors">
            eBook
          </a>
          <a onClick={() => handleScroll('beneficios')} className="text-muted-foreground hover:text-foreground transition-colors">
            Benefícios
          </a>
          <a onClick={() => handleScroll('testemunhos')} className="text-muted-foreground hover:text-foreground transition-colors">
            Testemunhos
          </a>
          <a onClick={() => handleScroll('faq')} className="text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="cta" size="sm" onClick={() => handleScroll('ebook')}>
            Baixar eBook
          </Button>
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden bg-background/95 backdrop-blur-sm border-b border-border overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'}`}
      >
        <nav className="flex flex-col items-center space-y-4">
          <a onClick={() => handleScroll('sobre')} className="text-foreground hover:text-primary transition-colors text-lg">
            Sobre
          </a>
          <a onClick={() => handleScroll('ebook')} className="text-foreground hover:text-primary transition-colors text-lg">
            eBook
          </a>
          <a onClick={() => handleScroll('beneficios')} className="text-foreground hover:text-primary transition-colors text-lg">
            Benefícios
          </a>
          <a onClick={() => handleScroll('testemunhos')} className="text-foreground hover:text-primary transition-colors text-lg">
            Testemunhos
          </a>
          <a onClick={() => handleScroll('faq')} className="text-foreground hover:text-primary transition-colors text-lg">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;