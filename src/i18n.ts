import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ro: {
    translation: {
      // Navigation & General
      'nav.home': 'Acasă',
      'nav.spaces': 'Spații',
      'nav.about': 'Despre noi',
      'nav.contact': 'Contact',
      'language': 'Limba',
      
      // Hero Section
      'hero.title': 'Găsește Spațiul Perfect pentru Creativitatea Ta',
      'hero.subtitle': 'De la studiouri de artă la spații de co-working, oferim medii inspiraționale pentru proiectele tale creative',
      'hero.cta.book': 'Rezervă Acum',
      'hero.cta.view': 'Programează Vizionare',
      
      // Features Section
      'features.title': 'De Ce să Alegi Creative Labs?',
      'features.professional.title': 'Echipamente Profesionale',
      'features.professional.desc': 'Toate spațiile noastre sunt echipate cu instrumente și tehnologie de ultimă generație',
      'features.flexible.title': 'Programare Flexibilă',
      'features.flexible.desc': 'Rezervă pe ore, zile sau săptămâni - adaptăm programul la nevoile tale',
      'features.locations.title': 'Locații Multiple',
      'features.locations.desc': 'Spații în centrul orașului și zone creative din București',
      'features.support.title': 'Suport 24/7',
      'features.support.desc': 'Echipa noastră este disponibilă oricând pentru a te ajuta',
      
      // Spaces Section
      'spaces.title': 'Spațiile Noastre',
      'spaces.subtitle': 'Descoperă varietatea de spații creative disponibile pentru rezervare',
      'spaces.photo.title': 'Studio Foto',
      'spaces.photo.desc': 'Studio profesional pentru fotografii de produs, portret și fashion',
      'spaces.video.title': 'Studio Video',
      'spaces.video.desc': 'Echipat pentru producții video, streaming și înregistrări podcast',
      'spaces.art.title': 'Atelier de Artă',
      'spaces.art.desc': 'Spațiu generos pentru pictură, sculptură și alte forme de artă',
      'spaces.coworking.title': 'Co-working Creativ',
      'spaces.coworking.desc': 'Mediu colaborativ pentru freelanceri și echipe creative',
      'spaces.music.title': 'Studio Muzical',
      'spaces.music.desc': 'Studio insonorizat pentru înregistrări și repetiții muzicale',
      'spaces.workshop.title': 'Sală Workshop',
      'spaces.workshop.desc': 'Perfect pentru ateliere, prezentări și evenimente creative',
      
      // CTA Section
      'cta.title': 'Gata să Începi?',
      'cta.subtitle': 'Rezervă spațiul tău creativ astăzi și dă viață ideilor tale',
      'cta.button': 'Explorează Spațiile',
      
      // Footer
      'footer.copyright': '© 2024 Creative Labs. Toate drepturile rezervate.',
      'footer.contact': 'Contact',
      'footer.email': 'info@creativelabs.ro',
      'footer.phone': '+40 21 123 4567',
    }
  },
  en: {
    translation: {
      // Navigation & General
      'nav.home': 'Home',
      'nav.spaces': 'Spaces',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'language': 'Language',
      
      // Hero Section
      'hero.title': 'Find the Perfect Space for Your Creativity',
      'hero.subtitle': 'From art studios to co-working spaces, we provide inspirational environments for your creative projects',
      'hero.cta.book': 'Book Now',
      'hero.cta.view': 'Schedule Viewing',
      
      // Features Section
      'features.title': 'Why Choose Creative Labs?',
      'features.professional.title': 'Professional Equipment',
      'features.professional.desc': 'All our spaces are equipped with cutting-edge tools and technology',
      'features.flexible.title': 'Flexible Scheduling',
      'features.flexible.desc': 'Book by hours, days or weeks - we adapt to your needs',
      'features.locations.title': 'Multiple Locations',
      'features.locations.desc': 'Spaces in the city center and creative districts of Bucharest',
      'features.support.title': '24/7 Support',
      'features.support.desc': 'Our team is available anytime to help you',
      
      // Spaces Section
      'spaces.title': 'Our Spaces',
      'spaces.subtitle': 'Discover the variety of creative spaces available for booking',
      'spaces.photo.title': 'Photo Studio',
      'spaces.photo.desc': 'Professional studio for product, portrait and fashion photography',
      'spaces.video.title': 'Video Studio',
      'spaces.video.desc': 'Equipped for video production, streaming and podcast recording',
      'spaces.art.title': 'Art Workshop',
      'spaces.art.desc': 'Spacious area for painting, sculpture and other art forms',
      'spaces.coworking.title': 'Creative Co-working',
      'spaces.coworking.desc': 'Collaborative environment for freelancers and creative teams',
      'spaces.music.title': 'Music Studio',
      'spaces.music.desc': 'Soundproof studio for recording and music rehearsals',
      'spaces.workshop.title': 'Workshop Room',
      'spaces.workshop.desc': 'Perfect for workshops, presentations and creative events',
      
      // CTA Section
      'cta.title': 'Ready to Start?',
      'cta.subtitle': 'Book your creative space today and bring your ideas to life',
      'cta.button': 'Explore Spaces',
      
      // Footer
      'footer.copyright': '© 2024 Creative Labs. All rights reserved.',
      'footer.contact': 'Contact',
      'footer.email': 'info@creativelabs.ro',
      'footer.phone': '+40 21 123 4567',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ro',
    debug: process.env.NODE_ENV === 'development',
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;