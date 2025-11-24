import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReviewSection from "@/components/ReviewSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Trustees = () => {
  const trustees = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Chairman",
      bio: "Leading education reform advocate with 20+ years of experience in rural education development.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
      name: "Prof. Meera Nair",
      role: "Vice Chairperson",
      bio: "Former Dean of Science Education, passionate about making STEM accessible to underprivileged communities.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Mr. Arun Sharma",
      role: "Treasurer",
      bio: "Corporate finance expert committed to transparent and effective resource management for social causes.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Ms. Kavitha Reddy",
      role: "Secretary",
      bio: "Education administrator with extensive experience in NGO management and community outreach programs.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Suresh Menon",
      role: "Trustee",
      bio: "Scientist and educator dedicated to innovative science teaching methodologies for rural students.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    },
    {
      name: "Mrs. Priya Iyer",
      role: "Trustee",
      bio: "Social worker and community development specialist focusing on educational equity.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Trustees</h1>
            <p className="text-lg md:text-xl max-w-3xl">
              Meet the dedicated leaders guiding Parikshan's mission to transform science education across rural India.
            </p>
          </div>
        </section>

        {/* Trustees Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trustees.map((trustee, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src={trustee.image} 
                        alt={trustee.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-primary">{trustee.name}</CardTitle>
                    <CardDescription className="font-semibold text-accent">
                      {trustee.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{trustee.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Commitment</h2>
            <p className="text-lg text-foreground leading-relaxed">
              The Board of Trustees at Parikshan Charitable Trust brings together diverse expertise in education, 
              finance, science, and community development. United by a shared vision, we are committed to ensuring 
              every rural child has access to quality science education, fostering the next generation of scientists, 
              innovators, and problem-solvers for India.
            </p>
          </div>
        </section>

        <ReviewSection />
      </main>

      <Footer />
    </div>
  );
};

export default Trustees;
