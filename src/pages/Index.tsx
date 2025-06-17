
import { Button } from "@/components/ui/button";
import { Calculator, LineChart, ArrowRight, TrendingUp, BarChartHorizontal, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";

export default function Index() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
          <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-border mb-6 text-sm font-medium bg-accent text-accent-foreground animate-fade-in">
                <TrendingUp className="h-4 w-4 mr-2" />
                <span>Advanced E-commerce Analytics</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto animate-slide-up text-balance">
                The E-commerce ROI Calculator
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-slide-up delay-150 text-balance">
                Predict your revenue, calculate your return on investment, and make data-driven decisions for your e-commerce business
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
                <Button asChild size="lg" className="group">
                  <Link to="/business-setup" className="flex items-center">
                    <Calculator className="mr-2 h-5 w-5" />
                    <span>Start Calculating</span>
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#e6f1fe_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#0d1117_40%,#13151a_100%)]"></div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-accent/50">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Use Our Calculator?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get comprehensive insights to make informed decisions about your e-commerce business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="Easy to Use"
                description="Simple interface designed for quick results and immediate insights"
                icon={<Calculator className="h-6 w-6" />}
              />
              <FeatureCard
                title="Accurate Results"
                description="Based on real market data and trends in the e-commerce industry"
                icon={<LineChart className="h-6 w-6" />}
              />
              <FeatureCard
                title="Detailed Insights"
                description="Get comprehensive business metrics to guide your strategy"
                icon={<BarChartHorizontal className="h-6 w-6" />}
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/[0.15] via-primary/[0.05] to-transparent">
          <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="glass-panel rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Try it now and get the results you need to start your own e-commerce business
              </p>
              <Button asChild size="lg" className="group">
                <Link to="/business-setup" className="inline-flex items-center">
                  Start
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
