import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Pathologies } from "@/components/Pathologies";
import { FAQ } from "@/components/FAQ";
import { Reviews } from "@/components/Reviews";
import { Appointment } from "@/components/Appointment";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";

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
        <link rel="canonical" href="https://fisiopao.com" />
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
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Pathologies />
          <FAQ />
          <Reviews />
          <Appointment />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
