import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import SocialBar from "@/components/SocialBar";
import { Button } from "@/components/ui/button";
import processAnalysis from "@/assets/process-analysis.jpg";
import processDrafting from "@/assets/process-drafting.jpg";
import processEngineering from "@/assets/process-engineering.jpg";
import processApproval from "@/assets/process-approval.jpg";
import {
  Search,
  PenTool,
  Calculator,
  FileCheck,
  Shield,
  Award,
  BadgeCheck,
  ArrowRight,
  Building2,
  Leaf,
  Zap,
  ClipboardList,
  MapPin,
  BookOpen,
  Clock,
  ChevronRight,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Analysis & Survey",
    description: "GeoTechnical soil survey and comprehensive site analysis to understand your project's foundation requirements.",
    icon: Search,
    image: processAnalysis,
  },
  {
    number: "02",
    title: "Drafting & Design",
    description: "Professional architectural drawings, detailed site plans, and precise floor plans crafted to your specifications.",
    icon: PenTool,
    image: processDrafting,
  },
  {
    number: "03",
    title: "Engineering & Compliance",
    description: "Electrical load calculations, green/energy code sign-off, and engineered foundation design by licensed PEs.",
    icon: Calculator,
    image: processEngineering,
  },
  {
    number: "04",
    title: "Approval & Permits",
    description: "Electronic uploading, building permits, and Certificate of Occupancy—we handle the entire approval process.",
    icon: FileCheck,
    image: processApproval,
  },
];

const serviceCategories = [
  {
    title: "Planning & Design",
    description: "Site plans, floor plans, elevations, renders, and architectural drawings.",
    icon: PenTool,
    href: "/services#planning",
  },
  {
    title: "Engineering & Structural",
    description: "Foundation design, GeoTechnical surveys, and engineering inspections.",
    icon: Building2,
    href: "/services#engineering",
  },
  {
    title: "Green & Energy",
    description: "Blower door testing, HERS index compliance, and green code certification.",
    icon: Leaf,
    href: "/services#green",
  },
  {
    title: "PE Electrical",
    description: "Load calculations, solar PV design, EV charging, and multi-family systems.",
    icon: Zap,
    href: "/services#electrical",
  },
  {
    title: "Permitting",
    description: "Building permits, electronic uploads, and Certificate of Occupancy.",
    icon: ClipboardList,
    href: "/services#permitting",
  },
];

