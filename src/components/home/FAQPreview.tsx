import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do I need to file anything if my company hasn't traded yet?",
    answer: "Yes, even dormant companies must file annual accounts and a confirmation statement with Companies House. We handle all dormant company filings to keep you compliant.",
  },
  {
    question: "How fast can I set up a new limited company?",
    answer: "We can incorporate your limited company within 24-48 hours. Our streamlined process ensures all paperwork is correctly filed from day one.",
  },
  {
    question: "What's the difference between annual accounts and a confirmation statement?",
    answer: "Annual accounts show your company's financial position, while the confirmation statement confirms your company details are up to date with Companies House. Both are legally required.",
  },
];

const FAQPreview = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span 
              className={`text-primary text-sm tracking-widest uppercase ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              Common Questions
            </span>
            <h2 
              className={`text-3xl md:text-4xl font-serif font-bold mt-4 ${
                isVisible ? 'animate-fade-up delay-100' : 'opacity-0'
              }`}
            >
              Frequently <span className="gold-gradient-text">Asked</span>
            </h2>
          </div>

          <div 
            className={`space-y-4 ${
              isVisible ? 'animate-fade-up delay-200' : 'opacity-0'
            }`}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gold/10 rounded-lg overflow-hidden bg-card hover:border-gold/30 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-serif font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-primary" />
                    ) : (
                      <Plus className="w-4 h-4 text-primary" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div 
            className={`text-center mt-10 ${
              isVisible ? 'animate-fade-up delay-300' : 'opacity-0'
            }`}
          >
            <Link to="/faq">
              <Button variant="luxuryOutline" className="group">
                View All FAQs
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;
