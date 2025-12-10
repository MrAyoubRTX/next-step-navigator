import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Star, Target, Rocket, Lightbulb, Leaf } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                {t("about.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
                {t("about.title")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.intro")}
              </p>
            </div>

            {/* Context */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.context")}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {t("about.vision.title")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("about.vision.content")}
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {t("about.mission.title")}
                  </h2>
                  <p className="text-muted-foreground mb-6">{t("about.mission.intro")}</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">{t("about.mission.point1.title")}</strong> {t("about.mission.point1.desc")}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">{t("about.mission.point2.title")}</strong> {t("about.mission.point2.desc")}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">{t("about.mission.point3.title")}</strong> {t("about.mission.point3.desc")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why We Created NextStep */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {t("about.why.title")}
                  </h2>
                  <p className="text-muted-foreground mb-4">{t("about.why.intro")}</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{t("about.why.point1")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{t("about.why.point2")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{t("about.why.point3")}</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-4">{t("about.why.conclusion")}</p>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {t("about.value.title")}
                  </h2>
                  <p className="text-muted-foreground mb-4">{t("about.value.intro")}</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{t("about.value.point1")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{t("about.value.point2")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{t("about.value.point3")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{t("about.value.point4")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Closing */}
            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 text-center">
                <p className="text-lg text-foreground font-medium mb-2">
                  {t("about.slogan")}
                </p>
                <p className="text-muted-foreground">
                  {t("about.closing")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
