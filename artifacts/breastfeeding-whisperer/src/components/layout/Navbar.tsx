import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSrc from "@assets/IMG_3411_1775411464767.webp";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Tara" },
  { href: "/tips", label: "Tips" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-2" : "bg-background py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 z-50 relative">
            <img src={logoSrc} alt="The Breastfeeding Whisperer Logo" className="h-12 w-auto object-contain" />
            <div className="hidden sm:block">
              <span className="block font-serif font-semibold text-lg leading-none text-primary">The Breastfeeding</span>
              <span className="block font-serif font-semibold text-lg leading-none text-primary">Whisperer</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border">
              <a href="tel:+14078681569" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">(407) 868-1569</span>
              </a>
              <Button asChild className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-md">
                <a href="https://thebreastfeedingwhisperer.simplybook.me/v2/#book" target="_blank" rel="noreferrer">Book Now</a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-foreground z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-24 px-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-center">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-2xl font-serif transition-colors ${
                location === link.href ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="mt-auto mb-12 flex flex-col gap-6 items-center">
          <a href="tel:+14078681569" className="flex items-center gap-2 text-lg font-medium text-foreground">
            <Phone className="h-5 w-5 text-primary" />
            (407) 868-1569
          </a>
          <Button asChild size="lg" className="w-full max-w-xs rounded-full bg-primary text-white text-lg h-14">
            <a href="https://thebreastfeedingwhisperer.simplybook.me/v2/#book" target="_blank" rel="noreferrer">Book Now</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
