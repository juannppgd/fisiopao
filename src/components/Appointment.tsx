import { Calendar, Clock, CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export const Appointment = () => {
  const CALENDLY_URL = "https://calendly.com/fisiopaotfi?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAPCZYZzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadJ6y_pyO_hnyQy0IoDQhs9quxT9LDioZ6B26r0PKfzymcN3DsYBf7nfKBzeA&brid=FmucpLLlLi5Gpaj4q-9REw";

  const loadCalendly = () => {
    return new Promise<void>((resolve, reject) => {
      if (window.Calendly) return resolve();
      if (document.getElementById("calendly-widget-script")) {
        const interval = setInterval(() => {
          if (window.Calendly) {
            clearInterval(interval);
            resolve();
          }
        }, 100);
        setTimeout(() => {
          clearInterval(interval);
          reject(new Error("Calendly load timeout"));
        }, 10000);
        return;
      }

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.id = "calendly-widget-css";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.id = "calendly-widget-script";
      script.async = true;
      script.onload = () => {
        resolve();
      };
      script.onerror = () => reject(new Error("Calendly script failed to load"));
      document.body.appendChild(script);
    });
  };

  const openCalendlyPopup = async () => {
    try {
      await loadCalendly();
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } catch (e) {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  };

  const calendlyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mounted = true;
    loadCalendly()
      .then(() => {
        if (!mounted || !calendlyRef.current || !window.Calendly) return;

        const parent = calendlyRef.current;

        // Prevent double initialization (React StrictMode or repeated effect runs)
        if (parent.dataset.calendlyInitialized === 'true') return;

        // Remove any existing iframes to avoid duplicates
        const existingIframes = parent.querySelectorAll('iframe');
        existingIframes.forEach((el) => el.remove());

        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: parent,
        });

        parent.dataset.calendlyInitialized = 'true';

        // ensure embedded iframe fills the responsive container
        setTimeout(() => {
          try {
            const iframe = parent.querySelector('iframe') as HTMLIFrameElement | null;
            if (iframe) {
              iframe.style.width = '100%';
              iframe.style.height = '100%';
              iframe.style.minHeight = '60vh';
              iframe.style.maxHeight = '80vh';
              iframe.style.display = 'block';
            }
          } catch (err) {
            /* ignore */
          }
        }, 300);
      })
      .catch(() => {
        /* ignore */
      });

    return () => {
      mounted = false;
    };
  }, []);

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

          {/* Combined: Reserva directo + Qué incluye la valoración (responsive: stacked on small, side-by-side on md+) */}
          <div className="grid gap-6 md:grid-cols-2 items-start">
            {/* Left: Reserva directo (will be ordered right on md+) */}
            <div className="bg-white dark:bg-white rounded-3xl border border-border shadow-card text-[#0F3B6F] h-full flex flex-col md:order-2">
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h4 className="text-2xl font-bold text-[#0F3B6F] mb-3">Reserva directo</h4>
                <p className="text-sm text-[#4A6A85] mb-4">Agenda directamente en el calendario o usa WhatsApp como alternativa.</p>

                <div className="flex-1">
                  <div ref={calendlyRef} className="calendly-container w-full rounded-xl bg-white dark:bg-white border border-border h-full" style={{ minHeight: '40vh', maxHeight: '80vh' }} />
                </div>

                <div className="mt-4">
                  <p className="text-xs text-[#4A6A85]">Si prefieres, abre el calendario en nueva ventana <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="underline">aquí</a>.</p>
                </div>
              </div>
            </div>

            {/* Right: ¿Qué incluye la valoración? (will be ordered left on md+) */}
            <div className="mt-0 p-8 bg-gradient-to-br from-primary/5 to-accent/30 rounded-2xl border border-border h-full md:order-1">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                ¿Qué incluye la valoración?
              </h3>
              <ul className="space-y-4 mb-6">
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

              <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Sesión completa de valoración</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="p-6 bg-card rounded-xl border border-border text-center">
                  <p className="text-sm text-muted-foreground mb-1">Atención Presencial</p>
                  <p className="font-semibold text-foreground">Lunes a Sábado: 7:00 a.m. – 6:00 p.m.</p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border text-center">
                  <p className="text-sm text-muted-foreground mb-1">Atención Virtual</p>
                  <p className="font-semibold text-foreground">Lunes a Sábado: 7:00 a.m. – 7:00 p.m.</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-3">¿Prefieres agendar por WhatsApp? Puedes hacerlo directamente desde aquí:</p>
                <Button variant="default" size="lg" className="w-full" asChild>
                  <a href="https://wa.me/573133035084?text=Hola%20Fisiopao,%20me%20gustaría%20agendar%20mi%20cita%20de%20valoración" target="_blank" rel="noopener noreferrer" aria-label="Asesoría personalizada por WhatsApp">
                    Asesoría personalizada
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
