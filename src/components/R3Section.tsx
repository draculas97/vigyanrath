import { CheckCircle2, Target, Smile } from "lucide-react";

const R3Section = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-heading font-semibold">Our Solution</span>
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-primary">
              The R3 Formula for Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that transforms science education through practical, engaging, and curriculum-aligned learning
            </p>
          </div>

          {/* R3 Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Relevant */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="mb-4">
                <span className="font-heading font-bold text-3xl text-primary">R1</span>
                <h3 className="font-heading font-bold text-2xl mt-2 mb-3">Relevant</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Every activity is carefully aligned with the school syllabus, ensuring students learn what they need for exams while building practical understanding.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Syllabus-aligned experiments</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Grade-appropriate content</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Real-world applications</span>
                </li>
              </ul>
            </div>

            {/* Reachable */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="mb-4">
                <span className="font-heading font-bold text-3xl text-primary">R2</span>
                <h3 className="font-heading font-bold text-2xl mt-2 mb-3">Reachable</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                We use simple, locally available materials that schools can afford and access. No complex equipment, just clever science.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Low-cost materials</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Locally available resources</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Easy to replicate</span>
                </li>
              </ul>
            </div>

            {/* Rejoicing */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Smile className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="mb-4">
                <span className="font-heading font-bold text-3xl text-primary">R3</span>
                <h3 className="font-heading font-bold text-2xl mt-2 mb-3">Rejoicing</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Learning should be fun! Our interactive, hands-on approach turns science from a subject to memorize into an adventure to experience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Interactive experiments</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Engaging demonstrations</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Joyful learning environment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="mt-16 text-center">
            <div className="bg-muted rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-xl font-body italic text-foreground">
                "The R3 methodology has proven successful across 8+ states, transforming how over 16 lakh students experience science education. By making learning relevant, reachable, and rejoicing, we're building India's scientific future, one school at a time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default R3Section;
