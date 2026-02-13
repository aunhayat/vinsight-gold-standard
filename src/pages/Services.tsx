import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Incorporation",
    description: "Fast LTD/LLP setup done correctly. We handle all the paperwork, ensuring your company is registered with Companies House efficiently and compliantly. Start your business journey with confidence.",
    features: ["24-48 hour turnaround", "Companies House registration", "Memorandum & Articles", "Share certificates"],
  },
  {
    title: "Annual Confirmation Statement",
    description: "Full compliance updates handled with precision. We ensure your company information at Companies House is accurate and up-to-date, avoiding costly penalties.",
    features: ["Yearly filing", "Director updates", "Shareholder changes", "Registered office updates"],
  },
  {
    title: "Dormant Accounts",
    description: "Even non-trading companies must file properly. We prepare and submit dormant company accounts to Companies House, keeping you compliant without the hassle.",
    features: ["Statutory compliance", "Companies House filing", "Balance sheet preparation", "Director signature guidance"],
  },
  {
    title: "Bookkeeping",
    description: "Stay ahead of HMRC and keep clean records. Our meticulous bookkeeping services ensure your financial records are organized, accurate, and ready for any scrutiny.",
    features: ["Monthly reconciliation", "Expense categorization", "Invoice management", "Real-time reporting"],
  },
  {
    title: "VAT Returns",
    description: "Standard or Flat Rate — ensure you never overpay. We optimize your VAT position and handle all submissions to HMRC, keeping you compliant and cost-effective.",
    features: ["VAT registration", "Quarterly submissions", "Flat Rate Scheme advice", "VAT reclaim optimization"],
  },
  {
    title: "Annual Accounts",
    description: "Penalty-free micro-company submissions. We prepare comprehensive annual accounts that meet all statutory requirements, submitted on time, every time.",
    features: ["Full accounts preparation", "Companies House filing", "Director's report", "Notes to accounts"],
  },
  {
    title: "Corporation Tax Returns",
    description: "We don't just file — we optimize. Our expert tax planning identifies legitimate savings opportunities while ensuring full compliance with HMRC regulations.",
    features: ["CT600 preparation", "Tax optimization", "R&D tax credits", "Capital allowances"],
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.title = "Our Services | Vinsight Accountants UK";
  
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore our UK accounting services including company formation, bookkeeping, VAT returns, corporation tax, payroll, annual accounts, and expert financial advisory services."
      );
    }
  
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
          <span 
            className={`text-primary text-sm tracking-widest uppercase ${
              mounted ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            What We Offer
          </span>
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-4 mb-6 ${
              mounted ? 'animate-fade-up delay-100' : 'opacity-0'
            }`}
          >
            Our <span className="gold-gradient-text">Services</span>
          </h1>
          <p 
            className={`text-lg text-muted-foreground max-w-2xl mx-auto ${
              mounted ? 'animate-fade-up delay-200' : 'opacity-0'
            }`}
          >
            Comprehensive accounting solutions tailored to your business needs, 
            delivered with precision and care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24" ref={ref}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group relative p-8 md:p-10 rounded-xl bg-card border border-gold/10 hover:border-gold/30 transition-all duration-500 gold-glow-hover ${
                  isVisible ? `animate-fade-up delay-${Math.min(index * 100, 500)}` : 'opacity-0'
                }`}
              >
                {/* Gold accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-l-xl" />
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm text-primary font-medium mb-4 tracking-wide uppercase">
                      Includes
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to streamline your accounting?
            </p>
            <Link to="/contact">
              <Button variant="luxury" size="xl" className="group">
                Book Your Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
