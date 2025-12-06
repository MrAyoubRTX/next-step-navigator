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
  BookOpen,
  Lightbulb,
  Target
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Définir votre projet",
    description: "Clarifiez votre idée, identifiez votre marché cible et validez votre concept.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Choisir le statut juridique",
    description: "SARL, SA, auto-entrepreneur... Découvrez quel statut convient à votre activité.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Formalités administratives",
    description: "Registre de commerce, CRI, CNSS... Toutes les démarches expliquées simplement.",
    icon: Building,
  },
  {
    number: "04",
    title: "Trouver des financements",
    description: "INDH, ANAPEC, banques, investisseurs... Explorez toutes les options.",
    icon: Wallet,
  },
];

const statuts = [
  {
    name: "Auto-entrepreneur",
    description: "Idéal pour démarrer seul avec peu de formalités",
    advantages: ["Pas de capital minimum", "Comptabilité simplifiée", "Charges réduites"],
    bestFor: "Freelances, consultants, petits commerces",
  },
  {
    name: "SARL",
    description: "Structure classique pour les PME",
    advantages: ["Responsabilité limitée", "Crédibilité accrue", "Partenaires possibles"],
    bestFor: "PME, projets à croissance modérée",
  },
  {
    name: "SA",
    description: "Pour les projets ambitieux",
    advantages: ["Levée de fonds facilitée", "Image professionnelle", "Cotation possible"],
    bestFor: "Startups, grands projets, levées de fonds",
  },
];

const financements = [
  { name: "ANAPEC", description: "Moukawalati - Aide à la création d'entreprise" },
  { name: "INDH", description: "Initiative Nationale pour le Développement Humain" },
  { name: "Maroc PME", description: "Programmes d'accompagnement et financement" },
  { name: "Banques", description: "Crédit Jeunes Promoteurs, microcrédits" },
  { name: "Incubateurs", description: "Technopark, StartGate, CFCIM" },
];

const Entrepreneuriat = () => {
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
                Entrepreneuriat au Maroc
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Lancez votre <span className="text-gradient">entreprise</span>
              </h1>
              <p className="text-lg text-primary-foreground/70 mb-8">
                Guide complet pour créer et développer votre entreprise au Maroc. 
                Statuts juridiques, démarches administratives, financements.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="#guide">
                    Commencer le guide
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href="#business-plan">Créer mon business plan</a>
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
                Les étapes clés
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Créer votre entreprise en <span className="text-gradient">4 étapes</span>
              </h2>
              <p className="text-muted-foreground">
                Un parcours structuré pour transformer votre idée en réalité.
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
                Statuts juridiques
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choisissez le bon statut
              </h2>
              <p className="text-muted-foreground">
                Comparez les différentes formes juridiques pour trouver celle qui vous convient.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                      <span className="font-medium text-accent">Idéal pour : </span>
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
                  Financements
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Trouvez les <span className="text-gradient">financements</span> adaptés
                </h2>
                <p className="text-muted-foreground mb-8">
                  Le Maroc offre de nombreuses opportunités de financement pour les entrepreneurs. 
                  Découvrez les programmes qui correspondent à votre projet.
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
                <h3 className="text-2xl font-bold mb-8">Le saviez-vous ?</h3>
                <div className="space-y-8">
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">+50%</div>
                    <p className="text-primary-foreground/70">d'entreprises créées en 5 ans au Maroc</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">100K+</div>
                    <p className="text-primary-foreground/70">auto-entrepreneurs actifs</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">15+</div>
                    <p className="text-primary-foreground/70">incubateurs et accélérateurs</p>
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
                Outil gratuit
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Créez votre <span className="text-gradient">Business Plan</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Notre outil simplifié vous guide étape par étape pour créer un business plan 
                professionnel et convaincant.
              </p>

              <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    { icon: Target, title: "Résumé exécutif", desc: "Présentez votre vision" },
                    { icon: Users, title: "Étude de marché", desc: "Analysez votre cible" },
                    { icon: Wallet, title: "Plan financier", desc: "Projetez vos revenus" },
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
                    Commencer mon business plan
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
