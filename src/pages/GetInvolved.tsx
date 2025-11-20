import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReviewSection from "@/components/ReviewSection";
import { Heart, Users, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GetInvolved = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 text-primary">
                Get Involved
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Join us in transforming science education across India. Every contribution makes a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Donate */}
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4">Donate</h3>
                  <p className="text-muted-foreground mb-6">
                    Fund science experiments, materials, and teacher training programs. Every rupee brings 
                    quality science education to students who need it most.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-gradient-accent hover:opacity-90 transition-opacity font-heading"
                  >
                    <Link to="/donate">Donate Now</Link>
                  </Button>
                </div>

                {/* Volunteer */}
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4">Volunteer</h3>
                  <p className="text-muted-foreground mb-6">
                    Join our field teams as a facilitator, content creator, or logistics coordinator. 
                    Share your skills and passion for education.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link to="/get-involved/volunteer">Apply Now</Link>
                  </Button>
                </div>

                {/* Partner */}
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6">
                    <Handshake className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4">Partner</h3>
                  <p className="text-muted-foreground mb-6">
                    Corporate partnerships and CSR collaborations that create scalable impact. Join our 
                    proven track record of success.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <Link to="/get-involved/partner">Partner with Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stories */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-center mb-8 text-primary">
                Your Impact
              </h2>
              <div className="bg-card rounded-xl p-8 shadow-lg">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <p className="font-heading font-bold text-4xl text-accent mb-2">₹500</p>
                    <p className="font-semibold mb-2">The Spark</p>
                    <p className="text-sm text-muted-foreground">
                      Funds basic materials for 10 students to conduct their first experiment
                    </p>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-4xl text-accent mb-2">₹2,500</p>
                    <p className="font-semibold mb-2">The Lab Kit</p>
                    <p className="text-sm text-muted-foreground">
                      Provides a complete experiment kit for an entire classroom
                    </p>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-4xl text-accent mb-2">₹5,000</p>
                    <p className="font-semibold mb-2">The Teacher</p>
                    <p className="text-sm text-muted-foreground">
                      Sponsors teacher training that impacts hundreds of students
                    </p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    <strong>80G Tax Benefit:</strong> All donations are eligible for tax deductions under Section 80G
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ReviewSection />
      <Footer />
    </div>
  );
};

export default GetInvolved;
