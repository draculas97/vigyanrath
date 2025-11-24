import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReachOutSection from "@/components/ReachOutSection";
import ReviewSection from "@/components/ReviewSection";
import { GraduationCap, School, Users, MapPin, Calendar, BookOpen } from "lucide-react";

const AboutOverview = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 text-primary">
                About VigyanRath
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Transforming Science Education in Rural India Since 2009
              </p>
            </div>
          </div>
        </section>

        {/* Overview Description */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border mb-12">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Since 2009, the VigyanRath has been transforming science education in rural India, reaching students across Southern states including Kerala, Karnataka, Maharashtra, Goa, and some parts of Andhra Pradesh and Pondicherry—covering <strong className="text-primary">6+ States and Union Territories</strong>.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  With a vision to scale nationwide and complement government education efforts, we bring Practical Hands-on Science and Mathematics Models and Experiments directly to schools, making quality science education accessible to all.
                </p>
              </div>

              {/* Impact Statistics Grid */}
              <h2 className="font-heading font-bold text-3xl mb-8 text-center text-primary">Our Impact</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
                  <GraduationCap className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-4xl mb-2 text-primary">16+ Lakh</h3>
                  <p className="text-muted-foreground">Students Reached</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
                  <MapPin className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-4xl mb-2 text-primary">6+</h3>
                  <p className="text-muted-foreground">States Covered</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
                  <School className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-4xl mb-2 text-primary">4600+</h3>
                  <p className="text-muted-foreground">Schools Visited</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
                  <BookOpen className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-4xl mb-2 text-primary">300+</h3>
                  <p className="text-muted-foreground">Colleges</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
                  <Calendar className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-4xl mb-2 text-primary">16 Years</h3>
                  <p className="text-muted-foreground">of Field Work</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-4xl mb-2 text-primary">1 Lakh+</h3>
                  <p className="text-muted-foreground">Teachers Trained</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ReachOutSection />
      </main>

      <ReviewSection />
      <Footer />
    </div>
  );
};

export default AboutOverview;
