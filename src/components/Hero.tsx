import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/20 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <p className="font-poppins text-lg text-muted-foreground animate-fade-in-up">
                مرحباً، أنا
              </p>
              
              <h1 className="font-playfair text-5xl md:text-7xl font-bold gradient-text leading-tight animate-fade-in-up delay-200">
                مصممة إبداعية
              </h1>
              
              <p className="font-poppins text-xl text-muted-foreground max-w-lg animate-fade-in-up delay-400">
                أحول الأفكار إلى تصاميم استثنائية تجمع بين الجمال والوظائف العملية
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-600">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="hero-button font-poppins text-lg px-8 py-6"
              >
                مشاهدة أعمالي
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="font-poppins text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="mr-2 h-5 w-5" />
                تحميل السيرة الذاتية
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-8 animate-fade-in-up delay-800">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <span className="font-poppins">hello@portfolio.com</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center animate-fade-in-up delay-300">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow floating-animation">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up delay-1000">
        <div className="flex flex-col items-center animate-bounce">
          <span className="font-poppins text-sm text-muted-foreground mb-2">مرر للأسفل</span>
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;