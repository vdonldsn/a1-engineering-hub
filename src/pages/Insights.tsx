/**
 * =============================================================================
 *  ADDING MORE BLOG POSTS:
 *    See the BLOG CONTENT SYSTEM section at the bottom of this file.
 *    Posts are data-driven — add a new object to the `posts` array
 *    and the page renders it automatically.
 * =============================================================================
 */

import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  BadgeCheck,
  FileCheck,
  Zap,
  Leaf,
  Building2,
  PenTool,
  ClipboardList,
  ChevronRight,
} from "lucide-react";

// =============================================================================
// TYPES
// Extend these as you add more content fields to future posts
// =============================================================================
interface CalloutItem {
  text: string;
  bold?: string; // bolded prefix before the text
}

interface PostSection {
  type:
    | "paragraph"
    | "h2"
    | "h3"
    | "lead"
    | "rule"
    | "callout-info"
    | "callout-warning"
    | "pullquote"
    | "process"
    | "services"
    | "states"
    | "tags"
    | "cta";
  content?: string;
  stepNum?: string;        // for h3 numbered steps
  items?: CalloutItem[];   // for callout-info lists
  label?: string;          // for callout labels
}

// =============================================================================
// POST DATA
// To add a new blog post: duplicate the object in the `posts` array below,
// update the slug, title, deck, category, readTime, date, and sections.
// The page at /insights renders the first post in the array as the featured
// article. A full post-list/index page can be built from this array too.
// =============================================================================
const posts = [
  // ── POST 2 (current featured) ─────────────────────────────────────────────
  {
    slug: "do-you-need-an-engineer-to-remove-a-load-bearing-wall",
    title: "Do You Need an Engineer to Remove a Load-Bearing Wall?",
    titleAccent: "a Load-Bearing Wall?",
    deck: "Most homeowners and contractors assume any wall can come down with a permit and a good contractor. Here's what actually happens structurally when you remove a load-bearing wall — and why a PE stamp is the difference between a clean inspection and a costly failure.",
    category: "Engineering & Structural",
    readTime: "3 min read",
    date: "March 2026",
    states: ["TX", "TN", "AZ", "FL"],
    sections: [
      {
        type: "lead",
        content:
          "You want to open up the floor plan — knock out a wall between the kitchen and living room, or remove that dividing wall to create a larger primary suite. The contractor says it's straightforward. The permit office wants engineering. Who's right?",
      },
      {
        type: "paragraph",
        content:
          "Both, actually. The work itself may be straightforward for an experienced crew — but only if someone with a PE license has already determined what that wall is carrying and engineered the beam that replaces it. Skip that step and you're not just risking a failed inspection. You're risking a structural failure that shows up months or years later.",
      },
      {
        type: "h2",
        content: "What a Load-Bearing Wall Is Actually Doing",
      },
      {
        type: "paragraph",
        content:
          "Load-bearing walls transfer weight from the roof and upper floors down through the structure to the foundation. When you remove one without a proper replacement beam, that load doesn't disappear — it redistributes, often unevenly, into adjacent framing that wasn't designed to carry it. The result is deflection, cracking, stuck doors and windows, and in serious cases, structural movement that's expensive to reverse.",
      },
      {
        type: "pullquote",
        content:
          "The beam size isn't a guess. It's a calculation based on span, load, lumber species, and what's sitting above. That calculation requires a licensed structural PE.",
      },
      {
        type: "h2",
        content: "What the Engineering Actually Covers",
      },
      {
        type: "callout-info",
        label: "What a Structural PE Assessment Includes",
        items: [
          {
            bold: "Load path analysis.",
            text: " Tracing exactly what weight the wall carries — roof load, floor load, point loads from above — and confirming where it needs to go after removal.",
          },
          {
            bold: "Beam sizing calculation.",
            text: " Determining the correct header or flush beam size, material (LVL, steel, dimensional lumber), and connection requirements based on the actual span and load.",
          },
          {
            bold: "Post and foundation check.",
            text: " The beam has to land somewhere. A PE confirms the posts and footings at the beam ends can handle the concentrated load — a common oversight in DIY plans.",
          },
          {
            bold: "PE-stamped drawings.",
            text: " The document your permit office, inspector, and contractor all need to proceed. Without it, most jurisdictions won't issue a structural permit for wall removal.",
          },
        ],
      },
      {
        type: "callout-warning",
        label: "Don't rely on online beam calculators",
        content:
          "Online span tables and beam calculators can give ballpark numbers, but they don't account for your specific load path, existing framing conditions, or local code amendments. A beam that's undersized by even one size can deflect visibly under load — and that's after the drywall is back up.",
      },
      {
        type: "h2",
        content: "When You Definitely Need a PE",
      },
      {
        type: "paragraph",
        content:
          "Any wall removal that requires a structural permit — which in TX, TN, AZ, and FL is most of them — requires PE-stamped drawings to pull that permit. Beyond the permit requirement, you should always bring in a licensed structural engineer if: the wall runs parallel to your floor joists and you're not sure whether it's bearing, if there's a wall directly above the one you're removing, if the span exceeds 10 feet, or if the home is older and the original framing isn't documented.",
      },
      {
        type: "paragraph",
        content:
          "At A1 Engineering, our residential engineering inspections and structural assessments cover exactly this scope — confirming whether a wall is load-bearing, sizing the replacement beam, and producing the PE-stamped drawings your contractor and permit office need to move forward cleanly.",
      },
      { type: "rule" },
      {
        type: "paragraph",
        content:
          "If you're planning a wall removal and need a structural assessment or PE-stamped drawings, upload your floor plan and project details and we'll get back to you within 24 hours.",
      },
      {
        type: "tags",
        items: [
          { text: "Structural Engineering" },
          { text: "Load-Bearing Walls" },
          { text: "Residential Engineering" },
          { text: "PE Stamped Plans" },
          { text: "Building Permits" },
          { text: "Beam Design" },
          { text: "Texas" },
          { text: "Tennessee" },
          { text: "Arizona" },
          { text: "Florida" },
        ],
      },
      { type: "cta" },
    ] as PostSection[],
  },
  // ── POST 1 (archive) ──────────────────────────────────────────────────────
  {
    slug: "why-projects-stall-at-permitting",
    title: "Why Your Project Stalls at Permitting",
    titleAccent: "at Permitting",
    deck: "Most construction delays don't happen on the job site — they happen in the submittal queue. A licensed PE breaks down the five root causes and how a full-service engineering partner eliminates them before they cost you money.",
    category: "Permitting & Land Development",
    readTime: "9 min read",
    date: "March 2026",
    states: ["TX", "TN", "AZ", "FL"],
    sections: [
      {
        type: "lead",
        content:
          "You've secured the land. The contractor is lined up. The investors are patient — for now. Then the permit sits in review for six weeks, comes back with corrections, and your carrying costs quietly eat your margin. Sound familiar? You're not alone — and it's almost always preventable.",
      },
      {
        type: "paragraph",
        content:
          "At A1 Engineering, we work with builders, developers, and property owners across Texas, Tennessee, Arizona, and Florida. We see the same patterns repeat on project after project. The permit process isn't mysterious — it has rules, sequences, and specific documentation requirements. When those requirements are met completely and correctly the first time, projects move. When they're not, they stall.",
      },
      {
        type: "paragraph",
        content:
          "This post breaks down exactly why projects get stuck, what jurisdictions are actually looking for, and how a PE-led firm that handles everything from soil survey to Certificate of Occupancy eliminates most of the friction before it starts.",
      },
      { type: "rule" },
      { type: "h2", content: "The 5 Real Reasons Permits Get Rejected" },
      {
        type: "h3",
        stepNum: "1",
        content: "Missing or Non-Stamped Documents",
      },
      {
        type: "paragraph",
        content:
          "This is the single most common cause of permit rejection across all four states we serve. Jurisdictions require that engineering documents — foundation designs, electrical load calculations, structural plans — carry a PE stamp from a Professional Engineer licensed in that specific state. Not a designer. Not a drafting firm. A licensed PE.",
      },
      {
        type: "paragraph",
        content:
          "The practical problem is that many builders use separate vendors for different scopes: one for drawings, another for electrical calcs, a third for the foundation — with no one coordinating the stamps. One unstamped document in a package stops the entire submittal.",
      },
      {
        type: "callout-warning",
        label: "Common Mistake",
        content:
          "Using an architect's stamp for structural engineering decisions. Architectural and structural PE stamps are not interchangeable. Jurisdictions check this specifically — wrong license type on a structural or electrical document is an automatic rejection.",
      },
      {
        type: "h3",
        stepNum: "2",
        content: "Energy Code Non-Compliance",
      },
      {
        type: "paragraph",
        content:
          "Green and energy code requirements have become significantly stricter across all major building jurisdictions. Texas follows the IECC. Tennessee, Arizona, and Florida each have state-specific amendments layered on top. Builders expanding into a new state frequently submit plans that were compliant in their home jurisdiction but fail in the target state.",
      },
      {
        type: "paragraph",
        content:
          "The HERS (Home Energy Rating System) index is a perfect example. Some jurisdictions require a specific HERS score to be documented before a Certificate of Occupancy is issued. If your plans weren't designed to hit that number from the start, you may need to retrofit insulation, HVAC equipment, or air sealing after the fact — significant cost — just to pass a blower door test at the end.",
      },
      {
        type: "callout-info",
        label: "What Green/Energy Compliance Actually Requires",
        items: [
          { bold: "HERS Index Compliance", text: " — A documented energy rating that meets or beats the jurisdiction's threshold" },
          { bold: "Blower Door Test", text: " — Physical test of building air tightness performed at project completion" },
          { bold: "Duct Test", text: " — Verification that HVAC duct systems meet leakage thresholds" },
          { bold: "Green/Energy Plan Review", text: " — Upfront review to catch non-compliance before construction begins" },
          { bold: "Green Code Sign-off", text: " — Final PE-stamped documentation confirming full code compliance" },
        ],
      },
      {
        type: "h3",
        stepNum: "3",
        content: "Incomplete Site Plans",
      },
      {
        type: "paragraph",
        content:
          "A site plan is the foundation of any permit package — and it's routinely submitted incomplete. What jurisdictions require varies by municipality, but broadly they need: property boundaries, setbacks, existing and proposed structures, utility connections (water, sewer, electrical, gas, stormwater), grading and drainage, and legal easements.",
      },
      {
        type: "paragraph",
        content:
          "In the DFW market — where A1 Engineering offers land survey services — projects are frequently delayed because the site plan was drafted without a current boundary or topographic survey. Outdated plat information leads to setback miscalculations, rejection, resurveying, re-drafting, and re-submitting. That's a 3–6 week delay on a problem that costs less than $2,000 to prevent upfront.",
      },
      {
        type: "h3",
        stepNum: "4",
        content: "Electrical Load Calculations Done Wrong",
      },
      {
        type: "paragraph",
        content:
          "Jurisdictions require electrical service sizing to be calculated by a licensed PE, documented in a specific format, with the panel schedule matching the architectural drawings exactly. Mismatches between electrical and architectural plans are among the most common plan review comments we encounter.",
      },
      {
        type: "paragraph",
        content:
          "This gets more complex with solar PV, EV charging stations, or backup generator systems. Each adds to the load calculation and introduces interconnection requirements that many residential designers aren't equipped to handle. A PE Electrical Engineer must size these systems, document the interconnection, and ensure the combined load doesn't exceed utility service capacity for the parcel.",
      },
      {
        type: "h3",
        stepNum: "5",
        content: "No Engineering Behind the Foundation",
      },
      {
        type: "paragraph",
        content:
          "In many jurisdictions — particularly across Texas — a geotechnical soil survey and engineered foundation design are required in the permit package, not optional. The soil type determines whether slab-on-grade, post-tension, or pier-and-beam is appropriate. The PE stamp on the foundation design certifies the system was engineered to match the actual soil conditions on that specific lot.",
      },
      {
        type: "paragraph",
        content:
          "Submitting a generic foundation plan without a geotech survey is a common shortcut — and a common rejection. Beyond permitting, it creates liability exposure if the foundation underperforms later.",
      },
      {
        type: "pullquote",
        content:
          "Every document carries the stamp of a Licensed Professional Engineer. This isn't just a formality — it's our guarantee of quality, compliance, and accountability.",
      },
      {
        type: "h2",
        content: "What a Full-Service PE Firm Does for Your Timeline",
      },
      {
        type: "paragraph",
        content:
          "The traditional model for land development involves assembling a patchwork of vendors: a surveyor, a designer, an electrical consultant, a geotech firm, a permit expediter. Each has their own schedule, format, and communication gaps. Coordination falls on the developer or GC, who typically has neither the bandwidth nor the engineering background to catch problems before they hit plan review.",
      },
      {
        type: "paragraph",
        content:
          "A full-service PE-led firm eliminates the coordination problem. When the same team that surveyed the lot also designed the foundation, ran the electrical load calculations, and certified green code compliance, the documents are internally consistent from the start. That consistency is exactly what plan reviewers are looking for.",
      },
      { type: "process" },
      { type: "h2", content: "What Services Are In Scope" },
      {
        type: "paragraph",
        content:
          "For anyone unfamiliar with what a full-service land development engineering firm covers, here's the full breakdown — the scope is broader than most people expect:",
      },
      { type: "services" },
      { type: "h2", content: "Why Multi-State PE Licensing Matters" },
      {
        type: "paragraph",
        content:
          "PE licensure is state-specific. A PE licensed in Texas cannot stamp documents for a Florida project. This is one of the most common and expensive mistakes growing builders make when expanding into new markets. A1 Engineering holds PE licenses for structural, electrical, and green/energy compliance across all four states we serve:",
      },
      { type: "states" },
      {
        type: "paragraph",
        content:
          "If you have a portfolio spanning Dallas and Nashville, or Phoenix and Tampa, a single A1 Engineering engagement covers your PE stamp requirements across all of them — with consistently formatted, internally coordinated documents that any jurisdiction can review cleanly.",
      },
      { type: "rule" },
      { type: "h2", content: "The Real Cost of Getting This Wrong" },
      {
        type: "paragraph",
        content:
          "Let's be specific. If you're carrying a $400,000 construction loan at 8% interest, that's roughly $2,700/month in interest alone. A 6-week permit delay — entirely typical for incomplete submittals — costs approximately $4,000 before a single nail is driven. Across a portfolio of 10–20 projects annually, incomplete permitting packages aren't an inconvenience — they're a structural drag on your business.",
      },
      {
        type: "paragraph",
        content:
          "The engineering fees to do it right the first time are almost always less than the carrying costs of doing it wrong once.",
      },
      {
        type: "callout-info",
        label: "When to Call A1 Engineering — Before Anyone Else",
        items: [
          { text: "New construction residential or commercial — PE-stamped plans are required to permit" },
          { text: "Expanding into TX, TN, AZ, or FL — your current PE may not hold a license there" },
          { text: "Solar PV, EV charging, or generator addition — requires PE Electrical design" },
          { text: "Project failed energy inspection or blower door test — we diagnose and certify" },
          { text: "Certificate of Occupancy is stuck pending engineering sign-off" },
          { text: "Multi-family project requiring coordinated structural and electrical engineering" },
          { text: "Addition or renovation requiring special inspections or a PE letter" },
        ],
      },
      { type: "h2", content: "The Bottom Line" },
      {
        type: "paragraph",
        content:
          "The permit process isn't your enemy — it's a checklist. A demanding, jurisdiction-specific, PE-stamped checklist, but a checklist nonetheless. When you have a team that knows exactly what every jurisdiction requires, in what format, stamped by whom, permitting becomes a process instead of a gamble.",
      },
      {
        type: "paragraph",
        content:
          "A1 Engineering was founded by a Mechanical Engineer and an Electrical Engineer with over 20 years of combined field experience — built on one principle: comprehensive, coordinated, PE-stamped work delivered with precision. From the first soil survey to your CO, we're the single point of accountability that keeps your project moving.",
      },
      {
        type: "paragraph",
        content:
          "If you have a project in Texas, Tennessee, Arizona, or Florida — or you're building across multiple states — reach out. The quote is free. The delay you avoid could be worth thousands.",
      },
      { type: "rule" },
      {
        type: "tags",
        items: [
          { text: "Land Development" },
          { text: "PE Stamped Plans" },
          { text: "Building Permits" },
          { text: "Green Code Compliance" },
          { text: "Electrical Engineering" },
          { text: "Foundation Design" },
          { text: "HERS Index" },
          { text: "Texas" },
          { text: "Tennessee" },
          { text: "Arizona" },
          { text: "Florida" },
        ],
      },
      { type: "cta" },
    ] as PostSection[],
  },
];

