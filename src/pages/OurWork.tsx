import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReachOutSection from "@/components/ReachOutSection";
import R3Section from "@/components/R3Section";
import { Microscope, GraduationCap, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const OurWork = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 text-primary">
                Our Work
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Transforming science education through innovative methodologies and dedicated effort
              </p>
            </div>
          </div>
        </section>

        {/* R3 Methodology */}
        <R3Section />

        {/* Key Programs */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading font-bold text-4xl text-center mb-12 text-primary">
                Our Key Programs
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                  <Microscope className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-2xl mb-4">VigyanRath</h3>
                  <p className="text-muted-foreground mb-6">
                    Our mobile science laboratory brings hands-on experiments and activities directly to rural schools, 
                    reaching students who have never experienced practical science education.
                  </p>
                  <Link to="/our-work/track-van">
                    <Button variant="outline" className="w-full">
                      Track the Van
                    </Button>
                  </Link>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                  <GraduationCap className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="font-heading font-bold text-2xl mb-4">Teacher Training</h3>
                  <p className="text-muted-foreground mb-6">
                    We empower teachers with the skills and resources to continue activity-based learning 
                    long after the VigyanRath moves on, creating lasting impact in communities.
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    Learn More
                  </Button>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                  <MapPin className="w-12 h-12 text-accent mb-4" />
                  <h3 className="font-heading font-bold text-2xl mb-4">Resource Development</h3>
                  <p className="text-muted-foreground mb-6">
                    Creating affordable, locally-sourced science kits and experiment guides that schools 
                    can use independently, ensuring sustainability and scalability.
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    View Resources
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teacher Empowerment */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-secondary text-secondary-foreground rounded-2xl p-12">
                <h2 className="font-heading font-bold text-3xl mb-6">Teacher Empowerment</h2>
                <p className="text-lg mb-6">
                  We believe that sustainable change comes through empowering teachers. Our comprehensive 
                  training programs equip educators with:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Practical demonstration skills for complex scientific concepts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Low-cost experiment designs using locally available materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Classroom management techniques for activity-based learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Ongoing support and resource access through our network</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ReachOutSection />
      </main>

      <Footer />
    </div>
  );
};

export default OurWork;
