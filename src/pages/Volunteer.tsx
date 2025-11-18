import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Heart, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Volunteer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    availability: "",
    motivation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      skills: "",
      availability: "",
      motivation: "",
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
        <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-primary">
                Become a Volunteer
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                Join our mission to transform science education across India. Your skills and passion can make a real difference in the lives of thousands of students.
              </p>
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-center mb-12 text-primary">
                Ways to Contribute
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">Field Facilitator</h3>
                  <p className="text-muted-foreground text-sm">
                    Work directly with students in rural schools, conducting experiments and demonstrations.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">Content Creator</h3>
                  <p className="text-muted-foreground text-sm">
                    Develop educational materials, videos, and innovative teaching modules.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">Logistics Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Help coordinate van routes, equipment maintenance, and program scheduling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border">
                <h2 className="font-heading font-bold text-3xl mb-6 text-primary text-center">
                  Volunteer Application
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
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
                        placeholder="your@email.com"
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
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        placeholder="City, State"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills & Expertise *</Label>
                    <Textarea
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your relevant skills (e.g., teaching, science background, content creation, logistics)"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability *</Label>
                    <Input
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Weekends, 2 weeks in summer, flexible"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to volunteer with us? *</Label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      required
                      placeholder="Share your motivation for joining our mission"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-accent hover:opacity-90 transition-opacity text-lg py-6 font-heading"
                  >
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Volunteer;
