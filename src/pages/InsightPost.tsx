// =============================================================================
// src/pages/InsightPost.tsx
//
// Route: /insights/:slug
// Renders a single post matched by slug. Shows a "Also in Insights"
// link at the bottom pointing to the other post(s).
// =============================================================================

import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock,
  MapPin,
  BadgeCheck,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  Zap,
  Leaf,
  Building2,
  PenTool,
  ClipboardList,
  ChevronRight,
} from "lucide-react";
import { posts, Post, PostSection, CalloutItem } from "@/data/postsData";

// =============================================================================
// SUB-COMPONENTS  (identical to original Insights.tsx components)
// =============================================================================

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
          <div key={step.num} className="relative glass-card rounded-xl p-5 hover-lift group">
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-primary to-transparent z-10" />
            )}
            <div className="text-4xl font-heading font-bold text-primary/20 mb-3 group-hover:text-primary/30 transition-colors">{step.num}</div>
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
        <Link key={svc.title} to={svc.href} className="group glass-card rounded-xl p-5 hover-lift border border-border/50">
          <div className="w-10 h-10 rounded-lg gradient-metallic flex items-center justify-center mb-3">
            <svc.icon className="h-5 w-5 text-primary-foreground" />
          </div>
          <h4 className="font-heading font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">{svc.title}</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">{svc.desc}</p>
          <span className="inline-flex items-center text-primary text-xs font-medium mt-3 group-hover:gap-1 transition-all">
            Learn More <ArrowRight className="ml-0.5 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>
      ))}
    </div>
  );
}

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
        <span key={s.code} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
          <BadgeCheck className="h-4 w-4" />
          {s.code} — {s.label}
        </span>
      ))}
    </div>
  );
}

function ArticleTags({ items }: { items: CalloutItem[] }) {
  return (
    <div className="flex flex-wrap gap-2 my-8">
      {items.map((tag) => (
        <span key={tag.text} className="text-xs font-medium text-muted-foreground bg-secondary border border-border px-3 py-1 rounded-full">
          {tag.text}
        </span>
      ))}
    </div>
  );
}

function ArticleCTA() {
  return (
    <div className="gradient-metallic rounded-2xl p-8 md:p-12 text-center my-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMCAwaDFMNDEgNDB2LTFMMCAweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
      <div className="relative z-10">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
          Ready to Move Your Project Forward?
        </h2>
        <p className="text-primary-foreground/80 max-w-md mx-auto mb-8 text-base">
          Get a comprehensive quote from our licensed PEs. Upload your plans, describe your project, and we'll respond within 24 hours. Serving TX, TN, AZ &amp; FL — survey to final permit.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-base px-8">
            <Link to="/contact">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-blue-600 border-2 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 text-base px-8">
            <Link to="/services">View Our Services</Link>
          </Button>
        </div>
        <p className="text-primary-foreground/60 text-xs mt-6 flex items-center justify-center gap-2">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Upload plans or photos · Select services needed · Typical response within 24 hours
        </p>
      </div>
    </div>
  );
}

// =============================================================================
// ALSO IN INSIGHTS — related posts strip above the CTA
// =============================================================================
function AlsoInInsights({ currentSlug }: { currentSlug: string }) {
  const others = posts.filter((p) => p.slug !== currentSlug);
  if (others.length === 0) return null;

  return (
    <div className="my-10">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          Also in Insights
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="space-y-3">
        {others.map((post) => (
          <Link
            key={post.slug}
            to={`/insights/${post.slug}`}
            className="group flex items-center gap-4 glass-card rounded-xl p-4 hover-lift border border-border/50"
          >
            <div className="shrink-0 w-1 self-stretch rounded-full bg-gradient-to-b from-primary/40 to-primary/10" />
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-1">
                <BadgeCheck className="h-2.5 w-2.5" />
                {post.category}
              </div>
              <p className="font-heading font-bold text-sm text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-1">
                {post.title}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1.5">
                <Clock className="h-3 w-3" />
                {post.readTime} · {post.date}
              </p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// SECTION RENDERER
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
export default function InsightPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  // Unknown slug → redirect to the index rather than a blank page
  if (!post) return <Navigate to="/insights" replace />;

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blueprint via-background to-steel/20 blueprint-pattern">
        <div className="section-container">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/insights" className="hover:text-primary transition-colors">Insights</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground truncate max-w-[200px]">{post.category}</span>
            </nav>

            {/* Category badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
              <BadgeCheck className="h-3.5 w-3.5" />
              {post.category}
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">
              {post.title.replace(post.titleAccent, "")}
              <span className="text-gradient">{post.titleAccent}</span>
            </h1>

            {/* Deck */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              {post.deck}
            </p>

            {/* Meta bar */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full gradient-metallic flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0">
                  A1
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">A1 Engineering Team</p>
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-full font-medium">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <div className="flex gap-1.5">
                {post.states.map((s) => (
                  <span key={s} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
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
          <div className="max-w-3xl">
            {post.sections.map((section, idx) => renderSection(section, idx))}

            {/* "Also in Insights" strip — sits between content and CTA */}
            <AlsoInInsights currentSlug={post.slug} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
