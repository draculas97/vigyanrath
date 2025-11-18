import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">P</span>
            </div>
            <div className="hidden md:block">
              <span className="text-xl font-heading font-bold text-primary">Parikshan</span>
              <p className="text-xs text-muted-foreground">Charitable Trust</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={cn(
                "font-medium transition-colors",
                isActive("/")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              )}
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors outline-none">
                About Us
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card z-50 border border-border">
                <DropdownMenuItem asChild>
                  <Link to="/about" className="cursor-pointer">Overview</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about" className="cursor-pointer">Vision & Mission</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about/trustees" className="cursor-pointer">Board of Trustees</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Our Work Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors outline-none">
                Our Work
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card z-50 border border-border">
                <DropdownMenuItem asChild>
                  <Link to="/our-work" className="cursor-pointer">The R3 Methodology</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/our-work/track-van" className="cursor-pointer">Track Your Van</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/gallery" className="cursor-pointer">Gallery</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Get Involved Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors outline-none">
                Get Involved
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card z-50 border border-border">
                <DropdownMenuItem asChild>
                  <Link to="/get-involved" className="cursor-pointer">Overview</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/get-involved/volunteer" className="cursor-pointer">Become a Volunteer</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/get-involved/partner" className="cursor-pointer">Partner with Us</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/contact"
              className={cn(
                "font-medium transition-colors",
                isActive("/contact")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              )}
            >
              Contact
            </Link>
          </div>

          {/* Donate Button */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="bg-gradient-accent hover:opacity-90 transition-opacity font-heading font-semibold"
            >
              <Link to="/donate">Donate Now</Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block py-3 font-medium transition-colors",
                isActive("/")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              )}
            >
              Home
            </Link>

            <Accordion type="single" collapsible className="w-full">
              {/* About Us Accordion */}
              <AccordionItem value="about" className="border-none">
                <AccordionTrigger className="py-3 font-medium text-foreground hover:text-primary hover:no-underline">
                  About Us
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  <Link
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 pl-4 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    Overview
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 pl-4 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    Vision & Mission
                  </Link>
                  <Link
                    to="/about/trustees"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 pl-4 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    Board of Trustees
                  </Link>
                </AccordionContent>
              </AccordionItem>

              {/* Our Work Accordion */}
              <AccordionItem value="work" className="border-none">
                <AccordionTrigger className="py-3 font-medium text-foreground hover:text-primary hover:no-underline">
                  Our Work
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  <Link
                    to="/our-work"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 pl-4 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    The R3 Methodology
                  </Link>
                  <Link
                    to="/our-work/track-van"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 pl-4 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    Track Your Van
                  </Link>
                  <Link
                    to="/gallery"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 pl-4 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    Gallery
                  </Link>
                </AccordionContent>
              </AccordionItem>

              {/* Get Involved Accordion */}
              <AccordionItem value="involved" className="border-none">
                <AccordionTrigger className="py-3 font-medium text-foreground hover:text-primary hover:no-underline">
                  Get Involved
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  <Link
                    to="/get-involved"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 pl-4 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    Volunteer
                  </Link>
                  <Link
                    to="/get-involved"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 pl-4 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    Partner With Us
                  </Link>
                  <Link
                    to="/donate"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 pl-4 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    Donate
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block py-3 font-medium transition-colors",
                isActive("/contact")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              )}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
