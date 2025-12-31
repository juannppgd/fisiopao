import { Bone, Activity, Brain } from "lucide-react";

const pathologyCategories = [
  {
    icon: Bone,
    title: "Ortopédicas y Traumatológicas",
    color: "primary",
    conditions: [
      "Esguinces",
      "Lesiones musculares",
      "Tendinopatías",
      "Cirugías pre y postoperatorias",
      "Reemplazo de cadera y rodilla",
      "Cirugías de columna",
      "Cirugías de hombro",
      "Cirugías de rodilla",
      "Cirugías de tobillo",
    ],
  },
  {
    icon: Activity,
    title: "Osteomusculares",
    color: "primary",
    conditions: [
      "Dolor lumbar",
      "Dolor cervical",
      "Dolor dorsal",
      "Contracturas musculares",
      "Desgarros musculares",
      "Fascitis plantar",
      "Síndrome del túnel carpiano",
      "Alteraciones posturales",
    ],
  },
  {
    icon: Brain,
    title: "Neurológicas",
    color: "primary",
    conditions: [
      "Accidente cerebrovascular (ACV)",
      "Enfermedad de Parkinson",
      "Esclerosis múltiple",
      "Neuropatías periféricas",
      "Trastornos del equilibrio",
      "Vértigo",
    ],
  },
];

export const Pathologies = () => {
  return (
    <section id="patologias" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Áreas de especialización
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Patologías que Tratamos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experiencia en el tratamiento de diversas condiciones para tu recuperación integral
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pathologyCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-300 card-hover"
            >
              {/* Header */}
              <div className={`p-6 ${
                category.color === 'primary' 
                  ? 'bg-primary/10' 
                  : category.color === 'secondary' 
                  ? 'bg-secondary/10' 
                  : 'bg-accent'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    category.color === 'primary' 
                      ? 'bg-primary/20' 
                      : category.color === 'secondary' 
                      ? 'bg-secondary/20' 
                      : 'bg-primary/10'
                  }`}>
                    <category.icon className={`w-7 h-7 ${
                      category.color === 'primary' 
                        ? 'text-primary' 
                        : category.color === 'secondary' 
                        ? 'text-secondary' 
                        : 'text-primary'
                    }`} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Conditions List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {category.conditions.map((condition, condIndex) => (
                    <li
                      key={condIndex}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        category.color === 'primary' 
                          ? 'bg-primary' 
                          : category.color === 'secondary' 
                          ? 'bg-secondary' 
                          : 'bg-primary'
                      }`} />
                      <span className="text-sm">{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿No encuentras tu condición? Contáctame para una valoración personalizada.
          </p>
          <a
            href="https://wa.me/573133035084?text=Hola%20Fisiopao,%20tengo%20una%20consulta%20sobre%20mi%20condición"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Escríbeme por WhatsApp
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
