import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 sm:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-primary leading-tight">
            Science in Action:<br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Igniting India's Future
            </span>
          </h1>

          {/* Sub-Headline */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8 font-body">
            Activity-Based Learning for a Science-Powered Nation
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 bg-card p-4 sm:p-6 rounded-xl shadow-lg border border-border">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="font-heading font-bold text-2xl sm:text-3xl text-primary">16+ Lakh</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Children Reached</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-card p-4 sm:p-6 rounded-xl shadow-lg border border-border">
              <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-secondary flex-shrink-0" />
              <div className="text-left">
                <p className="font-heading font-bold text-2xl sm:text-3xl text-secondary">6+ States</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Across India</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-card p-4 sm:p-6 rounded-xl shadow-lg border border-border">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-accent/10 rounded-full flex-shrink-0">
                <span className="text-xl sm:text-2xl">🔬</span>
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-2xl sm:text-3xl text-accent">800+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Scientific Concepts</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-accent hover:opacity-90 transition-opacity font-heading font-semibold text-lg px-8"
            >
              <Link to="/donate">
                Donate Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-semibold text-lg px-8"
            >
              <Link to="/our-work">
                See Our Impact
              </Link>
            </Button>
          </div>

          {/* Additional Info */}
          <p className="mt-12 text-sm text-muted-foreground max-w-2xl mx-auto">
            Since 2009, the VigyanRath has been transforming science education in rural India,
            reaching students across Southern states, Kerala, Karnataka, Maharashtra, Goa, and parts of Andhra Pradesh and Pondicherry—6+ States and Union Territories—with a vision to scale nationwide and complement government education efforts with practical hands-on science and mathematics models and experiments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
