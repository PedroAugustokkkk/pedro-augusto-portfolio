import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Calendar } from "lucide-react";

const ContactSection = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "contatodepedro@gmail.com",
      href: "mailto:contatodepedro@gmail.com",
      description: "Melhor forma de me contatar"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Pedro Magalhães",
      href: "https://www.linkedin.com/in/pedro-augusto-841b0b2b0/",
      description: "Conecte-se comigo"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@PedroAugustokkkk",
      href: "https://github.com/PedroAugustokkkk",
      description: "Veja meus projetos"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Salvador, Bahia, Brasil",
      href: "#",
      description: "Disponível para trabalho remoto"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos Conversar
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Estou sempre aberto a novas oportunidades e colaborações. 
            Se você tem um projeto em mente ou quer bater um papo sobre tecnologia, 
            entre em contato!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
               <Card 
                key={contact.label}
                className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => contact.href !== '#' && window.open(contact.href, '_blank')}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-highlight rounded-lg">
                      <Icon className="h-6 w-6 text-highlight-foreground" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-highlight text-sm font-medium mb-2">
                    {contact.value}
                  </p>
                  <p className="text-white/70 text-xs">
                    {contact.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="mb-8">
            <Calendar className="h-6 w-6 mx-auto mb-2 text-highlight" />
            <p className="text-white/90">
              Disponível para projetos freelance e oportunidades full-time
            </p>
          </div>
          
          <Button 
            size="lg"
            className="bg-highlight text-highlight-foreground hover:bg-highlight/90 transition-all duration-300 shadow-glow"
            onClick={() => window.open('mailto:contatodepedro@gmail.com', '_blank')}
          >
            <Mail className="h-5 w-5 mr-2" />
            Enviar Email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;