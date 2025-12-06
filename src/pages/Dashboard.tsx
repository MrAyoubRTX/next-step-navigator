import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Compass, 
  Briefcase, 
  Rocket, 
  CheckCircle2, 
  Clock, 
  BookOpen,
  Bell,
  Settings,
  User,
  ArrowRight,
  TrendingUp
} from "lucide-react";

const roadmapSteps = [
  { title: "Compléter le test d'orientation", completed: true },
  { title: "Définir vos objectifs", completed: true },
  { title: "Créer votre CV", completed: false, current: true },
  { title: "Postuler à des stages", completed: false },
  { title: "Préparer vos entretiens", completed: false },
];

const savedResources = [
  { title: "Modèle CV Marketing", type: "PDF", icon: BookOpen },
  { title: "Guide Entretien", type: "Article", icon: BookOpen },
  { title: "Checklist Entrepreneur", type: "Guide", icon: BookOpen },
];

const notifications = [
  { title: "Nouvelle offre de stage", message: "Stage Marketing à Casablanca", time: "Il y a 2h" },
  { title: "Coaching disponible", message: "Réservez votre session", time: "Il y a 1 jour" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Bonjour, Ahmed 👋</h1>
              <p className="text-muted-foreground">Voici le résumé de votre parcours.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                  2
                </span>
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="sm">
                <User className="w-4 h-4 mr-2" />
                Mon profil
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">40%</p>
                  <p className="text-sm text-muted-foreground">Progression globale</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2/5</p>
                  <p className="text-sm text-muted-foreground">Étapes complétées</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-sm text-muted-foreground">Ressources sauvegardées</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Roadmap */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-foreground">Ma Roadmap</h2>
                  <Button variant="ghost" size="sm">
                    Voir tout
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-4">
                  {roadmapSteps.map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step.completed 
                          ? "bg-accent text-accent-foreground" 
                          : step.current 
                            ? "bg-accent/20 text-accent border-2 border-accent" 
                            : "bg-muted text-muted-foreground"
                      }`}>
                        {step.completed ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <span className="font-semibold">{i + 1}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${step.completed ? "text-muted-foreground line-through" : "text-foreground"}`}>
                          {step.title}
                        </p>
                        {step.current && (
                          <p className="text-xs text-accent">En cours</p>
                        )}
                      </div>
                      {step.current && (
                        <Button variant="accent" size="sm">
                          Continuer
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/orientation" className="group p-6 rounded-2xl bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-colors">
                  <Compass className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-semibold text-foreground mb-1">Orientation</h3>
                  <p className="text-sm text-muted-foreground">Continuer le test</p>
                </Link>
                <Link to="/stages" className="group p-6 rounded-2xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors">
                  <Briefcase className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-1">Stages</h3>
                  <p className="text-sm text-muted-foreground">12 nouvelles offres</p>
                </Link>
                <Link to="/entrepreneuriat" className="group p-6 rounded-2xl bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-colors">
                  <Rocket className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-semibold text-foreground mb-1">Business</h3>
                  <p className="text-sm text-muted-foreground">Créer un business plan</p>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Notifications */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Notifications</h3>
                <div className="space-y-4">
                  {notifications.map((notif, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{notif.title}</p>
                        <p className="text-xs text-muted-foreground">{notif.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Saved Resources */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Ressources sauvegardées</h3>
                <div className="space-y-3">
                  {savedResources.map((resource, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <resource.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{resource.title}</p>
                        <p className="text-xs text-muted-foreground">{resource.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upgrade Card */}
              <div className="p-6 rounded-2xl bg-hero-gradient text-primary-foreground">
                <h3 className="text-lg font-semibold mb-2">Passez à Premium</h3>
                <p className="text-sm text-primary-foreground/70 mb-4">
                  Débloquez le coaching personnalisé et toutes les ressources.
                </p>
                <Button variant="hero" size="sm" asChild>
                  <Link to="/pricing">
                    Voir les offres
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
