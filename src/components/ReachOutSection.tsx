import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, Heart, Users } from "lucide-react";

const ReachOutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Icons */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-secondary" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-primary">
            Be a Part of the Journey
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4">
            in Making the Next Scientist, Innovator, or Astronaut
          </p>

          {/* Supporting Text */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
            Every contribution fuels the Vijnan Rath's mission to transform science education across India.
            Your support can spark curiosity in thousands of young minds and build the foundation for India's scientific future.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-gradient-accent hover:opacity-90 transition-opacity font-heading font-bold text-xl px-12 py-6 h-auto"
          >
            <Link to="/get-involved">
              LET'S CONTRIBUTE
            </Link>
          </Button>

          {/* Additional Ways to Help */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <Link to="/donate" className="group">
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all">
                <Heart className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold text-lg mb-2">Donate</h3>
                <p className="text-sm text-muted-foreground">Fund experiments and materials</p>
              </div>
            </Link>

            <Link to="/get-involved" className="group">
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all">
                <Users className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold text-lg mb-2">Volunteer</h3>
                <p className="text-sm text-muted-foreground">Join our field teams</p>
              </div>
            </Link>

            <Link to="/get-involved" className="group">
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all">
                <Rocket className="w-8 h-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold text-lg mb-2">Partner</h3>
                <p className="text-sm text-muted-foreground">CSR & Foundation collaborations</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachOutSection;
