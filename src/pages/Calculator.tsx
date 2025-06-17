
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CalculatorInputs, CalculatorResults, calculateROI, exportToCSV } from "@/lib/calculatorUtils";
import Form from "@/components/Calculator/Form";
import Results from "@/components/Calculator/Results";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calculator as CalculatorIcon, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/lib/translations";

export default function CalculatorPage() {
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [businessType, setBusinessType] = useState<string>("e-commerce");
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    // Get business type from localStorage
    const storedBusinessType = localStorage.getItem('businessType');
    if (storedBusinessType) {
      setBusinessType(storedBusinessType);
    } else {
      // Redirect to business setup if no business type is set
      navigate('/business-setup');
    }
    
    // Set RTL/LTR direction based on language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [navigate, isRTL]);

  const handleCalculate = (inputs: CalculatorInputs) => {
    try {
      // Show calculating state
      setIsCalculating(true);
      setResults(null);
      
      // Simulate calculation progress
      let currentProgress = 0;
      const progressInterval = setInterval(() => {
        currentProgress += 10;
        setProgress(currentProgress);
        if (currentProgress >= 100) {
          clearInterval(progressInterval);
        }
      }, 200);
      
      // Simulate calculation delay for visual effect
      setTimeout(() => {
        clearInterval(progressInterval);
        setProgress(100);
        
        const calculationResults = calculateROI(inputs);
        setResults(calculationResults);
        setIsCalculating(false);
        toast.success(t('calculator.calculationComplete'));
      }, 2000);
    } catch (error) {
      console.error("Calculation error:", error);
      setIsCalculating(false);
      toast.error(isRTL 
        ? "حدث خطأ أثناء حساب العائد على الاستثمار. يرجى التحقق من المدخلات الخاصة بك."
        : "There was an error calculating ROI. Please check your inputs."
      );
    }
  };

  const handleExportCSV = (inputs: CalculatorInputs) => {
    try {
      if (!results) {
        // Calculate results if they don't exist yet
        const calculationResults = calculateROI(inputs);
        setResults(calculationResults);
        exportToCSV(inputs, calculationResults);
      } else {
        exportToCSV(inputs, results);
      }
    } catch (error) {
      console.error("Export error:", error);
      toast.error(t('calculator.exportError'));
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
          <div className="space-y-2 text-center mb-12 animate-slide-down">
            <h1 className="text-4xl font-bold tracking-tight mb-4">{t('calculator.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('calculator.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            <div className="animate-slide-up">
              <div className="flex items-center mb-6" style={{ flexDirection: isRTL ? 'row-reverse' : 'row', gap: '0.5rem' }}>
                <CalculatorIcon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">{t('calculator.inputSectionTitle')}</h2>
              </div>
              <Form 
                onCalculate={handleCalculate} 
                onExportCSV={handleExportCSV} 
                isCalculating={isCalculating}
                businessType={businessType}
              />
            </div>

            {isCalculating && (
              <div className="animate-fade-in">
                <Card className="p-8 flex flex-col items-center justify-center space-y-6 shadow-subtle">
                  <img 
                    src="/lovable-uploads/a0480666-188b-4ade-896a-7dc46bd8e527.png"
                    alt="Calculator"
                    className="w-24 h-24 object-contain mb-2"
                  />
                  <h3 className="text-2xl font-bold text-center">{t('calculator.calculatingThankYou')}</h3>
                  <p className="text-muted-foreground text-center">{t('calculator.calculatingMessage')}</p>
                  <div className="w-full max-w-md mt-4">
                    <Progress value={progress} className="h-2" />
                  </div>
                </Card>
              </div>
            )}

            {!isCalculating && results && (
              <div className="animate-scale-in">
                <div className="flex items-center mb-6" style={{ flexDirection: isRTL ? 'row-reverse' : 'row', gap: '0.5rem' }}>
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">{t('calculator.resultsTitle')}</h2>
                </div>
                <Results results={results} />
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
