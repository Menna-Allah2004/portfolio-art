import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'تصميم هوية بصرية',
      description: 'تصميم هوية بصرية متكاملة لشركة ناشئة في مجال التكنولوجيا تشمل الشعار والألوان والخطوط',
      image: project1,
      category: 'branding',
      tags: ['Branding', 'Logo Design', 'Visual Identity'],
      technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'موقع تجارة إلكترونية',
      description: 'تصميم وتطوير موقع تجارة إلكترونية عصري وسهل الاستخدام مع واجهة مستخدم جذابة',
      image: project3,
      category: 'web',
      tags: ['Web Design', 'E-commerce', 'UI/UX'],
      technologies: ['Figma', 'React', 'CSS', 'JavaScript'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'تطبيق جوال',
      description: 'تصميم واجهة مستخدم لتطبيق جوال لإدارة المهام اليومية بتصميم بديهي وعصري',
      image: project2,
      category: 'mobile',
      tags: ['Mobile App', 'UI Design', 'User Experience'],
      technologies: ['Figma', 'Adobe XD', 'Principle'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 4,
      title: 'حملة إعلانية رقمية',
      description: 'تصميم حملة إعلانية متكاملة لوسائل التواصل الاجتماعي مع محتوى بصري جذاب',
      image: project1,
      category: 'marketing',
      tags: ['Social Media', 'Digital Marketing', 'Visual Content'],
      technologies: ['Canva', 'Photoshop', 'After Effects'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 5,
      title: 'منصة تعليمية',
      description: 'تصميم منصة تعليمية تفاعلية مع واجهة مستخدم سهلة وتجربة تعلم ممتعة',
      image: project3,
      category: 'web',
      tags: ['Educational Platform', 'Web Design', 'Interactive Design'],
      technologies: ['Figma', 'Vue.js', 'Tailwind CSS'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 6,
      title: 'تصميم مطبوعات',
      description: 'تصميم مجموعة من المطبوعات التسويقية الأنيقة بما في ذلك البروشورات والكتيبات',
      image: project2,
      category: 'print',
      tags: ['Print Design', 'Brochure', 'Marketing Materials'],
      technologies: ['InDesign', 'Photoshop', 'Illustrator'],
      demoLink: '#',
      codeLink: '#'
    }
  ];

  const filters = [
    { key: 'all', label: 'جميع المشاريع' },
    { key: 'web', label: 'مواقع الويب' },
    { key: 'mobile', label: 'تطبيقات الجوال' },
    { key: 'branding', label: 'الهوية البصرية' },
    { key: 'marketing', label: 'التسويق الرقمي' },
    { key: 'print', label: 'المطبوعات' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-6">
            معرض أعمالي
          </h2>
          <p className="font-poppins text-xl text-muted-foreground max-w-3xl mx-auto">
            مجموعة مختارة من أفضل مشاريعي التي تعكس شغفي بالتصميم والإبداع
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              variant={activeFilter === filter.key ? "default" : "outline"}
              className={`font-poppins transition-all duration-300 ${
                activeFilter === filter.key 
                  ? 'hero-button' 
                  : 'hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="card-elegant overflow-hidden group hover:shadow-glow transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary/0 group-hover:bg-gradient-primary/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="bg-background/90 hover:bg-background"
                      asChild
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <Eye className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="bg-background/90 hover:bg-background"
                      asChild
                    >
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="font-poppins text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="font-poppins text-xs bg-gradient-accent/50 text-accent-foreground hover:bg-gradient-accent transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-border/50">
                  <p className="font-poppins text-xs text-muted-foreground mb-2">
                    التقنيات المستخدمة:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="font-poppins text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-elegant p-8 bg-gradient-primary/10 border-primary/20 max-w-2xl mx-auto">
            <h4 className="font-playfair text-xl font-semibold mb-4 gradient-text">
              أعجبتك أعمالي؟
            </h4>
            <p className="font-poppins text-muted-foreground mb-6">
              دعنا نتعاون معاً لإنشاء مشروعك القادم بتصميم استثنائي ومميز
            </p>
            <Button className="hero-button font-poppins">
              ابدأ مشروعك الآن
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;