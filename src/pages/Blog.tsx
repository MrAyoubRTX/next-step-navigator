import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Blog = () => {
  const { t } = useLanguage();

  const featuredPost = {
    id: 1,
    title: t("blog.featured.title"),
    excerpt: t("blog.featured.excerpt"),
    author: t("blog.featured.author"),
    date: t("blog.featured.date"),
    readTime: t("blog.featured.readTime"),
    category: t("blog.category.orientation"),
  };

  const posts = [
    {
      id: 2,
      title: t("blog.post1.title"),
      excerpt: t("blog.post1.excerpt"),
      author: "Leila Bennani",
      date: t("blog.post1.date"),
      readTime: "5 min",
      category: t("blog.category.stages"),
    },
    {
      id: 3,
      title: t("blog.post2.title"),
      excerpt: t("blog.post2.excerpt"),
      author: "Karim Tazi",
      date: t("blog.post2.date"),
      readTime: "6 min",
      category: t("blog.category.entrepreneuriat"),
    },
    {
      id: 4,
      title: t("blog.post3.title"),
      excerpt: t("blog.post3.excerpt"),
      author: "Sara El Fassi",
      date: t("blog.post3.date"),
      readTime: "4 min",
      category: t("blog.category.career"),
    },
    {
      id: 5,
      title: t("blog.post4.title"),
      excerpt: t("blog.post4.excerpt"),
      author: "Ahmed Moussaoui",
      date: t("blog.post4.date"),
      readTime: "5 min",
      category: t("blog.category.orientation"),
    },
    {
      id: 6,
      title: t("blog.post5.title"),
      excerpt: t("blog.post5.excerpt"),
      author: t("blog.featured.author"),
      date: t("blog.post5.date"),
      readTime: "7 min",
      category: t("blog.category.entrepreneuriat"),
    },
  ];

  const categories = [
    t("blog.category.all"),
    t("blog.category.orientation"),
    t("blog.category.stages"),
    t("blog.category.entrepreneuriat"),
    t("blog.category.career"),
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        {/* Header */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                {t("blog.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t("blog.title")} <span className="text-gradient">{t("blog.title.highlight")}</span>
              </h1>
              <p className="text-muted-foreground">
                {t("blog.description")}
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat, index) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    index === 0
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
                    {featuredPost.readTime} {t("blog.readTime")}
                  </span>
                </div>
                <Button variant="hero" asChild>
                  <Link to={`/blog/${featuredPost.id}`}>
                    {t("blog.readArticle")}
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
            <h3 className="text-2xl font-bold text-foreground mb-8">{t("blog.latestArticles")}</h3>
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
                {t("blog.loadMore")}
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t("blog.newsletter.title")}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("blog.newsletter.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t("blog.newsletter.placeholder")}
                  className="flex-1 h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="accent" size="lg">
                  {t("blog.newsletter.subscribe")}
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