const trustPillars = [
  {
    icon: Shield,
    title: "Licensed PE Approval",
    description: "Every project stamped by licensed Professional Engineers",
  },
  {
    icon: Award,
    title: "Green/Energy Certified",
    description: "Full compliance with energy codes and green building standards",
  },
  {
    icon: BadgeCheck,
    title: "US-Based Expertise",
    description: "American engineering excellence with local market knowledge",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blueprint via-background to-steel/20 blueprint-pattern" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
              <BadgeCheck className="h-4 w-4" />
              <span>US-Based & Led by Licensed Professional Engineers</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in animation-delay-200">
              Building the Future of{" "}
              <span className="text-gradient">Land Development</span>
              <br />
              From Survey to Final Permit
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in animation-delay-400">
              Comprehensive engineering, electrical design, and green code
              compliance—stamped by licensed PEs and delivered with precision.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-600">
              <Button
                asChild
                size="lg"
                className="gradient-metallic hover:opacity-90 transition-opacity text-base px-8 py-6"
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 border-2"
              >
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>

            {/* State Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-12 animate-fade-in animation-delay-600">
              <span className="text-sm text-muted-foreground">PE Certified in:</span>
              {["TN", "TX", "AZ", "FL"].map((state) => (
                <span
                  key={state}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  <MapPin className="h-3 w-3" />
                  {state}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 bg-secondary">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="flex items-start gap-4 text-secondary-foreground"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <pillar.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-steel/80 text-sm">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background blueprint-pattern">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial analysis to final approval, we guide your project through every phase with expertise and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative glass-card rounded-2xl p-6 hover-lift group"
              >
                {/* Connection Line (hidden on last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}

                {/* Step Number */}
                <div className="text-5xl font-heading font-bold text-primary/20 mb-4 group-hover:text-primary/30 transition-colors">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg gradient-metallic flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Engineering Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for successful land development, from initial planning to final certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <Link
                key={category.title}
                to={category.href}
                className="group glass-card rounded-2xl p-6 hover-lift border border-border/50"
              >
                <div className="w-14 h-14 rounded-xl gradient-metallic flex items-center justify-center mb-5">
                  <category.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="gradient-metallic">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Insights Teaser Section */}
      <section className="py-20 bg-background">
        <div className="section-container">

          {/* Section header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <BookOpen className="h-4 w-4" />
                Engineering Insights
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Latest from the Blog
              </h2>
            </div>
            <Link
              to="/insights"
              className="hidden md:inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all"
            >
              View All Posts <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Featured + Secondary grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


            {/* ── FEATURED (2 cols) — newest post ── */}
            <Link
              to="/insights/electrical-load-calculations-why-panels-fail-inspection"
              className="group lg:col-span-2 block glass-card rounded-2xl overflow-hidden hover-lift border border-border/50"
            >
              <div className="h-full p-8 md:p-10 bg-gradient-to-br from-blueprint via-background to-steel/20 blueprint-pattern flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    PE Electrical Engineering
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                    Latest
                  </span>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  Electrical Load Calculations:{" "}
                  <span className="text-gradient">Why Panels Fail Inspection</span>
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-1">
                  A failed electrical inspection doesn't always mean bad wiring. More often it means the panel was sized without a proper load calculation — and no one caught it until the inspector did.
                </p>
                <div className="flex items-center gap-4 flex-wrap pt-4 border-t border-border/50">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-full font-medium">
                    <Clock className="h-3.5 w-3.5" /> 6 min read
                  </span>
                  <span className="text-xs text-muted-foreground">April 2026</span>
                  <span className="inline-flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all ml-auto">
                    Read Article <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* ── SECONDARY (1 col) — previous post ── */}
            <Link
              to="/insights/foundation-letters-explained-what-lenders-and-cities-require"
              className="group block glass-card rounded-2xl overflow-hidden hover-lift border border-border/50"
            >
              <div className="h-full p-6 flex flex-col">
                <div className="w-full h-1 rounded-full bg-gradient-to-r from-primary/40 to-primary/10 mb-6" />
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4 self-start">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Engineering &amp; Structural
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug flex-1">
                  Foundation Letters Explained:{" "}
                  <span className="text-gradient">What Lenders and Cities Actually Require</span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  You're closing on a loan or pulling a permit and someone asks for a "foundation letter." What does that mean, who has to write it, and what happens if you skip it?
                </p>
                <div className="flex items-center gap-3 flex-wrap pt-4 border-t border-border/50 mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-full font-medium">
                    <Clock className="h-3.5 w-3.5" /> 5 min read
                  </span>
                  <span className="inline-flex items-center text-primary text-xs font-semibold group-hover:gap-1.5 transition-all ml-auto">
                    Read <ArrowRight className="ml-0.5 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

          </div>

          {/* Mobile "View All" — hidden on md+ */}
          <div className="mt-8 text-center md:hidden">
            <Link to="/insights" className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
              View All Posts <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Social Media Bar */}
            <SocialBar />

      {/* CTA Section - UPDATED "Meet Our Team" button with blue background */}
      <section className="py-24 gradient-metallic relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMCAwaDFMNDEgNDB2LTFMMCAweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-50" />

        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Get a comprehensive quote from our licensed Professional Engineers. We're here to guide you from survey to final permit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-base px-8"
              >
                <Link to="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {/* UPDATED: Added blue background (bg-blue-600) to Meet Our Team button for visibility */}
              <Button
                asChild
                size="lg"
                className="bg-blue-600 border-2 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 text-base px-8"
              >
                <Link to="/about">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
