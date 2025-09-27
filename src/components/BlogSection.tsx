import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Introdução ao Machine Learning com Python",
      excerpt: "Explorando os conceitos básicos de ML e como começar sua jornada com scikit-learn e pandas.",
      category: "Machine Learning",
      date: "2024-01-15",
      readTime: "5 min",
      featured: true
    },
    {
      id: 2,
      title: "Automatizando Tarefas Repetitivas com Python",
      excerpt: "Como criar scripts de automação eficientes para otimizar seu workflow diário.",
      category: "Automação",
      date: "2024-01-10",
      readTime: "8 min",
      featured: false
    },
    {
      id: 3,
      title: "Data Science na Prática: Análise de Dados",
      excerpt: "Técnicas práticas para análise e visualização de dados usando matplotlib e seaborn.",
      category: "Data Science",
      date: "2024-01-05",
      readTime: "12 min",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Blog & Artigos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Compartilho aqui conhecimentos, experiências e insights sobre tecnologia, 
            programação e desenvolvimento de software. Acompanhe minha jornada de aprendizado!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id}
              className={`hover:shadow-elegant transition-all duration-300 animate-fade-in-up cursor-pointer group ${
                post.featured ? 'ring-2 ring-accent ring-opacity-50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground">
                    {post.category}
                  </Badge>
                  {post.featured && (
                    <Badge variant="outline" className="text-primary border-primary">
                      Destaque
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between hover:bg-accent/10 group-hover:text-primary"
                >
                  Ler Artigo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
            Ver Todos os Artigos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;