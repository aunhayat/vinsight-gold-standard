import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Eye, Shield, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Clarity",
    description: "Crystal-clear financial insights that empower informed business decisions.",
  },
  {
    icon: Shield,
    title: "Confidence",
    description: "Rest assured knowing your finances are managed by seasoned professionals.",
  },
  {
    icon: CheckCircle,
    title: "Compliance",
    description: "Stay ahead of HMRC with meticulous, deadline-driven accuracy.",
  },
];

const ValuesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span 
            className={`text-primary text-sm tracking-widest uppercase ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            Our Foundation
          </span>
          <h2 
            className={`text-3xl md:text-4xl font-serif font-bold mt-4 ${
              isVisible ? 'animate-fade-up delay-100' : 'opacity-0'
            }`}
          >
            Built on <span className="gold-gradient-text">Excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group relative p-8 rounded-lg bg-card border border-gold/10 hover:border-gold/30 transition-all duration-500 gold-glow-hover ${
                isVisible ? `animate-fade-up delay-${(index + 2) * 100}` : 'opacity-0'
              }`}
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-px h-8 bg-gradient-to-b from-primary to-transparent" />
                <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-primary to-transparent" />
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute bottom-0 right-0 w-px h-8 bg-gradient-to-t from-primary to-transparent" />
                <div className="absolute bottom-0 right-0 w-8 h-px bg-gradient-to-l from-primary to-transparent" />
              </div>

              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
