import { GraduationCap, Award, Heart, Home, UserCheck, Star } from "lucide-react";
import portraitImage from "@/assets/fisiopao-portrait.jpg";

const certifications = [
  {
    title: "Fisioterapeuta",
    institution: "Universidad de Boyacá",
    year: "2021",
  },
  {
    title: "Especialista en Seguridad y Salud en el Trabajo",
    institution: "Universidad Manuela Beltrán",
    year: "2021",
  },
  {
    title: "Certificaciones Internacionales",
    institution: "Formación continua internacional",
    year: "2021-2024",
  },
  {
    title: "Certificaciones SENA",
    institution: "Servicio Nacional de Aprendizaje",
    year: "2020-2024",
  },
];

const whyChooseMe = [
  {
    icon: UserCheck,
    title: "Tratamientos personalizados",
    description: "Cada plan es único y adaptado a tus necesidades específicas.",
  },
  {
    icon: Home,
    title: "Atención en casa",
    description: "Comodidad y confianza en tu propio hogar.",
  },
  {
    icon: Heart,
    title: "Enfoque humano y empático",
    description: "Tu bienestar emocional es tan importante como el físico.",
  },
  {
    icon: Award,
    title: "Experiencia clínica comprobada",
    description: "Más de 4 años de resultados reales.",
  },
  {
    icon: Star,
    title: "Compromiso con tu calidad de vida",
    description: "Mi objetivo es tu recuperación integral.",
  },
];

export const About = () => {
  return (
    <section id="sobre-mi" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Conoce a tu fisioterapeuta
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sobre Mí
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dedicación, profesionalismo y pasión por mejorar tu calidad de vida
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={portraitImage}
                alt="Fisiopao - Fisioterapeuta profesional en Tunja"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:right-8 bg-card p-6 rounded-2xl shadow-elevated border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">4+</p>
                  <p className="text-sm text-muted-foreground">Años de experiencia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="animate-fade-up animation-delay-200">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Hola, soy <span className="text-primary">Fisiopao</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Soy fisioterapeuta con más de 4 años de experiencia en atención
              domiciliaria y consulta externa. Especialista en Seguridad y Salud
              en el Trabajo, enfocada en brindar atención personalizada y de
              calidad para mejorar la funcionalidad y el bienestar de mis
              pacientes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Mi misión es acompañarte en cada paso de tu recuperación,
              brindándote las herramientas y el cuidado que necesitas para
              alcanzar una vida plena y sin limitaciones.
            </p>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Formación y Certificaciones
              </h4>
              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-soft transition-all"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{cert.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {cert.institution} • {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Me */}
        <div className="animate-fade-up animation-delay-300">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            ¿Por qué elegirme?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {whyChooseMe.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 text-center card-hover"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary-light transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
