import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant?: "default" | "accent" | "outline";
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  buttonText,
  buttonVariant = "default",
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col p-8 rounded-2xl border transition-all duration-300",
        popular
          ? "bg-primary text-primary-foreground border-accent shadow-glow scale-105 z-10"
          : "bg-card text-card-foreground border-border hover:border-accent/50 hover:shadow-card-hover"
      )}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            Le plus populaire
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className={cn("text-2xl font-bold mb-2", popular ? "text-primary-foreground" : "text-foreground")}>
          {name}
        </h3>
        <p className={cn("text-sm", popular ? "text-primary-foreground/70" : "text-muted-foreground")}>
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className={cn("text-5xl font-bold", popular ? "text-accent" : "text-foreground")}>
            {price}
          </span>
          <span className={cn("text-lg", popular ? "text-primary-foreground/70" : "text-muted-foreground")}>
            {period}
          </span>
        </div>
      </div>

      {/* Features */}
      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
              popular ? "bg-accent text-accent-foreground" : "bg-accent/10 text-accent"
            )}>
              <Check className="w-3 h-3" />
            </div>
            <span className={cn("text-sm", popular ? "text-primary-foreground/90" : "text-foreground")}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button
        variant={popular ? "hero" : buttonVariant}
        size="lg"
        className="w-full"
        asChild
      >
        <Link to="/register">{buttonText}</Link>
      </Button>
    </div>
  );
}
