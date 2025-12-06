import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User, Tag } from "lucide-react";

const featuredPost = {
  id: 1,
  title: "Comment réussir sa reconversion professionnelle au Maroc en 2024",
  excerpt: "Guide complet pour changer de carrière avec succès. Découvrez les étapes clés, les erreurs à éviter et les opportunités du marché marocain.",
  author: "Équipe NEXT STEP",
  date: "5 Décembre 2024",
  readTime: "8 min",
  category: "Orientation",
  image: "gradient",
};

const posts = [
  {
    id: 2,
    title: "Top 10 des secteurs qui recrutent des stagiaires",
    excerpt: "Découvrez les domaines les plus porteurs pour décrocher votre stage.",
    author: "Leila Bennani",
    date: "3 Décembre 2024",
    readTime: "5 min",
    category: "Stages",
  },
  {
    id: 3,
    title: "Créer son entreprise : les erreurs à éviter",
    excerpt: "Les pièges classiques des jeunes entrepreneurs et comment les contourner.",
    author: "Karim Tazi",
    date: "1 Décembre 2024",
    readTime: "6 min",
    category: "Entrepreneuriat",
  },
  {
    id: 4,
    title: "Rédiger un CV qui se démarque",
    excerpt: "Conseils pratiques pour créer un CV percutant adapté au marché marocain.",
    author: "Sara El Fassi",
    date: "28 Novembre 2024",
    readTime: "4 min",
    category: "Carrière",
  },
  {
    id: 5,
    title: "Les soft skills les plus recherchées en 2024",
    excerpt: "Quelles compétences comportementales développer pour booster votre carrière.",
    author: "Ahmed Moussaoui",
    date: "25 Novembre 2024",
    readTime: "5 min",
    category: "Orientation",
  },
  {
    id: 6,
    title: "Financer sa startup : guide complet",
    excerpt: "Toutes les options de financement disponibles pour les entrepreneurs marocains.",
    author: "Équipe NEXT STEP",
    date: "22 Novembre 2024",
    readTime: "7 min",
    category: "Entrepreneuriat",
  },
];

const categories = ["Tous", "Orientation", "Stages", "Entrepreneuriat", "Carrière"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        {/* Header */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Blog & Ressources
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Conseils et <span className="text-gradient">inspirations</span>
              </h1>
              <p className="text-muted-foreground">
                Articles, guides et témoignages pour vous accompagner dans votre parcours.
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    cat === "Tous"
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-hero-gradient p-8 lg:p-12">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
              <div className="relative max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-primary-foreground/70 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/60 mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span>{featuredPost.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime} de lecture
                  </span>
                </div>
                <Button variant="hero" asChild>
                  <Link to={`/blog/${featuredPost.id}`}>
                    Lire l'article
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">Derniers articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-card-hover transition-all duration-300"
                >
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Charger plus d'articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Restez informé
              </h2>
              <p className="text-muted-foreground mb-8">
                Recevez nos meilleurs conseils et actualités directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="accent" size="lg">
                  S'abonner
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
