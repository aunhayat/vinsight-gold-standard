import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-gold/10">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-serif font-bold gold-gradient-text">
                Vinsight
              </span>
              <span className="block text-xs text-muted-foreground tracking-widest uppercase mt-1">
                Accountants
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Elite accounting services with exceptional precision. Big-firm expertise, 
              delivered with the care of your local accountant.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-primary mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Services
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                FAQ
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg text-primary mb-6">Our Services</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Incorporation
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Bookkeeping
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                VAT Returns
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Corporation Tax
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Annual Accounts
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-primary mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@vinsightaccountancy.co.uk"
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <span>info@vinsightaccountancy.co.uk</span>
              </a>
              <a
                href="tel:01174634336"
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <span>01174634336</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>3rd Floor Old Stock Exchange, St Nicholas Street, Bristol, United Kingdom, BS1 1TG</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="luxury-divider mt-12 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Vinsight Accountants Limited (Registered in England and Wales with company number 17336010).<br> All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Precision in every number. Excellence in every service.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
