import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReachOutSection from "@/components/ReachOutSection";
import { Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 text-primary">
                About Parikshan Charitable Trust
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Empowering society through science since 2009
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-2xl mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To transform science education in rural India through activity-based learning, making quality education accessible to every child.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                  <Heart className="w-12 h-12 text-accent mb-4" />
                  <h3 className="font-heading font-bold text-2xl mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A science-powered India where every student, regardless of location or resources, can experience the joy of discovery and innovation.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                  <Users className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="font-heading font-bold text-2xl mb-4">Our Reach</h3>
                  <p className="text-muted-foreground">
                    Operating across Southern states and Maharashtra, with a vision to scale nationwide and complement government education efforts.
                  </p>
                </div>
              </div>

              {/* Our Story */}
              <div className="bg-muted rounded-2xl p-12">
                <h2 className="font-heading font-bold text-3xl mb-6 text-primary">Our Story</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground mb-4">
                    Founded in 2009, Parikshan Charitable Trust emerged from a simple yet powerful observation: 
                    rural students across India were being left behind in science education, not due to lack of 
                    intelligence or interest, but due to lack of access to hands-on learning experiences.
                  </p>
                  <p className="text-foreground mb-4">
                    Our flagship initiative, the <strong>Vijnan Rath</strong> (Science Chariot), was born from 
                    this insight. A mobile science laboratory that travels from school to school, bringing 
                    practical, activity-based science education to students who have never seen a test tube 
                    or conducted an experiment.
                  </p>
                  <p className="text-foreground mb-4">
                    What started in a few schools in South India has grown into a national movement. Today, 
                    we've reached over <strong>16 lakh students</strong> across <strong>8+ states</strong>, 
                    trained hundreds of teachers, and inspired countless young minds to pursue careers in 
                    science and technology.
                  </p>
                  <p className="text-foreground">
                    Our approach is simple but effective: make science <strong>Relevant</strong> to the curriculum, 
                    <strong>Reachable</strong> with affordable materials, and <strong>Rejoicing</strong> through 
                    engaging, hands-on activities. This R3 methodology has proven successful across diverse 
                    geographies and communities, and we're committed to scaling it nationwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-center mb-12">Our Impact in Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <p className="font-heading font-bold text-5xl mb-2">16L+</p>
                  <p className="text-sm opacity-90">Students Reached</p>
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-5xl mb-2">8+</p>
                  <p className="text-sm opacity-90">States Covered</p>
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-5xl mb-2">500+</p>
                  <p className="text-sm opacity-90">Schools Visited</p>
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-5xl mb-2">15+</p>
                  <p className="text-sm opacity-90">Years of Service</p>
                </div>
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

export default About;
