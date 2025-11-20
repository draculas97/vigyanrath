import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReachOutSection from "@/components/ReachOutSection";
import ReviewSection from "@/components/ReviewSection";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      type: "student",
      quote: "The VigyanRath visit was the first time I actually understood how science works in real life. Now I want to become a scientist!",
      author: "Priya K.",
      role: "Class 8 Student",
      school: "Government High School, Karnataka"
    },
    {
      id: 2,
      type: "teacher",
      quote: "The training program transformed how I teach. My students are now more engaged and understand concepts much better.",
      author: "Rajesh Kumar",
      role: "Science Teacher",
      school: "Primary School, Maharashtra"
    },
    {
      id: 3,
      type: "management",
      quote: "VigyanRath has been a game-changer for our school. The practical approach to science education has improved student performance significantly.",
      author: "Principal M. Sharma",
      role: "School Principal",
      school: "Government School, Kerala"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 text-primary">
                Testimonials
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Hear from students, teachers, and school management about the impact of VigyanRath
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="p-8 hover:shadow-xl transition-shadow">
                    <Quote className="w-10 h-10 text-accent mb-4" />
                    <p className="text-foreground/80 mb-6 italic">"{testimonial.quote}"</p>
                    <div className="border-t border-border pt-4">
                      <p className="font-heading font-bold text-primary">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.school}</p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Submit Testimonial Section */}
              <div className="mt-16 bg-muted rounded-2xl p-12 text-center">
                <h2 className="font-heading font-bold text-3xl mb-4 text-primary">
                  Share Your Experience
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Have you been part of the VigyanRath journey? We'd love to hear your story. Share your testimonial with us.
                </p>
                <p className="text-muted-foreground">
                  [Upload Written Testimonials Form - To be implemented]
                </p>
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

export default Testimonials;
