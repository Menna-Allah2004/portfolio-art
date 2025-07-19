import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Palette, 
  Code, 
  Smartphone, 
  Monitor, 
  Layers, 
  Zap,
  Figma,
  ImageIcon,
  Brush,
  Globe
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'تصميم الجرافيك',
      icon: Palette,
      skills: [
        { name: 'Adobe Photoshop', level: 95 },
        { name: 'Adobe Illustrator', level: 90 },
        { name: 'Adobe InDesign', level: 85 },
        { name: 'Canva Pro', level: 88 }
      ]
    },
    {
      title: 'تصميم الويب',
      icon: Monitor,
      skills: [
        { name: 'UI/UX Design', level: 92 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Figma', level: 88 },
        { name: 'Adobe XD', level: 85 }
      ]
    },
    {
      title: 'تطوير المواقع',
      icon: Code,
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'React', level: 70 },
        { name: 'WordPress', level: 80 }
      ]
    },
    {
      title: 'التصميم الرقمي',
      icon: Smartphone,
      skills: [
        { name: 'Mobile App Design', level: 88 },
        { name: 'Social Media Design', level: 95 },
        { name: 'Brand Identity', level: 90 },
        { name: 'Print Design', level: 85 }
      ]
    }
  ];

  const tools = [
    { name: 'Adobe Creative Suite', icon: ImageIcon },
    { name: 'Figma', icon: Figma },
    { name: 'Sketch', icon: Layers },
    { name: 'Canva', icon: Brush },
    { name: 'WordPress', icon: Globe },
    { name: 'Webflow', icon: Zap }
  ];

  const softSkills = [
    'التفكير الإبداعي',
    'حل المشكلات',
    'إدارة الوقت',
    'التواصل الفعال',
    'العمل الجماعي',
    'التكيف والمرونة',
    'الاهتمام بالتفاصيل',
    'القيادة الإبداعية'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-6">
            مهاراتي وخبراتي
          </h2>
          <p className="font-poppins text-xl text-muted-foreground max-w-3xl mx-auto">
            مجموعة متنوعة من المهارات التقنية والإبداعية لتحقيق رؤيتك
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-elegant p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground mr-4">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-poppins text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="font-poppins text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools & Software */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl font-semibold text-center mb-8 gradient-text">
            الأدوات والبرامج
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="card-elegant p-6 text-center hover:shadow-glow transition-all duration-300 group">
                <tool.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-poppins text-sm font-medium text-foreground">
                  {tool.name}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="font-playfair text-2xl font-semibold mb-8 gradient-text">
            المهارات الشخصية
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="font-poppins px-6 py-3 text-sm bg-gradient-accent text-accent-foreground hover:shadow-elegant transition-all duration-300 transform hover:scale-105"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-elegant p-8 bg-gradient-primary/10 border-primary/20 max-w-2xl mx-auto">
            <h4 className="font-playfair text-xl font-semibold mb-4 gradient-text">
              هل لديك مشروع في ذهنك؟
            </h4>
            <p className="font-poppins text-muted-foreground mb-6">
              دعني أساعدك في تحويل فكرتك إلى تصميم استثنائي يحقق أهدافك
            </p>
            <div className="flex justify-center">
              <a 
                href="#contact" 
                className="font-poppins px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                تواصل معي الآن
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;