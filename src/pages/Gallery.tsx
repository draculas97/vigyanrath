import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReachOutSection from "@/components/ReachOutSection";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "experiments", label: "The Experiments" },
    { id: "inauguration", label: "Inauguration" },
    { id: "travel", label: "Travel Pics" },
  ];

  // Placeholder gallery items
  const galleryItems = [
    { id: 1, category: "experiments", title: "Science in Action", description: "Students conducting hands-on experiments" },
    { id: 2, category: "inauguration", title: "Program Launch", description: "VigyanRath program inauguration ceremony" },
    { id: 3, category: "travel", title: "On the Road", description: "VigyanRath traveling to rural schools" },
    { id: 4, category: "experiments", title: "Teacher Training", description: "Empowering educators with practical skills" },
    { id: 5, category: "travel", title: "Journey Continues", description: "Reaching remote villages" },
    { id: 6, category: "inauguration", title: "Community Gathering", description: "Local community welcoming VigyanRath" },
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                Our <span className="text-accent">Gallery</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore our work in science education, community outreach, and innovation through these moments captured over our journey.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Filter and Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    variant={activeFilter === category.id ? "default" : "outline"}
                    className={activeFilter === category.id ? "bg-accent hover:bg-accent/90" : ""}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>

              {/* Gallery Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <div key={item.id} className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">Image Placeholder</span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
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

export default Gallery;
