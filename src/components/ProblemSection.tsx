import { AlertCircle, BookOpen, Users } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-4">
              <AlertCircle className="w-5 h-5" />
              <span className="font-heading font-semibold">The Critical Challenge</span>
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              The State of Science Education in Rural India
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
              Despite progress in enrollment, the quality of science education remains a critical concern
            </p>
          </div>

          {/* Alarming Statistics */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-2xl p-8 shadow-xl border-4 border-destructive/20">
              <div className="text-center">
                <p className="font-heading font-bold text-7xl md:text-8xl text-destructive mb-4">60%</p>
                <p className="text-xl font-semibold text-card-foreground mb-2">Cannot Multiply</p>
                <p className="text-muted-foreground">
                  Students struggle with basic multiplication, indicating fundamental gaps in understanding
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-xl border-4 border-destructive/20">
              <div className="text-center">
                <p className="font-heading font-bold text-7xl md:text-8xl text-destructive mb-4">67%</p>
                <p className="text-xl font-semibold text-card-foreground mb-2">Cannot Subtract or Divide</p>
                <p className="text-muted-foreground">
                  Two-thirds of students lack mastery of essential mathematical operations
                </p>
              </div>
            </div>
          </div>

          {/* Root Causes */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6">
              <BookOpen className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-heading font-bold text-xl mb-3">Absent Labs</h3>
              <p className="text-secondary-foreground/80">
                Most rural schools lack functional science laboratories, making hands-on learning impossible
              </p>
            </div>

            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-heading font-bold text-xl mb-3">Mixed Classrooms</h3>
              <p className="text-secondary-foreground/80">
                Large class sizes and multi-grade teaching make personalized attention challenging
              </p>
            </div>

            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6">
              <AlertCircle className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-heading font-bold text-xl mb-3">Limited Resources</h3>
              <p className="text-secondary-foreground/80">
                Insufficient teaching materials and equipment hinder effective science instruction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
