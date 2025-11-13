import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import R3Section from "@/components/R3Section";
import TestimonialsSection from "@/components/TestimonialsSection";
import ReachOutSection from "@/components/ReachOutSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <R3Section />
      <TestimonialsSection />
      <ReachOutSection />
      <Footer />
    </div>
  );
};

export default Index;
