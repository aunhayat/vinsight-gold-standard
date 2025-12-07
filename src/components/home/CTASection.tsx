import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-24" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div 
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary via-card to-secondary border border-gold/20 p-12 md:p-16 text-center ${
            isVisible ? 'animate-scale-in' : 'opacity-0'
          }`}
        >
          {/* Background accents */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          
          {/* Gold corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24">
            <div className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-primary to-transparent" />
            <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-primary to-transparent" />
          </div>
          <div className="absolute top-0 right-0 w-24 h-24">
            <div className="absolute top-0 right-0 w-px h-16 bg-gradient-to-b from-primary to-transparent" />
            <div className="absolute top-0 right-0 w-16 h-px bg-gradient-to-l from-primary to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24">
            <div className="absolute bottom-0 left-0 w-px h-16 bg-gradient-to-t from-primary to-transparent" />
            <div className="absolute bottom-0 left-0 w-16 h-px bg-gradient-to-r from-primary to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24">
            <div className="absolute bottom-0 right-0 w-px h-16 bg-gradient-to-t from-primary to-transparent" />
            <div className="absolute bottom-0 right-0 w-16 h-px bg-gradient-to-l from-primary to-transparent" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Get expert guidance backed by{" "}
              <span className="gold-gradient-text">precision</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Ready to experience accounting excellence? Let's discuss how we can help 
              your business thrive with clarity, confidence, and compliance.
            </p>
            <Link to="/contact">
              <Button variant="luxury" size="xl" className="group">
                Book Your Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
