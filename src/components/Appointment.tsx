import { Calendar, Clock, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Appointment = () => {
  return (
    <section id="agendamiento" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Reserva tu cita
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Agenda tu Valoración
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Da el primer paso hacia tu recuperación. Agenda tu cita de valoración y comienza tu tratamiento personalizado.
            </p>
          </div>

          {/* Appointment Info Card */}
          <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-card">
            <div className="grid md:grid-cols-2">
              {/* Left: Info */}
              <div className="p-8 md:p-10 bg-gradient-to-br from-primary/5 to-accent/30">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  ¿Qué incluye la valoración?
                </h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Evaluación física completa",
                    "Análisis de tu historial clínico",
                    "Diagnóstico funcional",
                    "Plan de tratamiento personalizado",
                    "Resolución de todas tus dudas",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <Clock className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Duración: 60 minutos</p>
                    <p className="text-sm text-muted-foreground">Sesión completa de valoración</p>
                  </div>
                </div>
              </div>

              {/* Right: CTA */}
              <div className="p-8 md:p-10 flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary to-primary/80">
                <div className="w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-6">
                  <Calendar className="w-10 h-10 text-primary-foreground" />
                </div>
                <h4 className="text-2xl font-bold text-primary-foreground mb-3">
                  ¡Agenda ahora!
                </h4>
                <p className="text-primary-foreground/90 mb-8 max-w-xs">
                  Selecciona el día y hora que mejor se ajuste a tu disponibilidad
                </p>

                <div className="space-y-4 w-full max-w-xs">
                  <Button
                    variant="secondary"
                    size="xl"
                    className="w-full gap-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    asChild
                  >
                    <a
                      href="https://wa.me/573133035084?text=Hola%20Fisiopao,%20me%20gustaría%20agendar%20mi%20cita%20de%20valoración"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Agendar por WhatsApp
                    </a>
                  </Button>
                  <p className="text-xs text-primary-foreground/70">
                    Respuesta en menos de 2 horas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="p-6 bg-card rounded-xl border border-border text-center">
              <p className="text-sm text-muted-foreground mb-1">Atención Presencial</p>
              <p className="font-semibold text-foreground">Lunes a Sábado: 7:00 a.m. – 6:00 p.m.</p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border text-center">
              <p className="text-sm text-muted-foreground mb-1">Atención Virtual</p>
              <p className="font-semibold text-foreground">Lunes a Sábado: 7:00 a.m. – 7:00 p.m.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
