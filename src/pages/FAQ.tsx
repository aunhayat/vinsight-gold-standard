import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useEffect, useState } from "react";

const faqs = [
  {
    question: "Do I need to file anything if my company hasn't traded yet?",
    answer: "Yes, even dormant companies must file annual accounts and a confirmation statement with Companies House. Failure to file can result in penalties or even company strike-off. We handle all dormant company filings efficiently, ensuring you remain compliant without any hassle.",
  },
  {
    question: "How fast can I set up a new limited company?",
    answer: "We can incorporate your limited company within 24-48 hours. Our streamlined process includes preparing all necessary documentation, filing with Companies House, and ensuring everything is correctly set up from day one. You'll receive your certificate of incorporation and all key documents promptly.",
  },
  {
    question: "What's the difference between annual accounts and a confirmation statement?",
    answer: "Annual accounts are financial statements showing your company's financial position and performance over the accounting year. The confirmation statement is a separate filing that confirms your company details (directors, shareholders, registered office) are accurate at Companies House. Both are legally required filings with different purposes and deadlines.",
  },
  {
    question: "Do you handle full accounting or only filings?",
    answer: "We offer comprehensive accounting services, not just filings. This includes day-to-day bookkeeping, management accounts, VAT returns, payroll, tax planning, and statutory filings. We can be as hands-on as you need – from complete end-to-end accounting management to specific services on demand.",
  },
  {
    question: "How can I legally reduce my corporation tax?",
    answer: "There are several legitimate ways to reduce your corporation tax liability: claiming all allowable business expenses, utilizing capital allowances, claiming R&D tax credits if applicable, pension contributions, and strategic timing of income and expenditure. We analyze your specific situation to identify all available opportunities for tax optimization.",
  },
  {
    question: "Do I need to register for VAT as a small business?",
    answer: "You must register for VAT if your taxable turnover exceeds £90,000 (2024/25 threshold) in any 12-month period. However, you can voluntarily register even if below this threshold, which may be beneficial depending on your business model and clients. We can advise on whether voluntary registration would benefit your specific circumstances.",
  },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
          <span 
            className={`text-primary text-sm tracking-widest uppercase ${
              mounted ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            Got Questions?
          </span>
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-4 mb-6 ${
              mounted ? 'animate-fade-up delay-100' : 'opacity-0'
            }`}
          >
            Frequently <span className="gold-gradient-text">Asked</span>
          </h1>
          <p 
            className={`text-lg text-muted-foreground max-w-2xl mx-auto ${
              mounted ? 'animate-fade-up delay-200' : 'opacity-0'
            }`}
          >
            Find answers to common questions about our accounting services 
            and how we can help your business.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-24" ref={ref}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div 
              className={`space-y-4 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gold/10 rounded-xl overflow-hidden bg-card hover:border-gold/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 md:px-8 py-6 flex items-start justify-between text-left gap-4"
                  >
                    <span className="font-serif font-medium text-lg text-foreground">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-primary" />
                      ) : (
                        <Plus className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-6">
                      <div className="luxury-divider mb-4" />
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div 
              className={`text-center mt-16 p-10 rounded-xl bg-card border border-gold/10 ${
                isVisible ? 'animate-fade-up delay-600' : 'opacity-0'
              }`}
            >
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                We're here to help. Get in touch and we'll get back to you promptly.
              </p>
              <Link to="/contact">
                <Button variant="luxury" size="lg" className="group">
                  Contact Us
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FAQ;
