import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">P</span>
              </div>
              <span className="text-lg font-heading font-bold text-primary">Parikshan</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-3">
              Transforming science education through activity-based learning.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary">
              <Heart className="w-4 h-4" />
              <span className="font-medium">Building a healthier tomorrow</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Focus */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Our Focus</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">• Activity-Based Learning</li>
              <li className="text-muted-foreground text-sm">• Teacher Empowerment</li>
              <li className="text-muted-foreground text-sm">• Rural Science Education</li>
              <li className="text-muted-foreground text-sm">• R3 Methodology</li>
              <li className="text-muted-foreground text-sm">• Community Outreach</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:info@parikshan.org" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@parikshan.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 XXX XXX XXXX
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Parikshan Charitable Trust<br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Parikshan Charitable Trust. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/transparency" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Transparency
              </Link>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Made with <Heart className="inline w-3 h-3 text-accent" /> by Parikshan Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
