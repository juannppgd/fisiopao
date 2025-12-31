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
    className="w-5 h-5 transition-colors group-hover:text-white dark:group-hover:text-white group-hover:[filter:drop-shadow(0_0_6px_rgba(255,255,255,0.6))] dark:group-hover:[filter:drop-shadow(0_0_8px_rgba(255,255,255,0.75))]"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-foreground text-background dark:bg-muted dark:text-foreground">
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
              <p className="text-background/70 dark:text-foreground/70 leading-relaxed mb-6 max-w-md">
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
                    className="group w-10 h-10 bg-muted/10 hover:bg-primary-light rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 transition-colors group-hover:text-white dark:group-hover:text-white group-hover:[filter:drop-shadow(0_0_6px_rgba(255,255,255,0.6))] dark:group-hover:[filter:drop-shadow(0_0_8px_rgba(255,255,255,0.75))]" />
                  </a>
                ))}
                <a
                  href="https://www.tiktok.com/@fisiopaotunja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-muted/10 hover:bg-primary-light rounded-lg flex items-center justify-center transition-colors"
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
                    className="flex items-start gap-3 text-background/80 dark:text-foreground/80 hover:text-white transition-colors hover:[text-shadow:0_0_8px_rgba(255,255,255,0.9)] dark:hover:text-white dark:hover:[text-shadow:0_0_10px_rgba(255,255,255,0.95)]"
                  >
                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>fisiopaotfi@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+573133035084"
                    className="flex items-start gap-3 text-background/80 dark:text-foreground/80 hover:text-white transition-colors hover:[text-shadow:0_0_8px_rgba(255,255,255,0.9)] dark:hover:text-white dark:hover:[text-shadow:0_0_10px_rgba(255,255,255,0.95)]"
                  >
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>+57 313 303 5084</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-background/70 dark:text-foreground/70">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Tunja, Boyacá, Colombia</span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-6">Horarios</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-background/70 dark:text-foreground/70">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground font-medium">Presencial</p>
                    <p>Lun - Sáb: 7:00 a.m. – 6:00 p.m.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-background/70 dark:text-foreground/70">
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
      <div className="border-t border-background/10 dark:border-border/10">
        <div className="container-custom py-6 px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
              <div className="w-full md:w-auto">
                <p className="text-sm text-background/60 dark:text-foreground/60">
                  © {currentYear} Juan Pablo Gutiérrez Díaz. Todos los derechos reservados.
                </p>
                <div className="mt-2 text-sm text-background/60 dark:text-foreground/60 space-y-1">
                  <p>
                    Diseñado y desarrollado por <strong>Juan Pablo Gutiérrez Díaz</strong>, especialista en desarrollo web y marketing digital, creando experiencias digitales ágiles y orientadas a resultados.
                  </p>
                  <p>
                    ¿Quieres saber más o agendar una asesoría? Escríbeme a <a href="mailto:contact.juannppgd@gmail.com" className="underline hover:text-white transition-colors hover:[text-shadow:0_0_4px_rgba(255,255,255,0.6)] dark:hover:text-white dark:hover:[text-shadow:0_0_6px_rgba(255,255,255,0.75)]">contact.juannppgd@gmail.com</a> o visita mi sitio web: <a href="https://juanpablogutierrez.space/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors hover:[text-shadow:0_0_4px_rgba(255,255,255,0.6)] dark:hover:text-white dark:hover:[text-shadow:0_0_6px_rgba(255,255,255,0.75)]">www.juanpablogutierrez.space</a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <a
                  href="#"
                  className="text-background/60 dark:text-foreground/60 hover:text-white transition-colors hover:[text-shadow:0_0_4px_rgba(255,255,255,0.6)] dark:hover:text-white dark:hover:[text-shadow:0_0_6px_rgba(255,255,255,0.75)]"
                >
                  Política de privacidad
                </a>
                <a
                  href="#"
                  className="text-background/60 dark:text-foreground/60 hover:text-white transition-colors hover:[text-shadow:0_0_4px_rgba(255,255,255,0.6)] dark:hover:text-white dark:hover:[text-shadow:0_0_6px_rgba(255,255,255,0.75)]"
                >
                  Protección de datos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
