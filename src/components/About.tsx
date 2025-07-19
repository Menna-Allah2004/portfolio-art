import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Users, Award } from 'lucide-react';
import workspaceImage from '@/assets/workspace.jpg';

const About = () => {
  const stats = [
    { icon: Star, number: '50+', label: 'مشاريع مكتملة' },
    { icon: Users, number: '30+', label: 'عميل سعيد' },
    { icon: Award, number: '5+', label: 'سنوات خبرة' },
    { icon: Heart, number: '100%', label: 'شغف بالتصميم' },
  ];

  const values = [
    'الإبداع والابتكار',
    'الجودة والتميز',
    'الاهتمام بالتفاصيل',
    'التواصل الفعال',
    'الالتزام بالمواعيد',
    'الشغف بالتطوير'
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-6">
            من أنا؟
          </h2>
          <p className="font-poppins text-xl text-muted-foreground max-w-3xl mx-auto">
            مصممة شغوفة بتحويل الأفكار إلى واقع رقمي جميل ووظيفي
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src={workspaceImage} 
                alt="Workspace" 
                className="rounded-2xl shadow-elegant w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="card-elegant p-6 text-center hover:shadow-glow transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="font-playfair text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <p className="font-poppins text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl font-semibold text-foreground">
                رحلتي في عالم التصميم
              </h3>
              
              <div className="space-y-4 font-poppins text-muted-foreground leading-relaxed">
                <p>
                  بدأت رحلتي في عالم التصميم منذ أكثر من 5 سنوات، حيث اكتشفت شغفي بتحويل الأفكار المعقدة إلى تصاميم بصرية جذابة وسهلة الفهم.
                </p>
                
                <p>
                  أؤمن بأن التصميم الجيد ليس مجرد شكل جميل، بل هو حل إبداعي يلبي احتياجات المستخدمين ويحقق أهداف العمل. لذلك أركز على فهم عميق لمتطلبات كل مشروع.
                </p>
                
                <p>
                  أسعى دائماً لتطوير مهاراتي ومواكبة أحدث اتجاهات التصميم، مما يمكنني من تقديم حلول مبتكرة ومعاصرة لعملائي.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h4 className="font-playfair text-xl font-semibold text-foreground">
                قيمي في العمل
              </h4>
              
              <div className="flex flex-wrap gap-3">
                {values.map((value, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="font-poppins px-4 py-2 text-sm bg-gradient-accent text-accent-foreground hover:shadow-elegant transition-all duration-300"
                  >
                    {value}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Quote */}
            <Card className="card-elegant p-6 bg-gradient-primary/10 border-primary/20">
              <blockquote className="font-poppins text-lg italic text-foreground text-center">
                "التصميم ليس مجرد كيف يبدو أو كيف يشعر. التصميم هو كيف يعمل."
              </blockquote>
              <cite className="block text-center mt-4 font-poppins text-sm text-muted-foreground">
                - ستيف جوبز
              </cite>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;