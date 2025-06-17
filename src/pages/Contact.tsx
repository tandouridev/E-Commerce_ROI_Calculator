
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16">
        <div className="container px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
          <div className="space-y-2 text-center mb-12 animate-slide-down">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our ROI calculator? We're here to help!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 animate-slide-up">
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="focus-ring"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="focus-ring"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="focus-ring"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                        className="resize-none focus-ring"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full sm:w-auto flex items-center justify-center transition-all duration-250 ease-expo-out hover:translate-y-[-2px] active:translate-y-[1px]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-slide-up delay-150">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-4">Contact Information</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="rounded-full p-2 bg-primary/10 text-primary mr-4">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <a href="mailto:contact@roi-calculator.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            contact@roi-calculator.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="rounded-full p-2 bg-primary/10 text-primary mr-4">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Phone</h4>
                          <a href="tel:+11234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            +1 (123) 456-7890
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="rounded-full p-2 bg-primary/10 text-primary mr-4">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Support Hours</h4>
                          <p className="text-sm text-muted-foreground">
                            Monday - Friday: 9am - 5pm EST
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-3">Quick Response</h3>
                    <p className="text-sm text-muted-foreground">
                      We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.
                    </p>
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
