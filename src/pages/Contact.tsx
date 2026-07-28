import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";


const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | Vinsight Accountants – Expert UK Accounting Services";
  
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact Vinsight Accountants in the UK for professional bookkeeping, VAT returns, corporation tax, annual accounts, and business advisory services. Get expert support tailored to your business needs."
      );
    }
  
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

  
    try {
      const res = await fetch("https://vinsight-backend.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!res.ok) {
        throw new Error("Failed to send message");
      }
  
      toast.success("Message sent successfully!", {
        description: "We’ll get back to you shortly.",
      });
  
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
          <span 
            className={`text-primary text-sm tracking-widest uppercase ${
              mounted ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            Get in Touch
          </span>
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-4 mb-6 ${
              mounted ? 'animate-fade-up delay-100' : 'opacity-0'
            }`}
          >
            Contact <span className="gold-gradient-text">Us</span>
          </h1>
          <p 
            className={`text-lg text-muted-foreground max-w-2xl mx-auto ${
              mounted ? 'animate-fade-up delay-200' : 'opacity-0'
            }`}
          >
            Ready to experience premium accounting services? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24" ref={ref}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div 
              className={`space-y-8 ${
                isVisible ? 'animate-slide-right' : 'opacity-0'
              }`}
            >
              <div>
                <h2 className="text-2xl font-serif font-semibold mb-6">
                  Let's Start a <span className="gold-gradient-text">Conversation</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you have questions about our services, need a consultation, 
                  or are ready to get started, we're here to help. Reach out through 
                  any of the channels below or fill out the form.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:info@vinsightaccountancy.co.uk"
                  className="flex items-start gap-4 p-5 rounded-xl bg-card border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground text-sm">info@vinsightaccountancy.co.uk</p>
                  </div>
                </a>

                <a
                  href="tel:01174634336"
                  className="flex items-start gap-4 p-5 rounded-xl bg-card border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Call Us</h3>
                    <p className="text-muted-foreground text-sm">01174634336</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/447533233030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-xl bg-card border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm">Quick chat on WhatsApp</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-gold/10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Our Office</h3>
                    <p className="text-muted-foreground text-sm">
                      3rd Floor, Old Stock Exchange, St Nicholas St<br />
                      Bristol BS1 1TG, United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              className={`${
                isVisible ? 'animate-slide-left' : 'opacity-0'
              }`}
            >
              <form 
                onSubmit={handleSubmit}
                className="p-8 md:p-10 rounded-xl bg-card border border-gold/20 gold-glow"
              >
                {/* Corner accents */}
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-20 h-20 pointer-events-none">
                    <div className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-primary to-transparent" />
                    <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-primary to-transparent" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-20 h-20 pointer-events-none">
                    <div className="absolute bottom-0 right-0 w-px h-12 bg-gradient-to-t from-primary to-transparent" />
                    <div className="absolute bottom-0 right-0 w-12 h-px bg-gradient-to-l from-primary to-transparent" />
                  </div>
                </div>

                <h3 className="text-xl font-serif font-semibold mb-6">Send Us a Message</h3>
                
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-gold/10 focus:border-gold/50 focus:ring-gold/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.co.uk"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-gold/10 focus:border-gold/50 focus:ring-gold/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+44 7XXX XXX XXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-secondary/50 border-gold/10 focus:border-gold/50 focus:ring-gold/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-secondary/50 border-gold/10 focus:border-gold/50 focus:ring-gold/20 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="luxury" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div 
            className={`mt-16 rounded-xl overflow-hidden border border-gold/20 ${
              isVisible ? 'animate-fade-up delay-400' : 'opacity-0'
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.1234567890123!2d-2.6234567890123456!3d51.48456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI5JzA0LjQiTiAywrAzNycyNC40Ilc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vinsight Accountants Office Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
