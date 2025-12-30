import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María Fernanda G.",
    role: "Recuperación postquirúrgica",
    content: "Después de mi cirugía de rodilla, Fisiopao me ayudó a recuperar la movilidad de manera increíble. Su paciencia y profesionalismo hicieron toda la diferencia en mi proceso de rehabilitación.",
    rating: 5,
  },
  {
    name: "Carlos Andrés M.",
    role: "Dolor lumbar crónico",
    content: "Llevaba años con dolor de espalda que limitaba mi vida diaria. En pocas sesiones, noté una mejora significativa. La atención domiciliaria es muy conveniente y el trato es excelente.",
    rating: 5,
  },
  {
    name: "Ana Lucía R.",
    role: "Rehabilitación neurológica",
    content: "La dedicación y el cariño con el que Fisiopao trató a mi padre después de su ACV fue extraordinaria. Vimos mejoras que no esperábamos. Eternamente agradecidos.",
    rating: 5,
  },
  {
    name: "Pedro José S.",
    role: "Lesión deportiva",
    content: "Como deportista aficionado, las lesiones son parte del juego. Fisiopao no solo me recuperó de mi esguince, sino que me enseñó ejercicios de prevención que ahora son parte de mi rutina.",
    rating: 5,
  },
];

export const Reviews = () => {
  return (
    <section id="resenas" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Testimonios reales
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Lo que Dicen Nuestros Pacientes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Historias de recuperación y bienestar de quienes han confiado en nosotros
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300 card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['M', 'C', 'A', 'P'].map((letter, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border-2 border-background"
                >
                  <span className="text-sm font-semibold text-primary">{letter}</span>
                </div>
              ))}
            </div>
            <span className="text-muted-foreground">
              +500 pacientes satisfechos
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-muted-foreground">
              Calificación promedio 5.0
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
