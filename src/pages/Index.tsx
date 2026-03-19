import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import SolutionSection from "@/components/SolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <HeroSection />
    <PainPointsSection />
    <SolutionSection />
    <TestimonialsSection />
    <TrustSection />
    <CTASection variant="mid" />
    <FAQSection />
    <CTASection variant="final" />
    <Footer />
    <WhatsAppFAB />
  </div>
);

export default Index;
