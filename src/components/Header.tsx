import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Patologías", href: "#patologias" },
  { label: "FAQ", href: "#faq" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Contacto", href: "#contacto" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#inicio");
          }}
          className="font-heading text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
        >
          Fisiopao
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-accent/50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="hero"
            size="default"
            onClick={() => scrollToSection("#agendamiento")}
            className="gap-2"
          >
            <Calendar className="w-4 h-4" />
            Agendar cita
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border shadow-elevated animate-fade-in">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#agendamiento")}
              className="mt-4 gap-2"
            >
              <Calendar className="w-4 h-4" />
              Agendar cita
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