// =============================================================================
// SUB-COMPONENTS
// Each renders a specific section type. Matches your site's design tokens.
// =============================================================================

/** Numbered H3 step heading — matches your Services page accordion style */
function StepHeading({ num, text }: { num: string; text: string }) {
  return (
    <h3 className="flex items-center gap-3 font-heading text-lg font-bold text-foreground mt-10 mb-3">
      <span className="shrink-0 w-7 h-7 rounded-md gradient-metallic flex items-center justify-center text-primary-foreground text-xs font-bold">
        {num}
      </span>
      {text}
    </h3>
  );
}

/** Info callout — teal top border, matches your glass-card style */
function CalloutInfo({ label, items }: { label: string; items: CalloutItem[] }) {
  return (
    <div className="glass-card rounded-xl border-t-2 border-primary p-6 my-8">
      <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-4">
        <CheckCircle2 className="h-4 w-4 shrink-0" />
        {label}
      </div>
      <ul className="space-y-0 divide-y divide-border">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 py-3 text-sm text-muted-foreground leading-relaxed">
            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary opacity-70" />
            <span>
              {item.bold && <strong className="text-foreground font-semibold">{item.bold}</strong>}
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Warning callout — amber/yellow, matches common Tailwind warning patterns */
function CalloutWarning({ label, content }: { label: string; content: string }) {
  return (
    <div className="rounded-xl border border-yellow-200 border-l-4 border-l-yellow-400 bg-yellow-50 p-5 my-6">
      <div className="flex items-center gap-2 text-yellow-700 text-xs font-bold uppercase tracking-widest mb-2">
        <AlertTriangle className="h-4 w-4 shrink-0" />
        {label}
      </div>
      <p className="text-sm text-yellow-800 leading-relaxed">{content}</p>
    </div>
  );
}

/** Pull quote — matches your blueprint-pattern bg sections */
function PullQuote({ content }: { content: string }) {
  return (
    <blockquote className="relative my-10 rounded-2xl bg-gradient-to-br from-blueprint via-background to-steel/20 blueprint-pattern border border-border p-8 md:p-10">
      <span className="absolute top-4 left-6 text-6xl text-primary/20 font-serif leading-none select-none">
        &ldquo;
      </span>
      <p className="relative text-lg md:text-xl font-semibold text-foreground italic leading-relaxed text-center max-w-2xl mx-auto pt-4">
        {content}
      </p>
      <p className="text-center text-xs font-bold uppercase tracking-widest text-primary mt-4">
        — A1 Engineering
      </p>
    </blockquote>
  );
}

/** Process steps — reuses your exact Index.tsx step card pattern */
function ProcessSteps() {
  const steps = [
    { num: "01", title: "Analysis & Survey", desc: "GeoTechnical soil survey, boundary analysis, and site documentation. DFW land survey available.", icon: Building2 },
    { num: "02", title: "Drafting & Design", desc: "Site plans, floor plans, elevations, and architectural drawings — coordinated in one package.", icon: PenTool },
    { num: "03", title: "Engineering & Compliance", desc: "PE-stamped foundation design, electrical load calcs, HERS compliance, and green code sign-off.", icon: Zap },
    { num: "04", title: "Approval & Permits", desc: "Electronic uploading, building permit management, and Certificate of Occupancy — end to end.", icon: FileCheck },
  ];

  return (
    <div className="my-10 glass-card rounded-2xl p-6 md:p-8">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-primary mb-6">
        A1 Engineering's Proven Process — Survey to Final Permit
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, idx) => (
          <div
            key={step.num}
            className="relative glass-card rounded-xl p-5 hover-lift group"
          >
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-primary to-transparent z-10" />
            )}
            <div className="text-4xl font-heading font-bold text-primary/20 mb-3 group-hover:text-primary/30 transition-colors">
              {step.num}
            </div>
            <div className="w-10 h-10 rounded-lg gradient-metallic flex items-center justify-center mb-3">
              <step.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-1">{step.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Service cards — matches your Index.tsx serviceCategories grid exactly */
function ServiceCards() {
  const services = [
    { title: "Planning & Design", desc: "Site plans, floor plans, elevations, renders, and zoning consultations.", icon: PenTool, href: "/services#planning" },
    { title: "Engineering & Structural", desc: "PE-stamped foundation design, GeoTechnical surveys, residential & commercial inspections.", icon: Building2, href: "/services#engineering" },
    { title: "Green & Energy", desc: "Blower door tests, duct tests, HERS compliance, and green code sign-off bundles.", icon: Leaf, href: "/services#green" },
    { title: "PE Electrical", desc: "Load calculations, panel schedules, solar PV, EV charging, and multi-family systems.", icon: Zap, href: "/services#electrical" },
    { title: "Permitting & Operations", desc: "Electronic permit uploading, building permits, Certificate of Occupancy, notary.", icon: ClipboardList, href: "/services#permitting" },
    { title: "Land Survey (DFW)", desc: "Boundary analysis, topographic mapping, utility location, construction staking.", icon: MapPin, href: "/services#land-survey" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      {services.map((svc) => (
        <Link
          key={svc.title}
          to={svc.href}
          className="group glass-card rounded-xl p-5 hover-lift border border-border/50"
        >
          <div className="w-10 h-10 rounded-lg gradient-metallic flex items-center justify-center mb-3">
            <svc.icon className="h-5 w-5 text-primary-foreground" />
          </div>
          <h4 className="font-heading font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
            {svc.title}
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed">{svc.desc}</p>
          <span className="inline-flex items-center text-primary text-xs font-medium mt-3 group-hover:gap-1 transition-all">
            Learn More <ArrowRight className="ml-0.5 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>
      ))}
    </div>
  );
}

/** State badges — matches your Index.tsx state badge pattern */
function StateBadges() {
  const states = [
    { code: "TN", label: "Tennessee" },
    { code: "TX", label: "Texas" },
    { code: "AZ", label: "Arizona" },
    { code: "FL", label: "Florida" },
  ];

  return (
    <div className="flex flex-wrap gap-3 my-6">
      {states.map((s) => (
        <span
          key={s.code}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold"
        >
          <BadgeCheck className="h-4 w-4" />
          {s.code} — {s.label}
        </span>
      ))}
    </div>
  );
}

/** Article tags */
function ArticleTags({ items }: { items: CalloutItem[] }) {
  return (
    <div className="flex flex-wrap gap-2 my-8">
      {items.map((tag) => (
        <span
          key={tag.text}
          className="text-xs font-medium text-muted-foreground bg-secondary border border-border px-3 py-1 rounded-full"
        >
          {tag.text}
        </span>
      ))}
    </div>
  );
}

/**
 * CTA Section — matches gradient-metallic used in Index.tsx and Services.tsx.
 * Links to /contact so readers land on the project inquiry form.
 */
function ArticleCTA() {
  return (
    <div className="gradient-metallic rounded-2xl p-8 md:p-12 text-center my-10 relative overflow-hidden">
      {/* Same decorative overlay used in Index.tsx CTA section */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMCAwaDFMNDEgNDB2LTFMMCAweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
      <div className="relative z-10">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
          Ready to Move Your Project Forward?
        </h2>
        <p className="text-primary-foreground/80 max-w-md mx-auto mb-8 text-base">
          Get a comprehensive quote from our licensed PEs. Upload your plans,
          describe your project, and we'll respond within 24 hours.
          Serving TX, TN, AZ &amp; FL — survey to final permit.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary — goes to /contact project inquiry form */}
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
          {/* Secondary — view all services */}
          <Button
            asChild
            size="lg"
            className="bg-blue-600 border-2 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 text-base px-8"
          >
            <Link to="/services">View Our Services</Link>
          </Button>
        </div>
        {/* Reinforcement: what they'll find on the contact page */}
        <p className="text-primary-foreground/60 text-xs mt-6 flex items-center justify-center gap-2">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Upload plans or photos · Select services needed · Typical response within 24 hours
        </p>
      </div>
    </div>
  );
}

// =============================================================================
// SECTION RENDERER
// Maps each PostSection type to its component. Add new `type` cases here
// as you build out more content block types.
// =============================================================================
function renderSection(section: PostSection, idx: number) {
  switch (section.type) {
    case "lead":
      return (
        <p key={idx} className="text-lg md:text-xl font-medium text-foreground leading-relaxed border-l-4 border-primary pl-5 my-6">
          {section.content}
        </p>
      );

    case "paragraph":
      return (
        <p key={idx} className="text-base text-muted-foreground leading-relaxed mb-4">
          {section.content}
        </p>
      );

    case "h2":
      return (
        <h2 key={idx} className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 leading-snug">
          {section.content}
        </h2>
      );

    case "h3":
      return <StepHeading key={idx} num={section.stepNum!} text={section.content!} />;

    case "rule":
      return <hr key={idx} className="border-border my-10" />;

    case "callout-info":
      return <CalloutInfo key={idx} label={section.label!} items={section.items!} />;

    case "callout-warning":
      return <CalloutWarning key={idx} label={section.label!} content={section.content!} />;

    case "pullquote":
      return <PullQuote key={idx} content={section.content!} />;

    case "process":
      return <ProcessSteps key={idx} />;

    case "services":
      return <ServiceCards key={idx} />;

    case "states":
      return <StateBadges key={idx} />;

    case "tags":
      return <ArticleTags key={idx} items={section.items!} />;

    case "cta":
      return <ArticleCTA key={idx} />;

    default:
      return null;
  }
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================
export default function Insights() {
  // For now renders the first (featured) post.
  // Future: add a post list/index view at /insights and post detail at /insights/:slug
  const post = posts[0];

  return (
    <Layout>
      {/* ── ARTICLE HERO ── matches your Services/About hero pattern ── */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blueprint via-background to-steel/20 blueprint-pattern">
        <div className="section-container">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/insights" className="hover:text-primary transition-colors">Insights</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">{post.category}</span>
            </nav>

            {/* Category badge — matches your hero trust badge in Index.tsx */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
              <BadgeCheck className="h-3.5 w-3.5" />
              {post.category}
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">
              {post.title.replace(post.titleAccent, "")}{" "}
              <span className="text-gradient">{post.titleAccent}</span>
            </h1>

            {/* Deck */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              {post.deck}
            </p>

            {/* Meta bar */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-border">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full gradient-metallic flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0">
                  A1
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">A1 Engineering Team</p>
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                </div>
              </div>

              {/* Read time */}
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-full font-medium">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>

              {/* State chips */}
              <div className="flex gap-1.5">
                {post.states.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold"
                  >
                    <MapPin className="h-2.5 w-2.5" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <section className="py-16 bg-background">
        <div className="section-container">
          {/*
           * Max-width prose column. Using max-w-3xl to match your section
           * content widths. Not using Tailwind's `prose` plugin to avoid
           * conflicts with your existing glass-card / gradient-metallic classes.
           */}
          <div className="max-w-3xl">
            {post.sections.map((section, idx) => renderSection(section, idx))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
