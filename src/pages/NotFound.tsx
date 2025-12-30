import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="font-heading text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          Página no encontrada
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="/" className="gap-2">
            <Home className="w-5 h-5" />
            Volver al inicio
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
