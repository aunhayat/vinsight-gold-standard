import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Building2, 
  FileCheck, 
  BookOpen, 
  Calculator, 
  Receipt, 
  TrendingUp,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Incorporation",
    description: "Fast LTD/LLP setup done correctly.",
  },
  {
    icon: FileCheck,
    title: "Annual Accounts",
    description: "Penalty-free micro-company submissions.",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping",
    description: "Stay ahead of HMRC with clean records.",
  },
  {
    icon: Receipt,
    title: "VAT Returns",
    description: "Standard or Flat Rate — never overpay.",
  },
  {
    icon: TrendingUp,
    title: "Corporation Tax",
    description: "We don't just file — we optimize.",
  },
  {
    icon: Calculator,
    title: "Confirmation Statement",
    description: "Full compliance updates handled.",
  },
];

const ServicesPreview = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span 
              className={`text-primary text-sm tracking-widest uppercase ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              What We Offer
            </span>
            <h2 
              className={`text-3xl md:text-4xl font-serif font-bold mt-4 ${
                isVisible ? 'animate-fade-up delay-100' : 'opacity-0'
              }`}
            >
              Our <span className="gold-gradient-text">Services</span>
            </h2>
          </div>
          <Link 
            to="/services"
            className={isVisible ? 'animate-fade-up delay-200' : 'opacity-0'}
          >
            <Button variant="luxuryOutline" className="group">
              View All Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className={`group relative p-6 rounded-lg bg-card border border-gold/10 hover:border-gold/40 transition-all duration-500 gold-glow-hover overflow-hidden ${
                isVisible ? `animate-fade-up delay-${(index + 2) * 100}` : 'opacity-0'
              }`}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
