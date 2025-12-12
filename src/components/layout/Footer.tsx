import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    plateforme: [
      { name: t("nav.orientation"), href: "/orientation" },
      { name: t("footer.stages"), href: "/stages" },
      { name: t("footer.jobs"), href: "/stages" },
      { name: t("nav.entrepreneuriat"), href: "/entrepreneuriat" },
      { name: t("nav.pricing"), href: "/pricing" },
    ],
    ressources: [
      { name: t("footer.blog"), href: "/blog" },
      { name: t("footer.faq"), href: "/faq" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logo} alt="NEXT STEP" className="h-24 w-auto" />
            </Link>
            <p className="text-primary-foreground/70 text-sm max-w-sm mb-6">{t("footer.description")}</p>
            <div className="flex items-center gap-4">
              {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.platform")}</h4>
            <ul className="space-y-3">
              {footerLinks.plateforme.map((link) => (
                <li key={link.href + link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.resources")}</h4>
            <ul className="space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70"><Mail className="w-4 h-4" />contact@nextstep.ma</li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70"><Phone className="w-4 h-4" />+212 5 22 00 00 00</li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70"><MapPin className="w-4 h-4 mt-0.5" />Casablanca, Maroc</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/50">© 2026 NEXT STEP. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
