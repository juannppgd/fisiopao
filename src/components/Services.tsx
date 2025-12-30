import { MapPin, Globe, Activity, Dumbbell, Hand, Zap, Thermometer, Circle, Target, Droplets, Waves, Briefcase, Video, FileCheck, ClipboardList } from "lucide-react";

const presencialServices = [
  { icon: ClipboardList, title: "Valoración fisioterapéutica integral", description: "Evaluación completa de tu condición física y funcional." },
  { icon: Dumbbell, title: "Ejercicio terapéutico", description: "Programas personalizados para fortalecer y rehabilitar." },
  { icon: Hand, title: "Técnicas manuales", description: "Terapia manual especializada para aliviar el dolor." },
  { icon: Activity, title: "Liberación miofascial", description: "Tratamiento del tejido conectivo para mejorar movilidad." },
  { icon: Zap, title: "Electroestimulación", description: "Tecnología para activación muscular y control del dolor." },
  { icon: Thermometer, title: "Termoterapia / Crioterapia", description: "Aplicación de calor y frío con fines terapéuticos." },
  { icon: Circle, title: "Cupping (ventosas)", description: "Técnica ancestral para mejorar circulación y relajación." },
  { icon: Target, title: "Punción seca", description: "Tratamiento de puntos gatillo para aliviar tensiones." },
  { icon: Droplets, title: "Descarga muscular", description: "Liberación de tensión acumulada en los músculos." },
  { icon: Waves, title: "Terapia acuática", description: "Rehabilitación en medio acuático de bajo impacto." },
  { icon: Briefcase, title: "Salud ocupacional", description: "Prevención y tratamiento de lesiones laborales." },
];

const virtualServices = [
  { icon: Video, title: "Valoración fisioterapéutica guiada", description: "Evaluación profesional a través de videollamada." },
  { icon: Dumbbell, title: "Ejercicio terapéutico guiado", description: "Sesiones de ejercicio con acompañamiento en vivo." },
  { icon: FileCheck, title: "Plan de seguimiento personalizado", description: "Monitoreo continuo de tu progreso y ajuste del plan." },
];

export const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Servicios profesionales
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Atención fisioterapéutica integral adaptada a tus necesidades, en casa o de forma virtual
          </p>
        </div>

        {/* Presencial Services */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground">
                Servicios Presenciales
              </h3>
              <p className="text-muted-foreground">Tunja, Boyacá • 7:00 a.m. – 6:00 p.m.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {presencialServices.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 card-hover"
              >
                <div className="w-12 h-12 mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Virtual Services */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground">
                Servicios Virtuales
              </h3>
              <p className="text-muted-foreground">LATAM • 7:00 a.m. – 7:00 p.m.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {virtualServices.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-card to-accent/30 rounded-2xl border border-border hover:border-secondary/30 hover:shadow-card transition-all duration-300 card-hover"
              >
                <div className="w-12 h-12 mb-4 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
