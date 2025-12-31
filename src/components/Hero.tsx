import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-physiotherapy.jpg";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fisioterapia domiciliaria profesional en Tunja"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Atención domiciliaria en Tunja
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
            La fisioterapia: la{" "}
            <span className="text-gradient">llave maestra</span> para abrir las
            puertas de una vida sin límites.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl animate-fade-up animation-delay-200">
            Cuidamos tu salud con atención fisioterapéutica personalizada en
            casa, adaptada a cada etapa de la vida y a cada necesidad. Más de 4
            años transformando vidas en Tunja, Boyacá.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#agendamiento")}
              className="gap-3"
            >
              <Calendar className="w-5 h-5" />
              Agenda tu valoración
            </Button>
            <Button
              variant="whatsapp"
              size="xl"
              asChild
            >
              <a
                href="https://wa.me/573133035084?text=Hola%20Fisiopao,%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Habla por WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-border/50 animate-fade-up animation-delay-400">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary">4+</span>
              <span className="text-sm text-muted-foreground">
                Años de<br />experiencia
              </span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary">500+</span>
              <span className="text-sm text-muted-foreground">
                Pacientes<br />atendidos
              </span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary">100%</span>
              <span className="text-sm text-muted-foreground">
                Atención<br />personalizada
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-gentle">
        <button
          onClick={() => scrollToSection("#sobre-mi")}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to next section"
        >
          <span className="text-xs font-medium">Conoce más</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
