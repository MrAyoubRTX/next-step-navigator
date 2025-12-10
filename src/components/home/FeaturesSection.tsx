import { useLanguage } from "@/contexts/LanguageContext";

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    { 
      titleKey: "features.orientation.title", 
      descKey: "features.orientation.desc",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
    },
    { 
      titleKey: "features.coaching.title", 
      descKey: "features.coaching.desc",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop"
    },
    { 
      titleKey: "features.roadmap.title", 
      descKey: "features.roadmap.desc",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    { 
      titleKey: "features.resources.title", 
      descKey: "features.resources.desc",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop"
    },
    { 
      titleKey: "features.certifications.title", 
      descKey: "features.certifications.desc",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop"
    },
    { 
      titleKey: "features.progress.title", 
      descKey: "features.progress.desc",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            {t("features.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("features.title")}{" "}
            <span className="text-gradient">{t("features.title.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("features.description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-card-hover transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={t(feature.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{t(feature.titleKey)}</h3>
                <p className="text-muted-foreground">{t(feature.descKey)}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
