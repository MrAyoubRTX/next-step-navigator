import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingCard } from "@/components/pricing/PricingCard";
import { Check, HelpCircle } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    period: "MAD",
    description: "Parfait pour découvrir la plateforme",
    features: [
      "Tests d'orientation basiques",
      "Accès aux offres de stage",
      "Articles & ressources gratuites",
      "Guide 'Créer une entreprise'",
      "Support par email",
    ],
    buttonText: "Commencer gratuitement",
    buttonVariant: "outline" as const,
  },
  {
    name: "Premium",
    price: "49",
    period: "MAD / mois",
    description: "Pour ceux qui veulent accélérer leur parcours",
    features: [
      "Tests d'orientation avancés",
      "Roadmap personnalisée",
      "Modèles CV pro (Figma + PDF)",
      "Coaching stage (tips + entretien)",
      "Templates Business Plan",
      "Accès prioritaire aux offres",
      "Support chat 24/7",
    ],
    popular: true,
    buttonText: "Essai gratuit 7 jours",
  },
  {
    name: "Pro+",
    price: "149",
    period: "MAD / mois",
    description: "Accompagnement personnalisé complet",
    features: [
      "Tout Premium inclus",
      "Coaching 1-to-1 (orientation ou business)",
      "Suivi mensuel personnalisé",
      "Relecture CV & pitch deck",
      "Accès illimité à tous les outils",
      "Mise en relation entreprises",
      "Support prioritaire dédié",
    ],
    buttonText: "Contacter les ventes",
    buttonVariant: "default" as const,
  },
];

const faqs = [
  {
    question: "Puis-je changer de plan à tout moment ?",
    answer: "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet immédiatement.",
  },
  {
    question: "Y a-t-il un engagement minimum ?",
    answer: "Non, tous nos plans sont sans engagement. Vous pouvez annuler à tout moment sans frais.",
  },
  {
    question: "Comment fonctionne l'essai gratuit ?",
    answer: "L'essai gratuit Premium dure 7 jours. Vous pouvez tester toutes les fonctionnalités sans carte bancaire.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Nous acceptons les cartes bancaires marocaines et internationales, ainsi que les virements bancaires.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        {/* Header */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Tarification simple
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Investissez dans{" "}
                <span className="text-gradient">votre avenir</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Choisissez le plan qui correspond à vos ambitions. Commencez gratuitement 
                et évoluez selon vos besoins.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                Aucune carte requise
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                Annulation gratuite
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                Support 24/7
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                Paiement sécurisé
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Questions fréquentes
              </h2>
              <p className="text-muted-foreground">
                Tout ce que vous devez savoir sur nos offres.
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
