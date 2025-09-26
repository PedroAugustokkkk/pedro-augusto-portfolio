import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  // Placeholder projects - will be filled with real GitHub projects later
  const projects = [
    {
      id: 1,
      title: "Projeto GitHub 1",
      description: "Descrição detalhada do primeiro projeto. Este espaço será preenchido com informações do projeto real do GitHub.",
      technologies: ["Python", "Machine Learning", "Pandas"],
      githubUrl: "#",
      liveUrl: "#",
      placeholder: true
    },
    {
      id: 2,
      title: "Projeto GitHub 2", 
      description: "Descrição detalhada do segundo projeto. Este espaço será preenchido com informações do projeto real do GitHub.",
      technologies: ["Python", "Data Science", "Visualization"],
      githubUrl: "#",
      liveUrl: "#",
      placeholder: true
    },
    {
      id: 3,
      title: "Projeto GitHub 3",
      description: "Descrição detalhada do terceiro projeto. Este espaço será preenchido com informações do projeto real do GitHub.",
      technologies: ["Python", "Automation", "AI"],
      githubUrl: "#",
      liveUrl: "#", 
      placeholder: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Meus Projetos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma seleção dos meus principais projetos em Python, focados em 
            inteligência artificial, ciência de dados e automação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  {project.placeholder && (
                    <Badge variant="outline" className="text-xs text-highlight border-highlight">
                      Em breve
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="text-xs bg-secondary/60"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 group-hover:border-accent group-hover:text-accent transition-colors duration-300"
                    disabled={project.placeholder}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 group-hover:border-accent group-hover:text-accent transition-colors duration-300"
                    disabled={project.placeholder}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Mais projetos disponíveis no meu GitHub
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            <Github className="h-5 w-5 mr-2" />
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;