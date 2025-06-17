
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calculator, Clock, DollarSign, LineChart } from "lucide-react";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16">
        <div className="container px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
          <div className="space-y-2 mb-12 animate-slide-down">
            <h1 className="text-4xl font-bold tracking-tight mb-4">About Our E-Commerce ROI Calculator</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Helping e-commerce businesses make data-driven decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8 animate-slide-up">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  At the core of our mission is providing e-commerce entrepreneurs and businesses with a powerful yet simple tool to evaluate their investment decisions. We believe that data-driven decision making should be accessible to all businesses, regardless of size or technical expertise.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
                <p className="text-muted-foreground mb-6">
                  Our calculator uses industry-standard financial formulas and methodologies to provide accurate projections based on your inputs. The calculations take into account:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="rounded-full p-2 bg-primary/10 text-primary">
                        <DollarSign className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Revenue Projections</h3>
                        <p className="text-sm text-muted-foreground">
                          Forecasting based on sales volume, average order value, and growth rate
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="rounded-full p-2 bg-primary/10 text-primary">
                        <Calculator className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Profit Calculations</h3>
                        <p className="text-sm text-muted-foreground">
                          Factoring in profit margins, marketing costs, and operational expenses
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="rounded-full p-2 bg-primary/10 text-primary">
                        <LineChart className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Growth Modeling</h3>
                        <p className="text-sm text-muted-foreground">
                          Projecting growth and scaling based on market trends and historical data
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="rounded-full p-2 bg-primary/10 text-primary">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Time Value</h3>
                        <p className="text-sm text-muted-foreground">
                          Accounting for payback periods and time horizons for your investments
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Data</h2>
                <p className="text-muted-foreground">
                  While our calculator provides a powerful framework for financial projections, it's important to note that real-world outcomes may vary. The accuracy of the results depends on the quality of the input data you provide. We recommend using this tool as one component of a comprehensive business planning approach.
                </p>
              </div>
            </div>

            <div className="animate-slide-up delay-150">
              <div className="sticky top-24 space-y-6">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-3">Why Trust Us?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="rounded-full bg-primary/20 p-1 mr-3 mt-1">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="text-sm">Built with industry-standard financial models</p>
                      </li>
                      <li className="flex items-start">
                        <div className="rounded-full bg-primary/20 p-1 mr-3 mt-1">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="text-sm">Regularly updated with market benchmarks</p>
                      </li>
                      <li className="flex items-start">
                        <div className="rounded-full bg-primary/20 p-1 mr-3 mt-1">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="text-sm">Transparent calculation methods</p>
                      </li>
                      <li className="flex items-start">
                        <div className="rounded-full bg-primary/20 p-1 mr-3 mt-1">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="text-sm">Focused on real e-commerce metrics that matter</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-3">Want to learn more?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Have questions about our calculator or methodology? Reach out to our team.
                    </p>
                    <a 
                      href="/contact" 
                      className="text-primary font-medium text-sm hover:underline inline-flex items-center"
                    >
                      Contact us
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
