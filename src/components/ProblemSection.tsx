import { AlertTriangle, FlaskConical, Users, BookOpen } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-heading font-semibold">The Challenge</span>
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-primary">
              The Science Education Gap in Rural India
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Despite the critical importance of science education, rural students across India face significant barriers that limit their potential and future opportunities.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border-2 border-accent/20">
              <div className="text-6xl font-heading font-bold text-accent mb-2">60%</div>
              <p className="text-xl font-heading font-semibold text-foreground mb-2">
                Cannot Multiply
              </p>
              <p className="text-muted-foreground">
                Class 8 students struggle with basic multiplication, revealing fundamental gaps in mathematical understanding
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border-2 border-accent/20">
              <div className="text-6xl font-heading font-bold text-accent mb-2">67%</div>
              <p className="text-xl font-heading font-semibold text-foreground mb-2">
                Lack Division Skills
              </p>
              <p className="text-muted-foreground">
                Students unable to perform division or subtraction, hindering their ability to advance in STEM fields
              </p>
            </div>
          </div>

          {/* Root Causes */}
          <div className="bg-card rounded-2xl p-12 shadow-lg border border-border">
            <h3 className="font-heading font-bold text-3xl mb-8 text-center text-primary">
              Understanding the Root Causes
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <FlaskConical className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-heading font-bold text-lg mb-3">Absent or Inadequate Labs</h4>
                <p className="text-sm text-muted-foreground">
                  Most rural schools lack functional science laboratories, making practical learning impossible
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-heading font-bold text-lg mb-3">Mixed Grade Classrooms</h4>
                <p className="text-sm text-muted-foreground">
                  Teachers manage multiple grades simultaneously, limiting individual attention and depth of teaching
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-heading font-bold text-lg mb-3">Limited Teaching Resources</h4>
                <p className="text-sm text-muted-foreground">
                  Scarce access to quality teaching materials, experiment kits, and teacher training programs
                </p>
              </div>
            </div>

            <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-center text-foreground font-medium">
                <strong className="text-primary">The Impact:</strong> These challenges create a cycle where rural students fall behind in STEM education, limiting their career opportunities and India's potential for scientific innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
