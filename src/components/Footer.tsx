import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/fisiopao_tunja",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/1GBrjHzxFf/",
  },
];

const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="section-padding pb-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#inicio" className="inline-block mb-6">
                <span className="font-heading text-3xl font-bold text-primary-foreground">
                  Fisiopao
                </span>
              </a>
              <p className="text-background/70 leading-relaxed mb-6 max-w-md">
                Fisioterapia domiciliaria y virtual de calidad en Tunja, Boyacá. 
                Más de 4 años transformando vidas a través del movimiento y la rehabilitación personalizada.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
                <a
                  href="https://www.tiktok.com/@fisiopaotunja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                  aria-label="TikTok"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-6">Contacto</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:fisiopaotfi@gmail.com"
                    className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>fisiopaotfi@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+573133035084"
                    className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>+57 313 303 5084</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-background/70">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Tunja, Boyacá, Colombia</span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-6">Horarios</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-background/70">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground font-medium">Presencial</p>
                    <p>Lun - Sáb: 7:00 a.m. – 6:00 p.m.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-background/70">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground font-medium">Virtual</p>
                    <p>Lun - Sáb: 7:00 a.m. – 7:00 p.m.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6 px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {currentYear} Fisiopao. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-background/60 hover:text-primary transition-colors"
              >
                Política de privacidad
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-primary transition-colors"
              >
                Protección de datos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
