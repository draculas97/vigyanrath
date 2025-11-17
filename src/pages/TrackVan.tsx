import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReachOutSection from "@/components/ReachOutSection";
import { MapPin, Calendar } from "lucide-react";

const TrackVan = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 text-primary">
                Track VigyanRath Schedule
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                See where the VigyanRath is headed next and plan your visit
              </p>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-card rounded-2xl p-12 shadow-lg border border-border">
                <div className="flex items-center gap-3 mb-8">
                  <MapPin className="w-8 h-8 text-primary" />
                  <h2 className="font-heading font-bold text-3xl text-primary">Upcoming Visits</h2>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-6 py-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-accent" />
                      <p className="font-heading font-semibold text-lg">December 2024</p>
                    </div>
                    <p className="text-muted-foreground">
                      Government High School, Tumkur District, Karnataka
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6 py-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <p className="font-heading font-semibold text-lg">January 2025</p>
                    </div>
                    <p className="text-muted-foreground">
                      Primary School, Goa
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-6 py-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-secondary" />
                      <p className="font-heading font-semibold text-lg">February 2025</p>
                    </div>
                    <p className="text-muted-foreground">
                      Rural Schools, Maharashtra
                    </p>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-muted rounded-xl">
                  <p className="text-muted-foreground text-center">
                    <strong>Note:</strong> Schedule is subject to change based on local requirements and weather conditions. 
                    For specific dates and booking inquiries, please contact us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ReachOutSection />
      </main>

      <Footer />
    </div>
  );
};

export default TrackVan;
