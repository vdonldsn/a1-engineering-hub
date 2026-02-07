import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Shield, Award, BadgeCheck } from "lucide-react";
import logo from "@/assets/A1_Engineering_Logo.png";

const serviceLinks = [
  { name: "Planning & Design", href: "/services#planning" },
  { name: "Engineering & Structural", href: "/services#engineering" },
  { name: "Green & Energy", href: "/services#green" },
  { name: "PE Electrical", href: "/services#electrical" },
  { name: "Permitting", href: "/services#permitting" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Get a Quote", href: "/contact" },
];

const statesCertified = ["Tennessee", "Texas", "Arizona", "Florida"];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                alt="A1 Engineering"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-steel/80 text-sm leading-relaxed mb-6">
              US-Based and Led by Licensed Professional Engineers. From survey to
              final permit, we deliver comprehensive engineering solutions with
              precision and expertise.
            </p>
            <div className="flex flex-wrap gap-2">
              {statesCertified.map((state) => (
                <span
                  key={state}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-xs font-medium"
                >
                  <BadgeCheck className="h-3 w-3" />
                  {state}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-steel/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-steel/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-steel/80 text-sm">
                  United States
                  <br />
                  Serving TN, TX, AZ, FL
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />

                  href="tel:+12143829584"
                  className="text-steel/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  (214) 382-9584
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />

                  href="mailto:contact@a1engineering.com"
                  className="text-steel/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  contact@a1engineering.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span className="text-steel/80 text-sm">
                  Mon - Fri: 8:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-steel/60">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Licensed PE Approval</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span>Certified Green/Energy Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-primary" />
              <span>US-Based Expertise</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-steel/60">
            <p>© {new Date().getFullYear()} A1 Engineering. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
