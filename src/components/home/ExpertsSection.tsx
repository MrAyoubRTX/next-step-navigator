import { useLanguage } from "@/contexts/LanguageContext";
import { Award, Briefcase, GraduationCap, Users } from "lucide-react";

export function ExpertsSection() {
  const { t } = useLanguage();

  const experts = [
    {
      nameKey: "experts.orientation.name",
      roleKey: "experts.orientation.role",
      experienceKey: "experts.orientation.experience",
      expertiseKey: "experts.orientation.expertise",
      quoteKey: "experts.orientation.quote",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-500/10"
    },
    {
      nameKey: "experts.stages.name",
      roleKey: "experts.stages.role",
      experienceKey: "experts.stages.experience",
      expertiseKey: "experts.stages.expertise",
      quoteKey: "experts.stages.quote",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      icon: Briefcase,
      color: "from-emerald-500 to-teal-400",
      bgColor: "bg-emerald-500/10"
    },
    {
      nameKey: "experts.entrepreneuriat.name",
      roleKey: "experts.entrepreneuriat.role",
      experienceKey: "experts.entrepreneuriat.experience",
      expertiseKey: "experts.entrepreneuriat.expertise",
      quoteKey: "experts.entrepreneuriat.quote",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      icon: Award,
      color: "from-orange-500 to-amber-400",
      bgColor: "bg-orange-500/10"
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            {t("experts.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("experts.title")}{" "}
            <span className="text-gradient">{t("experts.title.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("experts.description")}</p>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => {
            const Icon = expert.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl bg-card border border-border hover:border-accent/50 hover:shadow-card-hover transition-all duration-500 overflow-hidden p-8"
              >
                {/* Expert Photo */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-br ${expert.color} rounded-full blur-lg opacity-30`} />
                    <img 
                      src={expert.image} 
                      alt={t(expert.nameKey)}
                      className="relative w-28 h-28 rounded-full object-cover border-4 border-background shadow-xl"
                    />
                    <div className={`absolute -bottom-2 -right-2 p-2.5 rounded-xl bg-gradient-to-br ${expert.color} shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Name & Role */}
                  <h3 className="text-xl font-bold text-foreground text-center">{t(expert.nameKey)}</h3>
                  <p className="text-accent font-medium text-sm">{t(expert.roleKey)}</p>
                </div>
                
                {/* Experience & Expertise */}
                <div className="space-y-4 mb-6">
                  <div className={`flex items-center gap-3 p-3 rounded-xl ${expert.bgColor}`}>
                    <Award className="w-5 h-5 text-foreground/70" />
                    <span className="text-sm font-medium text-foreground">{t(expert.experienceKey)}</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                    <Users className="w-5 h-5 text-foreground/70 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{t(expert.expertiseKey)}</span>
                  </div>
                </div>
                
                {/* Personal Quote */}
                <div className="relative pt-4 border-t border-border">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-card px-3">
                    <span className="text-3xl text-accent/50">"</span>
                  </div>
                  <p className="text-center text-muted-foreground italic text-sm leading-relaxed pt-2">
                    {t(expert.quoteKey)}
                  </p>
                </div>
                
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
        
        {/* Trust Message */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
            <Users className="w-5 h-5 text-accent" />
            <span className="font-medium text-foreground">{t("experts.trust.message")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
