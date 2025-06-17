
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqItems = [
    {
      question: "What is the ROI Calculator?",
      answer: "The ROI (Return on Investment) Calculator is a tool designed to help e-commerce businesses estimate their potential returns on investments across various marketing channels and business strategies."
    },
    {
      question: "How does the calculator work?",
      answer: "Our calculator takes your input data such as initial investment, expected revenue, operating costs, and marketing expenses to compute key metrics including ROI percentage, payback period, and profit margins."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, all data entered into our calculator is securely processed. We do not store your financial information on our servers, and calculations happen client-side on your device."
    },
    {
      question: "How accurate are the results?",
      answer: "The accuracy depends on the quality of data you enter. The calculator provides estimates based on industry standards, but actual results may vary depending on many factors including market conditions and business execution."
    },
    {
      question: "Can I save or export my calculations?",
      answer: "Currently, we don't offer a save or export feature, but this functionality is on our roadmap. For now, you can take screenshots or note down the results."
    },
    {
      question: "Is the calculator free to use?",
      answer: "Yes, the basic version of our ROI calculator is completely free to use. We may offer premium features in the future, but the core calculation functionality will remain free."
    },
    {
      question: "Do I need to create an account?",
      answer: "While creating an account allows you to save your settings and calculation history, you can use the basic calculator features without signing up."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="container py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Find answers to common questions about our ROI Calculator and how it can help your e-commerce business
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 p-6 bg-muted rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
            <p className="mb-4">
              If you couldn't find the answer to your question, please don't hesitate to reach out to our support team.
            </p>
            <a href="/contact" className="text-primary hover:underline font-medium">
              Contact Support →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
