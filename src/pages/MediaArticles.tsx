import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReachOutSection from "@/components/ReachOutSection";
import ReviewSection from "@/components/ReviewSection";
import { Newspaper } from "lucide-react";
import { Card } from "@/components/ui/card";

const MediaArticles = () => {
  const articles = [
    {
      id: 1,
      title: "VigyanRath: Bringing Science to Rural India",
      publication: "The Hindu",
      date: "2024",
      description: "Feature article on the mobile science laboratory initiative"
    },
    {
      id: 2,
      title: "Education Innovation in Rural Areas",
      publication: "Times of India",
      date: "2023",
      description: "Coverage of teacher training programs and impact"
    },
    {
      id: 3,
      title: "Parikshan Trust: 16 Lakh Students and Counting",
      publication: "Deccan Herald",
      date: "2024",
      description: "Milestone achievement coverage"
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
                Media & Press
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Our work in the news: coverage of VigyanRath's impact across India
              </p>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <Card key={article.id} className="p-8 hover:shadow-xl transition-shadow">
                    <Newspaper className="w-12 h-12 text-accent mb-4" />
                    <h3 className="font-heading font-bold text-xl mb-3">{article.title}</h3>
                    <p className="text-sm text-primary font-semibold mb-2">{article.publication}</p>
                    <p className="text-sm text-muted-foreground mb-4">{article.date}</p>
                    <p className="text-muted-foreground">{article.description}</p>
                  </Card>
                ))}
              </div>

              <div className="mt-16 bg-muted rounded-2xl p-12 text-center">
                <h2 className="font-heading font-bold text-3xl mb-4 text-primary">
                  Press Inquiries
                </h2>
                <p className="text-muted-foreground mb-6">
                  For media inquiries and press kit, please contact us at parikshanct@gmail.com
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

export default MediaArticles;
