import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Sparkles, Package, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Donate = () => {
  const impactTiers = [
    {
      icon: Sparkles,
      amount: "₹500",
      name: "The Spark",
      description: "Fund basic materials for 10 students to conduct their first science experiment",
      impact: "Ignites curiosity in young minds",
    },
    {
      icon: Package,
      amount: "₹2,500",
      name: "The Lab Kit",
      description: "Provide a complete experiment kit for an entire classroom of 30-40 students",
      impact: "Equips a full classroom",
    },
    {
      icon: GraduationCap,
      amount: "₹5,000",
      name: "The Teacher",
      description: "Sponsor teacher training that creates lasting impact for hundreds of students",
      impact: "Multiplies the impact exponentially",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-accent/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Heart className="w-16 h-16 text-accent mx-auto mb-6" />
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 text-primary">
                Fuel the Vijnan Rath
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Your contribution powers science education across rural India. Every donation directly impacts 
                students who have never experienced hands-on science learning.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Tiers */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-center mb-12 text-primary">
                Choose Your Impact
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {impactTiers.map((tier, index) => {
                  const Icon = tier.icon;
                  return (
                    <Card key={index} className="p-8 hover:shadow-xl transition-shadow border-2">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-accent-foreground" />
                        </div>
                        <p className="font-heading font-bold text-4xl text-accent mb-2">{tier.amount}</p>
                        <h3 className="font-heading font-bold text-xl mb-4">{tier.name}</h3>
                        <p className="text-muted-foreground mb-4 text-sm">{tier.description}</p>
                        <div className="bg-muted rounded-lg p-3 mb-6">
                          <p className="text-sm font-semibold text-primary">{tier.impact}</p>
                        </div>
                        <Button 
                          className="w-full bg-gradient-accent hover:opacity-90 transition-opacity font-heading"
                        >
                          Donate {tier.amount}
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Custom Amount */}
              <div className="bg-muted rounded-2xl p-8 text-center max-w-2xl mx-auto">
                <h3 className="font-heading font-bold text-2xl mb-4">Custom Amount</h3>
                <p className="text-muted-foreground mb-6">
                  Choose your own contribution amount to support our mission
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-accent hover:opacity-90 transition-opacity font-heading text-lg px-8"
                >
                  Choose Custom Amount
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency & Benefits */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-center mb-12">
                Your Trust Matters
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-heading font-bold text-xl mb-4">Complete Transparency</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span>100% of donations go directly to program expenses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span>Annual impact reports shared with all donors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span>Regular updates on how your contribution is used</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-heading font-bold text-xl mb-4">Tax Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span>80G tax deduction certificate provided</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span>Save up to 50% on your taxable income</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span>Instant donation receipts via email</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Story */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h2 className="font-heading font-bold text-2xl mb-6 text-primary">Every Donation Creates Impact</h2>
                <p className="text-foreground mb-4">
                  When you donate to Parikshan Charitable Trust, you're not just funding experiments - 
                  you're opening doors to careers in science, technology, and innovation. You're showing 
                  rural students that they too can become scientists, engineers, doctors, and researchers.
                </p>
                <p className="text-foreground mb-4">
                  Over 16 lakh students have already experienced the joy of discovery through our programs. 
                  Many have gone on to pursue STEM education and careers they never thought possible.
                </p>
                <p className="text-foreground font-semibold">
                  Your contribution today could spark the curiosity of India's next great scientist.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
