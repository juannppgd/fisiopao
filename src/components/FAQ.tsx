import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué es la fisioterapia?",
    answer: "La fisioterapia es una disciplina de la salud que utiliza técnicas físicas como el ejercicio terapéutico, la terapia manual, la electroterapia y otras modalidades para prevenir, tratar y rehabilitar diversas condiciones que afectan el movimiento y la funcionalidad del cuerpo. Su objetivo principal es mejorar la calidad de vida del paciente, reducir el dolor y restaurar la máxima capacidad funcional.",
  },
  {
    question: "¿Es necesaria la fisioterapia antes y después de una lesión?",
    answer: "Absolutamente. La fisioterapia preoperatoria (antes de una cirugía o lesión anticipada) ayuda a fortalecer los músculos y preparar el cuerpo para una mejor recuperación. La fisioterapia postoperatoria o post-lesión es fundamental para restaurar el movimiento, reducir el dolor, prevenir complicaciones y acelerar el proceso de rehabilitación de manera segura y efectiva.",
  },
  {
    question: "¿Qué patologías trata la fisioterapia?",
    answer: "La fisioterapia trata una amplia variedad de condiciones incluyendo: lesiones ortopédicas y traumatológicas (esguinces, fracturas, tendinopatías), problemas osteomusculares (dolor de espalda, contracturas, fascitis plantar), condiciones neurológicas (ACV, Parkinson, esclerosis múltiple), rehabilitación pre y postquirúrgica, y problemas posturales, entre muchas otras.",
  },
  {
    question: "¿Es dolorosa la fisioterapia?",
    answer: "La fisioterapia no debería ser dolorosa. Si bien algunas técnicas pueden generar una leve incomodidad temporal, especialmente cuando se trabajan zonas tensas o inflamadas, el objetivo siempre es tu bienestar. Comunicarme cómo te sientes durante el tratamiento es fundamental para ajustar las técnicas a tu tolerancia y garantizar una experiencia terapéutica positiva.",
  },
  {
    question: "¿Es lo mismo fisioterapia que un masaje?",
    answer: "No, son diferentes. El masaje relajante es una técnica enfocada principalmente en el bienestar general y la relajación muscular. La fisioterapia, en cambio, es una ciencia de la salud que utiliza evaluación clínica, diagnóstico funcional y múltiples técnicas terapéuticas (incluyendo terapia manual, ejercicio, electroterapia, entre otras) para tratar condiciones específicas de salud y rehabilitar funciones alteradas.",
  },
  {
    question: "¿Cada cuánto debo asistir a fisioterapia?",
    answer: "La frecuencia de las sesiones depende de tu condición específica, objetivos de tratamiento y evolución. Generalmente, se recomienda entre 2-3 sesiones por semana en la fase inicial de tratamiento, que pueden reducirse progresivamente a medida que mejoras. Durante la valoración inicial, diseñaré un plan de tratamiento personalizado con la frecuencia óptima para tu caso.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Resolvemos tus dudas
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre fisioterapia y nuestros servicios
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional Help */}
          <div className="text-center mt-12 p-8 bg-muted/50 rounded-2xl border border-border">
            <p className="text-foreground font-medium mb-2">
              ¿Tienes más preguntas?
            </p>
            <p className="text-muted-foreground mb-4">
              Estoy aquí para ayudarte. No dudes en contactarme.
            </p>
            <a
              href="mailto:fisiopaotfi@gmail.com"
              className="text-primary font-medium hover:underline"
            >
              fisiopaotfi@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
