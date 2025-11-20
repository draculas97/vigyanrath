import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ReviewSection = () => {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a star rating before submitting.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Review Submitted!",
      description: "Thank you for your valuable feedback.",
    });
    setFormData({ name: "", email: "", comment: "" });
    setRating(0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-primary">
              Share Your Experience
            </h2>
            <p className="text-foreground/80 text-lg">
              Your feedback helps us improve and inspire others to join our mission
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Star Rating */}
              <div className="flex flex-col items-center space-y-3">
                <Label className="text-lg font-medium">Rate Your Experience</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-10 h-10 transition-colors ${
                          star <= (hoveredRating || rating)
                            ? "fill-accent text-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {rating > 0 && (
                  <p className="text-sm text-muted-foreground">
                    You rated: {rating} star{rating > 1 ? "s" : ""}
                  </p>
                )}
              </div>

              {/* Name Input */}
              <div className="space-y-2">
                <Label htmlFor="review-name">Your Name *</Label>
                <Input
                  id="review-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="review-email">Your Email *</Label>
                <Input
                  id="review-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Comment Textarea */}
              <div className="space-y-2">
                <Label htmlFor="review-comment">Your Review *</Label>
                <Textarea
                  id="review-comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Share your experience with VigyanRath..."
                  rows={5}
                  required
                  className="resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-accent hover:opacity-90 text-white font-semibold py-6"
                >
                  Submit Review
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary/10 py-6"
                  onClick={() => window.open("https://g.page/r/YOUR_GOOGLE_PLACE_ID/review", "_blank")}
                >
                  Review on Google
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
