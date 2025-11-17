import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The VigyanRath transformed our school. Students who were afraid of science now eagerly wait for the next session. The hands-on approach makes complex concepts so simple.",
      author: "Priya Sharma",
      role: "School Principal, Karnataka",
    },
    {
      quote: "I've been teaching for 15 years, but the R3 methodology showed me a completely new way to engage students. The training was invaluable and the materials are perfect for our rural setting.",
      author: "Rajesh Kumar",
      role: "Science Teacher, Maharashtra",
    },
    {
      quote: "My daughter never liked science before. After the VigyanRath visit, she's been doing experiments at home! The team's energy and dedication is truly inspiring.",
      author: "Lakshmi Devi",
      role: "Parent, Tamil Nadu",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-primary">
              Voices from the Field
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the teachers, parents, and students whose lives have been touched by the VigyanRath
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <blockquote className="text-foreground mb-6 font-body italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <p className="font-heading font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
