import React from 'react';

type TranslationKey = 
  | 'calculator.title'
  | 'calculator.subtitle'
  | 'calculator.inputSectionTitle'
  | 'calculator.resultsTitle'
  | 'calculator.calculatingMessage'
  | 'calculator.calculatingThankYou'
  | 'calculator.calculationComplete'
  | 'calculator.exportError'
  | 'businessSetup.title'
  | 'businessSetup.subtitle'
  | 'businessSetup.businessTypeLabel'
  | 'businessSetup.ecommerce'
  | 'businessSetup.cod'
  | 'businessSetup.currencyLabel'
  | 'businessSetup.languageLabel'
  | 'businessSetup.english'
  | 'businessSetup.french'
  | 'businessSetup.arabic'
  | 'businessSetup.continue'
  | 'navbar.home'
  | 'navbar.about'
  | 'navbar.contact'
  | 'navbar.calculator'
  | 'navbar.login'
  | 'navbar.signup';

type Translations = {
  [key in TranslationKey]: {
    english: string;
    french: string;
    arabic: string;
  };
};

export const translations: Translations = {
  'calculator.title': {
    english: 'E-Commerce ROI Calculator',
    french: 'Calculateur de ROI pour E-Commerce',
    arabic: 'آلة حاسبة للعائد على الاستثمار للتجارة الإلكترونية'
  },
  'calculator.subtitle': {
    english: 'Estimate your return on investment and project growth for your e-commerce business',
    french: 'Estimez votre retour sur investissement et la croissance de votre entreprise e-commerce',
    arabic: 'قم بتقدير العائد على الاستثمار ونمو المشروع لأعمالك التجارية الإلكترونية'
  },
  'calculator.inputSectionTitle': {
    english: 'Input Your Business Data',
    french: 'Saisissez vos données commerciales',
    arabic: 'أدخل بيانات عملك'
  },
  'calculator.resultsTitle': {
    english: 'Your ROI Results',
    french: 'Vos résultats de ROI',
    arabic: 'نتائج العائد على الاستثمار الخاصة بك'
  },
  'calculator.calculatingMessage': {
    english: 'We are calculating your estimations',
    french: 'Nous calculons vos estimations',
    arabic: 'نحن نحسب تقديراتك'
  },
  'calculator.calculatingThankYou': {
    english: 'Thank you for waiting!',
    french: 'Merci de patienter!',
    arabic: 'شكرًا للانتظار!'
  },
  'calculator.calculationComplete': {
    english: 'ROI calculation completed!',
    french: 'Calcul de ROI terminé!',
    arabic: 'اكتمل حساب العائد على الاستثمار!'
  },
  'calculator.exportError': {
    english: 'There was an error exporting to CSV.',
    french: 'Une erreur s\'est produite lors de l\'exportation vers CSV.',
    arabic: 'حدث خطأ أثناء التصدير إلى CSV.'
  },
  'businessSetup.title': {
    english: 'Business Setup',
    french: 'Configuration d\'Entreprise',
    arabic: 'إعداد العمل'
  },
  'businessSetup.subtitle': {
    english: 'Configure your business profile to get started',
    french: 'Configurez votre profil d\'entreprise pour commencer',
    arabic: 'قم بتكوين ملف عملك للبدء'
  },
  'businessSetup.businessTypeLabel': {
    english: 'Type of Business',
    french: 'Type d\'Entreprise',
    arabic: 'نوع العمل'
  },
  'businessSetup.ecommerce': {
    english: 'E-commerce/Dropshipping',
    french: 'E-commerce/Dropshipping',
    arabic: 'التجارة الإلكترونية/دروبشيبينغ'
  },
  'businessSetup.cod': {
    english: 'COD (Cash On Delivery)',
    french: 'Paiement à la livraison',
    arabic: 'الدفع عند الاستلام'
  },
  'businessSetup.currencyLabel': {
    english: 'Currency',
    french: 'Devise',
    arabic: 'العملة'
  },
  'businessSetup.languageLabel': {
    english: 'Language',
    french: 'Langue',
    arabic: 'اللغة'
  },
  'businessSetup.english': {
    english: 'English',
    french: 'Anglais',
    arabic: 'الإنجليزية'
  },
  'businessSetup.french': {
    english: 'French',
    french: 'Français',
    arabic: 'الفرنسية'
  },
  'businessSetup.arabic': {
    english: 'Arabic',
    french: 'Arabe',
    arabic: 'العربية'
  },
  'businessSetup.continue': {
    english: 'Continue',
    french: 'Continuer',
    arabic: 'استمر'
  },
  'navbar.home': {
    english: 'Home',
    french: 'Accueil',
    arabic: 'الرئيسية'
  },
  'navbar.about': {
    english: 'About',
    french: 'À propos',
    arabic: 'حول'
  },
  'navbar.contact': {
    english: 'Contact',
    french: 'Contact',
    arabic: 'اتصل بنا'
  },
  'navbar.calculator': {
    english: 'Calculator',
    french: 'Calculateur',
    arabic: 'الآلة الحاسبة'
  },
  'navbar.login': {
    english: 'Login',
    french: 'Connexion',
    arabic: 'تسجيل الدخول'
  },
  'navbar.signup': {
    english: 'Sign up',
    french: 'S\'inscrire',
    arabic: 'التسجيل'
  }
};

// Function to get translation based on the selected language
export const getTranslation = (key: TranslationKey, language: string = 'english'): string => {
  if (!translations[key]) {
    console.warn(`Translation key "${key}" not found`);
    return key;
  }
  
  // Default to English if the requested language is not available
  return translations[key][language as keyof typeof translations[typeof key]] || translations[key].english;
};

// Enhanced language hook with more RTL support
export const useLanguage = () => {
  // Try to get language from localStorage, default to english
  const getStoredLanguage = () => localStorage.getItem('language') || 'english';
  
  const [language, setLanguage] = React.useState(getStoredLanguage());
  
  // Effect to update the document direction whenever language changes
  React.useEffect(() => {
    const isArabic = language === 'arabic';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    
    // Listen for storage changes (if language is changed in another tab)
    const handleStorageChange = () => {
      const newLanguage = getStoredLanguage();
      if (newLanguage !== language) {
        setLanguage(newLanguage);
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [language]);
  
  // Translation function
  const t = (key: TranslationKey) => getTranslation(key, language);
  
  // Is this a RTL language
  const isRTL = language === 'arabic';
  
  // Function to change language
  const changeLanguage = (newLanguage: string) => {
    localStorage.setItem('language', newLanguage);
    setLanguage(newLanguage);
  };
  
  return { language, t, isRTL, changeLanguage };
};
