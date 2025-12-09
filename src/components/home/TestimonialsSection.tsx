import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  { name: "Salma Benali", role: "Étudiante reconvertie", avatar: "S", content: "Grâce à NEXT STEP, j'ai pu me réorienter vers le marketing digital. Les tests d'orientation m'ont vraiment aidée à comprendre mes forces.", rating: 5 },
  { name: "Yassine El Amrani", role: "Stagiaire OFPPT", avatar: "Y", content: "J'ai décroché mon stage en seulement 2 semaines ! Les ressources CV et les conseils d'entretien ont fait toute la différence.", rating: 5 },
  { name: "Ahmed Tazi", role: "Entrepreneur", avatar: "A", content: "Le guide entrepreneuriat m'a accompagné dans la création de ma startup. Les démarches administratives n'ont plus de secrets pour moi.", rating: 5 },
];

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            {t("testimonials.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("testimonials.title")}{" "}
            <span className="text-gradient">{t("testimonials.title.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("testimonials.description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="absolute top-6 right-6 text-accent/20">
                <Quote className="w-10 h-10" />
              </div>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-semibold text-lg">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
