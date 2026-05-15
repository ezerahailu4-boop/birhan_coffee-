import { createContext, useContext, useState } from 'react';

export const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'am', label: 'አማርኛ', flag: '🇪🇹' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

export const T = {
  en: {
    // Navbar
    home: 'Home', ourStory: 'Our Story', farmToCup: 'Farm to Cup',
    coffees: 'Coffees', aboutUs: 'About Us', contact: 'Contact',
    cart: 'Cart',
    // Hero
    heroLine1: 'From the', heroLine2: 'Ethiopian Highlands', heroLine3: 'To Your Cup',
    heroDesc: 'Birhan Coffee PLC — a top-100 Ethiopian coffee exporter — brings single-origin, traceable specialty beans from four legendary regions directly to global markets.',
    exploreCoffees: 'Explore Our Coffees →', farmJourney: 'Farm to Cup Journey',
    // About
    ourCompany: 'Our Company', fiveYears: 'Five Years of', purposefulGrowth: 'Purposeful Growth',
    workWithUs: 'Work With Us →',
    // Coffees
    singleOrigin: 'Single-Origin Specialty', ourCoffees: 'Our Coffees',
    fourOrigins: 'Four distinct Ethiopian origins. Fully traceable. Ethically sourced. Premium Arabica at its finest.',
    addToCart: 'Add to Cart', perBag: 'per 250g bag',
    // Contact
    getInTouch: 'Get In Touch', letsTalk: "Let's Talk", coffee: 'Coffee',
    sendMessage: 'Send Message ✦', yourName: 'Your Name', email: 'Email',
    company: 'Company / Organisation', message: 'Message',
    interestedIn: "I'm interested in",
    // Footer
    developedBy: 'Developed by Ezera Hailu & Matiyas Tesfaye',
    allRights: '© 2025 Birhan Coffee PLC. All rights reserved.',
    tagline: 'Addis Ababa · Ethiopia · Direct Trade',
    // General
    requestSample: 'Request a Sample →', learnMore: 'Learn More →',
    readMore: 'Read More →', viewDetails: 'View details →',
  },
  am: {
    // Navbar
    home: 'መነሻ', ourStory: 'ታሪካችን', farmToCup: 'ከእርሻ እስከ ኩባያ',
    coffees: 'ቡናዎቻችን', aboutUs: 'ስለ እኛ', contact: 'ያግኙን',
    cart: 'ጋሪ',
    // Hero
    heroLine1: 'ከ', heroLine2: 'የኢትዮጵያ ደጋዎች', heroLine3: 'እስከ ኩባያዎ',
    heroDesc: 'ብርሃን ቡና ኃ.የተ.የግ.ማ — ከኢትዮጵያ ምርጥ 100 ቡና ላኪዎች አንዱ — ከአራት ታዋቂ ክልሎች ቀጥታ ወደ ዓለም ገበያ ልዩ ቡና ያቀርባል።',
    exploreCoffees: 'ቡናዎቻችንን ያስሱ →', farmJourney: 'ከእርሻ እስከ ኩባያ ጉዞ',
    // About
    ourCompany: 'ኩባንያችን', fiveYears: 'አምስት ዓመታት', purposefulGrowth: 'ዓላማ ያለው ዕድገት',
    workWithUs: 'ከእኛ ጋር ይስሩ →',
    // Coffees
    singleOrigin: 'ነጠላ-ምንጭ ልዩ ቡና', ourCoffees: 'ቡናዎቻችን',
    fourOrigins: 'አራት የተለያዩ የኢትዮጵያ ምንጮች። ሙሉ ተከታታይነት። በሥነ-ምግባር የተሰበሰበ። ምርጥ አረቢካ።',
    addToCart: 'ወደ ጋሪ ጨምር', perBag: 'በ250ግ ከረጢት',
    // Contact
    getInTouch: 'ያግኙን', letsTalk: 'ስለ', coffee: 'ቡና እናውራ',
    sendMessage: 'መልዕክት ላክ ✦', yourName: 'ስምዎ', email: 'ኢሜይል',
    company: 'ኩባንያ / ድርጅት', message: 'መልዕክት',
    interestedIn: 'ፍላጎቴ',
    // Footer
    developedBy: 'የተሰራው በ ኤዘራ ሃይሉ እና ማቲያስ ተስፋዬ',
    allRights: '© 2025 ብርሃን ቡና ኃ.የተ.የግ.ማ። መብቱ በሕግ የተጠበቀ ነው።',
    tagline: 'አዲስ አበባ · ኢትዮጵያ · ቀጥታ ንግድ',
    // General
    requestSample: 'ናሙና ይጠይቁ →', learnMore: 'ተጨማሪ ይወቁ →',
    readMore: 'ተጨማሪ ያንብቡ →', viewDetails: 'ዝርዝር ይመልከቱ →',
  },
  fr: {
    // Navbar
    home: 'Accueil', ourStory: 'Notre Histoire', farmToCup: 'De la Ferme à la Tasse',
    coffees: 'Nos Cafés', aboutUs: 'À Propos', contact: 'Contact',
    cart: 'Panier',
    // Hero
    heroLine1: 'Des', heroLine2: 'Hauts Plateaux Éthiopiens', heroLine3: 'À Votre Tasse',
    heroDesc: "Birhan Coffee PLC — l'un des 100 meilleurs exportateurs de café éthiopien — apporte des grains de spécialité traçables de quatre régions légendaires directement aux marchés mondiaux.",
    exploreCoffees: 'Explorer Nos Cafés →', farmJourney: 'Voyage de la Ferme à la Tasse',
    // About
    ourCompany: 'Notre Entreprise', fiveYears: 'Cinq Ans de', purposefulGrowth: 'Croissance Purposive',
    workWithUs: 'Travailler Avec Nous →',
    // Coffees
    singleOrigin: 'Spécialité Mono-Origine', ourCoffees: 'Nos Cafés',
    fourOrigins: "Quatre origines éthiopiennes distinctes. Entièrement traçables. Sourcés éthiquement. Le meilleur Arabica.",
    addToCart: 'Ajouter au Panier', perBag: 'par sachet 250g',
    // Contact
    getInTouch: 'Nous Contacter', letsTalk: 'Parlons', coffee: 'Café',
    sendMessage: 'Envoyer le Message ✦', yourName: 'Votre Nom', email: 'Email',
    company: 'Entreprise / Organisation', message: 'Message',
    interestedIn: "Je suis intéressé par",
    // Footer
    developedBy: 'Développé par Ezera Hailu & Matiyas Tesfaye',
    allRights: '© 2025 Birhan Coffee PLC. Tous droits réservés.',
    tagline: 'Addis-Abeba · Éthiopie · Commerce Direct',
    // General
    requestSample: 'Demander un Échantillon →', learnMore: 'En Savoir Plus →',
    readMore: 'Lire la Suite →', viewDetails: 'Voir les Détails →',
  },
};

const LangContext = createContext({ lang: 'en', setLang: () => {}, t: T.en });

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');
  return (
    <LangContext.Provider value={{ lang, setLang, t: T[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
