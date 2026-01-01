import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  ArrowRight, 
  FileText, 
  Building, 
  Wallet, 
  Users,
  CheckCircle2,
  ChevronRight,
  Lightbulb,
  Target
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Entrepreneuriat = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      title: t("entrepreneuriat.step1.title"),
      description: t("entrepreneuriat.step1.desc"),
      icon: Lightbulb,
    },
    {
      number: "02",
      title: t("entrepreneuriat.step2.title"),
      description: t("entrepreneuriat.step2.desc"),
      icon: FileText,
    },
    {
      number: "03",
      title: t("entrepreneuriat.step3.title"),
      description: t("entrepreneuriat.step3.desc"),
      icon: Building,
    },
    {
      number: "04",
      title: t("entrepreneuriat.step4.title"),
      description: t("entrepreneuriat.step4.desc"),
      icon: Wallet,
    },
  ];

  const statuts = [
    {
      name: "Auto-entrepreneur",
      description: t("entrepreneuriat.statut.auto.desc"),
      advantages: [
        t("entrepreneuriat.statut.auto.adv1"),
        t("entrepreneuriat.statut.auto.adv2"),
        t("entrepreneuriat.statut.auto.adv3"),
      ],
      bestFor: t("entrepreneuriat.statut.auto.best"),
    },
    {
      name: "SARL",
      description: t("entrepreneuriat.statut.sarl.desc"),
      advantages: [
        t("entrepreneuriat.statut.sarl.adv1"),
        t("entrepreneuriat.statut.sarl.adv2"),
        t("entrepreneuriat.statut.sarl.adv3"),
      ],
      bestFor: t("entrepreneuriat.statut.sarl.best"),
    },
    {
      name: "SARL AU",
      description: t("entrepreneuriat.statut.sarlau.desc"),
      advantages: [
        t("entrepreneuriat.statut.sarlau.adv1"),
        t("entrepreneuriat.statut.sarlau.adv2"),
        t("entrepreneuriat.statut.sarlau.adv3"),
      ],
      bestFor: t("entrepreneuriat.statut.sarlau.best"),
    },
    {
      name: "SA",
      description: t("entrepreneuriat.statut.sa.desc"),
      advantages: [
        t("entrepreneuriat.statut.sa.adv1"),
        t("entrepreneuriat.statut.sa.adv2"),
        t("entrepreneuriat.statut.sa.adv3"),
      ],
      bestFor: t("entrepreneuriat.statut.sa.best"),
    },
    {
      name: "SAS",
      description: t("entrepreneuriat.statut.sas.desc"),
      advantages: [
        t("entrepreneuriat.statut.sas.adv1"),
        t("entrepreneuriat.statut.sas.adv2"),
        t("entrepreneuriat.statut.sas.adv3"),
      ],
      bestFor: t("entrepreneuriat.statut.sas.best"),
    },
    {
      name: "SNC",
      description: t("entrepreneuriat.statut.snc.desc"),
      advantages: [
        t("entrepreneuriat.statut.snc.adv1"),
        t("entrepreneuriat.statut.snc.adv2"),
        t("entrepreneuriat.statut.snc.adv3"),
      ],
      bestFor: t("entrepreneuriat.statut.snc.best"),
    },
    {
      name: "SCS",
      description: t("entrepreneuriat.statut.scs.desc"),
      advantages: [
        t("entrepreneuriat.statut.scs.adv1"),
        t("entrepreneuriat.statut.scs.adv2"),
        t("entrepreneuriat.statut.scs.adv3"),
      ],
      bestFor: t("entrepreneuriat.statut.scs.best"),
    },
    {
      name: "GIE",
      description: t("entrepreneuriat.statut.gie.desc"),
      advantages: [
        t("entrepreneuriat.statut.gie.adv1"),
        t("entrepreneuriat.statut.gie.adv2"),
        t("entrepreneuriat.statut.gie.adv3"),
      ],
      bestFor: t("entrepreneuriat.statut.gie.best"),
    },
    {
      name: t("entrepreneuriat.statut.cooperative.name"),
      description: t("entrepreneuriat.statut.cooperative.desc"),
      advantages: [
        t("entrepreneuriat.statut.cooperative.adv1"),
        t("entrepreneuriat.statut.cooperative.adv2"),
        t("entrepreneuriat.statut.cooperative.adv3"),
      ],
      bestFor: t("entrepreneuriat.statut.cooperative.best"),
    },
  ];

  const financements = [
    { name: "ANAPEC", description: "Moukawalati - Aide à la création d'entreprise" },
    { name: "INDH", description: "Initiative Nationale pour le Développement Humain" },
    { name: "Maroc PME", description: "Programmes d'accompagnement et financement" },
    { name: "Banques", description: "Crédit Jeunes Promoteurs, microcrédits" },
    { name: "Incubateurs", description: "Technopark, StartGate, CFCIM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                <Rocket className="w-4 h-4" />
                {t("entrepreneuriat.badge")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t("entrepreneuriat.title")} <span className="text-gradient">{t("entrepreneuriat.title.highlight")}</span>
              </h1>
              <p className="text-lg text-primary-foreground/70 mb-8">
                {t("entrepreneuriat.description")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="#guide">
                    {t("entrepreneuriat.cta.guide")}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href="#business-plan">{t("entrepreneuriat.cta.plan")}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section id="guide" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                {t("entrepreneuriat.steps.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("entrepreneuriat.steps.title")} <span className="text-gradient">{t("entrepreneuriat.steps.title.highlight")}</span>
              </h2>
              <p className="text-muted-foreground">
                {t("entrepreneuriat.steps.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-card-hover transition-all duration-300 group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-2 text-6xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="relative w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>

                  {/* Arrow connector (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ChevronRight className="w-8 h-8 text-accent/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statuts Juridiques */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                {t("entrepreneuriat.statuts.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("entrepreneuriat.statuts.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("entrepreneuriat.statuts.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {statuts.map((statut, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-2">{statut.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{statut.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {statut.advantages.map((adv, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{adv}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium text-accent">{t("entrepreneuriat.statuts.ideal")} </span>
                      {statut.bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financements */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  {t("entrepreneuriat.financing.badge")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t("entrepreneuriat.financing.title")} <span className="text-gradient">{t("entrepreneuriat.financing.title.highlight")}</span> {t("entrepreneuriat.financing.title.end")}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t("entrepreneuriat.financing.description")}
                </p>

                <div className="space-y-4">
                  {financements.map((fin, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors cursor-pointer group">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                        <Wallet className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{fin.name}</h4>
                        <p className="text-sm text-muted-foreground">{fin.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent ml-auto flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Card */}
              <div className="p-8 rounded-2xl bg-hero-gradient text-primary-foreground">
                <h3 className="text-2xl font-bold mb-8">{t("entrepreneuriat.stats.title")}</h3>
                <div className="space-y-8">
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">+50%</div>
                    <p className="text-primary-foreground/70">{t("entrepreneuriat.stats.1")}</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">100K+</div>
                    <p className="text-primary-foreground/70">{t("entrepreneuriat.stats.2")}</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">15+</div>
                    <p className="text-primary-foreground/70">{t("entrepreneuriat.stats.3")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Plan Tool */}
        <section id="business-plan" className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                {t("entrepreneuriat.plan.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("entrepreneuriat.plan.title")} <span className="text-gradient">{t("entrepreneuriat.plan.title.highlight")}</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("entrepreneuriat.plan.description")}
              </p>

              <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    { icon: Target, title: t("entrepreneuriat.plan.summary"), desc: t("entrepreneuriat.plan.summary.desc") },
                    { icon: Users, title: t("entrepreneuriat.plan.market"), desc: t("entrepreneuriat.plan.market.desc") },
                    { icon: Wallet, title: t("entrepreneuriat.plan.financial"), desc: t("entrepreneuriat.plan.financial.desc") },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-muted/50">
                      <item.icon className="w-8 h-8 text-accent mb-3 mx-auto" />
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <Button variant="accent" size="lg" asChild>
                  <Link to="/register">
                    {t("entrepreneuriat.plan.cta")}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Entrepreneuriat;
