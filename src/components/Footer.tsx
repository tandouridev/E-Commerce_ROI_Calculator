
import { Link } from 'react-router-dom';
import { FileText, Github, Linkedin, Twitter, Facebook, Instagram, HelpCircle } from 'lucide-react';
import { useLanguage } from "@/lib/translations";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, isRTL } = useLanguage();
  
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4" style={{ flexDirection: isRTL ? 'row-reverse' : 'row', gap: '0.5rem' }}>
              <FileText className="h-6 w-6 text-primary" />
              <span className="text-xl font-medium">{t('calculator.title')}</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              {isRTL ? 'أفضل محاكي أعمال للتجارة الإلكترونية لاحتياجاتك' : 'The best E-commerce business simulator for your needs'}
            </p>
            <div className="flex" style={{ flexDirection: isRTL ? 'row-reverse' : 'row', gap: '1rem' }}>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-base mb-4">{isRTL ? 'الشركة' : 'Company'}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isRTL ? 'من نحن' : 'About Us'}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isRTL ? 'اتصل بنا' : 'Contact'}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center" style={{ flexDirection: isRTL ? 'row-reverse' : 'row', gap: '0.25rem' }}>
                  <HelpCircle className="h-4 w-4" />
                  {isRTL ? 'الأسئلة الشائعة' : 'FAQ'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-base mb-4">{isRTL ? 'الأدوات' : 'Tools'}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isRTL ? 'المحاكي' : 'Simulator'}
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isRTL ? 'الآلة الحاسبة' : 'Calculator'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-base mb-4">{isRTL ? 'قانوني' : 'Legal'}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/legal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isRTL ? 'قانوني' : 'Legal'}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isRTL ? 'شروط الخدمة' : 'Terms of Service'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-border/40" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <p className="text-sm text-muted-foreground">
            {isRTL 
              ? `© ${currentYear} آلة حاسبة للعائد على الاستثمار. جميع الحقوق محفوظة.`
              : `© ${currentYear} ROI Calculator. All rights reserved.`
            }
          </p>
          
          <div className="flex items-center mt-4 sm:mt-0" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <span className="text-sm text-muted-foreground">{isRTL ? 'تابعنا:' : 'Follow us:'}</span>
            <div className="flex items-center mx-4" style={{ 
              flexDirection: isRTL ? 'row-reverse' : 'row',
              gap: '1rem'
            }}>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
