import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "fr" | "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navbar
    "nav.orientation": "Orientation",
    "nav.stages": "Stages",
    "nav.entrepreneuriat": "Entrepreneuriat",
    "nav.pricing": "Tarifs",
    "nav.blog": "Blog",
    "nav.login": "Se connecter",
    "nav.register": "Commencer gratuitement",
    "nav.slogan": "Votre avenir, une étape à la fois",
    // Hero
    "hero.title": "Construisez votre avenir,",
    "hero.title.highlight": "une étape à la fois",
    "hero.description": "NEXT STEP vous accompagne dans votre orientation professionnelle, votre recherche de stage et votre projet entrepreneurial au Maroc.",
    "hero.cta.orientation": "Découvrir mon orientation",
    "hero.cta.stages": "Explorer les stages",
    // Features
    "features.title": "Une plateforme, trois solutions",
    "features.orientation.title": "Orientation",
    "features.orientation.desc": "Tests interactifs et roadmaps personnalisées pour trouver votre voie.",
    "features.stages.title": "Stages",
    "features.stages.desc": "Offres de stages filtrées et ressources pour décrocher le poste idéal.",
    "features.business.title": "Entrepreneuriat",
    "features.business.desc": "Guides complets et outils pour lancer votre entreprise au Maroc.",
    // CTA
    "cta.title": "Prêt à franchir le pas ?",
    "cta.description": "Rejoignez des milliers de jeunes marocains qui construisent leur avenir avec NEXT STEP.",
    "cta.button": "Commencer maintenant",
    // Footer
    "footer.description": "Votre partenaire pour l'orientation, les stages et l'entrepreneuriat au Maroc.",
    "footer.platform": "Plateforme",
    "footer.resources": "Ressources",
    "footer.company": "Entreprise",
    "footer.legal": "Légal",
    "footer.rights": "Tous droits réservés.",
  },
  en: {
    // Navbar
    "nav.orientation": "Career Guidance",
    "nav.stages": "Internships",
    "nav.entrepreneuriat": "Entrepreneurship",
    "nav.pricing": "Pricing",
    "nav.blog": "Blog",
    "nav.login": "Sign in",
    "nav.register": "Get started free",
    "nav.slogan": "Your future, one step at a time",
    // Hero
    "hero.title": "Build your future,",
    "hero.title.highlight": "one step at a time",
    "hero.description": "NEXT STEP guides you through career orientation, internship search, and entrepreneurial projects in Morocco.",
    "hero.cta.orientation": "Discover my path",
    "hero.cta.stages": "Explore internships",
    // Features
    "features.title": "One platform, three solutions",
    "features.orientation.title": "Career Guidance",
    "features.orientation.desc": "Interactive tests and personalized roadmaps to find your path.",
    "features.stages.title": "Internships",
    "features.stages.desc": "Filtered internship offers and resources to land your ideal position.",
    "features.business.title": "Entrepreneurship",
    "features.business.desc": "Complete guides and tools to launch your business in Morocco.",
    // CTA
    "cta.title": "Ready to take the leap?",
    "cta.description": "Join thousands of young Moroccans building their future with NEXT STEP.",
    "cta.button": "Get started now",
    // Footer
    "footer.description": "Your partner for career guidance, internships, and entrepreneurship in Morocco.",
    "footer.platform": "Platform",
    "footer.resources": "Resources",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.rights": "All rights reserved.",
  },
  ar: {
    // Navbar
    "nav.orientation": "التوجيه المهني",
    "nav.stages": "التدريب",
    "nav.entrepreneuriat": "ريادة الأعمال",
    "nav.pricing": "الأسعار",
    "nav.blog": "المدونة",
    "nav.login": "تسجيل الدخول",
    "nav.register": "ابدأ مجاناً",
    "nav.slogan": "مستقبلك، خطوة بخطوة",
    // Hero
    "hero.title": "ابنِ مستقبلك،",
    "hero.title.highlight": "خطوة بخطوة",
    "hero.description": "منصة NEXT STEP ترافقك في توجيهك المهني، والبحث عن تدريب، ومشروعك الريادي في المغرب.",
    "hero.cta.orientation": "اكتشف مساري",
    "hero.cta.stages": "استكشف التدريبات",
    // Features
    "features.title": "منصة واحدة، ثلاثة حلول",
    "features.orientation.title": "التوجيه المهني",
    "features.orientation.desc": "اختبارات تفاعلية وخطط مخصصة لإيجاد طريقك.",
    "features.stages.title": "التدريب",
    "features.stages.desc": "عروض تدريب مصفاة وموارد للحصول على الوظيفة المثالية.",
    "features.business.title": "ريادة الأعمال",
    "features.business.desc": "أدلة شاملة وأدوات لإطلاق مشروعك في المغرب.",
    // CTA
    "cta.title": "مستعد للانطلاق؟",
    "cta.description": "انضم إلى آلاف الشباب المغاربة الذين يبنون مستقبلهم مع NEXT STEP.",
    "cta.button": "ابدأ الآن",
    // Footer
    "footer.description": "شريكك في التوجيه المهني والتدريب وريادة الأعمال في المغرب.",
    "footer.platform": "المنصة",
    "footer.resources": "الموارد",
    "footer.company": "الشركة",
    "footer.legal": "قانوني",
    "footer.rights": "جميع الحقوق محفوظة.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language") as Language;
    return saved || "fr";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
