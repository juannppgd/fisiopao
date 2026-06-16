import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Pathologies } from "@/components/Pathologies";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";

const FAQ = lazy(() => import("@/components/FAQ").then((m) => ({ default: m.FAQ })));
const Reviews = lazy(() => import("@/components/Reviews").then((m) => ({ default: m.Reviews })));
const Appointment = lazy(() => import("@/components/Appointment").then((m) => ({ default: m.Appointment })));

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Fisiopao | Fisioterapia Domiciliaria en Tunja, Boyacá | Atención Personalizada</title>
        <meta
          name="description"
          content="Fisioterapia domiciliaria profesional en Tunja, Boyacá. Más de 4 años de experiencia en rehabilitación, ejercicio terapéutico, punción seca, electroterapia. Atención en casa y virtual. Agenda tu cita hoy."
        />
        <meta
          name="keywords"
          content="fisioterapia Tunja, fisioterapia domiciliaria Boyacá, rehabilitación física, fisioterapeuta a domicilio, terapia física Tunja, Fisiopao"
        />
        <meta name="author" content="Fisiopao" />
        <meta property="og:title" content="Fisiopao | Fisioterapia Domiciliaria Profesional en Tunja" />
        <meta
          property="og:description"
          content="Fisioterapia personalizada en la comodidad de tu hogar. Más de 4 años transformando vidas en Tunja, Boyacá."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:url" content="https://fisiopao.com" />
        <meta property="og:image" content="https://fisiopao.com/og-image-fisiopao.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fisiopao - Fisioterapia domiciliaria en Tunja" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://fisiopao.com/og-image-fisiopao.png" />
        <link rel="canonical" href="https://fisiopao.com" />
        <link rel="alternate" href="https://fisiopao.com/" hrefLang="es-CO" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://fisiopao.com/" },
              { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://fisiopao.com/#servicios" },
              { "@type": "ListItem", "position": 3, "name": "Contacto", "item": "https://fisiopao.com/#contacto" },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Fisiopao",
            description: "Fisioterapia domiciliaria profesional en Tunja, Boyacá",
            url: "https://fisiopao.com",
            telephone: "+573133035084",
            email: "fisiopaotfi@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tunja",
              addressRegion: "Boyacá",
              addressCountry: "CO",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 5.5353,
              longitude: -73.3678,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "07:00",
                closes: "18:00",
              },
            ],
            sameAs: [
              "https://www.instagram.com/fisiopao_tunja",
              "https://www.facebook.com/share/1GBrjHzxFf/",
              "https://www.tiktok.com/@fisiopaotunja",
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background font-body">
        <a
          href="#main-content"
          className="skip-to-content"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Services />
          <Pathologies />
          <Suspense fallback={<div className="section-padding bg-background"><div className="container-custom text-center text-muted-foreground">Cargando...</div></div>}>
            <FAQ />
          </Suspense>
          <Suspense fallback={<div className="section-padding bg-muted/30"><div className="container-custom text-center text-muted-foreground">Cargando...</div></div>}>
            <Reviews />
          </Suspense>
          <Suspense fallback={<div className="section-padding bg-background"><div className="container-custom text-center text-muted-foreground">Cargando...</div></div>}>
            <Appointment />
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
