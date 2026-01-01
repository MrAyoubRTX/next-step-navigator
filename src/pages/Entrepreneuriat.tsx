import { useState } from "react";
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
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Target,
  User,
  Briefcase,
  Scale,
  Globe
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Entrepreneuriat = () => {
  const { t } = useLanguage();
  const [showMoreCategories, setShowMoreCategories] = useState(false);

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

  // Category 1: Personnes Physiques
  const category1 = {
    name: t("entrepreneuriat.category1.name"),
    icon: User,
    statuts: [
      {
        name: "Auto-entrepreneur",
        description: t("entrepreneuriat.statut.auto.desc"),
        criteria: [
          t("entrepreneuriat.statut.auto.criteria1"),
          t("entrepreneuriat.statut.auto.criteria2"),
          t("entrepreneuriat.statut.auto.criteria3"),
          t("entrepreneuriat.statut.auto.criteria4"),
        ],
        characteristics: [
          t("entrepreneuriat.statut.auto.char1"),
          t("entrepreneuriat.statut.auto.char2"),
          t("entrepreneuriat.statut.auto.char3"),
        ],
        bestFor: t("entrepreneuriat.statut.auto.best"),
      },
      {
        name: t("entrepreneuriat.statut.ei.name"),
        description: t("entrepreneuriat.statut.ei.desc"),
        criteria: [
          t("entrepreneuriat.statut.ei.criteria1"),
          t("entrepreneuriat.statut.ei.criteria2"),
          t("entrepreneuriat.statut.ei.criteria3"),
          t("entrepreneuriat.statut.ei.criteria4"),
        ],
        characteristics: [
          t("entrepreneuriat.statut.ei.char1"),
          t("entrepreneuriat.statut.ei.char2"),
          t("entrepreneuriat.statut.ei.char3"),
        ],
        bestFor: t("entrepreneuriat.statut.ei.best"),
      },
      {
        name: t("entrepreneuriat.statut.pl.name"),
        description: t("entrepreneuriat.statut.pl.desc"),
        criteria: [
          t("entrepreneuriat.statut.pl.criteria1"),
          t("entrepreneuriat.statut.pl.criteria2"),
          t("entrepreneuriat.statut.pl.criteria3"),
          t("entrepreneuriat.statut.pl.criteria4"),
        ],
        characteristics: [
          t("entrepreneuriat.statut.pl.char1"),
          t("entrepreneuriat.statut.pl.char2"),
        ],
        bestFor: t("entrepreneuriat.statut.pl.best"),
      },
    ],
  };

  // Category 2: Sociétés Commerciales
  const category2 = {
    name: t("entrepreneuriat.category2.name"),
    icon: Briefcase,
    statuts: [
      {
        name: "SARL",
        description: t("entrepreneuriat.statut.sarl.desc"),
        criteria: [
          t("entrepreneuriat.statut.sarl.criteria1"),
          t("entrepreneuriat.statut.sarl.criteria2"),
          t("entrepreneuriat.statut.sarl.criteria3"),
        ],
        characteristics: [
          t("entrepreneuriat.statut.sarl.char1"),
          t("entrepreneuriat.statut.sarl.char2"),
          t("entrepreneuriat.statut.sarl.char3"),
        ],
        bestFor: t("entrepreneuriat.statut.sarl.best"),
      },
      {
        name: "SARL AU",
        description: t("entrepreneuriat.statut.sarlau.desc"),
        criteria: [
          t("entrepreneuriat.statut.sarlau.criteria1"),
          t("entrepreneuriat.statut.sarlau.criteria2"),
          t("entrepreneuriat.statut.sarlau.criteria3"),
        ],
        characteristics: [
          t("entrepreneuriat.statut.sarlau.char1"),
          t("entrepreneuriat.statut.sarlau.char2"),
        ],
        bestFor: t("entrepreneuriat.statut.sarlau.best"),
      },
      {
        name: "SAS",
        description: t("entrepreneuriat.statut.sas.desc"),
        criteria: [
          t("entrepreneuriat.statut.sas.criteria1"),
          t("entrepreneuriat.statut.sas.criteria2"),
          t("entrepreneuriat.statut.sas.criteria3"),
        ],
        characteristics: [
          t("entrepreneuriat.statut.sas.char1"),
          t("entrepreneuriat.statut.sas.char2"),
        ],
        bestFor: t("entrepreneuriat.statut.sas.best"),
      },
      {
        name: "SA",
        description: t("entrepreneuriat.statut.sa.desc"),
        criteria: [
          t("entrepreneuriat.statut.sa.criteria1"),
          t("entrepreneuriat.statut.sa.criteria2"),
          t("entrepreneuriat.statut.sa.criteria3"),
        ],
        characteristics: [
          t("entrepreneuriat.statut.sa.char1"),
          t("entrepreneuriat.statut.sa.char2"),
        ],
        bestFor: t("entrepreneuriat.statut.sa.best"),
      },
      {
        name: "SNC",
        description: t("entrepreneuriat.statut.snc.desc"),
        criteria: [
          t("entrepreneuriat.statut.snc.criteria1"),
          t("entrepreneuriat.statut.snc.criteria2"),
          t("entrepreneuriat.statut.snc.criteria3"),
        ],
        characteristics: [
          t("entrepreneuriat.statut.snc.char1"),
          t("entrepreneuriat.statut.snc.char2"),
        ],
        bestFor: t("entrepreneuriat.statut.snc.best"),
      },
      {
        name: "SCS",
        description: t("entrepreneuriat.statut.scs.desc"),
        criteria: [
          t("entrepreneuriat.statut.scs.criteria1"),
          t("entrepreneuriat.statut.scs.criteria2"),
        ],
        characteristics: [
          t("entrepreneuriat.statut.scs.char1"),
        ],
        bestFor: t("entrepreneuriat.statut.scs.best"),
      },
      {
        name: "SCA",
        description: t("entrepreneuriat.statut.sca.desc"),
        criteria: [
          t("entrepreneuriat.statut.sca.criteria1"),
          t("entrepreneuriat.statut.sca.criteria2"),
        ],
        characteristics: [
          t("entrepreneuriat.statut.sca.char1"),
        ],
        bestFor: t("entrepreneuriat.statut.sca.best"),
      },
    ],
  };

  // Category 3: Structures Collectives
  const category3 = {
    name: t("entrepreneuriat.category3.name"),
    icon: Scale,
    statuts: [
      {
        name: "GIE",
        description: t("entrepreneuriat.statut.gie.desc"),
        criteria: [
          t("entrepreneuriat.statut.gie.criteria1"),
          t("entrepreneuriat.statut.gie.criteria2"),
        ],
        characteristics: [
          t("entrepreneuriat.statut.gie.char1"),
          t("entrepreneuriat.statut.gie.char2"),
        ],
        bestFor: t("entrepreneuriat.statut.gie.best"),
      },
      {
        name: t("entrepreneuriat.statut.cooperative.name"),
        description: t("entrepreneuriat.statut.cooperative.desc"),
        criteria: [
          t("entrepreneuriat.statut.cooperative.criteria1"),
          t("entrepreneuriat.statut.cooperative.criteria2"),
        ],
        characteristics: [
          t("entrepreneuriat.statut.cooperative.char1"),
          t("entrepreneuriat.statut.cooperative.char2"),
        ],
        bestFor: t("entrepreneuriat.statut.cooperative.best"),
      },
      {
        name: t("entrepreneuriat.statut.association.name"),
        description: t("entrepreneuriat.statut.association.desc"),
        criteria: [
          t("entrepreneuriat.statut.association.criteria1"),
        ],
        characteristics: [
          t("entrepreneuriat.statut.association.char1"),
        ],
        bestFor: t("entrepreneuriat.statut.association.best"),
      },
    ],
  };

  // Category 4: Structures Étrangères
  const category4 = {
    name: t("entrepreneuriat.category4.name"),
    icon: Globe,
    statuts: [
      {
        name: t("entrepreneuriat.statut.succursale.name"),
        description: t("entrepreneuriat.statut.succursale.desc"),
        criteria: [
          t("entrepreneuriat.statut.succursale.criteria1"),
        ],
        characteristics: [
          t("entrepreneuriat.statut.succursale.char1"),
        ],
        bestFor: t("entrepreneuriat.statut.succursale.best"),
      },
      {
        name: t("entrepreneuriat.statut.filiale.name"),
        description: t("entrepreneuriat.statut.filiale.desc"),
        criteria: [
          t("entrepreneuriat.statut.filiale.criteria1"),
        ],
        characteristics: [
          t("entrepreneuriat.statut.filiale.char1"),
        ],
        bestFor: t("entrepreneuriat.statut.filiale.best"),
      },
      {
        name: t("entrepreneuriat.statut.bureau.name"),
        description: t("entrepreneuriat.statut.bureau.desc"),
        criteria: [
          t("entrepreneuriat.statut.bureau.criteria1"),
        ],
        characteristics: [
          t("entrepreneuriat.statut.bureau.char1"),
        ],
        bestFor: t("entrepreneuriat.statut.bureau.best"),
      },
    ],
  };

  const mainCategories = [category1, category2];
  const additionalCategories = [category3, category4];

  const financements = [
    { name: "ANAPEC", description: "Moukawalati - Aide à la création d'entreprise" },
    { name: "INDH", description: "Initiative Nationale pour le Développement Humain" },
    { name: "Maroc PME", description: "Programmes d'accompagnement et financement" },
    { name: "Banques", description: "Crédit Jeunes Promoteurs, microcrédits" },
    { name: "Incubateurs", description: "Technopark, StartGate, CFCIM" },
  ];

  const renderCategory = (category: typeof category1, index: number) => (
    <div key={index} className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
          <category.icon className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">{category.name}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.statuts.map((statut, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card-hover"
          >
            <h4 className="text-xl font-semibold text-foreground mb-2">{statut.name}</h4>
            <p className="text-muted-foreground text-sm mb-4">{statut.description}</p>
            
            {/* Criteria */}
            <div className="mb-4">
              <p className="text-xs font-medium text-accent mb-2">{t("entrepreneuriat.statuts.criteria")}</p>
              <div className="space-y-1">
                {statut.criteria.map((crit, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{crit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Characteristics */}
            <div className="mb-4">
              <p className="text-xs font-medium text-accent mb-2">{t("entrepreneuriat.statuts.characteristics")}</p>
              <div className="space-y-1">
                {statut.characteristics.map((char, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-accent flex-shrink-0" />
                    <span className="text-xs text-foreground">{char}</span>
                  </div>
                ))}
              </div>
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
  );

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

            <div className="max-w-7xl mx-auto">
              {/* Main Categories (1 & 2) - Always visible */}
              {mainCategories.map((category, index) => renderCategory(category, index))}

              {/* Additional Categories (3 & 4) - Behind "Voir plus" */}
              {showMoreCategories && (
                <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                  {additionalCategories.map((category, index) => renderCategory(category, index + 2))}
                </div>
              )}

              {/* Toggle Button */}
              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowMoreCategories(!showMoreCategories)}
                  className="gap-2"
                >
                  {showMoreCategories ? (
                    <>
                      {t("entrepreneuriat.statuts.showLess")}
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      {t("entrepreneuriat.statuts.showMore")}
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
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