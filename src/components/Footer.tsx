import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-primary text-primary-foreground py-12 relative">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          <div className="font-playfair text-3xl font-bold mb-4">
            Portfolio
          </div>
          
          <p className="font-poppins text-primary-foreground/80 max-w-2xl mx-auto">
            شكراً لزيارتك لمعرض أعمالي. أتطلع للعمل معك وتحويل أفكارك إلى تصاميم استثنائية
          </p>

          <div className="flex flex-wrap justify-center gap-8 py-8">
            {['الرئيسية', 'من أنا', 'مهاراتي', 'أعمالي', 'تواصل معي'].map((link, index) => (
              <a
                key={index}
                href={`#${['home', 'about', 'skills', 'projects', 'contact'][index]}`}
                className="font-poppins hover:text-accent transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="border-t border-primary-foreground/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-poppins text-sm text-primary-foreground/60">
                © {currentYear} جميع الحقوق محفوظة.
              </p>
              
              <div className="flex items-center gap-2 font-poppins text-sm text-primary-foreground/60">
                صُمم بـ
                <Heart className="h-4 w-4 text-accent fill-current" />
                باستخدام React & Tailwind CSS
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-6 left-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow z-50"
          aria-label="العودة للأعلى"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;