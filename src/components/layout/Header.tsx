import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/A1_Engineering_Logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Scroll to top when navigation occurs
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:pl-8 lg:pr-8">
        {/* Desktop: h-28 (112px), Mobile: h-20 (80px) - Increased for larger logo */}
        <nav className="flex items-center justify-between h-20 md:h-28">
          {/* Logo - INCREASED SIZE: Desktop: 80px (was 60px), Mobile: 56px (was 44px) */}
          <Link to="/" className="flex items-center pl-2 md:pl-4">
            <img
              src={logo}
              alt="A1 Engineering"
              className="h-14 md:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation - 40px gap from logo, max 16px font */}
          <div className="hidden md:flex items-center gap-6 ml-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  location.pathname === link.href
                    ? "text-primary"
                    : isScrolled
                    ? "text-foreground"
                    : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - UPDATED PHONE NUMBER */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+12143829584"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(214) 382-9584</span>
            </a>
            <Button asChild className="gradient-metallic hover:opacity-90 transition-opacity">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - centered with logo */}
          <button
            className="md:hidden p-2 text-foreground flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu - UPDATED PHONE NUMBER */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-base font-medium py-2 transition-colors",
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="tel:+12143829584"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                <span>(214) 382-9584</span>
              </a>
              <Button asChild className="gradient-metallic w-full">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
