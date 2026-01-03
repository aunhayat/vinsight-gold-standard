import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    content: "Vinsight transformed our financial operations. Their attention to detail and proactive approach saved us thousands in our first year.",
    rating: 5,
  },
  {
    name: "James Thompson",
    content: "Professional, responsive, and genuinely invested in our success. The best accounting decision we ever made.",
    rating: 5,
  },
  {
    name: "Emma Richards",
    content: "From company incorporation to ongoing accounts, Vinsight has been exceptional. Their expertise in tax optimization is unmatched.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            What Our <span className="gold-gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across the UK for precision, reliability, and exceptional service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group relative p-8 rounded-2xl border border-gold/10 bg-card/50 backdrop-blur-sm 
                hover:border-gold/30 transition-all duration-500 hover:gold-glow ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-gold/20 group-hover:bg-primary/20 transition-colors duration-300">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-gold/20">
                  <span className="text-primary font-serif font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </div>
              </div>

              {/* Hover decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
