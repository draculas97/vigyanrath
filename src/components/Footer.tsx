import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/about/trustees" className="hover:text-accent transition-colors">Trustee Details</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Our Focus */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Focus</h3>
            <ul className="space-y-2">
              <li><Link to="/our-work" className="hover:text-accent transition-colors">The Problem</Link></li>
              <li><Link to="/our-work" className="hover:text-accent transition-colors">Our Solution</Link></li>
              <li><Link to="/our-work/r3-methodology" className="hover:text-accent transition-colors">R3 Methodology</Link></li>
              <li><Link to="/our-work" className="hover:text-accent transition-colors">Teacher Empowerment</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-sm">Parikshan Charitable Trust, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">info@parikshan.org</span>
              </li>
            </ul>
          </div>

          {/* Donate */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Fuel the Vijnan Rath!</h3>
            <p className="text-sm mb-4 opacity-90">
              Your contribution powers science education across India. Every donation makes a difference.
            </p>
            <Button
              asChild
              className="bg-gradient-accent hover:opacity-90 transition-opacity w-full font-heading font-semibold"
            >
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Parikshan Charitable Trust. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-75">Empowering society through science...</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
