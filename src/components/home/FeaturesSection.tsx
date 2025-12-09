import { CheckCircle2, Target, Users, TrendingUp, BookOpen, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    { icon: Target, titleKey: "features.orientation.title", descKey: "features.orientation.desc" },
    { icon: Users, titleKey: "features.coaching.title", descKey: "features.coaching.desc" },
    { icon: TrendingUp, titleKey: "features.roadmap.title", descKey: "features.roadmap.desc" },
    { icon: BookOpen, titleKey: "features.resources.title", descKey: "features.resources.desc" },
    { icon: Award, titleKey: "features.certifications.title", descKey: "features.certifications.desc" },
    { icon: CheckCircle2, titleKey: "features.progress.title", descKey: "features.progress.desc" },
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
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{t(feature.titleKey)}</h3>
              <p className="text-muted-foreground">{t(feature.descKey)}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
