
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, ChevronLeft, Store, DollarSign, Globe } from "lucide-react";
import { useLanguage } from "@/lib/translations";

export default function BusinessSetup() {
  const navigate = useNavigate();
  const [businessType, setBusinessType] = useState("e-commerce");
  const [currency, setCurrency] = useState("usd");
  const [language, setLanguage] = useState("english");
  const { t, isRTL, changeLanguage } = useLanguage();

  // Initialize language from localStorage if present
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Update document direction based on language
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const handleContinue = () => {
    // Store the selections in localStorage for use in the calculator
    localStorage.setItem('businessType', businessType);
    localStorage.setItem('currency', currency);
    localStorage.setItem('language', language);
    
    // Update the language in the context
    if (changeLanguage) {
      changeLanguage(language);
    }
    
    navigate('/calculator');
  };

  // Direction-aware chevron
  const DirectionChevron = isRTL ? ChevronLeft : ChevronRight;

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <div className="space-y-10">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{t('businessSetup.title')}</h1>
              <p className="text-muted-foreground">{t('businessSetup.subtitle')}</p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Store className="w-4 h-4" />
                  </div>
                  <Label htmlFor="businessType" className="font-medium">{t('businessSetup.businessTypeLabel')}</Label>
                </div>
                <Select value={businessType} onValueChange={setBusinessType}>
                  <SelectTrigger id="businessType" className="w-full" dir={isRTL ? 'rtl' : 'ltr'}>
                    <SelectValue placeholder={t('businessSetup.businessTypeLabel')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="e-commerce">{t('businessSetup.ecommerce')}</SelectItem>
                    <SelectItem value="cod">{t('businessSetup.cod')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <Label htmlFor="currency" className="font-medium">{t('businessSetup.currencyLabel')}</Label>
                </div>
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger id="currency" className="w-full" dir={isRTL ? 'rtl' : 'ltr'}>
                    <SelectValue placeholder={t('businessSetup.currencyLabel')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">US Dollar (USD)</SelectItem>
                    <SelectItem value="eur">Euro (EUR)</SelectItem>
                    <SelectItem value="gbp">British Pound (GBP)</SelectItem>
                    <SelectItem value="cad">Canadian Dollar (CAD)</SelectItem>
                    <SelectItem value="aed">UAE Dirham (AED)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Globe className="w-4 h-4" />
                  </div>
                  <Label htmlFor="language" className="font-medium">{t('businessSetup.languageLabel')}</Label>
                </div>
                <Select 
                  value={language} 
                  onValueChange={(val) => {
                    setLanguage(val);
                    localStorage.setItem('language', val);
                    document.documentElement.dir = val === 'arabic' ? 'rtl' : 'ltr';
                  }}
                >
                  <SelectTrigger id="language" className="w-full" dir={isRTL ? 'rtl' : 'ltr'}>
                    <SelectValue placeholder={t('businessSetup.languageLabel')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">{t('businessSetup.english')}</SelectItem>
                    <SelectItem value="french">{t('businessSetup.french')}</SelectItem>
                    <SelectItem value="arabic">{t('businessSetup.arabic')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={handleContinue}
              className="w-full py-6 text-base font-medium"
              style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}
            >
              {t('businessSetup.continue')}
              <DirectionChevron className="h-5 w-5 mx-2" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
