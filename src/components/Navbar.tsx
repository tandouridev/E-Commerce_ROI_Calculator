
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Calculator, FileText, Home, Info, Mail, Globe } from "lucide-react";
import { useEffect, useState } from 'react';
import { ModeToggle } from "@/components/ModeToggle";
import { useLanguage } from "@/lib/translations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { t, isRTL, language, changeLanguage } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: t('navbar.home'), path: '/', icon: <Home className={isRTL ? "w-4 h-4 ml-1" : "w-4 h-4 mr-1"} /> },
    { name: t('navbar.about'), path: '/about', icon: <Info className={isRTL ? "w-4 h-4 ml-1" : "w-4 h-4 mr-1"} /> },
    { name: t('navbar.contact'), path: '/contact', icon: <Mail className={isRTL ? "w-4 h-4 ml-1" : "w-4 h-4 mr-1"} /> },
    { name: t('navbar.calculator'), path: '/calculator', icon: <Calculator className={isRTL ? "w-4 h-4 ml-1" : "w-4 h-4 mr-1"} /> },
  ];

  const handleLanguageChange = (value: string) => {
    if (changeLanguage) {
      changeLanguage(value);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ease-expo-out ${
      scrolled ? 'backdrop-blur-md bg-white/70 dark:bg-black/50 shadow-subtle' : 'bg-transparent'
    }`}>
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
        <Link to="/" className="flex items-center space-x-2 transition-opacity duration-150 hover:opacity-80" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <FileText className="h-6 w-6 text-primary" />
          <span className={isRTL ? "text-xl font-medium mr-2" : "text-xl font-medium ml-2"}>
            {t('calculator.title')}
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center" style={{ 
          flexDirection: isRTL ? 'row-reverse' : 'row',
          gap: '0.25rem'
        }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                  isActive 
                    ? 'text-primary bg-primary/5' 
                    : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                }`}
                style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}
              >
                {link.icon}
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center" style={{ 
          flexDirection: isRTL ? 'row-reverse' : 'row',
          gap: '0.5rem'
        }}>
          {/* Language selector */}
          <div className="mr-2">
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[130px] h-8" aria-label="Select language">
                <Globe className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="french">Français</SelectItem>
                <SelectItem value="arabic">العربية</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <ModeToggle />
          
          <Button variant="outline" size="sm" className="hidden md:flex items-center" asChild>
            <Link to="/login">{t('navbar.login')}</Link>
          </Button>
          <Button size="sm" className="hidden md:flex items-center" asChild>
            <Link to="/signup">{t('navbar.signup')}</Link>
          </Button>
          
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
