import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  Target, 
  TrendingUp,
  ChevronRight,
  Play
} from "lucide-react";

const parcours = [
  {
    id: 1,
    title: "Marketing Digital",
    duration: "6 mois",
    level: "Débutant",
    description: "Maîtrisez les fondamentaux du marketing numérique.",
    skills: ["SEO", "Social Media", "Analytics", "Content Marketing"],
  },
  {
    id: 2,
    title: "Développement Web",
    duration: "12 mois",
    level: "Intermédiaire",
    description: "Devenez développeur web full-stack.",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js"],
  },
  {
    id: 3,
    title: "Gestion de Projet",
    duration: "4 mois",
    level: "Débutant",
    description: "Apprenez à gérer des projets avec agilité.",
    skills: ["Scrum", "Kanban", "Leadership", "Communication"],
  },
];

const testQuestions = [
  "Aimez-vous résoudre des problèmes complexes ?",
  "Préférez-vous travailler en équipe ou seul ?",
  "Êtes-vous à l'aise avec les nouvelles technologies ?",
];

const Orientation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (score: number) => {
    setAnswers([...answers, score]);
    if (currentStep < testQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                <Compass className="w-4 h-4" />
                Orientation professionnelle
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Trouvez votre <span className="text-gradient">voie</span>
              </h1>
              <p className="text-lg text-primary-foreground/70 mb-8">
                Tests interactifs, parcours recommandés et roadmaps personnalisées 
                pour construire votre avenir professionnel.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="#test">
                  Commencer le test
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Test Section */}
        <section id="test" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  Test rapide
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Découvrez votre profil
                </h2>
                <p className="text-muted-foreground">
                  Répondez à quelques questions pour découvrir les parcours qui vous correspondent.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Question {Math.min(currentStep + 1, testQuestions.length)} / {testQuestions.length}</span>
                  <span>{Math.round((answers.length / testQuestions.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent-gradient transition-all duration-500"
                    style={{ width: `${(answers.length / testQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Card */}
              {answers.length < testQuestions.length ? (
                <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
                  <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
                    {testQuestions[currentStep]}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {["Pas du tout", "Parfois", "Tout à fait"].map((option, index) => (
                      <button
                        key={option}
                        onClick={() => handleAnswer(index + 1)}
                        className="p-4 rounded-xl border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 text-center"
                      >
                        <span className="text-foreground font-medium">{option}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-8 rounded-2xl bg-card border border-border shadow-card text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Test complété !</h3>
                  <p className="text-muted-foreground mb-6">
                    D'après vos réponses, voici les parcours qui vous correspondent le mieux.
                  </p>
                  <Button variant="accent" size="lg" asChild>
                    <a href="#parcours">
                      Voir les résultats
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Parcours Section */}
        <section id="parcours" className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Parcours recommandés
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Explorez les opportunités
              </h2>
              <p className="text-muted-foreground">
                Des parcours structurés pour vous guider vers la réussite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {parcours.map((p) => (
                <div
                  key={p.id}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                      {p.level}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                      {p.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full group-hover:text-accent">
                    Voir le parcours
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Preview */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  Roadmap interactive
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Visualisez votre parcours <span className="text-gradient">étape par étape</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Notre outil de roadmap vous permet de suivre votre progression, 
                  de planifier vos objectifs et de célébrer chaque accomplissement.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: Target, text: "Objectifs clairs et mesurables" },
                    { icon: TrendingUp, text: "Suivi de progression en temps réel" },
                    { icon: BookOpen, text: "Ressources adaptées à chaque étape" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
                <Button variant="accent" size="lg" asChild>
                  <Link to="/register">
                    Créer ma roadmap
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              {/* Roadmap Visual */}
              <div className="relative">
                <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
                  <div className="space-y-6">
                    {["Définir vos objectifs", "Suivre une formation", "Obtenir un stage", "Décrocher un emploi"].map((step, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${i <= 1 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
                          {i <= 1 ? <CheckCircle2 className="w-5 h-5" /> : <span className="font-semibold">{i + 1}</span>}
                        </div>
                        <div className="flex-1">
                          <div className={`font-medium ${i <= 1 ? "text-foreground" : "text-muted-foreground"}`}>{step}</div>
                          {i <= 1 && (
                            <div className="h-1 mt-2 rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-accent-gradient" style={{ width: i === 0 ? "100%" : "60%" }} />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Orientation;
