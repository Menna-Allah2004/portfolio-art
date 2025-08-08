import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Clock,
  CheckCircle,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "تم إرسال الرسالة بنجاح!",
        description: "سأقوم بالرد عليك في أقرب وقت ممكن.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      content: 'hello@portfolio.com',
      link: 'mailto:hello@portfolio.com'
    },
    {
      icon: Phone,
      title: 'رقم الهاتف',
      content: '+966 50 123 4567',
      link: 'tel:+966501234567'
    },
    {
      icon: MapPin,
      title: 'الموقع',
      content: 'الرياض، المملكة العربية السعودية',
      link: '#'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      content: 'الأحد - الخميس: 9:00 - 18:00',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-6">
            تواصل معي
          </h2>
          <p className="font-poppins text-xl text-muted-foreground max-w-3xl mx-auto">
            هل لديك فكرة مشروع؟ أو تريد الاستفسار عن خدماتي؟ لا تتردد في التواصل معي
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="card-elegant p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground ml-4">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-foreground">
                  أرسل لي رسالة
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-poppins text-sm font-medium text-foreground mb-2">
                      الاسم *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="اسمك الكامل"
                      required
                      className="font-poppins"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins text-sm font-medium text-foreground mb-2">
                      البريد الإلكتروني *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      required
                      className="font-poppins"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-poppins text-sm font-medium text-foreground mb-2">
                    موضوع الرسالة *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="ما هو موضوع رسالتك؟"
                    required
                    className="font-poppins"
                  />
                </div>

                <div>
                  <label className="block font-poppins text-sm font-medium text-foreground mb-2">
                    الرسالة *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="اكتب رسالتك هنا..."
                    rows={6}
                    required
                    className="font-poppins resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="hero-button font-poppins w-full text-lg py-6"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                      جار الإرسال...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      إرسال الرسالة
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-semibold gradient-text mb-8">
                معلومات التواصل
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="card-elegant p-6 hover:shadow-glow transition-all duration-300 group">
                    <div className="flex items-start">
                      <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground ml-4 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-poppins font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <a 
                          href={info.link}
                          className="font-poppins text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-playfair text-xl font-semibold gradient-text mb-6">
                تابعني على وسائل التواصل
              </h4>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Why Work With Me */}
            <Card className="card-elegant p-6 bg-gradient-primary/10 border-primary/20">
              <h4 className="font-playfair text-xl font-semibold gradient-text mb-4">
                لماذا تختارني؟
              </h4>
              
              <div className="space-y-3">
                {[
                  'استجابة سريعة خلال 24 ساعة',
                  'تصاميم احترافية ومبتكرة',
                  'التزام كامل بالمواعيد المحددة',
                  'تواصل واضح ومستمر',
                  'دعم مجاني بعد التسليم'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary ml-3 flex-shrink-0" />
                    <span className="font-poppins text-sm text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;