import { useLanguage } from "@/contexts/LanguageContext";
import { Compass, Briefcase, Rocket, UserCheck, Award, Clock, Star } from "lucide-react";

export function FeaturesSection() {
  const { t } = useLanguage();

  const services = [
    { 
      titleKey: "features.orientation.title", 
      descKey: "features.orientation.desc",
      expertNameKey: "experts.orientation.name",
      expertRoleKey: "experts.orientation.role",
      expertExpKey: "experts.orientation.experience",
      expertDescKey: "features.orientation.expert.desc",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      expertImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      color: "from-blue-500 to-cyan-400"
    },
    { 
      titleKey: "features.stages.title", 
      descKey: "features.stages.desc",
      expertNameKey: "experts.stages.name",
      expertRoleKey: "experts.stages.role",
      expertExpKey: "experts.stages.experience",
      expertDescKey: "features.stages.expert.desc",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      expertImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      color: "from-emerald-500 to-teal-400"
    },
    { 
      titleKey: "features.entrepreneuriat.title", 
      descKey: "features.entrepreneuriat.desc",
      expertNameKey: "experts.entrepreneuriat.name",
      expertRoleKey: "experts.entrepreneuriat.role",
      expertExpKey: "experts.entrepreneuriat.experience",
      expertDescKey: "features.entrepreneuriat.expert.desc",
      icon: Rocket,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      expertImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      color: "from-orange-500 to-amber-400"
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl bg-card border border-border hover:border-accent/50 hover:shadow-card-hover transition-all duration-500 overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={t(service.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`} />
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{t(service.titleKey)}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{t(service.descKey)}</p>
                  
                  {/* Expert Section - Enhanced */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <UserCheck className="w-4 h-4 text-accent" />
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                        {t("features.expert.badge")}
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="relative flex-shrink-0">
                        <img 
                          src={service.expertImage} 
                          alt={t(service.expertNameKey)}
                          className="w-16 h-16 rounded-full object-cover border-2 border-accent/30 shadow-md"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-accent rounded-full p-1">
                          <Star className="w-3 h-3 text-accent-foreground fill-current" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-foreground">{t(service.expertNameKey)}</h4>
                        <p className="text-xs text-accent font-medium mb-1">{t(service.expertRoleKey)}</p>
                        <div className="flex items-center gap-1 mb-2">
                          <Clock className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{t(service.expertExpKey)}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{t(service.expertDescKey)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
        
        {/* Trust Indicator */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <UserCheck className="w-5 h-5 text-accent" />
            <span className="font-medium">{t("features.expert.trust")}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
