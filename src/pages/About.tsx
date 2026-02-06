import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Users,
  GraduationCap,
  Wrench,
  BadgeCheck,
  MapPin,
  ArrowRight,
  Building,
  Lightbulb,
  Target,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every calculation, drawing, and document is meticulously reviewed for accuracy.",
  },
  {
    icon: BadgeCheck,
    title: "Integrity",
    description: "We stand behind our work with PE stamps that represent our professional commitment.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and methods to deliver efficient solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients, contractors, and jurisdictions for seamless execution.",
  },
];

const states = [
  {
    name: "Tennessee",
    abbr: "TN",
    services: ["PE Structural", "PE Electrical", "Green/Energy"],
  },
  {
    name: "Texas",
    abbr: "TX",
    services: ["PE Structural", "PE Electrical", "Green/Energy"],
  },
  {
    name: "Arizona",
    abbr: "AZ",
    services: ["PE Structural", "PE Electrical", "Green/Energy"],
  },
  {
    name: "Florida",
    abbr: "FL",
    services: ["PE Structural", "PE Electrical", "Green/Energy"],
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blueprint via-background to-steel/20 blueprint-pattern">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">A1 Engineering</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              US-Based and Led by Licensed Professional Engineers with decades of field experience and rigorous academic roots.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Story */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Users className="h-4 w-4" />
                <span>Our Story</span>
              </div>
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Founded by Engineers,<br />
                Built on Excellence
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A1 Engineering was founded by a Mechanical Engineer and an Electrical Engineer who first met in college. United by their passion for precision and problem-solving, they set out to create a firm that would redefine engineering services for land development.
                </p>
                <p>
                  With <strong className="text-foreground">decades of field experience</strong> and <strong className="text-foreground">rigorous academic foundations</strong>, our founders built A1 Engineering on the principles of excellence, integrity, and client-focused service.
                </p>
                <p>
                  Today, we're proud to serve clients across multiple states, bringing the same dedication and expertise to every project—from single-family homes to complex commercial developments.
                </p>
              </div>

              {/* Founder Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-2xl text-foreground">2</div>
                    <div className="text-sm text-muted-foreground">Engineering Degrees</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Wrench className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-2xl text-foreground">20+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founders Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-card">
                <div className="absolute inset-0 gradient-metallic opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Building className="h-24 w-24 text-primary/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">Professional Team Photo</p>
                  </div>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 gradient-metallic rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* The PE-Led Advantage */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              <BadgeCheck className="h-4 w-4" />
              <span>The PE-Led Advantage</span>
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              What It Means to Work with<br />Licensed Professional Engineers
            </h2>
            
            <p className="text-lg text-steel/80">
              When you work with A1 Engineering, every document carries the stamp of a Licensed Professional Engineer. This isn't just a formality—it's our guarantee of quality, compliance, and accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass-card-dark rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-steel/70 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State Licensing Map */}
      <section className="py-20 bg-background blueprint-pattern">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              <span>Our Coverage</span>
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Licensed Across Multiple States
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our Professional Engineers are licensed to provide services across Tennessee, Texas, Arizona, and Florida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {states.map((state) => (
              <div
                key={state.abbr}
                className="glass-card rounded-2xl p-6 hover-lift border border-border/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-metallic flex items-center justify-center">
                    <span className="font-heading font-bold text-lg text-primary-foreground">
                      {state.abbr}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {state.name}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {state.services.map((service) => (
                    <li key={service} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BadgeCheck className="h-4 w-4 text-primary shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-metallic">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Partner with PE-Led Excellence
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Experience the difference that licensed Professional Engineers make. Let's discuss your project today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-base px-8"
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
                className="border-2 border-white text-white hover:bg-white/10 text-base px-8"
              >
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
