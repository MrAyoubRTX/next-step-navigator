import { CheckCircle2, Target, Users, TrendingUp, BookOpen, Award } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Tests d'orientation intelligents",
    description: "Découvrez vos talents et aspirations grâce à nos tests interactifs basés sur la psychologie du travail.",
  },
  {
    icon: Users,
    title: "Coaching personnalisé",
    description: "Bénéficiez d'un accompagnement sur-mesure avec nos experts en orientation et carrière.",
  },
  {
    icon: TrendingUp,
    title: "Roadmaps de carrière",
    description: "Visualisez votre parcours avec des plans d'action détaillés étape par étape.",
  },
  {
    icon: BookOpen,
    title: "Ressources premium",
    description: "Accédez à des modèles de CV, lettres de motivation et guides professionnels.",
  },
  {
    icon: Award,
    title: "Certifications reconnues",
    description: "Validez vos compétences avec des certifications valorisées par les employeurs.",
  },
  {
    icon: CheckCircle2,
    title: "Suivi de progression",
    description: "Suivez votre avancement et célébrez chaque étape de votre parcours.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Fonctionnalités
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tout ce dont vous avez besoin pour{" "}
            <span className="text-gradient">réussir</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Une plateforme complète qui vous accompagne à chaque étape de votre parcours professionnel.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-card-hover transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
