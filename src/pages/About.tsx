import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Heart, Shield, Users } from "lucide-react";
import { useEffect, useState } from "react";

const values = [
  {
    icon: Target,
    title: "Accuracy",
    description: "Every number matters. We ensure precision in all financial matters.",
  },
  {
    icon: Heart,
    title: "Transparency",
    description: "Clear communication and honest advice at every step.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Ethical practices and unwavering commitment to your success.",
  },
  {
    icon: Users,
    title: "Client-Focused Support",
    description: "Your goals are our priority. Personalized service, always.",
  },
];



const About = () => {
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation({ threshold: 0.1 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.title = "Who We Are | Vinsight Accountants UK";
  
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about Vinsight Accountants, a premium UK accounting firm providing bookkeeping, VAT services, tax planning, and financial advisory with exceptional precision."
      );
    }
  
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden marble-texture">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
          <span 
            className={`text-primary text-sm tracking-widest uppercase ${
              mounted ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            About Us
          </span>
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-4 mb-6 ${
              mounted ? 'animate-fade-up delay-100' : 'opacity-0'
            }`}
          >
            Who We <span className="gold-gradient-text">Are</span>
          </h1>
          <p 
            className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed ${
              mounted ? 'animate-fade-up delay-200' : 'opacity-0'
            }`}
          >
            A luxury-standard accounting firm focusing on clarity, compliance, 
            and long-term precision. We combine big-firm expertise with the personalized 
            care of a dedicated local accountant.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-secondary/30" ref={missionRef}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div 
              className={`relative p-10 md:p-14 rounded-xl bg-card border border-gold/20 gold-glow ${
                missionVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20">
                <div className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-primary to-transparent" />
                <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-primary to-transparent" />
              </div>
              <div className="absolute bottom-0 right-0 w-20 h-20">
                <div className="absolute bottom-0 right-0 w-px h-12 bg-gradient-to-t from-primary to-transparent" />
                <div className="absolute bottom-0 right-0 w-12 h-px bg-gradient-to-l from-primary to-transparent" />
              </div>

              <div className="text-center">
                <span className="text-primary text-sm tracking-widest uppercase">Our Mission</span>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mt-4 mb-6 leading-relaxed">
                  "To simplify accounting for UK businesses and provide{" "}
                  <span className="gold-gradient-text">unmatched financial clarity.</span>"
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We believe every business deserves access to premium accounting services. 
                  Our mission is to demystify finance, empower informed decisions, and ensure 
                  your complete peace of mind when it comes to compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24" ref={valuesRef}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className={`text-primary text-sm tracking-widest uppercase ${
                valuesVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              Our Foundation
            </span>
            <h2 
              className={`text-3xl md:text-4xl font-serif font-bold mt-4 ${
                valuesVisible ? 'animate-fade-up delay-100' : 'opacity-0'
              }`}
            >
              Our <span className="gold-gradient-text">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`group p-8 rounded-xl bg-card border border-gold/10 hover:border-gold/30 transition-all duration-500 gold-glow-hover ${
                  valuesVisible ? `animate-fade-up delay-${(index + 2) * 100}` : 'opacity-0'
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to work with <span className="gold-gradient-text">experts</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Experience the difference of premium accounting services tailored to your needs.
          </p>
          <Link to="/contact">
            <Button variant="luxury" size="xl" className="group">
              Get in Touch
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
