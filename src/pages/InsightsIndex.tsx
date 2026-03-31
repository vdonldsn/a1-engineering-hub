// =============================================================================
// src/pages/InsightsIndex.tsx
//
// Route: /insights
// Lists all blog posts. Links each card to /insights/:slug
// =============================================================================

import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock,
  MapPin,
  BadgeCheck,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { posts } from "@/data/postsData";

export default function InsightsIndex() {
  const [featured, ...rest] = posts;

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blueprint via-background to-steel/20 blueprint-pattern">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Engineering Insights
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              From the{" "}
              <span className="text-gradient">A1 Engineering</span> Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Practical engineering knowledge for builders, developers, and property owners across TX, TN, AZ &amp; FL.
            </p>
          </div>
        </div>
      </section>

      {/* ── POST LIST ── */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="max-w-4xl space-y-6">

            {/* Featured post — larger card */}
            <Link
              to={`/insights/${featured.slug}`}
              className="group block glass-card rounded-2xl overflow-hidden hover-lift border border-border/50"
            >
              <div className="p-8 md:p-10 bg-gradient-to-br from-blueprint via-background to-steel/20 blueprint-pattern">
                {/* Labels */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    {featured.category}
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                    Latest
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  {featured.title.replace(featured.titleAccent, "")}
                  <span className="text-gradient">{featured.titleAccent}</span>
                </h2>

                {/* Deck */}
                <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-2xl">
                  {featured.deck}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 flex-wrap pt-4 border-t border-border/50">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-full font-medium">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                  <span className="text-xs text-muted-foreground">{featured.date}</span>
                  <div className="flex gap-1.5 ml-auto">
                    {featured.states.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold"
                      >
                        <MapPin className="h-2.5 w-2.5" />
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    Read Article
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Remaining posts — compact list cards */}
            {rest.map((post) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="group flex items-start gap-6 glass-card rounded-2xl p-6 hover-lift border border-border/50"
              >
                {/* Left accent bar */}
                <div className="shrink-0 w-1 self-stretch rounded-full bg-gradient-to-b from-primary/40 to-primary/10" />

                <div className="flex-1 min-w-0">
                  {/* Category */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
                    <BadgeCheck className="h-3 w-3" />
                    {post.category}
                  </div>

                  {/* Title */}
                  <h2 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>

                  {/* Deck */}
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
                    {post.deck}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full font-medium">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="inline-flex items-center text-primary text-xs font-semibold group-hover:gap-1.5 transition-all ml-auto">
                      Read
                      <ArrowRight className="ml-0.5 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 gradient-metallic relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMCAwaDFMNDEgNDB2LTFMMCAweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Get a comprehensive quote from our licensed Professional Engineers — survey to final permit.
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
          </div>
        </div>
      </section>
    </Layout>
  );
}
