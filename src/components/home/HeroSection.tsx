import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import accountingImage from "@/assets/accounting.jpg";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        {/* Gold gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/4 rounded-full blur-3xl animate-float delay-500" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Tagline */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 ${
                mounted ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary tracking-wide">Premier UK Accounting Services</span>
            </div>

            {/* Main Headline */}
            <h1 
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-8 ${
                mounted ? 'animate-fade-up delay-100' : 'opacity-0'
              }`}
            >
              Elite Accounting.
              <br />
              <span className="gold-gradient-text">Exceptional Precision.</span>
            </h1>

            {/* Subtext */}
            <p 
              className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed ${
                mounted ? 'animate-fade-up delay-200' : 'opacity-0'
              }`}
            >
              You're great at what you do — so are we.
              <br />
              Big-firm expertise, delivered with the care of your local accountant.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 ${
                mounted ? 'animate-fade-up delay-300' : 'opacity-0'
              }`}
            >
              <Link to="/contact">
                <Button variant="luxury" size="xl" className="group">
                  Book Consultation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="tel:01174634336">
                <Button variant="luxuryOutline" size="xl">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>

          </div>

          {/* Right Image */}
          <div 
            className={`relative ${
              mounted ? 'animate-fade-up delay-300' : 'opacity-0'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold/20 gold-glow group cursor-pointer">
              <img 
                src={accountingImage} 
                alt="Professional accountants working together" 
                className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gold overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent transition-opacity duration-300 group-hover:from-primary/15" />
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-gold/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-gold/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
