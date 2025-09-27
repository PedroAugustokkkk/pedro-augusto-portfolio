import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Bot, Zap, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "Python", icon: Code, description: "Linguagem principal para desenvolvimento" },
    { name: "Inteligência Artificial", icon: Brain, description: "Desenvolvimento de sistemas inteligentes" },
    { name: "Machine Learning", icon: TrendingUp, description: "Modelos preditivos e análise de dados" },
    { name: "Data Science", icon: Database, description: "Análise e visualização de dados" },
    { name: "Automação", icon: Bot, description: "Scripts e processos automatizados" },
    { name: "Otimização", icon: Zap, description: "Performance e eficiência de sistemas" }
  ];

  const technologies = [
    "Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch",
    "Matplotlib", "Seaborn", "Jupyter", "SQL", "Git", "Docker"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Sobre Mim
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bem-vindo ao meu blog pessoal! Sou estudante de Engenharia de Software apaixonado por 
            tecnologia, focado em criar soluções inovadoras através de dados, inteligência artificial 
            e automação. Aqui compartilho conhecimentos, projetos e experiências da minha jornada.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={skill.name} 
                className="p-6 hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-0 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-accent rounded-lg mr-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{skill.name}</h3>
                </div>
                <p className="text-muted-foreground">{skill.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-primary mb-8">
            Tecnologias & Ferramentas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-secondary/80 hover:bg-accent hover:text-accent-foreground transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;