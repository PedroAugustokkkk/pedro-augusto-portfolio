import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Content */}
      <div className="container relative z-10 text-center text-white px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Pedro Augusto
            <br />
            <span className="text-highlight">Santos Magalhães</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
            Estudante de Engenharia de Software
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Especialização em Python, Inteligência Artificial, Machine Learning, 
            Data Science e Automação
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-highlight text-highlight-foreground hover:bg-highlight/90 transition-all duration-300 shadow-glow"
              onClick={() => {
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver Projetos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Entre em Contato
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:text-highlight hover:bg-white/10 transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:text-highlight hover:bg-white/10 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:text-highlight hover:bg-white/10 transition-all duration-300"
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-highlight rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-highlight rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;