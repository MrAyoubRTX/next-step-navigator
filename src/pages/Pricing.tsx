import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingCard } from "@/components/pricing/PricingCard";
import { Check, HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      name: t("pricing.plan1.name"),
      price: "249",
      period: "DH",
      description: t("pricing.plan1.desc"),
      features: [
        t("pricing.plan1.f1"),
        t("pricing.plan1.f2"),
        t("pricing.plan1.f3"),
        t("pricing.plan1.f4"),
        t("pricing.plan1.f5"),
      ],
      buttonText: t("pricing.plan1.cta"),
      buttonVariant: "outline" as const,
    },
    {
      name: t("pricing.plan2.name"),
      price: "499",
      period: "DH",
      description: t("pricing.plan2.desc"),
      features: [
        t("pricing.plan2.f1"),
        t("pricing.plan2.f2"),
        t("pricing.plan2.f3"),
        t("pricing.plan2.f4"),
        t("pricing.plan2.f5"),
        t("pricing.plan2.f6"),
      ],
      popular: true,
      buttonText: t("pricing.plan2.cta"),
    },
    {
      name: t("pricing.plan3.name"),
      price: "1299",
      period: "DH",
      description: t("pricing.plan3.desc"),
      features: [
        t("pricing.plan3.f1"),
        t("pricing.plan3.f2"),
        t("pricing.plan3.f3"),
        t("pricing.plan3.f4"),
        t("pricing.plan3.f5"),
        t("pricing.plan3.f6"),
        t("pricing.plan3.f7"),
      ],
      buttonText: t("pricing.plan3.cta"),
      buttonVariant: "default" as const,
    },
  ];

  const faqs = [
    {
      question: t("pricing.faq.q1"),
      answer: t("pricing.faq.a1"),
    },
    {
      question: t("pricing.faq.q2"),
      answer: t("pricing.faq.a2"),
    },
    {
      question: t("pricing.faq.q3"),
      answer: t("pricing.faq.a3"),
    },
    {
      question: t("pricing.faq.q4"),
      answer: t("pricing.faq.a4"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        {/* Header */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                {t("pricing.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t("pricing.title")}{" "}
                <span className="text-gradient">{t("pricing.title.highlight")}</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                {t("pricing.description")}
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
                {t("pricing.nocard")}
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                {t("pricing.cancel")}
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                {t("pricing.support")}
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                {t("pricing.secure")}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("pricing.faq.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("pricing.faq.description")}
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
