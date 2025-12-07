import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ValuesSection from "@/components/home/ValuesSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import FAQPreview from "@/components/home/FAQPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ValuesSection />
      <ServicesPreview />
      <FAQPreview />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
