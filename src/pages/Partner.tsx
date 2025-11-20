import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReviewSection from "@/components/ReviewSection";
import { Handshake, Building2, Award, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Partner = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    organizationName: "",
    contactPerson: "",
    email: "",
    phone: "",
    organizationType: "",
    csrBudget: "",
    interests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership Request Submitted!",
      description: "Thank you for your interest. Our team will contact you within 48 hours.",
    });
    setFormData({
      organizationName: "",
      contactPerson: "",
      email: "",
      phone: "",
      organizationType: "",
      csrBudget: "",
      interests: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-secondary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Handshake className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-primary">
                Partner with Us
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                Join leading organizations in creating lasting impact through CSR initiatives that transform science education for rural India.
              </p>
            </div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-center mb-12 text-primary">
                Why Partner with VigyanRath?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">Proven Track Record</h3>
                  <p className="text-muted-foreground text-sm">16+ years of impact with 16 Lakh+ students reached</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">Measurable Impact</h3>
                  <p className="text-muted-foreground text-sm">Detailed reporting and transparent progress tracking</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">CSR Compliance</h3>
                  <p className="text-muted-foreground text-sm">Fully compliant with CSR guidelines and 80G certified</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">End-to-End Support</h3>
                  <p className="text-muted-foreground text-sm">Complete program management from planning to execution</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Models */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-center mb-12 text-primary">
                Partnership Models
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                  <h3 className="font-heading font-bold text-xl mb-4 text-accent">Project Sponsorship</h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Sponsor VigyanRath operations in specific regions, covering teacher salaries, fuel, materials, and logistics.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Monthly/Quarterly sponsorship</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Branding on mobile labs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Regular impact reports</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                  <h3 className="font-heading font-bold text-xl mb-4 text-accent">Equipment Partnership</h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Provide science equipment, experiment kits, or contribute to setting up demonstration labs.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Equipment donation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom kit development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Recognition programs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                  <h3 className="font-heading font-bold text-xl mb-4 text-accent">Employee Engagement</h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Engage your workforce through volunteering opportunities and skill-sharing programs.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Corporate volunteering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Skill-based workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Team building activities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Form */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border">
                <h2 className="font-heading font-bold text-3xl mb-6 text-primary text-center">
                  Start a Partnership
                </h2>
                <p className="text-center text-muted-foreground mb-8">
                  Share your details and we'll connect with you to discuss how we can create meaningful impact together.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="organizationName">Organization Name *</Label>
                    <Input
                      id="organizationName"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      required
                      placeholder="Your company/organization name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contactPerson">Contact Person *</Label>
                      <Input
                        id="contactPerson"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        required
                        placeholder="Full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="contact@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organizationType">Organization Type *</Label>
                      <Input
                        id="organizationType"
                        name="organizationType"
                        value={formData.organizationType}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Corporate, Foundation, Rotary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="csrBudget">Approximate CSR Budget (Optional)</Label>
                    <Input
                      id="csrBudget"
                      name="csrBudget"
                      value={formData.csrBudget}
                      onChange={handleChange}
                      placeholder="e.g., ₹5-10 Lakhs annually"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interests">Areas of Interest *</Label>
                    <Textarea
                      id="interests"
                      name="interests"
                      value={formData.interests}
                      onChange={handleChange}
                      required
                      placeholder="Which partnership model interests you? Any specific regions or focus areas?"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your goals and expectations"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-accent hover:opacity-90 transition-opacity text-lg py-6 font-heading"
                  >
                    Submit Partnership Request
                  </Button>
                </form>
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

export default Partner;
