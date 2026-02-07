import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  PenTool,
  Building2,
  Leaf,
  Zap,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "planning",
    title: "Planning & Design",
    icon: PenTool,
    description: "Comprehensive planning and design services for residential and commercial projects.",
    items: [
      {
        name: "Residential & Commercial Site Plans",
        description: "Detailed site layouts showing property boundaries, structures, driveways, and landscaping elements.",
      },
      {
        name: "Floor Plans",
        description: "Professional floor plans with accurate dimensions, room layouts, and structural elements.",
      },
      {
        name: "Elevations & Renders",
        description: "Exterior elevation drawings and 3D renders to visualize your completed project.",
      },
      {
        name: "Architectural Drawings",
        description: "Complete architectural documentation including construction details and specifications.",
      },
      {
        name: "Planning & Zoning Consultations",
        description: "Expert guidance on zoning requirements, variances, and planning approvals.",
      },
    ],
  },
  {
    id: "engineering",
    title: "Engineering & Structural",
    icon: Building2,
    description: "PE-stamped engineering solutions for structural integrity and code compliance.",
    items: [
      {
        name: "Engineered Foundation Design",
        description: "Custom foundation designs based on soil conditions and structural requirements.",
      },
      {
        name: "GeoTechnical Soil Survey",
        description: "Comprehensive soil analysis to determine bearing capacity and foundation requirements.",
      },
      {
        name: "Residential Engineering Inspection",
        description: "Thorough structural inspections for residential construction projects.",
      },
      {
        name: "Commercial Engineering Inspection",
        description: "Professional engineering inspections for commercial and industrial buildings.",
      },
      {
        name: "Special Inspections",
        description: "Specialized inspections for concrete, steel, masonry, and other structural elements.",
      },
    ],
  },
  {
    id: "green",
    title: "Green, Energy & Testing",
    icon: Leaf,
    description: "Energy efficiency testing and green building compliance for sustainable construction.",
    items: [
      {
        name: "Blower Door Test",
        description: "Air leakage testing to measure building envelope tightness and identify infiltration points.",
      },
      {
        name: "Duct Test",
        description: "HVAC duct leakage testing to ensure system efficiency and code compliance.",
      },
      {
        name: "HERS Index Compliance",
        description: "Home Energy Rating System scoring and documentation for energy efficiency certification.",
      },
      {
        name: "Green/Energy Plan Review & Inspection Bundle",
        description: "Complete package including plan review, inspections, and certification for residential projects.",
      },
      {
        name: "Green Code Sign-off",
        description: "Final certification confirming compliance with local and state energy codes.",
      },
    ],
  },
  {
    id: "electrical",
    title: "PE Electrical Engineering",
    icon: Zap,
    description: "Licensed Professional Engineer electrical design and calculations.",
    items: [
      {
        name: "Electrical Service Sizing & Load Calculations",
        description: "Accurate electrical load analysis to determine proper service size and panel requirements.",
      },
      {
        name: "Panel Schedules",
        description: "Detailed panel schedules showing circuit assignments, breaker sizes, and load distribution.",
      },
      {
        name: "Solar PV Design",
        description: "Complete solar photovoltaic system design including panel layout and electrical integration.",
      },
      {
        name: "EV Charging Stations",
        description: "Electric vehicle charging infrastructure design for residential and commercial applications.",
      },
      {
        name: "Generator & Backup Power",
        description: "Backup power system design including automatic transfer switches and load management.",
      },
      {
        name: "HVAC Electrical Requirements",
        description: "Electrical specifications for heating, ventilation, and air conditioning systems.",
      },
      {
        name: "Multi-family Electrical Design",
        description: "Comprehensive electrical design for apartment buildings and multi-unit developments.",
      },
      {
        name: "Lighting & Security Layouts",
        description: "Interior and exterior lighting plans with integrated security system wiring.",
      },
    ],
  },
  {
    id: "permitting",
    title: "Permitting & Operations",
    icon: ClipboardList,
    description: "Streamlined permitting services to get your project approved and built.",
    items: [
      {
        name: "Electronic Permit Uploading & Review",
        description: "Digital submission and tracking of permit applications through municipal portals.",
      },
      {
        name: "Building Permits (New Construction & Additions)",
        description: "Complete permit packages for new builds, additions, and major renovations.",
      },
      {
        name: "Certificate of Occupancy",
        description: "Final inspections and documentation for building occupancy approval.",
      },
      {
        name: "Fence, Drive Approach & Demolition Permits",
        description: "Specialized permits for fencing, driveway modifications, and demolition work.",
      },
      {
        name: "Printing & Notary Services",
        description: "Large-format printing and notarization services for permit submissions.",
      },
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blueprint via-background to-steel/20 blueprint-pattern">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From initial site analysis to final permit approval, we provide comprehensive engineering services tailored to your project's needs. All work is stamped by licensed Professional Engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Accordion - REMOVED id ATTRIBUTES TO PREVENT BOTTOM SCROLLING */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="space-y-8">
            {services.map((category) => (
              <div
                key={category.id}
                className="glass-card rounded-2xl overflow-hidden"
              >
                {/* Category Header */}
                <div className="p-6 md:p-8 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-14 h-14 rounded-xl gradient-metallic flex items-center justify-center">
                      <category.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                        {category.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Services List */}
                <Accordion type="single" collapsible className="px-6 md:px-8 pb-4">
                  {category.items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                      <AccordionTrigger className="text-left hover:no-underline group py-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pl-8 pb-4">
                        {item.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Category CTA */}
                <div className="px-6 md:px-8 pb-6">
                  <Button asChild className="gradient-metallic">
                    <Link to="/contact">
                      Get a Quote for {category.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Our team of licensed Professional Engineers can create tailored solutions for your unique project requirements.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-base px-8"
            >
              <Link to="/contact">
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
