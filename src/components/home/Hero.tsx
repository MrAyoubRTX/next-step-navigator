import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Briefcase, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
          <svg viewBox="0 0 800 800" className="w-full h-full">
            <defs>
              <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(188 78% 47%)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="hsl(188 78% 47%)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle cx="400" cy="400" r="350" fill="none" stroke="url(#heroGradient)" strokeWidth="1" />
            <circle cx="400" cy="400" r="280" fill="none" stroke="url(#heroGradient)" strokeWidth="1" />
            <circle cx="400" cy="400" r="200" fill="none" stroke="url(#heroGradient)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {t("hero.badge")}
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            {t("hero.title")}{" "}
            <span className="text-gradient">{t("hero.title.highlight")}</span>{" "}
            {t("hero.title.end")}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/orientation">
                {t("hero.cta.orientation")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/stages">{t("hero.cta.stages")}</Link>
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/orientation" className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Compass className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">{t("hero.card.orientation")}</h3>
              <p className="text-sm text-primary-foreground/60">{t("hero.card.orientation.desc")}</p>
            </Link>

            <Link to="/stages" className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Briefcase className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">{t("hero.card.stages")}</h3>
              <p className="text-sm text-primary-foreground/60">{t("hero.card.stages.desc")}</p>
            </Link>

            <Link to="/entrepreneuriat" className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Rocket className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">{t("hero.card.business")}</h3>
              <p className="text-sm text-primary-foreground/60">{t("hero.card.business.desc")}</p>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
          {[
            { value: "10K+", label: t("hero.stats.users") },
            { value: "500+", label: t("hero.stats.offers") },
            { value: "95%", label: t("hero.stats.satisfaction") },
            { value: "50+", label: t("hero.stats.partners") },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
              <div className="text-sm text-primary-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-background">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}
