import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-elegant' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-playfair text-2xl font-bold gradient-text">
            Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            {['الرئيسية', 'عني', 'المهارات', 'المشاريع', 'التواصل'].map((item, index) => {
              const sections = ['home', 'about', 'skills', 'projects', 'contact'];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sections[index])}
                  className="font-poppins text-foreground hover:text-primary transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              );
            })}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hero-button font-poppins"
            >
              تواصل معي
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-card/95 backdrop-blur-md rounded-lg shadow-elegant animate-fade-in-up">
            <div className="flex flex-col space-y-4 px-4">
              {['الرئيسية', 'عني', 'المهارات', 'المشاريع', 'التواصل'].map((item, index) => {
                const sections = ['home', 'about', 'skills', 'projects', 'contact'];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sections[index])}
                    className="font-poppins text-foreground hover:text-primary transition-colors duration-200 text-right py-2"
                  >
                    {item}
                  </button>
                );
              })}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="hero-button font-poppins mt-4"
              >
                تواصل معي
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;