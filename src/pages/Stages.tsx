import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Building2, 
  Search, 
  Filter,
  FileText,
  Video,
  Download,
  ChevronRight,
  ArrowRight
} from "lucide-react";

const stages = [
  {
    id: 1,
    title: "Stage Marketing Digital",
    company: "DigiMedia Maroc",
    location: "Casablanca",
    type: "Stage",
    duration: "6 mois",
    domain: "Marketing",
    level: "Bac+3/4",
    posted: "Il y a 2 jours",
    logo: "D",
  },
  {
    id: 2,
    title: "Stage Développeur Web",
    company: "TechStart",
    location: "Rabat",
    type: "Stage PFE",
    duration: "4 mois",
    domain: "Informatique",
    level: "Bac+5",
    posted: "Il y a 1 semaine",
    logo: "T",
  },
  {
    id: 3,
    title: "Assistant RH",
    company: "HR Solutions",
    location: "Marrakech",
    type: "Stage",
    duration: "3 mois",
    domain: "Ressources Humaines",
    level: "Bac+2/3",
    posted: "Il y a 3 jours",
    logo: "H",
  },
  {
    id: 4,
    title: "Stage Comptabilité",
    company: "FinanceExpert",
    location: "Tanger",
    type: "Stage",
    duration: "6 mois",
    domain: "Finance",
    level: "Bac+4",
    posted: "Il y a 5 jours",
    logo: "F",
  },
];

const resources = [
  {
    icon: FileText,
    title: "Modèles de CV",
    description: "Templates professionnels adaptés au marché marocain",
    action: "Télécharger",
  },
  {
    icon: FileText,
    title: "Lettres de motivation",
    description: "Exemples par secteur et niveau d'études",
    action: "Accéder",
  },
  {
    icon: Video,
    title: "Préparation entretien",
    description: "Vidéos et conseils pour réussir vos entretiens",
    action: "Visionner",
  },
];

const cities = ["Toutes", "Casablanca", "Rabat", "Marrakech", "Tanger", "Fès", "Agadir"];
const domains = ["Tous", "Marketing", "Informatique", "Finance", "RH", "Commercial", "Design"];

const Stages = () => {
  const [selectedCity, setSelectedCity] = useState("Toutes");
  const [selectedDomain, setSelectedDomain] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStages = stages.filter((stage) => {
    const matchesCity = selectedCity === "Toutes" || stage.location === selectedCity;
    const matchesDomain = selectedDomain === "Tous" || stage.domain === selectedDomain;
    const matchesSearch = stage.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          stage.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesDomain && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4" />
                Offres de stages
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Trouvez le stage <span className="text-gradient">idéal</span>
              </h1>
              <p className="text-lg text-primary-foreground/70 mb-8">
                Des centaines d'opportunités de stage au Maroc. 
                Filtrez par ville, domaine et niveau pour trouver celui qui vous correspond.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-8 border-b border-border bg-card sticky top-16 lg:top-20 z-40">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher un stage, une entreprise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* City Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
                {cities.slice(0, 5).map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
                      selectedCity === city
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>

              {/* Domain Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
                {domains.slice(0, 4).map((domain) => (
                  <button
                    key={domain}
                    onClick={() => setSelectedDomain(domain)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
                      selectedDomain === domain
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {domain}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stages List */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">{filteredStages.length}</span> offres trouvées
                  </p>
                  <Button variant="ghost" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Plus de filtres
                  </Button>
                </div>

                {filteredStages.map((stage) => (
                  <div
                    key={stage.id}
                    className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="flex gap-4">
                      {/* Company Logo */}
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-accent font-bold text-xl">{stage.logo}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                              {stage.title}
                            </h3>
                            <p className="text-muted-foreground flex items-center gap-1">
                              <Building2 className="w-4 h-4" />
                              {stage.company}
                            </p>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium whitespace-nowrap">
                            {stage.type}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {stage.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {stage.duration}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-muted">{stage.level}</span>
                          <span className="text-xs">{stage.posted}</span>
                        </div>

                        <div className="flex items-center gap-3 mt-4">
                          <Button variant="accent" size="sm">
                            Postuler
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            En savoir plus
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Resources */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Ressources</h3>
                  <div className="space-y-4">
                    {resources.map((resource, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <resource.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{resource.title}</h4>
                          <p className="text-xs text-muted-foreground">{resource.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips Card */}
                <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Conseil du jour</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Personnalisez chaque candidature ! Adaptez votre CV et lettre de motivation 
                    à l'offre pour multiplier vos chances par 3.
                  </p>
                  <Button variant="ghost" size="sm" className="text-accent">
                    Plus de conseils
                    <ChevronRight className="w-4 h-4" />
                  </Button>
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

export default Stages;
