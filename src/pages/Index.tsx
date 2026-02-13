import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ValuesSection from "@/components/home/ValuesSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import FAQPreview from "@/components/home/FAQPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import { useEffect } from "react";

const Index = () => {

  useEffect(() => {
    document.title =
      "Vinsight Accountants | Elite Accounting. Exceptional Precision.";

    const metaDescription = document.querySelector(
      "meta[name='description']"
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Premium UK accounting services including company formation, bookkeeping, VAT returns, corporation tax, payroll, and annual accounts. Trusted experts delivering precision and professionalism."
      );
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ValuesSection />
      <ServicesPreview />
      <FAQPreview />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
