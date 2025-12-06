import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-12 lg:p-20">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

          {/* Content */}
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Prêt à franchir le pas ?
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Commencez votre transformation{" "}
              <span className="text-gradient">aujourd'hui</span>
            </h2>

            <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
              Rejoignez des milliers de Marocains qui ont déjà pris leur avenir en main. 
              Inscription gratuite, résultats garantis.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/register">
                  Créer mon compte gratuit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/pricing">Voir les offres</Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-primary-foreground/50">
              Aucune carte bancaire requise • Annulation à tout moment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
